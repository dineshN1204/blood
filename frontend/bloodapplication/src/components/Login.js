import React, { useState } from 'react'
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div>
        <form>
        <label>Email</label><br/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}