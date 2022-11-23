import React from 'react'
import SavedShows from '../Components/GetShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/b381e8d4-cb1a-4186-953d-d2d14c8fe145/EG-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='bg-img'/>
        <div className='bg-black/60 fixed top-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 ,d:p-8'> 
            <h1 className='text-3xl md:text-5xl font-bold'>Your List</h1>
          </div>
        </div> 
      </div>
      <SavedShows/>
    </>
  )
}

export default Account