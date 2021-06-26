import { createContext, useEffect, useState } from "react";


export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {
    const [ account, setAccount ] = useState('');
    const localStorage = window.localStorage.getItem("okta-token-storage");
        
    useEffect(() => {
        let email = localStorage && JSON.parse(localStorage).idToken.claims.email;
        email = email && email.split('@')[0];
        setAccount(email);
    }, [])

    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;