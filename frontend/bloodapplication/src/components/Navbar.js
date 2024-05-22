import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function Navbar() {
  const auth = useAuth()
  return (
    <nav className='main-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About us</NavLink>
        <NavLink to='/blood'>Blood Stocks</NavLink>
        {auth.user && <NavLink to='/addblood'>Add Blood</NavLink>}
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Sign up</NavLink>}
    </nav>
  )
}