import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)

        const createUser = (email, password) =>{
            return createUserWithEmailAndPassword(auth, email, password)
        }
        const signIn = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        }
        const logOut = () =>{
            return signOut(auth)
        }

        const signinWithGoogle=() =>{
           return signInWithPopup(auth,provider)
        }
        // observe auth state change
        useEffect(()=>{
          const unsebscribe = onAuthStateChanged(auth, currentUser=>{
                console.log("Auth state", currentUser)
                setUser(currentUser)
                setLoading(false)
            })
            return () =>{
                unsebscribe()
            }
        },[])
        const authInfo ={
            user,
            loading,
            signinWithGoogle,
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