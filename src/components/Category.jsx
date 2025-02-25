import Card from "./Card"
import AddCardField from "./AddCardField";
import { useUpdateCategory } from "../hooks/useUpdateCategory";

import { ButtonSecondary } from "./Button";

import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import { useState } from "react";

export default function Category({category, boxData, setBoxData, setModalInfo, setModalOpen, setMessage, setMessageType}) {
    
    const {updateCategory} = useUpdateCategory(boxData, setBoxData);
    const [nameInput, setNameInput] = useState(category.categoryName);
    const [descriptionInput, setDescriptionInput] = useState(category.categoryDescription);
    
    function showModal() {
        setModalInfo({name: category.categoryName, description: category.categoryDescription})
        setModalOpen(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateCategory(category.categoryName, nameInput, descriptionInput, setMessage, setMessageType);
    }

    function handleBlur() {
        setNameInput(category.categoryName);
        setDescriptionInput(category.categoryDescription);
    }

    return (
        <div className="bg-white p-4 w-full flex flex-col items-start gap-4 rounded-lg">
            <form action="" onSubmit={(e) => handleSubmit(e)} className='w-full h-full flex flex-col gap-2'>
                <div className=" flex w-full justify-between items-center">
                    <input type="text" value={nameInput} onChange={((e) => setNameInput(e.target.value))} onBlur={handleBlur} className='outline-none w-full text-lg font-bold focus:bg-slate-200 p-2 px-3 mr-4 rounded-lg'/>
                    {/* <p className="text-xl">{category.categoryName}</p> */}
                    {/* <ButtonSecondary text={'Edit Category'} onClick={showModal}/> */}
                </div>
                <div className="pb-2 w-full border-b-2 border-slate-100 flex justify-start">
                    <textarea name="description" id="description" placeholder="What is this category about?" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} onBlur={handleBlur} className='outline-none p-2 w-full resize-none rounded-lg focus:bg-slate-200'></textarea>
                    {/* <p>{category.categoryDescription}</p> */}
                </div>
            </form>
            {category.cards.length <= 0 &&
                <h1>No cards in this category. Add one below to begin</h1>
            }
            {category.cards.map((card) => {
                return (
                    <Card key={card.name} cardInfo={card} categoryName={category.categoryName} boxData={boxData} setBoxData={setBoxData} setMessage={setMessage} setMessageType={setMessageType}/>
                )
            })}
            <AddCardField categoryName={category.categoryName} boxData={boxData} setBoxData={setBoxData} setMessage={setMessage}/>

        </div>
    )
}