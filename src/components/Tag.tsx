import { useDispatch } from 'react-redux'
import { removeTag } from '../features/tagsSlice'
import { ITag } from '../features/tagsSlice'

interface TagProps extends ITag {}

function Tag(props: TagProps): JSX.Element {
    // console.log('R', props.id)

    const dispatch = useDispatch()

    return (
        <div className='bg-red-600 rounded-xl inline-block m-1 py-1 px-3 text-white'>
            {props.text} - {props.id}
            <span
                className='ml-1 cursor-pointer'
                onClick={() => dispatch(removeTag(props.id))}
            >
                &times;
            </span>
        </div>
    )
}

export default Tag
