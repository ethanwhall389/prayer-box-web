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
                    categoryDescription: 'Confession is acknowledging our sin to God, not hiding it, knowing that he cleanses those who faithfully confess to him from a heart of repentance.',
                    categoryName: 'Confession',
                    cards: []
                },
                {
                    categoryDescription: 'Thanksgiving is thanking God for specific instances of His love for us: provision, answers to prayer, safety, etc.',
                    categoryName: 'Thanksgiving',
                    cards: []
                },
                {
                    categoryDescription: "Praise is thanking and worshiping God for who He is; His attributes, as well as what he's done.",
                    categoryName: 'Praise',
                    cards: []
                },
                {
                    categoryDescription: 'Intercessions are requests we make on behalf of other people or groups of people.',
                    categoryName: 'Intercession',
                    cards: []
                },
                {
                    categoryDescription: 'Supplications are prayers that make a personal request of God. Things like physical needs, provision, deliverance from temptation, etc.',
                    categoryName: 'Supplication',
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