export class Password {
  static new(length: number = 8): string {
    const lowerCasesalphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperCasesAlphabet = lowerCasesalphabet.toUpperCase;
    const numbers = "0123456789";
    const specialCharacters = "!@#$%&*_/-+=";

    const groups = [
      lowerCasesalphabet,
      upperCasesAlphabet,
      numbers,
      specialCharacters,
    ];
    const password = [];

    for (let i = 0; i < length; i++) {
      const group =
        groups[Math.floor(Math.random() * groups.length)].toString();
      password.push(group[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
