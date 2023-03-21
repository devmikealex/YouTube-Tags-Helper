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
import copyToClipboard from '../utils/copyToClipboard'
import createToast from '../utils/createToast'
import TagsCount from './TagsCount'
import Tooltip from './Tooltip'

function Toolbar() {
    const dispatch = useDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className='items-center justify-center lg:flex'>
            <div className='flex items-center justify-center mb-1 lg:mb-0'>
                <div className='button font-bold rounded-l-lg bg-red-100 hover:bg-red-100'>
                    <TagsCount />
                </div>
                <Tooltip text='Clear the tag field'>
                    <button
                        // className='button rounded-l-lg'
                        className='button'
                        onClick={(e) => {
                            dispatch(clearTags())
                        }}
                    >
                        Clear
                    </button>
                </Tooltip>
                <Tooltip text='Copy tags to the clipboard'>
                    <button
                        className='button'
                        onClick={(e) => {
                            const tags = store.getState().tagList.tags
                            if (tags.length) {
                                const a = tags.map((tag) => tag.text)
                                // const out = a.join('\r\n')
                                // navigator.clipboard.writeText(a.join('\r\n'))
                                copyToClipboard(a.join('\r\n'))
                                createToast(`Copy - ${a.join(' / ')}`, dispatch)
                            }
                        }}
                    >
                        Copy
                    </button>
                </Tooltip>
                <Tooltip text='Sort tags alphabetically'>
                    <button
                        className='button'
                        onClick={(e) => {
                            dispatch(sortTags())
                        }}
                    >
                        Sort
                    </button>
                </Tooltip>
                <Tooltip text='Sort tags by number of characters'>
                    <button
                        className='button'
                        onClick={(e) => {
                            dispatch(sortLenTags())
                        }}
                    >
                        SortLen
                    </button>
                </Tooltip>
                <Tooltip text='Remove duplicate tags'>
                    <button
                        className='button rounded-r-lg'
                        onClick={(e) => {
                            const oldState = store.getState()
                            const tags_old = oldState.tagList.tags.length
                            const CaseSensitive = oldState.settings.CaseSensitive
                            dispatch(removeDupTags(CaseSensitive))
                            const tags = store.getState().tagList.tags.length
                            createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
                        }}
                    >
                        RemDup
                    </button>
                </Tooltip>
            </div>
            <div className='flex items-center justify-center ml-4'>
                <Tooltip text='Save tags containing text'>
                    <button
                        className='button rounded-l-lg'
                        onClick={(e) => {
                            // const oldState = store.getState()
                            // const tags_old = oldState.tagList.tags.length
                            // const CaseSensitive = oldState.settings.CaseSensitive
                            // const data = {
                            //     filter: inputRef.current!.value,
                            //     CaseSensitive,
                            // }
                            // dispatch(filterInTags(data))
                            // const tags = store.getState().tagList.tags.length
                            // createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
                            filterFunc(inputRef.current!.value, dispatch, filterInTags)
                        }}
                    >
                        FilterIN
                    </button>
                </Tooltip>
                <Tooltip text='Delete tags containing text'>
                    <button
                        className='button'
                        onClick={(e) => {
                            // const oldState = store.getState()
                            // const tags_old = oldState.tagList.tags.length
                            // const CaseSensitive = oldState.settings.CaseSensitive
                            // const data = {
                            //     filter: inputRef.current!.value,
                            //     CaseSensitive,
                            // }
                            // dispatch(filterOutTags(data))
                            // const tags = store.getState().tagList.tags.length
                            // createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
                            filterFunc(inputRef.current!.value, dispatch, filterOutTags)
                        }}
                    >
                        FilterOUT
                    </button>
                </Tooltip>
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

function filterFunc(filter: string, dispatch: Function, func: Function) {
    const oldState = store.getState()
    const tags_old = oldState.tagList.tags.length
    const CaseSensitive = oldState.settings.CaseSensitive
    const data = {
        filter,
        CaseSensitive,
    }
    dispatch(func(data))
    const tags = store.getState().tagList.tags.length
    createToast(`Before: ${tags_old} / After: ${tags}`, dispatch)
}

export default Toolbar
