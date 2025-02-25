import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import useDeleteCard from '../hooks/useDeleteCard';
import { useFormatDate } from '../hooks/useFormatDate';
import { useEffect, useRef, useState } from 'react';
import { useUpdateCard } from '../hooks/useUpdateCard';

export default function Card({cardInfo, categoryName, boxData, setBoxData, message, setMessage, setMessageType}) {

    const {deleteCard} = useDeleteCard(boxData, setBoxData)
    const {formatDate} = useFormatDate();
    const {updateCard} = useUpdateCard(boxData, setBoxData);

    const formRef = useRef(null);
    const [nameInput, setNameInput] = useState(cardInfo.cardTitle);
    const [descriptionInput, setDescriptionInput] = useState(cardInfo.cardDescription);

    const cardCreatedAt = formatDate(cardInfo.createdAt);

    useEffect (() => {
        setNameInput(cardInfo.cardTitle);
        setDescriptionInput(cardInfo.cardDescription);
    }, [cardInfo.cardTitle])

    async function handleSubmit(e) {
        e.preventDefault();
        await updateCard(categoryName, cardInfo.cardTitle, nameInput, descriptionInput, setMessage, setMessageType)

        if (formRef.current) {
            formRef.current.querySelectorAll("input, textarea").forEach((el) => {
              el.blur(); // Removes focus from input fields
            });
        }
    }

    function handleTextAreaEnter(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
            e.preventDefault();
        }
    }

    function handleBlur() {
        setNameInput(cardInfo.cardTitle);
        setDescriptionInput(cardInfo.cardDescription);
    }

    return (
        <div className="bg-slate-100 w-full p-4 flex flex-col items-start group hover:cursor-pointer rounded-lg">
            <form ref={formRef} onSubmit={(e) => handleSubmit(e)} action="" className='w-full h-full flex flex-col gap-2'>
                <div className="flex w-full justify-between">
                    <input type="text" id='name' value={nameInput} onBlur={handleBlur} onChange={(e) => setNameInput(e.target.value)} className='outline-none w-full text-lg font-bold focus:bg-slate-200 p-2 px-3 mr-4 rounded-lg'/>
                    {/* <p className="text-lg">{cardInfo.cardTitle}</p> */}
                    <div className='group-hover:opacity-100 opacity-0 transition-all'>
                        <ButtonIcon icon={<DeleteIcon />} rotate={false} onClick={() => deleteCard(categoryName, cardInfo.cardTitle)}/>
                    </div>
                </div>
                <textarea name="description" id="description" placeholder='What is this card about?' value={descriptionInput} onBlur={handleBlur} onKeyDown={handleTextAreaEnter} onChange={(e) => setDescriptionInput(e.target.value)} className='outline-none p-2 w-full resize-none rounded-lg focus:bg-slate-200'></textarea>
                {/* <input type="text" id='name' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} className='outline-none border-2 w-full'/> */}
                {/* <p>{cardInfo.cardDescription}</p> */}
                <div className='flex w-full justify-end'>
                    <p className='group-hover:opacity-100 opacity-0 transition-all'>{cardCreatedAt}</p>
                </div>
                <button type='submit' className='hidden'></button>
            </form>
        </div>
    )
}