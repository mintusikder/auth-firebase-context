import React, { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)


const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)



        const authInfo ={
            user,
        }
    // const user = {displayName : 'Mintu Sikder'}
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;