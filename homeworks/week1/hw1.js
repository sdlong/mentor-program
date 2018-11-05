export const stars = (n) => {
  if (n > 30) return '' ;

  var array = []

  for(var i=0; i<n; i++){
    array[i] = (i ? array[i-1]+'*' : '*')
  };
  return array
}

// i = 0
// array[0] = '*'
// -> ['*']

// i = 1
// array[1] = array[1-1]+'*' // '*' + '*'
// -> ['*', '**']

// i = 2
// array[2] = array[2-1]+'*' // '**' + '*'
// -> ['*', '**', '***']

// ... 以此類推
