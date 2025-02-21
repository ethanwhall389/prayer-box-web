import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import useDeleteCard from '../hooks/useDeleteCard';
import { useFormatDate } from '../hooks/useFormatDate';
import { useState } from 'react';

export default function Card({cardInfo, categoryName, boxData, setBoxData}) {

    const {deleteCard} = useDeleteCard(boxData, setBoxData)
    const {formatDate} = useFormatDate();

    const [nameInput, setNameInput] = useState(cardInfo.cardTitle);
    const [descriptionInput, setDescriptionInput] = useState(cardInfo.cardDescription);

    const cardCreatedAt = formatDate(cardInfo.createdAt);

    function handleSubmit(e) {
        e.preventDefault();
        //update state / update database
            //updateCard(categoryName, nameInput, descriptionInput);
    }

    return (
        <div className="bg-slate-100 w-full p-4 flex flex-col items-start group hover:cursor-pointer rounded-lg">
            <form action="" className='w-full h-full flex flex-col gap-2'>
                <div className="flex w-full justify-between">
                    <input type="text" id='name' value={nameInput} onChange={(e) => setNameInput(e.target.value)} className='outline-none w-full text-lg font-bold focus:bg-slate-200 p-2 px-3 mr-4 rounded-lg'/>
                    {/* <p className="text-lg">{cardInfo.cardTitle}</p> */}
                    <div className='group-hover:opacity-100 opacity-0 transition-all'>
                        <ButtonIcon icon={<DeleteIcon />} rotate={false} onClick={() => deleteCard(categoryName, cardInfo.cardTitle)}/>
                    </div>
                </div>
                {descriptionInput !== '' &&
                    <textarea name="description" id="description" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} className='outline-none p-2 w-full resize-none rounded-lg focus:bg-slate-200'></textarea>
                }
                {/* <input type="text" id='name' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} className='outline-none border-2 w-full'/> */}
                {/* <p>{cardInfo.cardDescription}</p> */}
                <div className='flex w-full justify-end'>
                    <p className='group-hover:opacity-100 opacity-0 transition-all'>{cardCreatedAt}</p>
                </div>
                <button type='submit' onSubmit={(e) => handleSubmit(e)} className='hidden'></button>
            </form>
        </div>
    )
}