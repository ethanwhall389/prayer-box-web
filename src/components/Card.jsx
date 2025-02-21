import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonIcon } from './Button';
import useDeleteCard from '../hooks/useDeleteCard';
import { useFormatDate } from '../hooks/useFormatDate';

export default function Card({cardInfo, categoryName, boxData, setBoxData}) {

    const {deleteCard} = useDeleteCard(boxData, setBoxData)
    const {formatDate} = useFormatDate();

    const cardCreatedAt = formatDate(cardInfo.createdAt);

    return (
        <div className="bg-slate-100 w-full p-4 flex flex-col items-start group hover:cursor-pointer rounded-lg">
            <div className="flex w-full justify-between">
                <p className="text-lg">{cardInfo.cardTitle}</p>
                <div className='group-hover:opacity-100 opacity-0 transition-all'>
                    <ButtonIcon icon={<DeleteIcon />} rotate={false} onClick={() => deleteCard(categoryName, cardInfo.cardTitle)}/>
                </div>
            </div>
            <p>{cardInfo.cardDescription}</p>
            <div className='flex w-full justify-end'>
                <p className='group-hover:opacity-100 opacity-0 transition-all'>{cardCreatedAt}</p>
            </div>
        </div>
    )
}