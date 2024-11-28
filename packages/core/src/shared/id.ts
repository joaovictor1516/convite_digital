import { v4 as uuid} from "uuid";

export class GenerateId {
  static new() {
    return uuid();
  }
}
