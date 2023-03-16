import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Toast from './Toast'

function ToastsList() {
    const toasts = useSelector((state: RootState) => state.toastsList.toasts)

    return (
        <div className='fixed right-6 bottom-6 flex flex-col-reverse gap-2 items-end w-96'>
            {toasts.map((toast) => {
                return <Toast key={toast.id} {...toast} />
            })}
        </div>
    )
}

export default ToastsList
