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
import PersonIcon from '@mui/icons-material/Person';
import BrushIcon from '@mui/icons-material/Brush';
import InboxIcon from '@mui/icons-material/Inbox';
import InfoIcon from '@mui/icons-material/Info';
import AnimatedPage from "../../components/AnimatedPage"
import BackArrow from "../../components/BackArrow"

export default function Settings() {

    const navigate = useNavigate();
    const {isLoggedIn, userID, displayName} = useGetUserInfo();
    const user = auth.currentUser;
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate])

    if (!isLoggedIn) {
        return null;
    }

    const boxDocRef = doc(db, "boxes", userID);
    

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
            console.error('Caught an error: ', error);
        }
    }

    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            <AnimatedPage>
            {modalOpen &&
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <div className="flex flex-col gap-4 items-center">
                        <p>You are about to delete your entire account. This cannot be undone.</p>
                        <ButtonDanger text={'Delete'} onClick={deleteCurrentUser}/>
                    </div>
                </Modal>
            }
            <div className="flex flex-col w-full items-center">
                <BackArrow />
                <div className="w-full h-full py-12 px-10 max-w-[850px] flex flex-col gap-8 justify-start items-start">
                    <div className="w-full flex flex-col items-start gap-4">
                        <h1 className="text-2xl font-bold">{displayName}</h1>
                        <p>personal profile</p>
                    </div>

                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full border-b-1 border-slate-500 py-8 flex justify-start items-center gap-4">
                            <InboxIcon />
                            <h2 className="text-xl">Prayer Box Preferences</h2>
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            {/* Preference options here */}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full border-b-1 border-slate-500 py-8 flex justify-start items-center gap-4">
                            <BrushIcon />
                            <h2 className="text-xl">Appearance</h2>
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            {/* Appearance options here */}
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full border-b-1 border-slate-500 py-8 flex justify-start items-center gap-4">
                            <PersonIcon />
                            <h2 className="text-xl">Account Settings</h2>
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <ButtonPrimary text={'Sign Out'} onClick={signUserOut}/>
                            <ButtonDanger text={'Delete My Account'} onClick={() => setModalOpen(true)}/>
                        </div>
                    </div>
                    
                    <div className="w-full flex flex-col gap-10">
                        <div className="w-full border-b-1 border-slate-500 py-8 flex justify-start items-center gap-4">
                            <InfoIcon />
                            <h2 className="text-xl">About Prayer Box</h2>
                        </div>
                        <div className="w-full flex flex-col items-start gap-2">
                            <p>Prayer Box v. 1.1.1</p>
                            <p>Built and maintained by <a href="https://github.com/ethanwhall389" target="_new">Ethan Hall</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </AnimatedPage>
        </div>
    )
}