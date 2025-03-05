import {format} from 'date-fns'

export const useFormatDate = () => {

    const formatDate = (date) => {
        return format(date, "MMMM do, yyyy");
    }

    return {formatDate}
}