import React, {useState} from 'react'

import ReactDOM from 'react-dom'
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
    function handleSubmit(e) {
        e.preventDefault()
        const {username, password} = e.target.elements

        onSubmit({
            username: username.value,
            password: password.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    )    
}


function App() {
    const [openModal, setOpenModal] = useState('none')
    
    function login(formData) {
        console.log("Login", formData)
    }

    function register(formData) {
        console.log("Register", formData)
    }
    return (
        <>
            <Logo />
            <h1>Bookshelf</h1>
            <button onClick={() => setOpenModal('login')}>Login</button>
            <button onClick={() => setOpenModal('registar')}>Registar</button>

            <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
                <button onClick={() => setOpenModal('none')}>X</button>
                <h3>Login Form</h3>
                <LoginForm onSubmit={login} buttonText="Login"/>
            </Dialog>

            <Dialog aria-label="Registar form" isOpen={openModal === 'registar'}>
                <button onClick={() => setOpenModal('none')}>X</button>
                <h3>Register Form</h3>
                <LoginForm onSubmit={register} buttonText="Register"/>

            </Dialog>
        </>
    )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
