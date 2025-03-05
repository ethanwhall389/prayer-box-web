import { useFormatDate } from '../hooks/useFormatDate';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function CardStatic({cardTitle, cardDescription, createdAt}) {

    const {formatDate} = useFormatDate();
    
    const cardCreatedAt = formatDate(createdAt);

    return (
        <div className="bg-slate-200 w-full p-4 flex flex-col items-start rounded-lg">
            
            <div className='w-full h-full flex flex-col gap-2'>
                <div className="flex w-full justify-between items-center">
                    <DescriptionOutlinedIcon fontSize='large'/>
                    <p className='text-left w-full text-lg font-bold p-2 px-3 mr-4'>{cardTitle}</p>
                </div>
                {cardDescription === ''
                ? <p className='text-left p-2 w-full text-slate-600'>This card has no description</p>
                : <p className='p-2 w-full text-left'>{cardDescription}</p>
                }
                <div className='flex w-full justify-end'>
                    <p className='transition-all'>{cardCreatedAt}</p>
                </div>
            </div>
        </div>
    )
}