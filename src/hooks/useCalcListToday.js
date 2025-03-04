export const useCalcListToday = () => {

    const calcListToday = (boxData) => {
        
        if (boxData.length <= 0) {
            return [];
        }
        
        const listToday = boxData.categories.map((currentCat) => {
            if (currentCat.cards.length <= 0) {
                return currentCat;
            }
            const catName = currentCat.categoryName;
            const catDescription = currentCat.categoryDescription;
            const card = currentCat.cards[0]
            return {categoryName: catName, categoryDescription: catDescription, cards: [card]}
            //return {cardTitle: card.cardTitle, cardDescription: card.cardDescription, createdAt: card.createdAt, categoryName: catName, categoryDescription: catDescription}
        })
    
        return listToday

    }

    const calcPrayerSession = (listToday) => {

        const sessionArray = listToday.flatMap((cat) => {

            const cards = cat.cards.map((card) => {
                return {
                    cardTitle: card.cardTitle,
                    cardDescription: card.cardDescription,
                    createdAt: card.createdAt,
                    categoryName: cat.categoryName,
                    categoryDescription: cat.categoryDescription,
                }
            })
            return cards;

        })

        return sessionArray;
    }

    return {calcListToday, calcPrayerSession}
}