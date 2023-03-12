import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function TagsCount(): JSX.Element {
    const tags = useSelector((state: RootState) => state.tagList.tags)
    return <span className='mt-1'>({tags.length})</span>
}

export default TagsCount
