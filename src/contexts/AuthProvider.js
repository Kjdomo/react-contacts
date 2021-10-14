import {  useState } from "react";

import { login, createUser } from "../utils/auth";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginCredentials = (username, password) => {
        const loginStatus = login(username, password);
        if (loginStatus) {
            setUser(username);
        }
    }

    const registerCredentials = (username, password) => {
        try {
            createUser(username, password);
            setUser(username);
        } catch (error) {
            console.error(error);
        }
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{ user, login: loginCredentials, logout, register: registerCredentials }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;