import './App.css';

import Top from './components/Top';
import Row from './components/Rows'

import React, { useState } from 'react'

function App() {
  const [city, updateCity] = useState('')
  const [data, updateData] = useState({})
  const [temp, updateTemp] = useState('C')
  const [error, showError] = useState(false)

  console.log(error)

  const getCityData = async () => {
    try{
      showError(false)
      const data = await fetch(`http://127.0.0.1:5000/forecast?city=${city}`)
      const responseBody = await data.json()
      if (typeof (responseBody) === "object" && responseBody.hasOwnProperty('current') && responseBody.hasOwnProperty('today')) {
        updateData(responseBody)
      } else {
        throw error('')
      }
    } catch {
      console.log("here")
      showError(true)
    }
  }

  return (
    <div className='body'>
      <div className='choice'>
      <input type="radio" id="cels" name="unit" value="C" onClick={()=>{updateTemp('C')}} defaultChecked/>
      <label for="child">&#8451;</label><br></br>
      <input type="radio" id="fahr" name="unit" value="F" onClick={()=>{updateTemp('F')}}  />
      <label for="child">&#8457;</label><br></br>
      </div>
      <>
        <form onSubmit={(e) => { e.preventDefault(); getCityData() }}>
          <input type="text" value={city} onChange={(e) => {
            updateCity(e.target.value)
          }} placeholder='Start entering city name, US zip code, canada Postal code, Zip code ...'
          />
        </form>
      </>
      {!error && <><h4>{city} City Weather Forecast</h4>
      <Top data={data} temp = {temp}  />
      <h4>Today's weather in {city} City</h4>
      <Row data={data} temp = {temp} /></>}
      {error && <div className='error'>Oops, No Data found. Please enter another city</div>}

    </div>

  );
}

export default App;
// alternative background: linear-gradient(to top, #363795, #005C97);
