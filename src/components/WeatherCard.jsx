import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

    const [isCel, setIsCel] = useState(true)
    const [putin, setPutin] = useState('Cambiar a °F')

    const handleTemp = () => {
        setIsCel(!isCel);

        setPutin(isCel ? 'Cambiar a °C' : 'Cambiar a °F')
    }

    const getTemperatura = () => {
        if (isCel) {
            return `${temp?.cel} °C`;
        } else {
            return `${temp?.fah} °F`;
        }
    }

    return (
        <div className='cardweather'>
            <h1>Weather app</h1>
            <h2>{weather?.name}, {weather?.sys.country}</h2>

            <div className="nubeYTexto">
                <div className="nube">
                <figure>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weater imag" />
                </figure>
                </div>

                <div className="text">
                    <h3>{`"${weather?.weather[0].description}"`}</h3>
                    <ul>
                        <li><span>Wind speed: </span>{weather?.wind.speed} m/s</li>
                        <li><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                        <li><span>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                    </ul>

                </div>

            </div>

            <h3>
                {getTemperatura()}
            </h3>



            {/* {isCel ?

            <h3>{temp?.cel} °C</h3> 
            :
            <h3>{temp?.fah}</h3>} °F */}

            <button onClick={handleTemp}>
                {putin}
            </button>
        </div>
    )
}

export default WeatherCard