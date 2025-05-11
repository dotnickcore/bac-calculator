export type UseBACCalculatorReturnType = {
    bacTotal: number;
    setBacTotal: (value: number) => void;

    timeToZero: number;
    setTimeToZero: (value: number) => void;

    calculateBACTotal: () => void;
}