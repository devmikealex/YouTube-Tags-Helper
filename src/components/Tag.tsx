import { useDispatch } from 'react-redux'
import { removeTag } from '../features/tagsSlice'

interface TagProps {
    text: string
}

function Tag(props: TagProps): JSX.Element {
    const dispatch = useDispatch()

    return (
        <div className='bg-red-600 rounded-xl inline-block m-1 py-1 px-3 text-white'>
            {props.text}
            <span
                className='ml-1 cursor-pointer'
                onClick={() => dispatch(removeTag('111'))}
            >
                &times;
            </span>
        </div>
    )
}

export default Tag
