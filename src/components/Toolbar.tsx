import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLineByLine } from '../features/SettingsSlice'
import {
    clearTags,
    sortTags,
    sortLenTags,
    removeDupTags,
    filterInTags,
    filterOutTags,
} from '../features/tagsSlice'
import store, { RootState } from '../store/store'
import createToast from '../utils/createToast'
import TagsCount from './TagsCount'
import Toggle from './Toggle'

function Toolbar() {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className='items-center justify-center lg:flex'>
            <div className='flex items-center justify-center mb-1 lg:mb-0'>
                <div className='button font-bold rounded-l-lg bg-red-100 hover:bg-red-100'>
                    <TagsCount />
                </div>
                <button
                    // className='button rounded-l-lg'
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
                            // const out = a.join('\r\n')
                            navigator.clipboard.writeText(a.join('\r\n'))
                            createToast(`Copy - ${a.join(' / ')}`, dispatch)
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
                        const tags_old = store.getState().tagList.tags.length
                        dispatch(removeDupTags())
                        const tags = store.getState().tagList.tags.length
                        createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
                    }}
                >
                    RemDup
                </button>
            </div>
            <div className='flex items-center justify-center ml-4'>
                <button
                    className='button rounded-l-lg'
                    onClick={(e) => {
                        const tags_old = store.getState().tagList.tags.length
                        dispatch(filterInTags(inputRef.current!.value))
                        const tags = store.getState().tagList.tags.length
                        createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
                    }}
                >
                    FilterIN
                </button>
                <button
                    className='button'
                    onClick={(e) => {
                        const tags_old = store.getState().tagList.tags.length
                        dispatch(filterOutTags(inputRef.current!.value))
                        const tags = store.getState().tagList.tags.length
                        createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
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
