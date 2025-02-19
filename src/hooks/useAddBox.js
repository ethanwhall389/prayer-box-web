import { addDoc, setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";


// Save onboarding complete info in firebase
// check this data in useCheckIsNewUser

export const useAddBox = () => {
    const boxCollectionRef = collection(db, "boxes");
    const {userID} = useGetUserInfo();
    
    async function addBox () {
        await setDoc(doc(boxCollectionRef, userID), {
            onboardingComplete: false,
            userID,
            totalCategories: 0,
            totalCards: 0,
            createdAt: serverTimestamp(),
            categories: {
                confession: {
                    categoryDescription: 'Confession is...',
                    cards: [
                        {cardTitle: 'Selfishness', cardDescription: 'optional description'},
                        {cardTitle: 'Idolatry', cardDescription: 'optional description'},
                    ]
                },
                thanksgiving: {
                    categoryDescription: 'Thanksgiving is...',
                    cards: [
                        {cardTitle: 'Selfishness', cardDescription: 'optional description'},
                        {cardTitle: 'Idolatry', cardDescription: 'optional description'},
                    ]
                }
            }
        })  
        // addDoc(boxCollectionRef, {
        //     userID,
        //     totalCategories: 0,
        //     totalCards: 0,
        //     createdAt: serverTimestamp(),
        //     categories: {
        //         confession: {
        //             categoryDescription: 'Confession is...',
        //             cards: [
        //                 {cardTitle: 'Selfishness', cardDescription: 'optional description'},
        //                 {cardTitle: 'Idolatry', cardDescription: 'optional description'},
        //             ]
        //         },
        //         thanksgiving: {
        //             categoryDescription: 'Thanksgiving is...',
        //             cards: [
        //                 {cardTitle: 'Selfishness', cardDescription: 'optional description'},
        //                 {cardTitle: 'Idolatry', cardDescription: 'optional description'},
        //             ]
        //         }
        //     }
        // });
    }

    return {addBox};
}