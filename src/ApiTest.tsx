import { useEffect, useState } from "react";

export default function ApiTest() {
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080", {
            method: "GET", credentials: "include", headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => setMsg(res.message))
        .catch(_ => setMsg("Something went wrong fetching from the API"));
    }, []);

    return <div style={{backgroundColor: "blue", border: "1px solid red", padding: "5px"}}>
        API test message: {msg}
    </div>;
}
