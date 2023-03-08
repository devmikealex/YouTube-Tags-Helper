import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTags } from '../features/tagsSlice'

function TagsInput(): JSX.Element {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div>
            <label>
                Enter your name:
                <input type='text' />
            </label>
            <textarea ref={inputRef} />
            <button
                onClick={(e) => {
                    dispatch(setTags(inputRef.current!.value))
                }}
            >
                Read
            </button>
        </div>
    )
}

export default TagsInput
