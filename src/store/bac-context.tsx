import { useState } from 'react';
import type { IFormInput } from '../interfaces/IFormInput';
import type { IResult } from '../interfaces/IResults';
import useBACCalculator from '../hooks/useBACCalculator';
import type { BACResultsContextValue } from '../contexts/BACResultsContextValue';
import { BACResultsContext } from '../contexts/BACResultsContextInstance';

export default function BACResultsProvider({ children }: { children: React.ReactNode }) {
  const [results, setResults] = useState<IResult | null>(null);
  const { calculateResults } = useBACCalculator();

  const calculateBAC = (formData: IFormInput) => {
    setResults(calculateResults(formData));
  };

  const value: BACResultsContextValue = {
    results,
    calculateBAC
  };

  return (
    <BACResultsContext.Provider value={value}>
      {children}
    </BACResultsContext.Provider>
  );
}