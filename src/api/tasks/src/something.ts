export class Something {
  constructor(
    public name: string,
    public range: number,
  ) {}

  toString(): string {
    return `${this.name} (${this.range})`;
  }
}
