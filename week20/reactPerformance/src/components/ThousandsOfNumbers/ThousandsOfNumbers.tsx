import { useMemo} from "react";

export default function ThousandsOfNumbers() {
	console.log("render thousand of numbers");

	const fillingArr = (arr: number[]) => {
		for (let i = 0; i < arr.length; i++) {
			arr[i] = i;
		}
	};

    
    const sorted = useMemo(() => {
        console.log("sorted")
        const thousandNumbers = Array(1000);
        fillingArr(thousandNumbers);
        return thousandNumbers.sort((a: number, b: number) => b - a)
    }, []
    )

	return (
		<div>
			<ul>
				{sorted.map((n, index) => (
					<li key={index}>{n}</li>
				))}
			</ul>
		</div>
	);
}
