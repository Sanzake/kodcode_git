import { useState } from 'react';
import { useCurrentUserStore } from '../store/currentUsername';
import type { City } from '../types/City';

const BASE_URL = "http://127.0.0.1:8000/";

export function useAddToFavorite() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const username = useCurrentUserStore((s) => s.currentUser)

    const addToFavorites = async (city: City) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${BASE_URL}favorites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    city: {
                        id: city.id,
                        name: city.name,
                        country: city.country,
                        latitude: city.latitude,
                        longitude: city.longitude,
                    }
                }),
            });

            if (!response.ok) {
                throw new Error("Some Error!!!");
            }

            const result = await response.json();
            return result;
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    return { addToFavorites, loading, error };
}
