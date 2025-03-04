import { auth, providerGoogle, providerEmail } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import {ButtonPrimary, ButtonSecondary} from "../../components/Button";
import { useNavigate} from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";

export default function Auth({setBoxData, setIsLoading}) {

    const navigate = useNavigate();

    
    async function signInGoogle () {
        const results = await signInWithPopup(auth, providerGoogle);
        const authInfo = {
            userID: results.user.uid,
            displayName: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isLoggedIn: true,
        }
        localStorage.setItem('auth', JSON.stringify(authInfo));
        navigate('/dashboard');
    }

    async function signinEmail () {
        const results = await signInWithPopup(auth, providerEmail);
    }
    
    return (
        <AnimatedPage>
        <div className="flex flex-col justify-center items-center h-screen gap-10">
            <div className='flex flex-col gap-2 items-center'>
                <div className="w-1/2 h-auto mb-4">
                    <img src="/assets/prayer-box-logo-no-bg.svg" alt="" />
                </div>
                <h1 className="text-2xl font-bold">Welcome to Prayer Box!</h1>
                <h1 className="text-xl">Create an account or sign in</h1>
            </div>
            <div className="flex flex-col gap-2 w-48">
                <ButtonPrimary text={'Sign in with Google'} onClick={signInGoogle} />
            </div>
        </div>
        </AnimatedPage>
    )
}