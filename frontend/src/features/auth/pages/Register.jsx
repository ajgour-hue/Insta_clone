import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'


const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // it is for navigateto main page of /
    const navigate = useNavigate()

    // ui layer -- hooks layer
    const { handleRegister  ,Loading} = useAuth()


    // ======// it was added to auth.api.js because of api layerr this layer is reponsible for communicating with the backend

   async function handleSubmit(e) {
        e.preventDefault()
      await  handleRegister(username, email, password)
        navigate("/")
        if (Loading) {
            return (
                <h1>LOADING..</h1>
            )
        }

        // axios.post("http://localhost:3000/api/auth/register",{
        //     username,
        //     email,
        //     password,
        // },{
        //     withCredentials:true
        // })
        // .then(res => {
        //     console.log(res.data)
        // })
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter username' />
                    <input
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="text"
                        name='email'
                        placeholder='Enter email' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter password' />
                    <button>Register</button>
                </form>

                <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default Register