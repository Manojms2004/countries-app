import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import HeadComp from './HeadComp'
import { Link } from 'react-router-dom'
import LodingComp from './LodingComp'
// import { CreateContext } from './ContextComp'
import { useContext } from 'react'

export default function CounDetailComp() {
  const { oneCon } = useParams()
     
  //const {getDark} = useContext(CreateContext)

  const [getdeDark,setDeDark] = useState(false)

  const [getEachCounData, setEachCountryData] = useState({})
  const [lodingAn, setLodingAn] = useState(true);

  const callSetMode= () => {
    setDeDark((prev) => !prev)
  }

  let currencyKey;


  if (!lodingAn) {
    currencyKey = Object.keys(getEachCounData.currencies)[0];
    console.log(currencyKey);

  }

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${oneCon}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setLodingAn(false)
        setEachCountryData(data[0])
      })

  }, [oneCon])

  return (

    lodingAn ?
      <LodingComp /> :

      <div className={`${getdeDark ? 'bg-black text-white' : 'bg-red'} lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center`}>
        <Link to='/'>
          <div className='absolute top-4 left-8'>
            <button  className='text-white font-bold h-10 w-32 bg-blue-400'>Back To Home</button>
          </div>
        </Link>
        <div>
          <button onClick={callSetMode} className='border-blue-400 absolute top-4 right-6 bg-blue-500 text-white h-16 w-24 lg:h-10 lg:w-40 rounded-sm'>{getdeDark ?  'Light':'Dark'}</button>
        </div>
        <div className='lg:w-[80%] lg:h-[80%] lg:flex'>
          <div className='h-[400px] lg:w-[50%] lg:h-[100%]'>
            <img className='w-[100%] h-[60%] lg:h-[50%] rounded-xl' src={getEachCounData.flags.svg} alt="" />
            <div className='mt-4 h-[40%] lg:h-[50%] '>
              <h1 className='text-3xl font-bold'>Negibour Countries</h1>
            </div>
          </div>
          <div className='h-52 lg:w-[45%] lg:h-[50%] flex flex-col items-center'>
            <h1 className='font-bold text-3xl'>South Georgio</h1>
            <div className='mt-4 relative left-4 lg:h-[65%] w-[58%] flex flex-col justify-around'>
              <p className='text-[18px] text-gray-500'>{getEachCounData.region}</p>
              <p className='text-[18px] text-gray-500'>Popultion : {getEachCounData.population}</p>
              <p className='text-[18px] text-gray-500'>Capital : {getEachCounData.capital}</p>
              <p className='text-[18px] text-gray-500'>Native name</p>
            </div>
          </div>
          <div className='lg:w-[45%] lg:h-[50%] flex justify-center'>
            <div className='mt-12 h-[50%] w-[60%] flex flex-col justify-around'>
              <p className='text-[18px] text-gray-500'>Top level Domain : {getEachCounData.tld}</p>
              <p className='text-[18px] text-gray-500'>Languages : {getEachCounData.languages.eng}</p>
              <p className='text-[18px] text-gray-500'>Currencies :{getEachCounData.currencies[currencyKey].name} &#40; {getEachCounData.currencies[currencyKey].symbol} &#41;</p>
            </div>
          </div>
        </div>
      </div>

  )

}
