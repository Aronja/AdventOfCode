const equation = x => {
  return (Math.floor(x/3) - 2);
}

const result = input.map(x => equation(x)).reduce((curr, acc) => curr + acc);
