import './App.css'
import TagsCount from './components/TagsCount'
import TagsInput from './components/TagsInput'
import TagsOutput from './components/TagsOutput'

function App() {
    return (
        <div className='m-2'>
            <h1 className='text-2xl font-bold text-center text-red-700'>
                YouTube Tags Helper <TagsCount />
            </h1>
            <TagsInput />
            <TagsOutput />
        </div>
    )
}

export default App
