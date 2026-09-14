import { useState } from 'react'
import CityCard from '../../components/CityCard/CityCard'
import SearchCity from '../../components/SearchCity/SearchCity'
import type { City } from '../../types/City'

export default function CityPage() {
  const [currentCity, setCurrentCity] = useState<City | null>(null)
  
  return (
    <div>
      <SearchCity setCurrentCity={setCurrentCity}/>
      <CityCard currentCity={currentCity}/>
    </div>
  )
}
