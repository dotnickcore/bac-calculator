import { useContext } from 'react';
import type { BACResultsContextValue } from '../contexts/BACResultsContextValue';
import { BACResultsContext } from '../contexts/BACResultsContextInstance';

export function useBACResults(): BACResultsContextValue {
  const context = useContext(BACResultsContext);
  if (!context) {
    throw new Error('useBACResults must be used within BACResultsProvider');
  }
  return context;
}