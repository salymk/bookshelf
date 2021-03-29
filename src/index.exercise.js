import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'

function App() {
    return (
        <>
            <Logo />
            <h1>Bookshelf</h1>
            <button onClick={() => alert('Login')}>Login</button>
            <button onClick={() => alert('Registar')}>Registar</button>
        </>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
