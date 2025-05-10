// import { useState } from "react";

import type { IFormInput } from "../../interfaces/IFormInput"

const useBACCalculator = ({ bodyWeight, hoursSinceFirstDrink, numberOfStandardDrinks, gender }: IFormInput) => {
    // const [bac, setBAC] = useState<number | null>(null);
    // const [soberTime, setSoberTime] = useState<number | null>(null);

    console.log("Body Weight: ", bodyWeight)
    console.log("Hours Since First Drink: ", hoursSinceFirstDrink)
    console.log("Number of Standard Drinks: ", numberOfStandardDrinks)
    console.log("Gender: ", gender)
}

export default useBACCalculator
