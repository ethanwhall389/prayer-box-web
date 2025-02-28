import Header from "../../components/Header";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CategoryStatic from "../../components/CategoryStatic";
import { ButtonPrimary, ButtonSecondary, ButtonIcon } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import PrintableTable from "../../components/PrintableTable";
import { useReactToPrint } from "react-to-print";
import PrintIcon from '@mui/icons-material/Print';

export default function ListToday({isAuth, listToday, isLoading, setIsLoading, setMessage, setMessageType}) {
    
    const navigate = useNavigate();
    const contentRef = useRef();
    const print = useReactToPrint({contentRef});

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth, navigate])

    if (!isAuth) {
        return null;
    }

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
                <div className="w-full h-full py-20 px-10 max-w-[850px] flex flex-col gap-5 justify-start items-start">
                    <h1 className="text-2xl font-bold">Today's Prayer List</h1>
                    <div className="w-full flex justify-between">
                        <ButtonSecondary text={'Edit your box'} onClick={() => navigate('/list-entire')}/>
                        <div title="Print today's list">
                            <ButtonIcon icon={<PrintIcon/>} onClick={() => print()}/>
                        </div>
                    </div>
                    {listToday.length > 0 && listToday.map((cat) => {
                        return (
                            <CategoryStatic key={cat.categoryName} catInfo={cat} cards={cat.cards}/>
                        )
                    })}
                    <div ref={contentRef} className="m-10 hidden print:block">
                        <PrintableTable data={listToday}/>
                    </div>
                </div>
            }
        </div>
    )
}