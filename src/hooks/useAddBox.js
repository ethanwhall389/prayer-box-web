import { addDoc, setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddBox = () => {
    const boxCollectionRef = collection(db, "boxes");
    const {userID} = useGetUserInfo();
    
    async function addBox () {
        await setDoc(doc(boxCollectionRef, userID), {
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