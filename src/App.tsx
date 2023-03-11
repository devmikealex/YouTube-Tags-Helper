import './App.css'
import TagsInput from './components/TagsInput'
import TagsList from './components/TagsList'
import Toolbar from './components/Toolbar'

function App() {
    return (
        <div className='m-2'>
            <h1 className='text-3xl font-bold text-center text-red-700'>
                YouTube Tags Helper
            </h1>
            <TagsInput />
            <Toolbar />
            <TagsList />
        </div>
    )
}

export default App
