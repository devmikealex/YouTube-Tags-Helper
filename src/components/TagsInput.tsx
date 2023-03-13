import { useRef } from 'react'
import ToolbarInput from './ToolbarInput'

function TagsInput(): JSX.Element {
    const inputRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div className='m-2 p-4 border border-gray-300 bg-white rounded-lg shadow'>
            {/* <p>Tag List:</p> */}
            <ToolbarInput inputRef={inputRef} />
            <textarea
                className='mt-4 px-2 py-1 block w-full rounded-md border-2 text-gray-900 placeholder:text-gray-400'
                placeholder='Paste tags'
                defaultValue='After Effects, Element 3D, YouTube, JavaScript, TypeScript'
                ref={inputRef}
            />
        </div>
    )
}

export default TagsInput
