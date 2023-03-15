import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function TagsCount(): JSX.Element {
    const tags = useSelector((state: RootState) => state.tagList.tags)
    return <span className=''>{tags.length}</span>
    // return (
    //     <div className='flex items-center justify-center font-mono w-8 h-8 rounded-lg bg-red-100 text-gray-700'>
    //         {tags.length}
    //     </div>
    // )
}

export default TagsCount
