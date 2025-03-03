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
        <div className='bg-white flex justify-between w-full p-8'>
            <div onClick={() => navigate('/dashboard')} className="hover:cursor-pointer flex justify-start grow items-center gap-4">
                <div className="w-1/12 h-auto mb-4">
                    <img src="/assets/prayer-box-logo-no-bg.svg" alt="" />
                </div>
                <h1 className='text-xl font-bold'>{firstName}'s Prayer Box</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p>{formatDate(new Date())}</p>
                <ButtonIcon icon={<SettingsIcon style={{fontSize: '35px'}}/>} rotate={true} onClick={() => navigate('/settings')} />
            </div>
        </div>
    )
}