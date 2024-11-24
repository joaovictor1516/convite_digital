export class UniqueHumanReadableIdentifiet{
    static format(text: string): string{
        return text.replace(/ /g, "-").toLowerCase();
    }
}