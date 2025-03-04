import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ButtonPrimary = ({text, onClick}) => {
    return (
        <button className="p-2 px-4 bg-green-400 rounded-3xl hover:cursor-pointer max-w-80 font-bold hover:bg-green-300 transition-all" 
        onClick={onClick}>{text}</button>
    )
}
export const ButtonSecondary = ({text, onClick}) => {
    return (
        <button className="p-2 px-4 bg-green-200 rounded-3xl hover:cursor-pointer max-w-80 font-bold hover:bg-green-100 transition-all" 
        onClick={onClick}>{text}</button>
    )
}
export const ButtonDanger = ({text, onClick}) => {
    return (
        <button className="p-2 px-4 bg-red-400 rounded-3xl hover:cursor-pointer max-w-80 font-bold hover:bg-red-500 transition-all" 
        onClick={onClick}>{text}</button>
    )
}
export const ButtonCard = ({text, onClick}) => {
    return (
        <div className="h-28 w-full p-2 px-4 bg-green-400 rounded-xl hover:cursor-pointer text-left flex items-center justify-between hover:bg-green-300 transition-all" 
        onClick={onClick}>
            <p className="text-lg font-bold">{text}</p>
            <ArrowForwardIcon />
        </div>
    )
}
export const ButtonIcon = ({icon, rotate, onClick}) => {
    if (rotate) {
        return (
            <div className='hover:cursor-pointer hover:rotate-45 transition-all' onClick={onClick}>{icon}</div>
        ) 
    }
    return (
        <div className='hover:cursor-pointer transition-all' onClick={onClick}>{icon}</div>
    )
}