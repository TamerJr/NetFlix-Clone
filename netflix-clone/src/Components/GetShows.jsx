import React,{useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight  } from "react-icons/md"
import{AiOutlineClose} from "react-icons/ai"
import { AuthUser } from '../Context/Context'
import{db} from "../firebase"
import {updateDoc ,doc,onSnapshot} from "firebase/firestore";
const SavedShows = () => {


    const [movies,setMovies] =useState([])
    const {user}=AuthUser()
    const slideLeft=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft - 500
    }
    const slideRight=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft + 500
    }
    useEffect(()=>{
        onSnapshot(doc(db,"user",`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.saveShows)
        })
    },[user?.email])
    const movieRef=doc(db,'user',`${user?.email}`)
    const deleteShow=async(passedID)=>{
        try{
            const result =movies.filter((item)=>
                item.id!==passedID) 
                await updateDoc(movieRef,{
                    saveShows:result,
                })
            
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4 '>My Shows</h2>
        <div className=' relative flex items-center group'>
           
            <div id={"slider" } 
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies?.map((item)=> 
            (<div className='w-[180px] sm:w-[200px] md:w-[280px] inline-block cursor-pointer relative p-2' key={Math.random()}>
                <img className='w-full h-full block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`} 
                alt={item?.title} /> 
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white  '>
                    <p className='white-space-normal text-xs md-text-ms font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}</p>
                    <p onClick={()=>deleteShow(item.id)}
                     className=' absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                </div>   
            </div> ) )  }
            
            </div>
             <MdChevronLeft  
                onClick={slideLeft} 
                size={40} 
                className='bg-white left-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' /> 

            <MdChevronRight 
                onClick={slideRight}  
                size={40} 
                className='bg-white right-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' />
        </div>
    </>
  )
}

export default SavedShows