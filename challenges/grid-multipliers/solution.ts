const multiplicationFindInstance = (gridSize: number, subject: number): number => 
    Array.from(Array(Math.min(subject, gridSize)), (_, i) => i+1) 
        .filter(num => subject % num === 0 && subject/num <= gridSize)
        .length;


export default multiplicationFindInstance;