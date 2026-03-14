import React, { useState } from 'react'
import '../style/form.scss'
import { Link ,useNavigate } from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const navigate = useNavigate()

    // ui layer -- hooks layer
 const {handleLogin,Loading} = useAuth()
 navigate("/")

 if(Loading){
    return(
        <h1>LOADING..</h1>
    )
 }
   
   async function  handleSubmit(e)  {
        e.preventDefault()

       await handleLogin(username,password) 
        .then(res=>{
            console.log(res);
        })

 // ======// it was added to auth.api.js because of api layerr this layer is reponsible for communicating with the backend
    

        // axios.post("http://localhost:3000/api/auth/login", {
        //     username,
        //     password,
        // }, { withCredentials: true })
        //     .then(res => {
        //         console.log(res.data)
        //     })
    }


    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter username' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter password' />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login