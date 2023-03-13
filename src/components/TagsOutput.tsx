import TagsList from './TagsList'
import Toolbar from './Toolbar'

function TagsOutput() {
    return (
        <div className='m-2'>
            <div className='mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow'>
                <Toolbar />
                <TagsList />
            </div>
        </div>
    )
}

export default TagsOutput
