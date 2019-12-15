 const equation = (x, arr) => {
   let y = Math.floor(x/3) - 2;
   if (y <= 0) {
     return arr
   } else {
     arr.push(y);
     return equation(y, arr)
   }
 };

const result = input.flatMap(x => equation(x, [])).reduce((curr, acc) => curr + acc);

