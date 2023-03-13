import { useDispatch } from 'react-redux'
import { removeTag } from '../features/tagsSlice'
import { ITag } from '../features/tagsSlice'

interface TagProps extends ITag {}

function Tag(props: TagProps): JSX.Element {
    // console.log('R', props.id)

    const dispatch = useDispatch()

    return (
        <div className='inline-flex items-center px-2 py-1 mb-1 mr-2 text-black bg-red-100 rounded'>
            {props.text}
            <button
                className='flex p-0.5 ml-1 text-black rounded-sm hover:bg-red-200 hover:text-red-900'
                onClick={() => dispatch(removeTag(props.id))}
            >
                <svg
                    aria-hidden='true'
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                    ></path>
                </svg>
                {/* &times; */}
            </button>
        </div>
    )
}

export default Tag
