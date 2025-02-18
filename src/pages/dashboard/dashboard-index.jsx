import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ButtonPrimary, ButtonSecondary, ButtonCard, ButtonIcon } from "../../components/Button"
import { colors } from '@mui/material';

export default function Dashboard() {
    return (
        <div className="h-screen p-8 flex flex-col items-center gap-10">
            <div className='flex justify-between w-full'>
                <h1 className='text-xl font-bold'>Welcome, [name]!</h1>
                <p>January 1st, 2025</p>
            </div>
            <p>Verse pertaining to prayer...</p>
            <p>25 prayer requests</p>
            <div className="w-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-center">
                <ButtonCard text={"View today's prayer list"}/>
                <ButtonCard text={"View your entire prayer list"}/>
                <ButtonIcon icon={<SettingsOutlinedIcon style={{fontSize: '48px'}}/>} />
            </div>
        </div>
    )
}