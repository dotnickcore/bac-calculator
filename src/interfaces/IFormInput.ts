export interface IFormInput {
    bodyWeight: number,
    weightMeasurement: 'lbs' | 'kg';
    hoursSinceFirstDrink: number,
    numberOfStandardDrinks: number,
    gender: 'Female' | 'Male';
}