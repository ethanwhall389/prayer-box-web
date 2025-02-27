export const useCalcListToday = () => {

    const calcListToday = (boxData) => {
        
        if (boxData.length <= 0) {
            return [];
        }
        console.log('boxData: ', boxData);
        
        const listToday = boxData.categories.map((currentCat) => {
            if (currentCat.cards.length > 0) {
            const catName = currentCat.categoryName;
            const catDescription = currentCat.categoryDescription;
            const card = currentCat.cards[0]
            return {cardTitle: card.cardTitle, cardDescription: card.cardDescription, createdAt: card.createdAt, categoryName: catName, categoryDescription: catDescription}
            }
        })
    
        console.log('list today: ', listToday);
        return listToday

    }

    return {calcListToday}
}