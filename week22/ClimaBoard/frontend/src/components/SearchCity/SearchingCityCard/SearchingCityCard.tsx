import type { City } from "../../../types/City"

export default function SearchingCityCard({city}: {city: City}) {
  return (
    <div>
        <p>{city.name} - {city.country}</p>
    </div>
  )
}
