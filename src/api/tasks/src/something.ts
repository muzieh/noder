export class Something {
  constructor(
    public name: string,
    public range: number,
  ) {
    this.name = name;
    this.range = range;
  }

  toString(): string {
    return `${this.name} (${this.range})`;
  }
}
