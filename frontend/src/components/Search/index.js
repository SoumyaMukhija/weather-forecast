import React, { useState }  from 'react';
import './index.css'

const Search = () => {
    const [city, updateCity] = useState('')

    const getCityData = async() => {
       const data  = await fetch('http://127.0.0.1:5000/forecast/Paris')
       const responseBody = await data.json()
       console.log(responseBody)
    }

    return (
       <></>
    )
}

export default Search