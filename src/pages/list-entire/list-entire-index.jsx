import { ButtonPrimary } from "../../components/Button"
import Category from "../../components/Category";
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";
import { useState } from "react";

import Header from "../../components/Header";

export default function ListEntire() {

    const {addCategory} = useAddCategory();
    const {addCard} = useAddCard();
    const [categories, setCategories] = useState([]);
    const {getCategories} = useGetData();

    useEffect(() => {

        async function fetchCategories() {
            const categoriesArray = await getCategories();
            setCategories(categoriesArray);
        }
        fetchCategories();

    }, [])

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
            <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-center">
                <h1>Hello from entire list!</h1>
                <ButtonPrimary text={'Add new category'} onClick={() => addCategory()}/>
                <ButtonPrimary text={'Add new card'} onClick={() => addCard()}/>
                {categories && categories.map((category) => {
                    return (
                        <Category key={category.categoryName} category={category}/>
                    )
                })}
                
            </div>
        </div>
    )
}