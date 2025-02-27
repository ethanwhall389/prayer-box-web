import Header from "../../components/Header"
import { ButtonPrimary, ButtonDanger } from "../../components/Button"
import { auth } from "../../config/firebase-config"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Settings() {

    const navigate = useNavigate();

    async function signUserOut() {
        try {
            await signOut(auth);
            localStorage.clear();
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            <div className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
                <ButtonPrimary text={'Sign Out'} onClick={signUserOut}/>
            </div>
        </div>
    )
}