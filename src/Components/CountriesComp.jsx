// import React, { useEffect, useState } from 'react'
import HeadComp from './HeadComp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {CreateContext} from './ContextComp'

export default function CountriesComp() {

   const { getSelectedData, setSelectedData, getInputData, setInputData, filteredCon,getDark} = useContext(CreateContext);
   

    const callSetDataMethod = (e) => {
        setInputData(e.target.value)
    }

    const callSelectedVal = (e) => {
        setSelectedData(e.target.value)
    }


    return (
        <div className={`${getDark ? 'bg-black text-white' : 'bg-white'} lg:w-screen lg:h-screen h-[100vh] lg:flex gap-2`}>
            <HeadComp />
            <div className='lg:border-gray-600 mt-4 lg:mt-0 lg:border-4 rounded-lg lg:h-full lg:w-[80%] lg:flex lg:flex-col lg:items-center  '>
                <div className='w-full h-[130px] flex flex-col justify-around items-center lg:w-[95%] lg:h-[80px] lg:flex lg:flex-row lg:items-center lg:justify-between'>
                    <div>
                        <input className={`${getDark ?'bg-white text-black':'bg-white text-black' } border-2 border-gray-500 h-11 w-52 rounded-sm lg:h-10 lg:w-52`}
                            type="text"
                            placeholder='Search country name here'
                            value={getInputData}
                            onChange={callSetDataMethod} />
                    </div>
                    <div>
                        <label htmlFor="" className='font-bold'>Filter by region : </label>
                        <select className={`${getDark ?'bg-white text-black':'bg-white text-black' } border-2 border-gray-500 rounded-sm h-11 w-36 lg:h-10 lg:w-40`}
                            name=""
                            id=""
                            value={getSelectedData}
                            onChange={callSelectedVal}>
                            <option value="All">All</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>

                </div>
                <div className='p-6  lg:p-0 lg:w-full h-[100vh]  lg:flex flex-wrap lg:justify-evenly lg:gap-10 overflow-y-scroll'>
                    {
                        filteredCon.map((allData) => {
                            return (
                                <Link to={`/CountryDetails/${allData.cca2}`}>
                                    <div className='mt-8 lg:mt-6 h-[500px] lg:p-0 lg:h-[410px] lg:w-72 rounded-lg shadow-neutral-600 shadow-lg'>
                                        <img className='h-[50%] w-[100%]  lg:h-[50%] lg:w-[100%] object-cover rounded-t-xl rounded-b-0' src={allData.flags.svg} alt="" />
                                        <div className={`${getDark ?'bg-white text-black':'bg-white text-black' } lg:mt-0 h-[50%] lg:h-[50%] p-6 lg:p-0 flex flex-col gap-6 items-center rounded-b-lg`}>
                                            <h1 className='font-bold text-xl'>{allData.name.common}</h1>
                                            <p>  Population : {allData.population}</p>
                                            <button className='p-2 border-gray-500 w-[90%] h-14 lg:h-11 border-2 rounded-xl '><label htmlFor="">Region : </label>{allData.continents}</button>
                                            <p>{allData.capital}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
