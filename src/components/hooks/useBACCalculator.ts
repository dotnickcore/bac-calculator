import type { IFormInput } from "../../interfaces/IFormInput";

// import { useState } from "react";
export const useBACCalculator = () => {
    const calculateResults = (formData: IFormInput) => {
    // Example calculations (replace with your actual formulas)
    const { bodyWeight, weightMeasurement, numberOfStandardDrinks, hoursSinceFirstDrink, gender } = formData;
    
    // Convert weight to kg if needed
    const weightKg = weightMeasurement === 'lbs' ? bodyWeight * 0.453592 : bodyWeight;
    
    // Gender constant (example for BAC calculation)
    const genderConstant = gender === 'Male' ? 0.68 : 0.55;
    
    // Example BAC (Blood Alcohol Content) calculation
    const bac = (numberOfStandardDrinks * 0.06 * 100 * 1.055) / (weightKg * genderConstant) - 
                (0.015 * hoursSinceFirstDrink);
    
    // Example sober time calculation
    const soberTime = Math.max(0, bac / 0.015);
    
    return {
      bloodAlcoholContent: Math.max(0, bac), // Ensure not negative
      hoursUntilSober: soberTime
    };
  };

  return { calculateResults };
}

export default useBACCalculator
