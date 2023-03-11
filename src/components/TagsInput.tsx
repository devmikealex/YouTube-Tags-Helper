import { useRef } from 'react'
import ToolbarInput from './ToolbarInput'

function TagsInput(): JSX.Element {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div>
            <p>Tag List:</p>
            <ToolbarInput inputRef={inputRef} />
            <textarea
                className='p-1 mt-1 w-full rounded-xl border-solid border-2 border-indigo-700'
                placeholder='Paste tags'
                defaultValue='After Effects, Element 3D, YouTube, JavaScript, TypeScript'
                ref={inputRef}
            />
        </div>
    )
}

export default TagsInput
