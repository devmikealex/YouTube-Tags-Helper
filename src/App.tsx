import './App.css'
import TagsCount from './components/TagsCount'
import TagsInput from './components/TagsInput'
import TagsList from './components/TagsList'
import Toolbar from './components/Toolbar'

function App() {
    return (
        <div className='m-2'>
            <h1 className='text-3xl font-bold text-center text-red-700'>
                YouTube Tags Helper <TagsCount />
            </h1>
            <TagsInput />
            <div className='rounded-xl bg-rose-200 p-2 border-rose-600 border-2 mt-1'>
                <Toolbar />
                <TagsList />
            </div>
        </div>
    )
}

export default App
