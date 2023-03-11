function Toolbar() {
    return (
        <div className='flex space-x-2 mt-1'>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(clearTags())
                }}
            >
                Clear
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(sortTags())
                }}
            >
                Sort
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(sortLenTags())
                }}
            >
                SortLen
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(removeDupTags())
                }}
            >
                RemDup
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(filterInTags(?????????))
                }}
            >
                Filter IN
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(filterOutTags(?????????))
                }}
            >
                Filter OUT
            </button>
            <button
                className='button'
                onClick={(e) => {
                    // dispatch(copyTags())
                }}
            >
                Copy
            </button>
        </div>
    )
}

export default Toolbar
