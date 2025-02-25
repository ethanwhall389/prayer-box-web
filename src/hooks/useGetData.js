import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"
import { useEffect, useState } from "react"

export const useGetData = () => {

    const {userID} = useGetUserInfo();


    const calculateTotalCards = async () => {
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        let counter = 0;
        docSnap.data().categories.forEach((category) => {
            counter += category.cards.length;
        })
        await updateDoc(boxDocRef, {
            totalCards: counter
        })
        
        return counter;
    }
    
    const getTotalCategories = async () => {
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        return docSnap.data().totalCategories;
    }

    let counter = 0;

    const getBoxData = async (setBoxData, setIsLoading) => {
        console.log('getting data');

        if (!userID) {
            console.log('no user id');
            setIsLoading(false);
            return;
        }

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
            console.log('done getting data');
            setIsLoading(false);
        }
    }

    return {calculateTotalCards, getTotalCategories, getBoxData}
}