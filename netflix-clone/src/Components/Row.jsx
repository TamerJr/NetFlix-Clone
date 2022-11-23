import React , { useEffect , useState } from 'react'
import Movie from "./Movie"
import axios from "axios"
import{MdChevronLeft,MdChevronRight} from "react-icons/md"

const Row = ({fetchURL,title ,ROWID}) => {
    const [movies ,setMovies ]=useState([])

    useEffect(()=>{
        axios.get(fetchURL).then(res=>{
            setMovies(res.data.results)
        })
    },[fetchURL])

    const slideLeft=()=>{
        let slider=document.getElementById("slider" + ROWID)
        slider.scrollLeft=slider.scrollLeft - 500
    }
    const slideRight=()=>{
        let slider=document.getElementById("slider" + ROWID)
        slider.scrollLeft=slider.scrollLeft + 500
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
        <div className=' relative flex items-center group'>
            <div id={"slider" +ROWID} 
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies.map((item,id)=>(
                    <Movie item={item} key={id} />
                ))}
            </div>
            <MdChevronLeft  onClick={slideLeft} size={40} className='bg-white left-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' /> 
            <MdChevronRight onClick={slideRight}  size={40} className='bg-white right-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' />
        </div>
    </>
  )
}

export default Row