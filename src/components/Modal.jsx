import CloseIcon from '@mui/icons-material/Close';
import { ButtonIcon } from './Button';
import { ButtonPrimary } from './Button';
import { useState } from 'react';

export default function Modal({modalOpen, setModalOpen, children}) {

    if (modalOpen) {
        window.addEventListener('keydown', handleKeyDown)
    }
    
    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            setModalOpen(false);
        }
    }

    const [nameInput, setNameInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    return (
        <div id="modal-bg" onKeyDown={(e) => handleEscape(e)} onClick={() => setModalOpen(false)} className="min-h-screen w-screen bg-black/50 fixed top-0 left-0">
            <div id="modal" onKeyDown={(e) => handleEscape(e)} onClick={(e) => e.stopPropagation()} className="p-4 rounded-lg bg-slate-300 absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {children}
            </div>
        </div>
    )
}