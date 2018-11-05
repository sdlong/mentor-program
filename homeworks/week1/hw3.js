export const isPrime = (n) => {
  if (n==1) return false
  if (n==2||n==3||n==5) return true

  for (var i=2; i <= Math.sqrt(n); i++) {
    if (n%i==0) return false
    return true
  }
}

// Math.sqrt(n)
// 計算數值的平方根
