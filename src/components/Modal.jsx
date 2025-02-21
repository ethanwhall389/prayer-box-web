import CloseIcon from '@mui/icons-material/Close';
import { ButtonIcon } from './Button';
import { useState } from 'react';

export default function Modal({modalInfo, setModalOpen}) {

    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    return (
        <div id="modal-bg" onClick={() => setModalOpen(false)} className="min-h-screen w-screen bg-black/50 fixed top-0 left-0">
            <div id="modal" onClick={(e) => e.stopPropagation()} className="p-4 rounded-lg bg-slate-300 absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className='w-full flex justify-end items-center'>
                    <ButtonIcon icon={<CloseIcon/>} rotate={false} onClick={() => setModalOpen(false)}/>
                    {/* <div onClick={() => setModalOpen(false)} className='w-fit flex items-center group'>
                        <CloseIcon className='group:hover' />
                    </div> */}
                </div>
                <h1>Modal</h1>
                <form action="">
                    <input type="text" id='name' value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
                    <input type="text" id='name' value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}/>
                </form>
                <h1>{modalInfo.name}</h1>
                <h1>{modalInfo.description}</h1>
            </div>
        </div>
    )
}