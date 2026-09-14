import { useState } from 'react'
import CityCard from '../../components/CityCard/CityCard'
import SearchCity from '../../components/SearchCity/SearchCity'
import type { City } from '../../types/City'
import "./CityPage.css"

export default function CityPage() {
  const [currentCity, setCurrentCity] = useState<City | null>(null)
  
  return (
    <div className='cityPage'>
      <SearchCity setCurrentCity={setCurrentCity}/>
      <CityCard currentCity={currentCity}/>
    </div>
  )
}
