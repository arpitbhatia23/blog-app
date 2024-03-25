import React from 'react'
import { Contaniner,Logo,LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus= useSelector((state)=>state.auth.status)
  const navigate =useNavigate()
  const navItmes=[  {
    name: 'Home',
    slug: "/",
    active: true
  }, 
  {
    name: "Login",
    slug: "/login",
    active: !authStatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},
{
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
},
{
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
},]
  return (
   <header className='py-3 shadow bg-gray-500'>
<Contaniner>
<nav className='flex'>
  <div className='mr-4'>
    <Link to='/'>
      <Logo width='70px'/>
<ul>
  {navItmes.map((item)=>
  item.active? (
    <li key={item.name}>
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'onClick={()=>navigate(item.slug)}>{item.name}</button>
    </li>
  ):null)}
  {authStatus&&(
    <li>
      <LogoutBtn/>
    </li>
  )}
</ul>
     
    </Link>
  </div>
</nav>
</Contaniner>
   </header>
  )
}

export default Header
