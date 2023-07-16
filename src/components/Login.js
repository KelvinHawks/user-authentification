import React from 'react'

function Login() {
  return (
    <div>
        <form>
        <label for="email">Email</label>
        <input type='text' name='email'/>
        <label for="password">Password</label>
        <input type='text' name='password'/>
    </form>
    </div>
  )
}

export default Login