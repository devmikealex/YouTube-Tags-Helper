import { useDispatch, useSelector } from 'react-redux'
import { addTags, setTags } from '../features/tagsSlice'
import store from '../store/store'
import createToast from '../utils/createToast'
import Tooltip from './Tooltip'

interface Props {
    inputRef: React.RefObject<HTMLTextAreaElement>
}

function ToolbarInput({ inputRef }: Props) {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center justify-center'>
            <Tooltip text='Clear input field'>
                <button
                    className='button rounded-l-lg'
                    onClick={(e) => {
                        inputRef.current!.value = ''
                    }}
                >
                    Clear
                </button>
            </Tooltip>
            <Tooltip text='Copy to the clipboard'>
                <button
                    className='button'
                    onClick={(e) => {
                        const clip = inputRef.current!.value
                        if (clip) {
                            navigator.clipboard.writeText(clip)
                            createToast(`Copy - ${clip}`, dispatch)
                        }
                    }}
                >
                    Copy
                </button>
            </Tooltip>
            <Tooltip text='Convert to tags'>
                <button
                    className='button'
                    onClick={(e) => {
                        dispatch(setTags(inputRef.current!.value))
                    }}
                >
                    Set
                </button>
            </Tooltip>
            <Tooltip text='Add to tags'>
                <button
                    className='button'
                    onClick={(e) => {
                        dispatch(addTags(inputRef.current!.value))
                    }}
                >
                    Add
                </button>
            </Tooltip>
            <Tooltip text='Convert tags to a string'>
                <button
                    className='button'
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
            </Tooltip>
            <Tooltip text='Convert tags to hashtag string like #HashtagTips'>
                <button
                    className='button rounded-r-lg'
                    onClick={(e) => {
                        const tags = store.getState().tagList.tags

                        const capitalize = (str: string) =>
                            `${str.charAt(0).toUpperCase()}${str.slice(1)}`
                        const capWords = (str: string) => {
                            let words = str.split(' ')
                            words = words.map((word) => capitalize(word))
                            return words.join('')
                        }

                        const a = tags.map((tag) => '#' + capWords(tag.text))
                        inputRef.current!.value = a.join(' ')
                    }}
                >
                    Get#
                </button>
            </Tooltip>
        </div>
    )
}

export default ToolbarInput
