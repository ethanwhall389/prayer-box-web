import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCalcListToday } from "../../hooks/useCalcListToday";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Carousel from "../../components/Carousel";
import { ButtonPrimary, ButtonSecondary } from "../../components/Button";
import AnimatedPage from "../../components/AnimatedPage";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import BackArrow from "../../components/BackArrow";

export default function PrayerSession({isAuth, listToday, isLoading, setIsLoading, setMessage, setMessageType}) {
    const navigate = useNavigate();
    const {calcPrayerSession} = useCalcListToday();
    const [sessionData, setSessionData] = useState([]);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const {isLoggedIn} = useGetUserInfo();
    
    const [currentCat, setCurrentCat] = useState('')
    const [catDescription, setCatDescription] = useState('')

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isLoggedIn) {
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
        <AnimatedPage>
        <div className="absolute w-full top-0">
            <BackArrow />
        </div>
        <div className="h-full min-h-screen flex flex-col items-center justify-center">
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading && 
                <>
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
                </>
            }
            
        </div>
        </AnimatedPage>
    )
}