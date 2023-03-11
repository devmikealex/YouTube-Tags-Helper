interface ButProps {
    title: string
    clickHandle: React.MouseEventHandler
}

function Button(props: ButProps) {
    return (
        <button
            className='bg-indigo-300 rounded-xl w-full mt-1 py-1 px-3 hover:bg-slate-400'
            onClick={(e) => props.clickHandle(e)}
        >
            {props.title}
        </button>
    )
}

export default Button
