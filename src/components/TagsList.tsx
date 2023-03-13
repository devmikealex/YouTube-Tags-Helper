import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Tag from './Tag'

function TagsList(): JSX.Element {
    const tags = useSelector((state: RootState) => state.tagList.tags)
    return (
        <div className='mt-4'>
            {/* {tags.length} */}
            {tags.map((tag) => {
                return <Tag key={tag.id} {...tag} />
            })}
        </div>
    )
}

export default TagsList
