import Header from "../../components/Header"
import { ButtonPrimary, ButtonDanger } from "../../components/Button"
import { auth } from "../../config/firebase-config"
import { providerGoogle } from "../../config/firebase-config"
import { deleteUser, reauthenticateWithPopup, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"
import { deleteDoc } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"
import { doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import Modal from "../../components/Modal"

export default function Settings({isAuth}) {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isAuth) {
        return null;
    }
    
    const {userID} = useGetUserInfo();
    const user = auth.currentUser;
    const boxDocRef = doc(db, "boxes", userID);
    const [modalOpen, setModalOpen] = useState(false);

    async function deleteCurrentUser() {
        try {
            await reauthenticateWithPopup(user, providerGoogle);
            await deleteDoc(boxDocRef);
            await deleteUser(user);
            navigate('/')
            localStorage.clear();
        } catch (error) {
            if (error instanceof FirebaseError) {
                console.error(error);
            }
        }
    }

    async function signUserOut() {
        try {
            await signOut(auth);
            navigate('/');
            localStorage.clear();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            {modalOpen &&
                <Modal setModalOpen={setModalOpen}>
                    <div className="flex flex-col gap-4 items-center">
                        <p>You are about to delete your entire account. This cannot be undone.</p>
                        <ButtonDanger text={'Delete'} onClick={deleteCurrentUser}/>
                    </div>
                </Modal>
            }
            <div className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
                <ButtonPrimary text={'Sign Out'} onClick={signUserOut}/>
                <ButtonDanger text={'Delete My Account'} onClick={() => setModalOpen(true)}/>
            </div>
        </div>
    )
}