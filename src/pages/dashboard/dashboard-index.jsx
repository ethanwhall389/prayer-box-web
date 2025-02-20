import { ButtonCard} from "../../components/Button"
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';
import { useAddBox } from "../../hooks/useAddBox"
import { useEffect } from 'react';
import { useCheckIsNewUser } from '../../hooks/useCheckIsNewUser';
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';



export default function Dashboard({boxData, setBoxData, isLoading, setIsLoading}) {

    const navigate = useNavigate();
    const { addBox } = useAddBox();
    const {checkIsNewUser} = useCheckIsNewUser();
    const {getTotalCards} = useGetData();  

    const [totalCards, setTotalCards] = useState(0)

    const {getBoxData} = useGetData();

    useEffect(() => {
    
        async function fetchCategories() {
          setIsLoading(true);
          try {
            const data = await getBoxData();
            setBoxData(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
    
        fetchCategories();
    
    }, [])

    useEffect(() => {
        checkIsNewUser();
    }, [])
    

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
        <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-start">
            {isLoading && 
                <Box sx={{ width: '100%' }}>
                    <LinearProgress/>
                </Box>
            }
            {!isLoading &&
                <>
                    <p>Verse pertaining to prayer...</p>
                    <p>{boxData.totalCards} prayer cards in your box.</p>
                    <ButtonCard text={"View today's prayer list"} onClick={() => navigate('/list-today')}/>
                    <ButtonCard text={"View and edit your entire prayer list"} onClick={() => navigate('/list-entire')}/>
                </>
            }
        </div>
        </div>
    )
}