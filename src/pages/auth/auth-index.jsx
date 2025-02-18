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
        <div className="flex flex-col justify-center items-center h-screen gap-7">
            <h1 className="text-2xl">Create an account or sign in</h1>
            <div className="flex flex-col gap-2 w-48">
                <ButtonPrimary text={'Sign in with Google'} onClick={signInGoogle} />
                <ButtonSecondary text={'Sign in with Email'} onClick={signinEmail} />
            </div>
        </div>
    )
}