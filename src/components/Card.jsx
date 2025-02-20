export default function Card({cardInfo}) {
    return (
        <div className="bg-slate-100 w-full p-4 flex flex-col items-start">
            <p className="text-lg">{cardInfo.cardTitle}</p>
            <p>{cardInfo.cardDescription}</p>
        </div>
    )
}