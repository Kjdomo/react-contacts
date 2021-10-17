import {  useState, useEffect } from "react";

import { login, createUser } from "../utils/auth";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user !== null) {
            setUser(user);
        }
        setIsLoading(false);
    }, [])

    const loginCredentials = (username, password) => {
        const loginStatus = login(username, password);
        if (loginStatus) {
            localStorage.setItem("user", username);
            setUser(username);
        }
    }

    const registerCredentials = (username, password) => {
        try {
            createUser(username, password);
            localStorage.setItem("user", username);
            setUser(username);
        } catch (error) {
            return false;
        }
        return true;
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{ user, login: loginCredentials, logout, register: registerCredentials, isLoading }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;