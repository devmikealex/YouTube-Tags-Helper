import { useDispatch, useSelector } from 'react-redux'
import { setLineByLine } from '../features/SettingsSlice'
import { RootState } from '../store/store'
import Tag from './Tag'
import TagsCount from './TagsCount'
import Toggle from './Toggle'

function TagsList(): JSX.Element {
    const dispatch = useDispatch()
    const tags = useSelector((state: RootState) => state.tagList.tags)
    // const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setLineByLine())
    }
    const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)

    return (
        <div className='mt-4'>
            {/* <div className='flex'> */}
            {/* <input
                    type='checkbox'
                    id='LineByLine'
                    checked={LineByLine}
                    onChange={(e) => {
                        dispatch(setLineByLine())
                    }}
                    />
                <label htmlFor='LineByLine'> Line By Line</label> */}
            {/* <span className='mr-4 -translate-y-1'>
                    Tag counter: <TagsCount />
                </span> */}
            {/* <Toggle
                    title='Line By Line'
                    checked={LineByLine}
                    onChangeHandler={onChangeHandler}
                /> */}
            {/* </div> */}
            {tags.map((tag) => {
                return <Tag key={tag.id} {...tag} />
            })}
        </div>
    )
}

export default TagsList
