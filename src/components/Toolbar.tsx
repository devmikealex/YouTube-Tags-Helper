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
import store from '../store/store'

function Toolbar() {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='flex space-x-2'>
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
                    const tags = store.getState().tagList.tags
                    if (tags.length) {
                        const a = tags.map((tag) => tag.text)
                        navigator.clipboard.writeText(a.join('\r\n'))
                    }
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
            <div className='rounded-xl bg-rose-300 p-1 flex space-x-1'>
                <button
                    className='button mt-0'
                    onClick={(e) => {
                        dispatch(filterInTags(inputRef.current!.value))
                    }}
                >
                    FilterIN
                </button>
                <button
                    className='button mt-0'
                    onClick={(e) => {
                        dispatch(filterOutTags(inputRef.current!.value))
                    }}
                >
                    FilterOUT
                </button>
                <input
                    className='px-2 py-0 rounded-xl w-28'
                    type='text'
                    placeholder='filter'
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

export default Toolbar
