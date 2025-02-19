import 'firebase/auth'
import 'firebase/firestore'
import { auth } from "../config/firebase-config"
import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { useNavigate} from "react-router-dom";

export const useCheckIsNewUser = () => {

    const navigate = useNavigate();
    const {userID} = useGetUserInfo();

    const checkIsNewUser = async (setIsNewUser) => {
        let onboardingComplete = false;
        
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        if (docSnap.exists()) {
            onboardingComplete = docSnap.data().onboardingComplete;
        }

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const creationTime = new Date(user.metadata.creationTime).toISOString();
                const lastSignInTime = new Date(user.metadata.lastSignInTime).toISOString();
                if (creationTime === lastSignInTime && !onboardingComplete) {
                    navigate('/onboarding')
                }
            }
        })
    }

    return { checkIsNewUser }
}