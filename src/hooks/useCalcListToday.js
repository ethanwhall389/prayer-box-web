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
        console.log(listToday);
        const sessionArray = listToday.map((cat) => {
            cat.cards.forEach((card) => {
                return {
                    cardTitle: card.cardTitle,
                    cardDescription: card.cardDescription,
                    createdAt: card.createdAt,
                    categoryName: cat.categoryName,
                    categoryDescription: cat.categoryDescription,
                }
            })
        })

        console.log(sessionArray);

        return sessionArray;
    }

    return {calcListToday, calcPrayerSession}
}