export class UniqueHumanReadableIdentifier {
  static format(text: string): string {
    return text.replace(/ /g, "-").toLowerCase();
  }
}
