import { addToast, IToast, removeToast } from '../features/toastsSlice'
import getID from '../utils/getid'

const genGetID = getID()

export default function createToast(message: string, dispatch: Function) {
    // const id = Date.now()
    // message = message + id
    const id = genGetID.next().value
    message = message.slice(0, 100) + '...'
    const toast: IToast = { message, id }
    dispatch(addToast(toast))
    setTimeout(() => {
        dispatch(removeToast(id))
    }, 5000)
}
