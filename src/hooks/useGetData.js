import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"
import { useEffect, useState } from "react"
import { useFormatDate } from "./useFormatDate"

export const useGetData = () => {

    const {userID} = useGetUserInfo();
    const {formatDate} = useFormatDate();


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

    const getBoxData = async (setBoxData, setIsLoading) => {

        if (!userID) {
            setIsLoading(false);
            return;
        }
        
        
        const boxDocRef = doc(db, "boxes", userID);
        const docSnap = await getDoc(boxDocRef);
        
        setIsLoading(true);
        try {
            const data = docSnap.data();

            const updatedData = await calcCardOrder(data); // checks the db, updates listToday if necessary
            setBoxData(updatedData); //set state
            updateDoc(boxDocRef, {...updatedData})//update db doc
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const calcCardOrder = (data) => {

        const lastUpdated = data.lastUpdated;
        const dateToday = formatDate(new Date().toISOString());

        if (lastUpdated === dateToday) {
            return data;
        } else {
            const updatedCardOrder = data.categories.map((currentCat) => {
                //remove end of queue, add to beginning
                const poppedIndex = currentCat.cards.pop();
                currentCat.cards.unshift(poppedIndex);
                return currentCat;
            })
            console.log('data after mapping: ', updatedCardOrder);
            data.lastUpdated = dateToday;
            return {...data, categories: updatedCardOrder}
        }
    }

    return {calculateTotalCards, getTotalCategories, getBoxData}
}