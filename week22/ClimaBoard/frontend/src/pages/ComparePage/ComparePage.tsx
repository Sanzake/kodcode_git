import SearchCity from '../../components/SearchCity/SearchCity'
import CityCard from '../../components/CityCard/CityCard'
import "./ComparePage.css"

export default function ComparePage() {
    return (
        <div className='compare'>
            <div className='compareCard'>
                <SearchCity />
                <CityCard />
            </div>
            <div className='compareCard'>
                <SearchCity />
                <CityCard />
            </div>
        </div>
  )
}
