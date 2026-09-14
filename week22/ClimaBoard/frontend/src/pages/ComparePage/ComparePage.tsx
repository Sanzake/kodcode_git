import CityCard from '../../components/CityCard/CityCard'
import SearchCity from '../../components/SearchCity/SearchCity'
import type { City } from '../../types/City'
import "./ComparePage.css"
import { useState } from 'react'

export default function ComparePage() {
    const [cityA, setCityA] = useState<City | null>(null)
    const [cityB, setCityB] = useState<City | null>(null)
    return (
        <div className='compare'>
            <div className='compareCard'>
                <SearchCity setCurrentCity={setCityA}/>
                <CityCard currentCity={cityA}/>
            </div>
            <div className='compareCard'>
                <SearchCity setCurrentCity={setCityB}/>
                <CityCard currentCity={cityB}/>
            </div>
        </div>
  )
}
