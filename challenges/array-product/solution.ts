export function arrayProduct(input: number[]) : number[] {
  const newArray = input.map((val: number, index: number) => {
    const dup = [...input];
    dup.splice(index, 1);
    return product(dup);
  });
  return newArray;
};

function product(input: number[]) : number {
  return input.reduce((prev: number, current: number) => prev * current, 1);
};
