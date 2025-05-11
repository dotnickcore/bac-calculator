import { createContext } from 'react';
import type { BACResultsContextValue } from './BACResultsContextValue';

export const BACResultsContext = createContext<BACResultsContextValue | undefined>(undefined);