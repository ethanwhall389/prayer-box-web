import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ButtonCard, ButtonIcon } from "../../components/Button"
import { useNavigate } from 'react-router-dom';
import { useAddBox } from "../../hooks/useAddBox"
import { useEffect } from 'react';
import { useCheckIsNewUser } from '../../hooks/useCheckIsNewUser';
import { useState } from 'react';


export default function Dashboard() {

    const navigate = useNavigate();
    const { addBox } = useAddBox();
    const {checkIsNewUser} = useCheckIsNewUser();
    const [isNewUser, setIsNewUser] = useState(false);
    
    useEffect(() => {
        checkIsNewUser(setIsNewUser);
    }, [])
    
    //need to update this to only run on user's first time
    if (isNewUser) {
        addBox();
    }

    return (
        <div className="h-screen p-8 flex flex-col items-center gap-10">
            {isNewUser && 
                <h1>NEW USER!!!</h1>
            }
            <div className='flex justify-between w-full'>
                <h1 className='text-xl font-bold'>Welcome, [name]!</h1>
                <p>January 1st, 2025</p>
            </div>
            <p>Verse pertaining to prayer...</p>
            <p>25 prayer requests</p>
            <div className="w-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-center">
                <ButtonCard text={"View today's prayer list"} onClick={() => navigate('/list-today')}/>
                <ButtonCard text={"View and edit your entire prayer list"} onClick={() => navigate('/list-entire')}/>
                <ButtonIcon icon={<SettingsOutlinedIcon style={{fontSize: '48px'}}/>} onClick={() => navigate('/settings')} />
            </div>
        </div>
    )
}