import React from "react";
import './index.css'

const Table = ({ data, temp = "C" }) => {
    console.log(data)
    const { current = {}, today = {} } = data

    const generateRow = () => {

    }
    if(Object.keys(today)!=0){
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let day = weekday[d.getDay()];
            const { avg_c, avg_f, max_c, max_f, maxwind, min_c, min_f, moonrise, moonset, precip, sunrise, sunset, temp_c, temp_f, precip_in, cloud, humidity} = today
            return (
                <div>
                    <table className="mainTable">
                        <tr>
                            <td className="w20">
                                <div>
                                    Sunrise : {sunrise}
                                </div>
                                <div>
                                    Sunset : {sunset}
                                </div>
                            </td>
                            <td className="w20">
                                <div>
                                    Sunrise : {moonrise}
                                </div>
                                <div>
                                    Sunset : {moonset}
                                </div>
                            </td>
                            <td>
                            <div>
                                    Max
                                </div>
                                <div>
                                {temp == "C" ? <>{max_c} &#8451;</>: <>{max_f} &#8457;</>}
                                </div>
                            </td>
                            <td>
                            <div>
                                    Min
                                </div>
                                <div>
                                {temp == "C" ? <>{min_c} &#8451;</>: <>{min_f} &#8457;</>}
                                </div>
                            </td>
                            <td>
                            <div>
                                    Avg
                                </div>
                                <div>
                                {temp == "C" ? <>{avg_c} &#8451;</>: <>{avg_f} &#8457;</>}
                                </div>
                            </td>
                            <td>
                            <div>
                                   Precip
                                </div>
                                <div>
                                    {precip} in
                                </div>
                            </td>
                            <td>
                            <div>
                                   Max Wind
                                </div>
                                <div>
                                   {maxwind} Mph
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <table className="mainTable">
                        <tr>
                            <td>
        
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    00:00 AM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    03:00 AM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    06:00 AM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    09:00 AM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    12:00 PM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    03:00 PM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    06:00 PM
                                </div>
                            </td>
                            <td>
                                <div>
                                    {day}
                                </div>
                                <div>
                                    09:00 PM
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Icon</td>
                            <td><img src={today.condition["00:00"].icon}></img></td>
                            <td><img src={today.condition["03:00"].icon}></img></td>
                            <td><img src={today.condition["06:00"].icon}></img></td>
                            <td><img src={today.condition["09:00"].icon}></img></td>
                            <td><img src={today.condition["12:00"].icon}></img></td>
                            <td><img src={today.condition["15:00"].icon}></img></td>
                            <td><img src={today.condition["18:00"].icon}></img></td>
                            <td><img src={today.condition["21:00"].icon}></img></td>
                        </tr>
                        <tr>
                            <td>Temp</td>
                            <td>{temp == "C" ? <>{temp_c["00:00"]} &#8451;</>: <>{temp_f["00:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["03:00"]} &#8451;</>: <>{temp_f["03:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["06:00"]} &#8451;</>: <>{temp_f["06:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["09:00"]} &#8451;</>: <>{temp_f["09:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["12:00"]} &#8451;</>: <>{temp_f["12:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["15:00"]} &#8451;</>: <>{temp_f["15:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["18:00"]} &#8451;</>: <>{temp_f["18:00"]} &#8457;</>}</td>
                            <td>{temp == "C" ? <>{temp_c["21:00"]} &#8451;</>: <>{temp_f["21:00"]} &#8457;</>}</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                            <td>10.3 mph</td>
                        </tr>
                        <tr>
                            <td>Precip</td>
                            <td>{precip_in["00:00"]} in </td>
                            <td>{precip_in["03:00"]} in </td>
                            <td>{precip_in["06:00"]} in </td>
                            <td>{precip_in["09:00"]} in </td>
                            <td>{precip_in["12:00"]} in </td>
                            <td>{precip_in["15:00"]} in </td>
                            <td>{precip_in["18:00"]} in </td>
                            <td>{precip_in["21:00"]} in </td>
                        </tr>
                        <tr>
                            <td>Cloud</td>
                            <td>{cloud["00:00"]} %</td>
                            <td>{cloud["03:00"]} %</td>
                            <td>{cloud["06:00"]} %</td>
                            <td>{cloud["09:00"]} %</td>
                            <td>{cloud["12:00"]} %</td>
                            <td>{cloud["15:00"]} %</td>
                            <td>{cloud["18:00"]} %</td>
                            <td>{cloud["21:00"]} %</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{humidity["00:00"]} %</td>
                            <td>{humidity["03:00"]} %</td>
                            <td>{humidity["06:00"]} %</td>
                            <td>{humidity["09:00"]} %</td>
                            <td>{humidity["12:00"]} %</td>
                            <td>{humidity["15:00"]} %</td>
                            <td>{humidity["18:00"]} %</td>
                            <td>{humidity["21:00"]} %</td>
                        </tr>
                    </table>
                </div>
        )
    } else {
        return <></>
    }
}

export default React.memo(Table);