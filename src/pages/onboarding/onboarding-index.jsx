import { useNavigate } from "react-router-dom";
import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useAddBox } from "../../hooks/useAddBox";

import { ButtonPrimary } from "../../components/Button";
import { ButtonSecondary } from "../../components/Button";

export default function Onboarding() {
    
    const navigate = useNavigate();
    const {userID} = useGetUserInfo();
    const { addPremadeBox, addEmptyBox } = useAddBox();

    async function completeOnboarding() {
        const boxDocRef = doc(db, "boxes", userID);
        await updateDoc(boxDocRef, {
            onboardingComplete: true,
        })
        navigate('/dashboard');
    }

    function useSuggestedCategories () {
        addPremadeBox();
        completeOnboarding();
    }

    function startFromScratch() {
        addEmptyBox();
        completeOnboarding();
    }
    
    return (
        <>
            <h1>Welcome, [name]!</h1>
            <p>Thanks for checking our Prayer Box.</p>
            <p>Would you like to use our suggested prayer categories, or start from scratch and create your own?</p>
            <ButtonPrimary text={'Use suggested categories'} onClick={useSuggestedCategories}/>
            <ButtonSecondary text={'Start from scratch'} onClick={startFromScratch}/>
            
            <button onClick={completeOnboarding}>Complete onboarding</button>
        </>
    )
}