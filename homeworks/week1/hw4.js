export const isPalindromes = (str) => {
  for (var i=0; i<Math.floor(str.length/2); i++) {
    if (str.charAt(i) !== str.charAt(str.length-1-i)) return false;
  }

  return true;
}

// Math.round(n) -> 四捨五入
// Math.floor(n) -> 取最大整數
// Math.ceil(n)  -> 取最小整數
