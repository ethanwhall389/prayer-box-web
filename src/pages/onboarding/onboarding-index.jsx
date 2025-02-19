import { useNavigate } from "react-router-dom";

export default function Onboarding() {
    
    const navigate = useNavigate();

    function completeOnboarding() {
    }
    
    return (
        <>
            <h1>Onboarding</h1>
            <button onClick={completeOnboarding}>Complete onboarding</button>
        </>
    )
}