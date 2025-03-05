import { useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackArrow() {

    const navigate = useNavigate();

    function navigateBack() {
        navigate(-1);
    }

    return (
        <div className="w-full flex justify-start items-center px-4 pt-4">
            <button className="flex justify-center items-center rounded-full p-2 hover:cursor-pointer" onClick={navigateBack}>
                <ArrowBackIcon />
            </button>
        </div>
    )
}