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

    let counter = 0;

    const getBoxData = async (setBoxData, setIsLoading) => {

        counter++;
        console.log('getting data: ' + counter);
        
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        // console.log('docSnap: ', docSnap.data())
        
        setIsLoading(true);
        try {
            const data = docSnap.data();
            setBoxData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {getTotalCards, getTotalCategories, getBoxData}
}