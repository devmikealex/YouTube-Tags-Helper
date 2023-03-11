import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    clearTags,
    sortTags,
    sortLenTags,
    removeDupTags,
    filterInTags,
    filterOutTags,
} from '../features/tagsSlice'

function Toolbar() {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='flex space-x-2 mt-1'>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(clearTags())
                }}
            >
                Clear
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(copyTags())
                    // const clip = useSelector
                    // if (clip) navigator.clipboard.writeText(clip)
                }}
            >
                Copy
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(sortTags())
                }}
            >
                Sort
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(sortLenTags())
                }}
            >
                SortLen
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(removeDupTags())
                }}
            >
                RemDup
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(filterInTags(inputRef.current!.value))
                }}
            >
                Filter IN
            </button>
            <button
                className='button'
                onClick={(e) => {
                    dispatch(filterOutTags(inputRef.current!.value))
                }}
            >
                Filter OUT
            </button>
            <input
                className='px-2 py-0 mt-1 w-full rounded-xl'
                type='text'
                placeholder='filter'
                ref={inputRef}
            />
        </div>
    )
}

export default Toolbar
