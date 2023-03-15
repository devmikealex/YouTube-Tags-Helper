import { useDispatch, useSelector } from 'react-redux'
import { addTags, setTags } from '../features/tagsSlice'
import store, { RootState } from '../store/store'

interface Props {
    inputRef: React.RefObject<HTMLTextAreaElement>
}

function ToolbarInput({ inputRef }: Props) {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center justify-center'>
            <button
                className='button rounded-l-lg'
                onClick={(e) => {
                    inputRef.current!.value = ''
                }}
            >
                Clear
            </button>
            <button
                className='button'
                onClick={(e) => {
                    const clip = inputRef.current!.value
                    if (clip) navigator.clipboard.writeText(clip)
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
                className='button rounded-r-lg'
                onClick={(e) => {
                    const tags = store.getState().tagList.tags

                    const a = tags.map((tag) => tag.text)
                    inputRef.current!.value = a.join(', ')

                    // const a = tags.reduce(
                    //     (accumulator: string[], currentValue) => {
                    //         accumulator.push(currentValue.text)
                    //         return accumulator
                    //     },
                    //     []
                    // )
                }}
            >
                Get
            </button>
        </div>
    )
}

export default ToolbarInput
