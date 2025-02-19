import { ButtonPrimary } from "../../components/Button"
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";
import { useState } from "react";

import Header from "../../components/Header";

export default function ListEntire() {

    const {addCategory} = useAddCategory();
    const {addCard} = useAddCard();
    const [categories, setCategories] = useState(null);
    const {getCategories} = useGetData();

    useEffect(() => {
        setCategories(getCategories());
        console.log(categories);
    }, [])

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
            <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-center">
                <h1>Hello from entire list!</h1>
                <ButtonPrimary text={'Add new category'} onClick={() => addCategory()}/>
                <ButtonPrimary text={'Add new card'} onClick={() => addCard()}/>
                {categories && categories.map((category) => {
                    <h1>{category.categoryName}</h1>
                })}
                <div className="bg-white p-4 w-full flex flex-col items-start gap-4">
                    <p className="text-xl">Category Name</p>
                    <div className="bg-slate-100 w-full p-4 flex flex-col items-start">
                        <p className="text-lg">Card Name</p>
                        <p>Card description goes here, blah blah blah</p>
                    </div>
                </div>
            </div>
        </div>
    )
}