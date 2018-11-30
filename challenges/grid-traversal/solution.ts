export function traverseGrid(grid: number[][]) : number {
  return recursiveNumWays(grid)(0, 0);
}

function recursiveNumWays(grid: number[][]) : (row: number, col: number) => number {
  const { outOfBounds, isWall, isEnd } = gridHelpers(grid);
  
  let cache: number[][] = [...Array(grid.length)].map((val, index) => [...Array(grid[index].length)]);
  const traverse = (row: number, col: number) : number => {

    if (outOfBounds(row, col) || isWall(row, col)) return 0;
    if (isEnd(row, col)) return 1;
    //return traverse(col+1, row) + traverse(row, col+1);
    if (cache[row][col] === undefined) {
      cache[row][col] = traverse(row+1, col) + traverse(row, col+1);
    }
    return cache[row][col];
  };

  return traverse;
}

function gridHelpers (grid: number[][]) {
  return {
    outOfBounds : (row, col) => row >= grid.length || col >= grid[row].length,
    isWall      : (row, col) => grid[row][col] === 1,
    isEnd       : (row, col) => row === grid.length - 1 && col === grid[row].length - 1
  };
}
