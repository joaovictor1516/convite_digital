import { v4 as uuid, validate } from "uuid";

export class GenerateId {
  static new() {
    return uuid();
  }

  static validate(id: string): boolean{
    return validate(id);
  }
}
