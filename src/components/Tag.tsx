import { useDispatch, useSelector } from 'react-redux'
import { removeTag } from '../features/tagsSlice'
import { ITag } from '../features/tagsSlice'
import { RootState } from '../store/store'
import CloseIcon from './icons/CloseIcon'

interface TagProps extends ITag {}

function Tag(props: TagProps): JSX.Element {
    // console.log('R', props.id)

    const dispatch = useDispatch()
    // const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)
    // const classLine = LineByLine ? 'flex' : 'inline-flex'

    return (
        <div
            className={
                // classLine +
                'flex items-center px-2 py-1 text-lg font-mono text-black bg-red-100 rounded-lg'
            }
        >
            {/* <span className='-translate-y-0'>{props.text}</span> */}
            {props.text}
            <button
                className='flex p-0.5 ml-1 text-red-500 rounded-sm hover:bg-red-400 hover:text-white'
                onClick={() => dispatch(removeTag(props.id))}
            >
                {/* TODO надо ссылаться на один крестик */}
                <CloseIcon w='w-4' h='h-4' />
                {/* <svg
                    aria-hidden='true'
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        // fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        // clip-rule='evenodd'
                    ></path>
                </svg> */}
                {/* &times; */}
            </button>
        </div>
    )
}

export default Tag
