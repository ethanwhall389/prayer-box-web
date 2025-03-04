import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCalcListToday } from "../../hooks/useCalcListToday";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Carousel from "../../components/Carousel";
import { ButtonPrimary, ButtonSecondary } from "../../components/Button";

export default function PrayerSession({isAuth, listToday, isLoading, setIsLoading, setMessage, setMessageType}) {
    const navigate = useNavigate();
    const {calcPrayerSession} = useCalcListToday();
    const [sessionData, setSessionData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    
    const [currentCat, setCurrentCat] = useState('')
    const [catDescription, setCatDescription] = useState('')

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isAuth) {
        return null;
    }
    
    useEffect(() => {
        if (listToday.length <= 0) return;

        const sessionArray = calcPrayerSession(listToday);
        setSessionData(sessionArray);
        setCurrentCat(sessionArray[activeCardIndex].categoryName);
        setCatDescription(sessionArray[activeCardIndex].categoryDescription);

    }, [listToday])

    useEffect(() => {
        if (sessionData.length > 0) {
            if (activeCardIndex < sessionData.length) {
                setCurrentCat(sessionData[activeCardIndex].categoryName);
                setCatDescription(sessionData[activeCardIndex].categoryDescription);
            }
        }
     }, [activeCardIndex])
    
    return (
        <div className="h-full min-h-screen flex flex-col items-center justify-center">
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading && 
                <div className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-14 justify-start items-start">
                    
                    {activeCardIndex !== sessionData.length &&
                        <>
                        <div className="w-full flex flex-col items-center gap-4">
                            <h1 className="text-3xl">{currentCat}</h1>
                            <p className="text-left">{catDescription}</p>
                        </div>
                        <Carousel data={sessionData} activeCardIndex={activeCardIndex} setActiveCardIndex={setActiveCardIndex}/>
                        </>
                    }
                    {activeCardIndex === sessionData.length &&
                        <div className="flex flex-col justify-center items-center gap-6 w-full">
                        <h1 className="text-3xl">Prayer session complete</h1>
                        <div className="flex gap-4 items-center justify-center w-full flex-wrap">
                            <ButtonPrimary text={'Return to your list'} onClick={() => navigate('/list-today')}/>
                            <ButtonSecondary text={'Pray again'} onClick={() => setActiveCardIndex(0)}/>
                        </div>
                        </div>

                    }


                </div>
            }
            
        </div>
    )
}