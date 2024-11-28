export class alias {
  static format(text: string): string {
    return text.replace(/ /g, "-").toLowerCase();
  }
}
