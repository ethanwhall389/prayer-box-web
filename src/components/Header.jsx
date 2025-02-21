import { useGetUserInfo } from "../hooks/useGetUserInfo"
import { useFormatDate } from "../hooks/useFormatDate";
import { useNavigate } from "react-router-dom";
import { ButtonIcon } from "./Button";
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {

    const {formatDate} = useFormatDate();
    const {firstName} = useGetUserInfo();
    const navigate = useNavigate();



    return (
        <div className='bg-white flex justify-between w-full p-8 mb-20'>
            <h1 onClick={() => navigate('/dashboard')} className='text-xl font-bold hover:cursor-pointer'>{firstName}'s Prayer Box!</h1>
            <div className="flex justify-center items-center gap-2">
                <p>{formatDate(new Date())}</p>
                <ButtonIcon icon={<SettingsIcon style={{fontSize: '35px'}}/>} rotate={true} onClick={() => navigate('/settings')} />
            </div>
        </div>
    )
}