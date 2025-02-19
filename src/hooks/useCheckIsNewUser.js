import firebase from "firebase/compat/app"
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from "../config/firebase-config"
import { useNavigate} from "react-router-dom";
import { useState } from "react";

export const useCheckIsNewUser = () => {

    const navigate = useNavigate();

    const checkIsNewUser = (setIsNewUser) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const creationTime = new Date(user.metadata.creationTime).toISOString();
                const lastSignInTime = new Date(user.metadata.lastSignInTime).toISOString();
                console.log(`creation time: ${creationTime}`);
                console.log(`lastSignInTime: ${lastSignInTime}`);
                if (creationTime === lastSignInTime) {
                    setIsNewUser (true);
                    console.log('new user!!')
                    navigate('/onboarding')
                } else {
                    setIsNewUser(false);
                    console.log('not new user :(')
                }
            }
        })
    }

    return { checkIsNewUser }
}