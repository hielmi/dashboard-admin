import { createContext, useState } from 'react';
const AuthContext = createContext(null);
const { Provider } = AuthContext;


const INITIAL_AUTHSTATE = {
    authenticated: true,
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(INITIAL_AUTHSTATE);
    const [dataState, setDataState] = useState([]);
    
    const logout = async () => {
        setAuthState({ ...INITIAL_AUTHSTATE, authenticated: false });
    };

    return (
        <Provider
            value={{
                authState,
                dataState,
                setAuthState,
                setDataState,
                logout
            }}>
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };
