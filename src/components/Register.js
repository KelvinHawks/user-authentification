import React, { useState } from 'react'
import './register.css'

function Register() {
    const inputValue = {
        username: 'username',
        email: 'email',
        password: 'password'
    }
    const[inputValues, setInputValues] = useState(inputValue)

    const handleChange = (e)=>{
        setInputValues(()=>{
            const{name,value} = e.target
            return{
                ...inputValues,
                [name]: value
            }
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(JSON.stringify(inputValues, undefined, 1));
        setInputValues('')
    }

  return (
    <form>
        <label htmlFor="username">Name</label>
        <input type='text' name='username' onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type='email' name='email' onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
    </form>
  )
}

export default Register