import { useNavigate } from "react-router-dom";
import { updateDoc, doc, getDoc, } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useAddBox } from "../../hooks/useAddBox";
import { useGetData } from "../../hooks/useGetData";

import { ButtonPrimary } from "../../components/Button";
import { ButtonSecondary } from "../../components/Button";

export default function Onboarding({setBoxData, setIsLoading}) {
    
    const navigate = useNavigate();
    const {userID, firstName} = useGetUserInfo();
    const { addPremadeBox, addEmptyBox } = useAddBox();
    const {getBoxData} = useGetData();

    async function completeOnboarding() {
        const boxDocRef = doc(db, "boxes", userID);
        await updateDoc(boxDocRef, {
            onboardingComplete: true,
        })
        getBoxData(setBoxData, setIsLoading)
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
        <div className="h-screen flex flex-col justify-center items-center text-left">
            <div className="max-w-2/3 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Welcome, {firstName}!</h1>
                    <p>Thanks for checking out Prayer Box.</p>
                    <p>Would you like to use our suggested prayer categories, or start from scratch and create your own?</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <ButtonPrimary text={'Use suggested categories'} onClick={useSuggestedCategories}/>
                    <ButtonSecondary text={'Start from scratch'} onClick={startFromScratch}/>
                </div>
            </div>
        </div>
    )
}