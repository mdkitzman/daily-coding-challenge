export function reverse(str: string) : string {
  if(str.length <= 1)
    return str;
  return str.charAt(str.length-1) + reverse(str.substring(0, str.length-1));
}
