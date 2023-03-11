import { useDispatch, useSelector } from 'react-redux'
import { addTags, setTags } from '../features/tagsSlice'
import { RootState } from '../store/store'

interface Props {
    inputRef: React.RefObject<HTMLTextAreaElement>
}

function ToolbarInput({ inputRef }: Props) {
    const dispatch = useDispatch()
    const tags = useSelector((state: RootState) => state.tagList.tags)

    return (
        <div className='flex space-x-2'>
            <button
                className='button'
                onClick={(e) => {
                    inputRef.current!.value = ''
                }}
            >
                Clear
            </button>
            <button
                className='button'
                onClick={(e) => {
                    const a = inputRef.current!.value
                    if (a) navigator.clipboard.writeText(a)
                }}
            >
                Copy
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(setTags(inputRef.current!.value))
                }}
            >
                Set
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(addTags(inputRef.current!.value))
                }}
            >
                Add
            </button>
            <button
                className='button'
                onClick={(e) => {
                    const a = tags.map((tag) => tag.text)
                    inputRef.current!.value = a.join(', ')
                }}
            >
                Get
            </button>
        </div>
    )
}

export default ToolbarInput
