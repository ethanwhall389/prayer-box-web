import Card from "./Card"

export default function Category({category, boxData, setBoxData}) {
    return (
        <div className="bg-white p-4 w-full flex flex-col items-start gap-4">
            <p className="text-xl">{category.categoryName}</p>
            <p>{category.categoryDescription}</p>
            {category.cards.map((card) => {
                return (
                    <Card key={card.name} cardInfo={card} categoryName={category.categoryName} boxData={boxData} setBoxData={setBoxData}/>
                )
            })}
        </div>
    )
}