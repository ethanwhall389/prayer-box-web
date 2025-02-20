import Card from "./Card"
import AddCardField from "./AddCardField";

import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import { useState } from "react";

export default function Category({category, boxData, setBoxData}) {




    return (
        <div className="bg-white p-4 w-full flex flex-col items-start gap-4 rounded-lg">
            <p className="text-xl">{category.categoryName}</p>
            <p>{category.categoryDescription}</p>
            {category.cards.map((card) => {
                return (
                    <Card key={card.name} cardInfo={card} categoryName={category.categoryName} boxData={boxData} setBoxData={setBoxData}/>
                )
            })}
            <AddCardField categoryName={category.categoryName} boxData={boxData} setBoxData={setBoxData}/>

        </div>
    )
}