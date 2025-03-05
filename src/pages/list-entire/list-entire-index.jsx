import { ButtonPrimary } from "../../components/Button"
import Category from "../../components/Category";
import { useAddCategory } from "../../hooks/useAddCategory"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Header from "../../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import BackArrow from "../../components/BackArrow";

export default function ListEntire({isAuth, boxData, setBoxData, isLoading, setIsLoading, setMessage, setMessageType}) {

    const navigate = useNavigate();
    const {isLoggedIn} = useGetUserInfo();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isLoggedIn) {
        return null;
    }

    const {addCategory} = useAddCategory(boxData, setBoxData);


    return (
        <div className="h-full flex flex-col items-center">
            <Header />
            <AnimatedPage>
            {isLoading &&
                <div className="w-full h-screen max-w-[850px] flex justify-center items-center">
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress/>
                    </Box> 
                </div>
            }
            {!isLoading &&
                <>
                <div className="flex flex-col w-full items-center">
                    <BackArrow />
                    <div className="w-full h-full py-12 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
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
                                <Category key={category.categoryName} category={category} boxData={boxData} setBoxData={setBoxData} setMessage={setMessage} setMessageType={setMessageType}/>
                            )
                        })}
                    </div>
                </div>
                </>
            }
            </AnimatedPage>    
        </div>
    )
}