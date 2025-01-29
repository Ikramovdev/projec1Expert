import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const AuthContext = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || null);
    const [saveDocument, setSaveDocument] = useState(false)
    const [userName, setUserName] = useState(() => localStorage.getItem("userName") || 'Ism Hali mavjud emas!')
    localStorage.setItem("userName", userName);
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        }
    }, [token]);
    return (
        <Context.Provider value={{ token, setToken, saveDocument, setSaveDocument, userName, setUserName }}>
            {children}
        </Context.Provider>
    );
};
