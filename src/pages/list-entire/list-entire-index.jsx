import { ButtonPrimary } from "../../components/Button"
import Category from "../../components/Category";
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";

import Header from "../../components/Header";

export default function ListEntire({boxData, setBoxData, isLoading}) {

    const {addCategory} = useAddCategory(boxData, setBoxData);
    const {addCard} = useAddCard(boxData, setBoxData);
    const {getBoxData} = useGetData();

    // useEffect(() => {

    //     async function fetchCategories() {
    //         const data = await getBoxData();
    //         setBoxData(data);
    //     }
    //     fetchCategories();

    // }, [])

    console.log (boxData);

    if (isLoading) {
        return <h1>LOADING</h1>
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <Header />
            <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-center items-center">
                <h1>Hello from entire list!</h1>
                <ButtonPrimary text={'Add new category'} onClick={() => addCategory()} />
                <ButtonPrimary text={'Add new card'} onClick={() => addCard()} />
                {boxData.categories.map((category) => {
                    return (
                        <Category key={category.categoryName} category={category}/>
                    )
                })}
                
            </div>
        </div>
    )
}