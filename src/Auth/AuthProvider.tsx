import { useEffect, useState } from "react"
import firebase from "firebase/compat/app"
import { auth } from "../fireauth";
import { AuthContext } from "./AuthContext";

export interface Probs {
    children: React.ReactNode
}

export const AuthProvider: React.FC<Probs> = ({children}: {children:any}) => {

    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);
    
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}