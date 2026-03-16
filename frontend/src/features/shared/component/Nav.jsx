import React from 'react'
import "../nav.scss"
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
    
    
  return (
    <nav className='nav-bar' >
        <p className='insta'>Instagram</p>
        <button
         onClick={()=>{navigate("/create-post")}}
         className='newPost' >new post</button>
    </nav>
  )
}

export default Nav