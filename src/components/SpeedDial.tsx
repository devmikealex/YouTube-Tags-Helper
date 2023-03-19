import { useRef } from 'react'
import ThreePoints from './icons/ThreePoints'
import SaveLoad from './SaveLoad'

function SpeedDial() {
    const menuRef = useRef<HTMLDivElement>(null)

    return (
        <div
            data-dial-init
            className='fixed top-4 right-4 group'
            onMouseLeave={(e) => {
                if (menuRef.current) menuRef.current.classList.add('hidden')
            }}
        >
            <button
                className='flex items-center justify-center ml-auto text-white bg-indigo-600 rounded-full w-10 h-10 hover:bg-indigo-700 focus:outline-none'
                onClick={(e) => {
                    if (menuRef.current) menuRef.current.classList.toggle('hidden')
                }}
            >
                <ThreePoints w='w-6' h='h-6' />
            </button>
            <div
                id='speed-dial-menu-dropdown'
                ref={menuRef}
                className='flex flex-col justify-start hidden py-1 mb-4 space-y-2 bg-white border border-gray-400 rounded-lg shadow-lg'
            >
                <SaveLoad className='flex flex-col p-2' />
            </div>
        </div>
    )
}

export default SpeedDial
