import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import { AuthUser } from '../Context/Context'
import { db } from '../firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'
const Movie = ({item }) => {
  const {user}=AuthUser()
  const [like,setLike]=useState(false)
  const [saved,setSaved]=useState(false)
  const movieId=doc(db,'user' ,`${user?.email}`)
  const saveShow=async()=>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId,{
        saveShows:arrayUnion({
          id:item.id,
          title:item.title,
          img:item.backdrop_path,
          like:!like
        })
      })
    }else{
      alert("Please log in to save movies")
    }
  }
  return (
    <div className='xw-[160px] sm:w-[200px] md:w-[280px inline-block cursor-pointer] relative p-2' key={Math.random()}>
    <img className='w-full h-full block'
     src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
     alt={item?.title} />
     <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  '>
        <p className='white-space-normal text-xs md-text-ms font-bold flex justify-center items-center h-full text-center'>
            {item?.title}</p>
            <p onClick={saveShow}>{like ? <FaHeart  className="absolute top-4 left-4 text-gray-300"/> :
            <FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}</p>
     </div>
  </div>
  )
}

export default Movie