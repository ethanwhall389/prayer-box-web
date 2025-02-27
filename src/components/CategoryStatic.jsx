import CardStatic from "./CardStatic"

export default function CategoryStatic ({catInfo, cards}) {
    const {categoryName, categoryDescription} = catInfo;
    return (
        <div className="bg-white p-4 w-full flex flex-col items-start gap-4 rounded-lg">
            <h2 className="w-full text-2xl font-bold text-left">{categoryName}</h2>
            {categoryDescription !== '' && 
                <p className="w-full text-left">{categoryDescription}</p>
            }
            {cards.length <= 0 &&
                <p className="text-slate-500">No cards in this category</p>
            }
            {cards.map((card) => {
                const {cardDescription, cardTitle, createdAt} = card;
                return (
                    <CardStatic key={cardTitle} cardTitle={cardTitle} cardDescription={cardDescription} createdAt={createdAt}/>
                )
            })}
        </div>
    )
}