import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardStatic from './CardStatic';
import { useEffect } from 'react';

export default function Carousel({data, activeCardIndex, setActiveCardIndex}) {
    
    // useEffect(() => {

    // }, [data])

    if (data.length <= 0) {
        return;
    }
    
    const cardTitle = data[activeCardIndex].cardTitle;
    const cardDescription = data[activeCardIndex].cardDescription;
    const createdAt = data[activeCardIndex].createdAt;

    function handleClick(type) {
        if (type === 'increment') {
            if (activeCardIndex !== data.length) {
                setActiveCardIndex((prevIndex) => prevIndex+1)
            }
        }
        if (type === 'decrement') {
            if (activeCardIndex !== 0) {
                setActiveCardIndex((prevIndex) => prevIndex-1)
            }
        }
    }

    return (
        <div className="w-full flex items-center gap-2">
            <button onClick={() => handleClick('decrement')} className={`min-w-[30px] h-[30px] rounded-full flex justify-center items-center text-white bg-green-400 hover:opacity-60 hover:cursor-pointer duration-200 ${activeCardIndex===0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <ArrowBackIcon />
            </button>

            <CardStatic cardTitle={cardTitle} cardDescription={cardDescription} createdAt={createdAt}/>

            <button onClick={() => handleClick('increment')} className={`min-w-[30px] h-[30px] rounded-full flex justify-center items-center text-white bg-green-400 hover:opacity-60 hover:cursor-pointer duration-200 ${activeCardIndex===data.length ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <ArrowForwardIcon />
            </button>
        </div>
    )
}