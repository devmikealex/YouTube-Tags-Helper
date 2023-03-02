import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import { testAction } from './store/actions'

function App() {
    const test: String = useSelector((state) => state.reducer1.test)
    console.log('🚀 test:', test)
    const dispatch = useDispatch()

    function click(e) {
        console.log('click')
        dispatch(testAction())
    }

    return (
        <div className='App'>
            <h2>{test}</h2>
            <button onClick={click}>test</button>
        </div>
    )
}

export default App
