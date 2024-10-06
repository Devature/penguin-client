'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { LocalStorageConstants } from '../types/LocalStorage';
import { penguinApi } from '../axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';

export interface AuthContextType {
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    username: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children?: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [accessToken, setAccessToken] = useLocalStorage(
        LocalStorageConstants.AccessToken,
        ''
    );

    const [refreshToken, setRefreshToken] = useLocalStorage(
        LocalStorageConstants.RefreshToken,
        ''
    );

    const [isAuthenticated, setIsAuthenticated] =
        useState<boolean>(!!accessToken);

    const [username, setUsername] = useLocalStorage(
        LocalStorageConstants.Username
    );

    /**
     * Retrieve a new access token using the refresh token
     */
    const retrieveRefreshToken = async () => {
        if (!accessToken) {
            return;
        }

        const decodedToken: JwtPayload = jwtDecode(accessToken);

        const tokenExpiration = decodedToken.exp;

        if (tokenExpiration && new Date() > new Date(tokenExpiration)) {
            // Token has expired - request a new one
            try {
                const { data } = await penguinApi.post('/auth/refresh-tokens', {
                    refreshToken,
                });
                setAccessToken(data.accessToken);
                setRefreshToken(data.refreshToken);
            } catch (err) {
                console.error(err);
            }
        }
    };

    // Refresh tokens every hour
    useEffect(() => {
        const refreshTimer = setInterval(
            () => {
                retrieveRefreshToken();
            },
            1000 * 60 * 60
        );

        return () => clearInterval(refreshTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const authHeader = accessToken.length ? `Bearer ${accessToken}` : '';
        penguinApi.interceptors.request.use((config) => {
            config.headers.Authorization = authHeader;
            return config;
        });
    }, [accessToken]);

    /**
     * Clear all authentication information
     */
    const clearAuthInfo = () => {
        setIsAuthenticated(false);
        setAccessToken('');
        setRefreshToken('');
        setUsername('');
    };

    /**
     * Login a user with the given email and password by
     * sending a POST request to the /auth/login endpoint
     *
     * @param email
     * @param password
     */
    const login = async (email: string, password: string) => {
        try {
            const { data } = await penguinApi.post('/auth/login', {
                email,
                password,
            });
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            const decodedToken: JwtPayload = jwtDecode(data.accessToken);
            if (!decodedToken.sub) {
                throw new Error('Missing sub claim in JWT');
            }
            setUsername(decodedToken.sub);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
            clearAuthInfo();
        }
    };

    /**
     * Logout the current user by clearing all authentication information
     */
    const logout = () => {
        clearAuthInfo();
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                isAuthenticated,
                username,
            }}
        >
            {children as ReactNode}
        </AuthContext.Provider>
    );
}
