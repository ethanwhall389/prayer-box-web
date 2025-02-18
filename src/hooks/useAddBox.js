import { addDoc, collection } from "firebase/firestore";
export const useAddBox = () => {
    async function addBox () {
        await addDoc();
    }

    return {addBox};
}