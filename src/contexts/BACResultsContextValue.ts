import type { IFormInput } from "../interfaces/IFormInput";
import type { IResult } from "../interfaces/IResults";

export interface BACResultsContextValue {
  results: IResult | null;
  calculateBAC: (formData: IFormInput) => void;
}