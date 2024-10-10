import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [registredUser, setRegistredUser] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);

    return (
        <UserContext.Provider value={{ registredUser, setRegistredUser, loggedUser, setLoggedUser }}>
            {children}
        </UserContext.Provider>
    );
}