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
        <div className='flex justify-between w-full'>
            <h1 className='text-xl font-bold'>Welcome, {firstName}!</h1>
            <div className="flex flex-col items-end gap-2">
                <p>{formatDate(new Date())}</p>
                <ButtonIcon icon={<SettingsIcon style={{fontSize: '35px'}}/>} onClick={() => navigate('/settings')} />
            </div>
        </div>
    )
}