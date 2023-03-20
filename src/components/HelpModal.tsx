import { useRef } from 'react'
import CloseIcon from './icons/CloseIcon'

function HelpModal() {
    const modalRef = useRef<HTMLDivElement>(null)

    function hide() {
        if (modalRef.current) modalRef.current.style.opacity = '0'
        setTimeout(() => {
            if (modalRef.current) modalRef.current.style.display = 'none'
        }, 300)
    }
    function show() {
        if (modalRef.current) modalRef.current.style.display = 'flex'
        setTimeout(() => {
            if (modalRef.current) modalRef.current.style.opacity = '1'
        }, 0)
    }

    return (
        <>
            <button
                className='text-indigo-600 hover:bg-indigo-200 py-1 px-2 rounded-lg mr-1 '
                onClick={show}
            >
                Help
            </button>
            <div
                ref={modalRef}
                className='flex fixed z-50 inset-0 bg-indigo-300 bg-opacity-80 opacity-100 duration-300 transition-opacity items-center justify-center'
                onClick={hide}
            >
                <div
                    className='relative px-6 py-8 max-w-xl bg-white rounded-lg shadow-lg'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <div dangerouslySetInnerHTML={{ __html: html() }}></div>
                    <button
                        type='button'
                        className='absolute right-1 top-1 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-indigo-100 inline-flex h-8 w-8'
                        onClick={hide}
                    >
                        <CloseIcon w='w-5' h='h-5' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default HelpModal

function html(): string {
    return `
    <p>Lorem <b>ipsum dolor sit amet, consectetur</b> adipisicing elit. Fugiat hic vero repellat voluptates itaque ipsa, quis quisquam quaerat veritatis labore dolorum! Odio deleniti officiis dicta hic ipsa eveniet libero dolore?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic vero repellat voluptates itaque ipsa, quis quisquam quaerat veritatis labore dolorum! Odio deleniti officiis dicta hic ipsa eveniet libero dolore?</p>
    <img src="./favicon.png" alt="logo" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat hic vero repellat voluptates itaque ipsa, quis quisquam quaerat veritatis labore dolorum! Odio deleniti officiis dicta hic ipsa eveniet libero dolore?</p>
    `
}
