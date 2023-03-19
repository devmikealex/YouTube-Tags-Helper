import { useDispatch } from 'react-redux'
import { removeTag } from '../features/tagsSlice'
import { ITag } from '../features/tagsSlice'
import CloseIcon from './icons/CloseIcon'

interface TagProps extends ITag {}

function Tag(props: TagProps): JSX.Element {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center px-2 py-0.5 pl-3 text-lg font-mono border border-rose-400 text-black bg-red-100 rounded-lg'>
            {props.text}
            <button
                className='flex p-0.5 ml-1 text-red-500 rounded hover:bg-red-500 hover:text-white'
                onClick={() => dispatch(removeTag(props.id))}
            >
                <CloseIcon w='w-4' h='h-4' />
            </button>
        </div>
    )
}

export default Tag
