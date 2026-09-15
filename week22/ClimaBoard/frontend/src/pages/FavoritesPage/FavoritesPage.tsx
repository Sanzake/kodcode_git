import CityCard from '../../components/CityCard/CityCard';
import useFetch from '../../hooks/useFetch';
import { useCurrentUserStore } from '../../store/currentUsername';
import type { City } from '../../types/City';

export default function FavoritesPage() {
    const BASE_URL = "http://127.0.0.1:8000/";
    const username = useCurrentUserStore((s) => s.currentUser)

    const url = `${BASE_URL}favorites?username=${username}`
    const { data, error, loading } = useFetch<City[]>(url);

    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
    if (!data) return <>No data!!!</>

    console.log(data)
    return (
        <div>
            {data.map((city) => (
                <div key={city.id}>
                    <CityCard currentCity={city} />
                </div>
            )
            )}
        </div>
    )
}
