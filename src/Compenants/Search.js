import React, { useContext, useRef } from 'react'
import CityContext from '../Context/CityContext'

export default function Search() {
    const [city , setCity] = useContext(CityContext);
    const cityRef = useRef();

    const searchForWeather = () => {
        if(cityRef.current.value === ''){
            setCity('Rabat')
        }
        else {
            setCity(cityRef.current.value)
        }
    }


  return (
    <div className='flex justify-evenly border-opacity-60 h-full w-full'>
        <div>
            <input onChange={()=>searchForWeather()} type='text' ref={cityRef} className='h-10 sm:h-12 w-44 sm:w-80 text-white rounded-lg border-2 border-slate-200 duration-500 focus:text-black bg-transparent focus:bg-slate-100 font-kanit font-bold opacity-100  p-3' />
        </div>
        <div className='flex justify-center items-center'>
            <i onClick={()=>searchForWeather()} className='cursor-pointer text-white hover:font-bold duration-700 bx bx-search-alt text-2xl sm:text-3xl'></i>        
        </div>
    </div>
  )
}
