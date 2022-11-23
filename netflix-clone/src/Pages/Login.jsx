import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from '../Context/Context';

const Login = () => {
  const {logIn}=AuthUser();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const nav=useNavigate()

  const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
       await logIn(email,password)
        nav("/")
      }catch(err){
          alert(err)
      }
  }

return (
  <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/b381e8d4-cb1a-4186-953d-d2d14c8fe145/EG-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='bg-img'/>
      <div className='bg-black/60 fixed top-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl font-bold'>Log In</h1>
                  <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                      <input onChange={e=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' 
                      type="email" placeholder='Email' autoComplete='email'/>
                      <input onChange={e=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' 
                       type="password" placeholder='Password'autoComplete='current-password'></input>
                      <button className='bg-red-600 py-3 my-6 rounded font-bold'>Log In</button>
                      <div className=' flex justify-between items-center text-sm text-gary-600'>
                          <p><input className='mr-2 ' type="checkbox"/> Remember Me</p>
                          <p>
                              Need Help ?
                          </p>
                      </div>
                      <p className='py-8'><span className='text-gray-600 px-4'>Not subscribed to Netflix?</span>
                      <Link to="/signup">Sign Up</Link></p>
                  </form>
              </div>
          </div>
      </div>
  </div>
)
}


export default Login