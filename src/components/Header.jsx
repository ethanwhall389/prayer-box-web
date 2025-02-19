import { useGetUserInfo } from "../hooks/useGetUserInfo"
import { useFormatDate } from "../hooks/useFormatDate";

export default function Header() {

    const {formatDate} = useFormatDate();
    const {firstName} = useGetUserInfo();



    return (
        <div className='flex justify-between w-full'>
            <h1 className='text-xl font-bold'>Welcome, {firstName}!</h1>
            <p>{formatDate(new Date())}</p>
        </div>
    )
}