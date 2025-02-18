export const ButtonPrimary = ({text, onClick}) => {
    return (
        <button className="p-2 px-4 bg-slate-400 rounded-3xl hover:cursor-pointer" 
        onClick={onClick}>{text}</button>
    )
}
export const ButtonSecondary = ({text, onClick}) => {
    return (
        <button className="p-2 px-4 bg-green-400 rounded-3xl hover:cursor-pointer" 
        onClick={onClick}>{text}</button>
    )
}