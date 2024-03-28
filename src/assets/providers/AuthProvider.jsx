import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)


const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)

        const createUser = (email, password) =>{
            return createUserWithEmailAndPassword(auth, email, password)
        }
        const signIn = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        }
        const logOut = () =>{
            return signOut(auth)
        }
        // observe auth state change
        useEffect(()=>{
          const unsebscribe = onAuthStateChanged(auth, currentUser=>{
                console.log("Auth state", currentUser)
                setUser(currentUser)
            })
            return () =>{
                unsebscribe()
            }
        },[])
        const authInfo ={
            user,
            createUser,
            signIn,
            logOut
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