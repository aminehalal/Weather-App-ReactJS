import React, { useState } from 'react'
import Search from './Search'
import Weather from './Weather'
import CityContext from '../Context/CityContext'

export default function WeatherApp() {
    const [city , setCity] = useState('Rabat');
  return (
        <CityContext.Provider value={[city , setCity]}>
    <div className='flex flex-col justify-center font-kanit items-center h-screen bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900'>
        <div className='flex flex-col items-center drop-shadow-lg border-2 border-slate-200 border-opacity-75 rounded-lg h-96 w-96'>
            <div className='w-full'>
                <div className='py-6'>
                  <Search/>
                </div>
                <div className='p-3 flex flex-col'>
                  <Weather/>
                </div>
            </div>
        </div>
    </div>
        </CityContext.Provider>
  )
}
