import React from 'react'
import './index.css'
const DAYS = [ ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Tuesday", "Wednesday", "Thursday", "Friday","Saturday"],  [ "Wednesday", "Thursday", "Friday","Saturday","Sunday"],  ["Thursday", "Friday","Saturday","Sunday", "Monday"],  ["Friday","Saturday","Sunday", "Monday", "Tuesday"], ["Saturday","Sunday", "Monday", "Tuesday", "Wednesday"],  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]]
const TopComp = ({ data, temp = "C" }) => {
    const { current = {}, today = {} } = data

    const generateData = (index) => {
        return DAYS[index].map((elem, index) => {
            const val = data[elem]
            const { temp_c, temp_f, condition} = val
            const { icon } = condition
            return(
            <div className='flxT' key = {index}>
                    <div className='day'>
                        Sat
                    </div>
                    <img src={icon}>
                    </img>
                    <div className = "temp">
                    {temp == "C" ? <>{temp_c} &#8451;</>: <>{temp_f} &#8457;</>} 
                    </div>
                </div>)
        })
    }

    if(Object.keys(current)!=0){
        const {  condition, precip, pressure, temp_c, temp_f, wind_mph } = current
        const { icon, text } = condition
        const currDate= new Date()
        const currDay = currDate.getDay()
        return <div className='cardAlign'>
        <div className='w100'>
            <div className="flex">
                <div>
                    <img src={icon}></img>
                    <span className='fs12'>
                        {text}
                    </span>
                </div>
                <div>
                    <div className='fs12'>Wind : {wind_mph}mph</div>
                    <div className='fs12'>Precip : {precip} in</div>
                    <div className='fs12'>Pressure : {pressure} </div>
                    <div className='fs14'>{temp == "C" ? <>{temp_c} &#8451;</>: <>{temp_f} &#8457;</>} </div>
                </div>
            </div>
            <div className='flxW'>
                {generateData(currDay)}
            </div>
        </div>
    </div> 
    } else {
        return <></>
    }
    
}

export default React.memo(TopComp);