import { auth, providerGoogle, providerEmail } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import {ButtonPrimary, ButtonSecondary} from "../../components/Button";
import { useNavigate} from "react-router-dom";

export default function Auth() {

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
        <div className="flex flex-col justify-center items-center h-screen gap-7">
            <h1 className="text-2xl">Create an account or sign in</h1>
            <div className="flex flex-col gap-2 w-48">
                <ButtonPrimary text={'Sign in with Google'} onClick={signInGoogle} />
                <ButtonSecondary text={'Sign in with Email'} onClick={signinEmail} />
            </div>
        </div>
    )
}