import { useState } from 'react';
import Button from '../Button/Button';
import HeavyCard from '../HeavyCard/HeavyCard'
import ThousandsOfNumbers from '../ThousandsOfNumbers/ThousandsOfNumbers';

export default function Main() {
    console.log("render main")

    const [count, setCount] = useState(0);
    const handleCount = () => setCount(count + 1)

    return (
        <div>
            <HeavyCard />
            <Button count={count} handleCount={handleCount} />
            <ThousandsOfNumbers />
        </div>
    )
}
