export const add = (a, b) => {

  //和數預設空字串
  let sum = ''

  //進位
  let carry = 0

  //位數應相加次數
  let addTimes =  ( (a.length >= b.length) ? a.length : b.length )

  for( var i=0; i < addTimes; i++ ) {
    //判斷進行相加的位數是否有值, 沒有值就補0
    var a1 = Number.isNaN(parseInt( a.charAt(a.length-1-i) )) ? 0 : parseInt( a.charAt(a.length-1-i) )
    var b1 = Number.isNaN(parseInt( b.charAt(b.length-1-i) )) ? 0 : parseInt( b.charAt(b.length-1-i) )

    //兩位數相加，並加上前一位數的進位
    var s = a1 + b1 + carry

    if( s >= 10 ) {
      carry = 1
      sum = ( (s-10).toString().concat( sum ) )
    } else {
      carry = 0
      sum = ( s.toString().concat( sum ) )
    }
  }


  //加上最大位數相加的進位
  if (carry===1) {
    sum = ( '1'.concat(sum) )
  }

  return sum;
}
