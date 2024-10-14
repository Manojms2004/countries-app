import React, {createContext,useEffect,useState } from 'react'

const CreateContext = createContext();

export default function ContextComp({children}) {

    const [getSelectedData, setSelectedData] = useState('All');
    const [getInputData, setInputData] = useState("")
    const [countries,setCountries] = useState([])
    const [getDark,setDark] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCountries(data)
            })
    },[])

    const filteredCon = countries.filter((coun) => {
        const getCon = coun.name.common.toLowerCase().includes(getInputData.toLowerCase());
        const selectCoun = getSelectedData === 'All' ? true : coun.region === getSelectedData;

        return getCon && selectCoun;
    })



  return (
    <CreateContext.Provider value={{ getSelectedData, setSelectedData, getInputData, setInputData, filteredCon,getDark,setDark}}>
        {children}
    </CreateContext.Provider>
  )
}

export {CreateContext}