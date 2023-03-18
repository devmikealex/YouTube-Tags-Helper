import { useSelector } from 'react-redux'

import { RootState } from '../store/store'
import Tag from './Tag'

function TagsList(): JSX.Element | null {
    const tags = useSelector((state: RootState) => state.tagList.tags)

    const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)
    const classLine = LineByLine ? 'flex flex-col' : 'flex flex-wrap'

    if (tags.length)
        return (
            <div className={classLine + ' mt-4 gap-2'}>
                {tags.map((tag) => {
                    return <Tag key={tag.id} {...tag} />
                })}
            </div>
        )
    else return null
}

export default TagsList
