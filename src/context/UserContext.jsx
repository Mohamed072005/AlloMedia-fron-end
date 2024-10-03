import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [registredUser, setRegistredUser] = useState(null);

    return (
        <UserContext.Provider value={{ registredUser, setRegistredUser }}>
            {children}
        </UserContext.Provider>
    );
}