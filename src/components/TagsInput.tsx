import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTags } from '../features/tagsSlice'

function TagsInput(): JSX.Element {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div>
            <div className='m-2'>
                <p>Tag List:</p>
                <textarea
                    className='p-1 mt-1 w-full rounded-xl border-solid border-2 border-indigo-700'
                    placeholder='Paste tags'
                    ref={inputRef}
                />
                <button
                    className='bg-indigo-300 rounded-xl w-full mt-1 py-1 px-3 hover:bg-slate-400'
                    onClick={(e) => {
                        dispatch(setTags(inputRef.current!.value))
                    }}
                >
                    Read
                </button>
            </div>
        </div>
    )
}

export default TagsInput
