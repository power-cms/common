import { generate } from './id.generator';

export class Id {
  public static fromString(id: string): Id {
    return new Id(id);
  }

  public static generate(): Id {
    return new Id(generate());
  }

  private constructor(public id: string) {}

  public toString() {
    return this.id;
  }
}
