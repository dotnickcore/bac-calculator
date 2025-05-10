export type Gender = 'Female' | 'Male';

export interface IFormInput {
    bodyWeight: number,
    hoursSinceFirstDrink: number,
    numberOfStandardDrinks: number,
    gender: Gender 
}