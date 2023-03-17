import { useDispatch } from 'react-redux'
import { IToast, removeToast } from '../features/toastsSlice'
import CloseIcon from './icons/CloseIcon'

function Toast(props: IToast) {
    const dispatch = useDispatch()

    return (
        <div className='animation-in max-w-max flex items-center w-full p-4 text-gray-50 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700'>
            <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 dark:bg-blue-800 dark:text-blue-200'>
                <img src='./favicon.png' alt='logo' />
            </div>
            <div className='ml-3 font-normal'>{props.message}</div>
            <button
                type='button'
                className='-mx-1.5 -my-1.5 ml-2 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                onClick={(e) => {
                    dispatch(removeToast(props.id))
                }}
            >
                <CloseIcon w='w-5' h='h-5' />
            </button>
        </div>
    )
}

export default Toast
