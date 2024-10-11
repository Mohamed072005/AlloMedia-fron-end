import { createContext, useState } from "react";
import {getLocalStorage} from "../helpers/LocalStorageHelper.js";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [registredUser, setRegistredUser] = useState({
        user_email: getLocalStorage("user_email"),
    });
    const [loggedUser, setLoggedUser] = useState(null);

    return (
        <UserContext.Provider value={{ registredUser, setRegistredUser, loggedUser, setLoggedUser }}>
            {children}
        </UserContext.Provider>
    );
}