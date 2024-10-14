import React from 'react'
import { useContext } from 'react'
import { CreateContext } from './ContextComp'
export default function HeadComp() {
   
    const {getDark,setDark} = useContext(CreateContext)

    const callTheamEvent = () =>{
         setDark((old)=> !old)
    }
    return (
        <header>
            <div className={`${getDark ? 'bg-black text-white' : 'bg-white'} lg:border-gray-600  lg:border-4 h-[80px] lg:w-[100%] lg:h-full lg:flex lg:justify-start  rounded-lg`}>
                <div className='h-full flex justify-between items-center lg:h-44 lg:flex lg:flex-col lg:justify-around lg:items-center'>
                    <div>
                        <h1 className='text-xl font-bold lg:text-3xl lg:font-bold'>Where In The World</h1>
                    </div>
                    <div>
                        <button onClick={callTheamEvent} className='border-blue-400 bg-blue-400 text-white h-10 w-24 lg:h-10 lg:w-40 rounded-sm '>{getDark ? 'Dark' : 'Light'}</button>
                    </div>
                </div>
            </div>
        </header>

    )
}
