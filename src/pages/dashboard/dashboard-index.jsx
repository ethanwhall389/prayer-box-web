import { ButtonCard} from "../../components/Button"
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCheckIsNewUser } from '../../hooks/useCheckIsNewUser';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import AnimatedPage from "../../components/AnimatedPage";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetData } from "../../hooks/useGetData";



export default function Dashboard({isAuth, boxData, setBoxData, isLoading, setIsLoading}) {
    
    const navigate = useNavigate();
    const {checkIsNewUser} = useCheckIsNewUser();
    const {isLoggedIn} = useGetUserInfo();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isLoggedIn) {
        return null;
    }

    useEffect(() => {
        checkIsNewUser();
    }, [checkIsNewUser])

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
        <AnimatedPage>
        <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-start">
            {isLoading && 
                <Box sx={{ width: '100%' }}>
                    <LinearProgress/>
                </Box>
            }
            {!isLoading &&
                <>
                    <p>{boxData.totalCards} prayer cards in your box.</p>
                    <ButtonCard text={"View today's prayer list"} onClick={() => navigate('/list-today')}/>
                    <ButtonCard text={"View and edit your prayer box"} onClick={() => navigate('/list-entire')}/>
                </>
            }
        </div>
        </AnimatedPage>
        </div>
    )
}