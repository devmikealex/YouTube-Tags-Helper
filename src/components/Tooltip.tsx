function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
    return (
        <div className='group'>
            {children}
            <div className='fixed opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-500 px-4 py-2 bottom-5 left-1/2 -translate-x-1/2 text-center text-sm z-50 border border-blue-500 bg-blue-200 text-indigo-900 rounded-lg shadow-lg'>
                {text}
            </div>
        </div>
    )
}

export default Tooltip
