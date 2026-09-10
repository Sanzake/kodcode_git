import useFetch from '../../hooks/useFetch';
import { useCurrentCityStore } from '../../store/currentCityStore';
import type { Weather } from '../../types/weather';

export default function CityCard() {
    const currentCity = useCurrentCityStore((s) => s.currentCity)
    const BASE_URL = "http://127.0.0.1:8000/"
    const url = `${BASE_URL}city?latitude=${currentCity?.latitude}&longitude=${currentCity?.longitude}`
    const {data, error, loading} = useFetch<Weather>(url)

    
    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
    if (!data) return <>No data!!!</>
    
    const forecast = data.forecast
    const min_temperatures = forecast.min_temperatures
    const max_temperatures = forecast.max_temperatures

    return (
        <div>
            <div>
                {currentCity?.name} - {currentCity?.country}
            </div>
            <div>
                Current
                <p>{data.current_weather.temperature}</p>
            </div>
            <div>
                Forecast
                {forecast.dates.map((date, index) => (
                    <div key={date}>
                        <p>{date} -- {min_temperatures[index]}°C  - {max_temperatures[index]}°C</p>
                    </div>
                ))

                }
            </div>
        </div>
    )
}
