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
        <div className='bg-white flex flex-col items-center gap-2 sm:flex-row justify-between w-full p-8'>
            <div onClick={() => navigate('/dashboard')} className="hover:cursor-pointer flex flex-col sm:flex-row justify-start grow items-center gap-4">
                <div className="w-[60px] h-auto">
                    <img src="/assets/prayer-box-logo-no-bg.svg" alt="" />
                </div>
                <h1 className='text-xl text-[#284563] font-bold'>{firstName}'s Prayer Box</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
                <p className="text-[#284563">{formatDate(new Date())}</p>
                <div className="text-[#284563] hover:text-green-400 duration-100">
                <ButtonIcon icon={<SettingsIcon style={{fontSize: '35px'}}/>} rotate={true} onClick={() => navigate('/settings')} />
                </div>
            </div>
        </div>
    )
}