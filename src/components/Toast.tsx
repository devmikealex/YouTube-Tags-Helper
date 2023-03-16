import { useState } from 'react'
import CloseIcon from './icons/CloseIcon'

interface Props {
    message: string
}

let timer: number

function Toast(props: Props) {
    const [open, setOpen] = useState(true)

    function openToast() {
        setOpen(true)
        timer = setTimeout(() => {
            setOpen(false)
        }, 1000)
    }

    if (open)
        return (
            <div className='fixed flex items-center w-full max-w-sm p-4 text-gray-50 bg-indigo-600 rounded-lg shadow-lg right-6 bottom-6 dark:text-gray-400 dark:bg-gray-800'>
                <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 dark:bg-blue-800 dark:text-blue-200'>
                    <img src='./public/favicon.png' alt='logo' />
                </div>
                <div className='ml-3 font-normal'>{props.message}</div>
                <button
                    type='button'
                    className='ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
                    onClick={(e) => {
                        setOpen(false)
                        clearTimeout(timer)
                    }}
                >
                    <CloseIcon w='w-5' h='h-5' />
                </button>
            </div>
        )
    else return null
}

export default Toast
