export function longestCommonSubstring(firstString: string, secondString: string) : string {
  //return lcs_recursive(firstString, secondString, 0, 0);
  return lcs_memo(firstString, secondString)(0, 0);
}

function lcs_memo(s1: string, s2: string): (firstIndex: number, secondIndex: number)=>string  {
  let cache: string[][] = [...Array(s1.length)].map(() => [...Array(s2.length)]);

  const lcs = (i1: number, i2: number): string => {
    if (i1 === s1.length || i2 === s2.length)
        return '';

    if (cache[i1][i2] === undefined) {
      let lcsResult;  
      if (s1.charAt(i1) === s2.charAt(i2))
        lcsResult = s1.charAt(i1) + lcs(i1 + 1, i2 + 1);
      else
        lcsResult = maxStr(lcs(i1 + 1, i2), lcs(i1, i2 + 1));

      cache[i1][i2] = lcsResult;
    }
    return cache[i1][i2];
  }
  return lcs;
}

function lcs_recursive(firstString: string, secondString: string, firstIndex: number, secondIndex: number) : string {
  if (firstIndex === firstString.length || secondIndex === secondString.length)
    return '';
  if (firstString.charAt(firstIndex) === secondString.charAt(secondIndex))
    return firstString.charAt(firstIndex) + lcs_recursive(firstString, secondString, firstIndex + 1, secondIndex + 1);
  else
    return maxStr(lcs_recursive(firstString, secondString, firstIndex + 1, secondIndex),
               lcs_recursive(firstString, secondString, firstIndex, secondIndex + 1));
}

function maxStr(str1: string, str2: string) : string {
  if(str1.length > str2.length)
    return str1;
  else if(str2.length > str1.length)
    return str2;
  else
    return str1.localeCompare(str2) > 0 
      ? str1
      : str2;
}