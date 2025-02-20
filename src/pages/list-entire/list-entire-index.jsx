import { ButtonPrimary } from "../../components/Button"
import Category from "../../components/Category";
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";
import { useGetData } from "../../hooks/useGetData";
import { useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


import Header from "../../components/Header";

export default function ListEntire({boxData, setBoxData, isLoading, setIsLoading}) {

    const {addCategory} = useAddCategory(boxData, setBoxData);
    const {addCard} = useAddCard(boxData, setBoxData);

    const {getBoxData} = useGetData();

    // useEffect(() => {
    //     getBoxData(setBoxData, setIsLoading)
    // }, [])


    return (
        <div className="min-h-screen h-full flex flex-col items-center">
            <Header />
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading &&
                <div className="w-full h-full px-10 max-w-[850px] flex flex-col gap-5 justify-start mt-44 items-start">
                    <h1 className="text-2xl font-bold">Your Prayer Box</h1>
                    <ButtonPrimary text={'Add new category'} onClick={() => addCategory()} />
                    {boxData.categories.map((category) => {
                        return (
                            <Category key={category.categoryName} category={category} boxData={boxData} setBoxData={setBoxData}/>
                        )
                    })}
                </div>
            }
                
        </div>
    )
}