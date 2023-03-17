import { useState } from 'react'

function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div
            className=''
            onMouseEnter={() => {
                setIsVisible(true)
            }}
            onMouseLeave={() => {
                setIsVisible(false)
            }}
        >
            {children}
            {isVisible && (
                <div className='fixed px-4 py-2 bottom-5 left-1/2 -translate-x-1/2 text-center text-sm z-50 border border-blue-500 bg-blue-200 text-indigo-900 rounded-lg shadow-lg'>
                    {text}
                </div>
            )}
        </div>
    )
}

export default Tooltip
