import Card from "./Card"
import AddCardField from "./AddCardField";

import { ButtonSecondary } from "./Button";

import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import { useState } from "react";

export default function Category({category, boxData, setBoxData, setModalInfo, setModalOpen, setMessage, setMessageType}) {
    
    function showModal() {
        setModalInfo({name: category.categoryName, description: category.categoryDescription})
        setModalOpen(true);
    }

    return (
        <div className="bg-white p-4 w-full flex flex-col items-start gap-4 rounded-lg">
            <div className=" flex w-full justify-between items-center">
                <p className="text-xl">{category.categoryName}</p>
                <ButtonSecondary text={'Edit Category'} onClick={showModal}/>
            </div>
            <div className="pb-2 w-full border-b-2 border-slate-100 flex justify-start">
                <p>{category.categoryDescription}</p>
            </div>
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