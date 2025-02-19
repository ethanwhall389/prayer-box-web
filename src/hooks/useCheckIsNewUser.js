import firebase from "firebase/compat/app"
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from "../config/firebase-config"

export const useCheckIsNewUser = () => {

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
                } else {
                    setIsNewUser(false);
                    console.log('not new user :(')
                }
            }
        })
    }

    return { checkIsNewUser }
}