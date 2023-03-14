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
import Toggle from './Toggle'

function Toolbar() {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='items-center justify-center lg:flex'>
            <div className='flex items-center justify-center mb-1 lg:mb-0'>
                <button
                    className='button rounded-l-lg'
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
                    className='button rounded-r-lg'
                    onClick={(e) => {
                        dispatch(removeDupTags())
                    }}
                >
                    RemDup
                </button>
            </div>
            <div className='flex items-center justify-center ml-4'>
                <button
                    className='button rounded-l-lg'
                    onClick={(e) => {
                        dispatch(filterInTags(inputRef.current!.value))
                    }}
                >
                    FilterIN
                </button>
                <button
                    className='button'
                    onClick={(e) => {
                        dispatch(filterOutTags(inputRef.current!.value))
                    }}
                >
                    FilterOUT
                </button>
                <input
                    // className='px-2 py-0 rounded-xl w-28'
                    className='input rounded-r-lg w-32'
                    type='text'
                    placeholder='filter'
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

export default Toolbar
