export const arrayStr = <T>(array: T[], limit = 10):string => {
  return '[' + (array.length < limit
    ? array.toString()
    : `${array[0]}, ${array[1]}, ... , ${array[array.length-2]}, ${array[array.length-1]}`)+']';
}

export const zip = <L,R>(left: L[], right: R[]) => left.map((leftVal, index) => [leftVal, right[index]]);