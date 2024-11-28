{
    /* This is a file for grouping and maintaining navigation hooks to various pages
    Modularizing these makes it easier to use them in multiple places -- Aaron*/
}

import { useNavigate, NavigateFunction } from 'react-router-dom';

/**
 * Custom hook for navigating to the sign-up page.
 * @returns A function that navigates to the sign-up page when called.
 */
export const useSignUpNavigation = (): (() => void) => {
    {
        /* ChatGPT recommends explicitly typing the function for readability, hence the NavigateFunction
        This could be omitted with no issues, just dev's choice really -- Aaron*/
    }
    const navigate: NavigateFunction = useNavigate();

    return () => {
        navigate('/register');
    };
};

/** Same as the sign up navigation function but navigates to the login page */
export const useLoginNavigation = (): (() => void) => {
    const navigate: NavigateFunction = useNavigate();

    return () => {
        navigate('/signin');
    };
};

/** Same as the sign up navigation function but navigates to the organization page */
export const useOrganizationNavigation = (): (() => void) => {
    const navigate: NavigateFunction = useNavigate();

    return () => {
        navigate('/userorgs');
    };
};
