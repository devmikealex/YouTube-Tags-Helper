import { useRef } from 'react'
import CloseIcon from './icons/CloseIcon'

function HelpModal() {
    const modalRef = useRef<HTMLDivElement>(null)

    function hide() {
        if (modalRef.current) modalRef.current.style.opacity = '0'
        setTimeout(() => {
            if (modalRef.current) modalRef.current.style.display = 'none'
        }, 300)
    }
    function show() {
        if (modalRef.current) modalRef.current.style.display = 'flex'
        setTimeout(() => {
            if (modalRef.current) modalRef.current.style.opacity = '1'
        }, 0)
    }

    return (
        <>
            <button
                className='text-indigo-600 hover:bg-indigo-200 py-1 px-2 rounded-lg mr-1 '
                onClick={show}
            >
                Help
            </button>
            <div
                ref={modalRef}
                style={{ opacity: 0, display: 'none' }}
                className='flex fixed z-50 inset-0 bg-indigo-300 bg-opacity-80 duration-300 transition-opacity items-center justify-center'
                onClick={hide}
            >
                <div
                    className='relative px-4 py-9 pb-4 max-w-xl bg-white rounded-lg shadow-lg'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <div className='overflow-y-auto' style={{ height: '70vh' }}>
                        <div
                            className='px-2'
                            // style={{ height: '60vh' }}
                            dangerouslySetInnerHTML={{ __html: html() }}
                        />
                    </div>
                    <button
                        type='button'
                        className='absolute right-2 top-1 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-indigo-100 inline-flex h-7 w-7'
                        onClick={hide}
                    >
                        <CloseIcon w='w-5' h='h-5' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default HelpModal

function html(): string {
    return `
<h1 class='text-2xl text-center text-red-700'>Quick instruction</h1>

<p>The user can enter an array of tags in the top field. It is allowed to
separate tags with a comma and a space or to place each tag on a new line.
Pressing the <b>Set / Add</b> buttons converts the tags to a working format
at the bottom of the interface - <b>Set</b> replaces, <b>Add</b> adds to the set.</p>
<p><img class="mx-auto" src="./docs/assets/set.jpg" alt="Set" /></p>

<p>You can sort tags alphabetically or by length, remove duplicates with or
without case, and filter by content.</p>
<br/>
<p>From the bottom of the interface set of tags is copied to the clipboard (<b>Copy</b> button) with the division into lines, one tag - one line.</p>
<br/>
<p>With the <b>Get</b> buttons, the top field gets a comma-separated set of tags.</p>
<p>Using the <b>Get#</b> buttons, the top field gets a set of tags in the form of hashtags.</p>
<p><img class="mx-auto" src="./docs/assets/hash.jpg" alt="hash" /></p>

<p>In the upper right corner there is an additional menu button. Here you can
save and restore the current state of the application, or clear the saved
data. The data is stored in the browser's <b>localStorage</b>.</p>
<p><img class="mx-auto" src="./docs/assets/menu.jpg" alt="Menu" /></p>

<p><b>Line By Line</b> - tags can be displayed line by line for readability:
one tag - one line</p>
<p><b>Case Sensitive</b> - case sensitive when searching for duplicates</p>
<p><b>Auto Close</b> - the menu closes automatically when the mouse leaves the
area</p>
<p><img class="mx-auto" src="./docs/assets/linebyline.jpg" alt="linebyline" /></p>
    `
}
