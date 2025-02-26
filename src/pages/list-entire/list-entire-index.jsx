import { ButtonPrimary } from "../../components/Button"
import Category from "../../components/Category";
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";
import { useGetData } from "../../hooks/useGetData";
import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Modal from "../../components/Modal";


import Header from "../../components/Header";

export default function ListEntire({boxData, setBoxData, isLoading, setIsLoading, setMessage, setMessageType}) {

    const {addCategory} = useAddCategory(boxData, setBoxData);
    const {addCard} = useAddCard(boxData, setBoxData);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([]);


    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading &&
                <>
                <div id="test" className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
                    {modalOpen && <Modal modalInfo={modalInfo} setModalOpen={setModalOpen}/>}
                    <h1 className="text-2xl font-bold">Your Prayer Box</h1>

                    <div className="flex flex-col gap-2 items-start">
                        <h1>Total categories: {boxData.totalCategories}</h1>
                        <h1>Total cards: {boxData.totalCards}</h1>
                    </div>

                    <ButtonPrimary text={'Add new category'} onClick={() => addCategory(setMessage)} />
                    {boxData.categories.length <= 0 &&
                        <h1>You have no categories. Add one to begin.</h1>}
                    {boxData.categories.length >= 1 && boxData.categories.map((category) => {
                        return (
                            <Category key={category.categoryName} category={category} boxData={boxData} setBoxData={setBoxData} setModalInfo={setModalInfo} setModalOpen={setModalOpen} setMessage={setMessage} setMessageType={setMessageType}/>
                        )
                    })}
                </div>
                </>
            }
                
        </div>
    )
}