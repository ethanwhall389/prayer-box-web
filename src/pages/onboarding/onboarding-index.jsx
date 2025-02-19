import { useNavigate } from "react-router-dom";
import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export default function Onboarding() {
    
    const navigate = useNavigate();
    const {userID} = useGetUserInfo();

    async function completeOnboarding() {
        const boxDocRef = doc(db, "boxes", userID);
        await updateDoc(boxDocRef, {
            onboardingComplete: true,
        })
        navigate('/dashboard');
    }
    
    return (
        <>
            <h1>Onboarding</h1>
            <button onClick={completeOnboarding}>Complete onboarding</button>
        </>
    )
}