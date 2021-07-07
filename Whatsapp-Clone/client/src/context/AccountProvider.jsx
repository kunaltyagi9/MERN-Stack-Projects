import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [ account, setAccount ] = useState();
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
        // setAccount({
        //     name: 'Kunal Tyagi',
        //     userId: '123456789',
        //     picture: ''
        // })
    }, [])
    
    return (
        <AccountContext.Provider value={{ 
            account, 
            setAccount, 
            showloginButton,
            setShowloginButton,
            showlogoutButton,
            setShowlogoutButton,
            socket
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;