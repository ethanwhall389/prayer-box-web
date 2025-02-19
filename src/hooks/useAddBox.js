import { addDoc, setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";


// Save onboarding complete info in firebase
// check this data in useCheckIsNewUser

export const useAddBox = () => {
    const boxCollectionRef = collection(db, "boxes");
    const {userID} = useGetUserInfo();
    
    async function addPremadeBox () {
        await setDoc(doc(boxCollectionRef, userID), {
            onboardingComplete: false,
            userID,
            totalCategories: 2,
            totalCards: 0,
            createdAt: serverTimestamp(),
            categories: [
                {
                    categoryDescription: 'Confession is...',
                    categoryName: 'confession',
                    cards: []
                },
                {
                    categoryDescription: 'Thanksgiving is...',
                    categoryName: 'thanksgiving',
                    cards: []
                }
            ]
        })
    }

    async function addEmptyBox () {
        await setDoc(doc(boxCollectionRef, userID), {
            onboardingComplete: false,
            userID,
            totalCategories: 0,
            totalCards: 0,
            createdAt: serverTimestamp(),
            categories: []
        })
    }

    return {addPremadeBox, addEmptyBox};
}