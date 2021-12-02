export default class GenerateRandom {
  private possibleNumbers: number[];

  constructor(private max: number, private exclude: number[]) {
    this.possibleNumbers = [];
    for (let i = 1; i <= this.max; i++) {
      if (this.exclude.indexOf(i) !== -1) continue;
      this.possibleNumbers.push(i);
    }
  }

  next() {
    const index = Math.floor(Math.random() * this.possibleNumbers.length);
    const number = this.possibleNumbers[index];
    this.possibleNumbers.splice(index, 1);

    return number;
  }
}
