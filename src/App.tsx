import './App.css'
import TagsInput from './components/TagsInput'
import TagsList from './components/TagsList'

function App() {
    return (
        <div className='App'>
            <h1 className='text-3xl font-bold text-center'>YouTube Tags Helper</h1>
            <TagsInput />
            <TagsList />
        </div>
    )
}

export default App
