import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import {Input,Button,Logo} from '../components/index'
import {useNavigate ,Link } from "react-router-dom"
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'

function Signup() {
    const navigate = useNavigate()
    const [error ,SetError ]=useState('')
    const  dispatch = useDispatch()
    const {register,handleSubmit}=useForm()


    const create = async(data)=>{
        SetError('')
    try{

  const userData =await authService.createAccount(data)
  if (userData){
    const userData=await authService.getCurrentUser()
    if (userData) dispatch (login(userData))
    navigate('/')
  }
    }
catch(error){
    SetError(error.message)
}
    }

  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
    <div className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px]'>
<Logo width='100%'/>
        </span>
    </div>
    <h2 className='text-center text-2xl font-bold leading-tight'>sign up  to create account</h2>
 <p className='mt-2 text-center text-base text-black/60'>
   Already have an account?&nbsp;
  <Link to='/signup'
  className='font-medium text-primary transition-all duration-200 hover:underline'>
    sign In 
  </Link>
</p>
{error && <p className='text-red-600 mt-8 text-center' >{error}</p>}
<form onSubmit={handleSubmit(create)} className='mt-8'>
  <div className='space-y-5'>
  <Input lable='full name :'
  placeholder="enter your full name "
    {...register('namme',{required:true,}
)}
/>
<Input lable='email:'
placeholder="enter your email "
 type='email' {...register('email',{required:true,
validate:{matchPatern:(value)=>/^\w+([.-]?\w=)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value ) || 'email address must be a valid address',
}
})}
    />
    <Input lable='password:'
    type='password '
    placeholder='enter your password '
    {...register('password' ,
    {
      required:true
    })}/>
    <Button type='submit' className='w-full'>create account </Button>
  </div>

 </form>
        </div>
      
    </div>
  )
}

export default Signup
