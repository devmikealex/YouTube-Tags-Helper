import { useRef } from 'react'
import ToolbarInput from './ToolbarInput'

function TagsInput(): JSX.Element {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div className='card'>
            {/* <p>Tag List:</p> */}
            <ToolbarInput inputRef={inputRef} />
            <textarea
                id='tags-input'
                className='h-32 mt-4 px-2 py-1 block lg:text-lg font-mono w-full rounded-md border border-gray-500 text-gray-900 placeholder:text-gray-400'
                placeholder='Paste tags'
                defaultValue='JavaScript, HTML, Javascript за час, css анимация, SOLID принципы, собеседование junior, верстка лендинга, react js сайт с нуля, html полный курс, интернет магазин на PHP'
                ref={inputRef}
            />
        </div>
    )
}

export default TagsInput
