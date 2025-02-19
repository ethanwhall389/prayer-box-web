import { getDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"

export const useGetData = () => {

    const {userID} = useGetUserInfo();

    const getTotalCards = async () => {
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        return docSnap.data().totalCards;
    }
    
    const getTotalCategories = async () => {
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        return docSnap.data().totalCategories;
    }

    const getCategories = async () => {
        console.log('running getCategories');
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        console.log(docSnap.data().categories)
        return docSnap.data().categories;
    }

    return {getTotalCards, getTotalCategories, getCategories}
}