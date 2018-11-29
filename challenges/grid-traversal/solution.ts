export function traverseGrid(grid: number[][]) : number {
  return recursive(grid)(0, 0);
}

function recursive(grid: number[][]) : (col: number, row: number) => number {
  let cache: number[][] = [...Array(grid.length)].map((e, row) => [...Array(grid[row].length)]);
  const traverse = (col: number, row: number) => {
    if(outOfBounds(grid, col, row) || isWall(grid, col, row)) return 0;
    if(isEnd(grid, col, row)) return 1;
    return traverse(col+1, row) + traverse(col, row+1);
    /* if(cache[col][row] !== undefined) {
      const numWays = traverse(col+1, row) + traverse(col, row+1);
      cache[col][row] = numWays;
    }
    cache[col][row]; */
  };
  return traverse;
}

function outOfBounds(grid: number[][], col: number, row: number): boolean {
  return col >= grid.length || row >= grid[col].length;
}

function isWall(grid: number[][], col: number, row: number): boolean {
  return grid[col][row] === 1;
}

function isEnd(grid: number[][], col: number, row: number): boolean {
  return col === grid.length - 1 && row === grid[col].length - 1;
}
