import { ButtonCard} from "../../components/Button"
import Header from '../../components/Header';

import { useNavigate } from 'react-router-dom';
import { useAddBox } from "../../hooks/useAddBox"
import { useEffect } from 'react';
import { useCheckIsNewUser } from '../../hooks/useCheckIsNewUser';


export default function Dashboard() {

    const navigate = useNavigate();
    const { addBox } = useAddBox();
    const {checkIsNewUser} = useCheckIsNewUser();
    
    useEffect(() => {
        checkIsNewUser();
    }, [])
    

    return (
        <div className="h-screen p-8 flex flex-col items-center gap-10">
            <Header />
            <div className="w-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-start">
                <p>Verse pertaining to prayer...</p>
                <p>25 prayer requests</p>
                <ButtonCard text={"View today's prayer list"} onClick={() => navigate('/list-today')}/>
                <ButtonCard text={"View and edit your entire prayer list"} onClick={() => navigate('/list-entire')}/>
            </div>
        </div>
    )
}