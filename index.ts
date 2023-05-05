const play = (a: number, b: number, c: string) => {
  console.log(a * b, c);
};

const parseArguments = (args): Array<number> => {
  if (args.length === 4) throw new Error("wrongs numbers of arguments");
  
  const firtsNumber = Number(args[2])
  const secondNumber  = Number(args[2])

  if(!isNaN(firtsNumber) && !isNaN(secondNumber)){
    return [
        firtsNumber,
        secondNumber
    ]
  }else{
      throw new Error("Proovided values  aren't numbers");
} 
  
};

const cleanArguments = parseArguments(process.argv)

const a: number = Number(cleanArguments[2]);
const b: number = Number(cleanArguments[3]);

play(a, b, `Multiplied ${a} and ${b} and the result is:`);
