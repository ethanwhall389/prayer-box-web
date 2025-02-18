import { auth, providerGoogle, providerEmail } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import {ButtonPrimary, ButtonSecondary} from "../../components/Button";

export default function Auth() {
    
    async function signInGoogle () {
        const results = await signInWithPopup(auth, providerGoogle);
        console.log(results);
    }

    async function signinEmail () {
        const results = await signInWithPopup(auth, providerEmail);
        console.log(results);
    }
    
    return (
        <div className="login-page">
            <h1>Create an account or sign in</h1>
            <ButtonPrimary text={'Sign in with Google'} onClick={signInGoogle} />
            <ButtonSecondary text={'Sign in with Email'} onClick={signinEmail} />
        </div>
    )
}