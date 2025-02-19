import { ButtonPrimary } from "../../components/Button"
import { useAddCategory } from "../../hooks/useAddCategory"
import { useAddCard } from "../../hooks/useAddCard";

export default function ListEntire() {

    const {addCategory} = useAddCategory();
    const {addCard} = useAddCard();

    return (
        <>
        <h1>Hello from entire list!</h1>
        <ButtonPrimary text={'Add new category'} onClick={() => addCategory()}/>
        <ButtonPrimary text={'Add new card'} onClick={() => addCard()}/>
        </>
    )
}