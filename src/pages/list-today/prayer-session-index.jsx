import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCalcListToday } from "../../hooks/useCalcListToday";

export default function PrayerSession({isAuth, listToday, isLoading, setIsLoading, setMessage, setMessageType}) {
    const navigate = useNavigate();
    const {calcPrayerSession} = useCalcListToday();
    const [sessionData, setSessionData] = useState([]);
    const [currentCat, setCurrentCat] = useState('')
    const [catDescription, setCatDescription] = useState('')

    console.log(listToday);

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isAuth) {
        return null;
    }
    
    useEffect(() => {
        const sessionArray = calcPrayerSession(listToday);
        console.log(sessionArray);
        setSessionData(sessionArray);
        setCurrentCat(sessionArray[0].categoryName);
        setCatDescription(sessionArray[0].categoryDescription);
    }, [listToday])
    
    return (
        <div>
            <h1>{currentCat}</h1>
            <p>{catDescription}</p>
            {sessionData.map((card) => {
                return (
                    <div key={card.cardTitle}>
                        <h2>{card.cardTitle}</h2>
                        <p>{card.cardDescription}</p>
                    </div>
                )
            })}
        </div>
    )
}