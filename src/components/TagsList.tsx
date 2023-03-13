import { useDispatch, useSelector } from 'react-redux'
import { setLineByLine } from '../features/SettingsSlice'
import { RootState } from '../store/store'
import Tag from './Tag'

function TagsList(): JSX.Element {
    const dispatch = useDispatch()
    const tags = useSelector((state: RootState) => state.tagList.tags)
    return (
        <div className='mt-4'>
            <div className='mb-1'>
                <input
                    type='checkbox'
                    id='LineByLine'
                    onChange={(e) => {
                        dispatch(setLineByLine())
                    }}
                />
                <label htmlFor='LineByLine'> Line By Line</label>
            </div>
            {tags.map((tag) => {
                return <Tag key={tag.id} {...tag} />
            })}
        </div>
    )
}

export default TagsList
