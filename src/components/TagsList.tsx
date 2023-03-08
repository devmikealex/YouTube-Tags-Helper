import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Tag from './Tag'

function TagsList(): JSX.Element {
    const tags = useSelector((state: RootState) => state.tagList.tags)
    return (
        <div>
            {tags.map((tag) => {
                return <Tag text={tag} />
            })}
        </div>
    )
}

export default TagsList
