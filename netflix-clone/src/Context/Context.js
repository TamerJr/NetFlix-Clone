import  { 
    createContext ,
    useContext ,
    useEffect,
    useState } from "react";

import {auth ,db} from "../firebase"

import {
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth"
    import { setDoc,doc } from "firebase/firestore";

const AuthContext =createContext()
export function AuthContextProvider({children}){  
    const [user,setUser]=useState({})

    function signUp(email, password) {
        setDoc(doc(db, 'user', email), {
        savedShows: []
        })
       return createUserWithEmailAndPassword(auth, email, password);
    
      }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsub();
        }
    })
    function logOut(){
        return signOut(auth)
    }

    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function AuthUser(){
    return useContext(AuthContext)
}