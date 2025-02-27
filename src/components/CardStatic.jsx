import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import useDeleteCard from '../hooks/useDeleteCard';
import { useFormatDate } from '../hooks/useFormatDate';
import { useEffect, useRef, useState } from 'react';
import { useUpdateCard } from '../hooks/useUpdateCard';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function CardStatic({cardTitle, cardDescription, createdAt}) {

    const {formatDate} = useFormatDate();
    
    const cardCreatedAt = formatDate(createdAt);

    return (
        <div className="bg-slate-200 w-full p-4 flex flex-col items-start rounded-lg">
            
            <div className='w-full h-full flex flex-col gap-2'>
                <div className="flex w-full justify-between items-center">
                    <DescriptionOutlinedIcon fontSize='large'/>
                    <p className='text-left w-full text-lg font-bold p-2 px-3 mr-4'>{cardTitle}</p>
                    {/* <input type="text" id='name' value={nameInput} onBlur={handleBlur} onChange={(e) => setNameInput(e.target.value)} className='outline-none w-full text-lg font-bold focus:bg-slate-200 p-2 px-3 mr-4 rounded-lg'/> */}
                    {/* <p className="text-lg">{cardInfo.cardTitle}</p> */}
                </div>
                <p className='p-2 w-full text-left'>{cardDescription}</p>
                <div className='flex w-full justify-end'>
                    <p className='transition-all'>{cardCreatedAt}</p>
                </div>
            </div>
            
            {/* <form ref={formRef} onSubmit={(e) => handleSubmit(e)} action="" className='w-full h-full flex flex-col gap-2'>
                <div className="flex w-full justify-between items-center">
                    <DescriptionOutlinedIcon fontSize='large'/>
                    <input type="text" id='name' value={nameInput} onBlur={handleBlur} onChange={(e) => setNameInput(e.target.value)} className='outline-none w-full text-lg font-bold focus:bg-slate-200 p-2 px-3 mr-4 rounded-lg'/>
                    <div className='group-hover:opacity-100 opacity-0 transition-all'>
                        <ButtonIcon icon={<DeleteIcon />} rotate={false} onClick={() => deleteCard(categoryName, cardInfo.cardTitle)}/>
                    </div>
                </div>
                <textarea name="description" id="description" placeholder='What is this card about?' value={descriptionInput} onBlur={handleBlur} onKeyDown={handleTextAreaEnter} onChange={(e) => setDescriptionInput(e.target.value)} className='outline-none p-2 w-full resize-none rounded-lg focus:bg-slate-200'></textarea>
                <div className='flex w-full justify-end'>
                    <p className='group-hover:opacity-100 opacity-0 transition-all'>{cardCreatedAt}</p>
                </div>
                
                <button type='submit' className='hidden'></button>
            </form> */}
        </div>
    )
}