import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAddCard } from "../hooks/useAddCard";
import { useState } from 'react';


export default function AddCardField({categoryName, boxData, setBoxData, message, setMessage, setMessageType}) {

    const {addCard} = useAddCard(boxData, setBoxData);
    const [cardNameInput, setCardNameInput] = useState('');
    const [cardDescriptionInput, setCardDescriptionInput] = useState('');

    //const [message, setMessage] = useState();

    async function onSubmit(e) {
        e.preventDefault();
        await addCard(categoryName, cardNameInput, cardDescriptionInput, setMessage, setMessageType);
        setCardNameInput('');
        setCardDescriptionInput('');
    }

    return (
        <div className="bg-slate-100 w-full p-4 flex flex-col items-start group hover:cursor-pointer hover:bg-slate-200 rounded-lg">
            <div className="flex w-full justify-start items-center gap-4">
                <form action="" onSubmit={(e) => onSubmit(e)} className="flex flex-col sm:flex-row gap-4 w-full">
                    <label htmlFor="card-title" className="flex items-center justify-center hover:cursor-pointer">
                        <AddCircleOutlineIcon/>
                    </label>
                    <div className='flex flex-col sm:flex-row w-full gap-3'>
                        <input id="card-title" value={cardNameInput} onChange={(e) => {setCardNameInput(e.target.value)}} type="text" placeholder="Card Title" className="sm:w-1/2 p-2 border-2 border-slate-300 outline-none" />
                        <input id="card-description" value={cardDescriptionInput} onChange={(e) => {setCardDescriptionInput(e.target.value)}} type="text" placeholder="Card Description" className="sm:w-1/2 p-2 border-2 border-slate-300 outline-none" />
                    </div>
                    <button type="submit" className="hidden"></button>
                </form>
            </div>
            {/* {message && <Message messageText={message} messageType={false}/>} */}
        </div>
    )
}