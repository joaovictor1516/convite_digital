import { GuestProps } from "../";

export function checkGuestInformations(guest: Partial<GuestProps>): string[] {
  const errorMessages: string[] = [];

  if (guest.name === "") {
    errorMessages.push("Adicione o nome do convidado.");
  }

  if (guest.email === "") {
    errorMessages.push("Adicione o e-mail do convidado.");
  }

  if (guest.amountInvitesMade < 0){
    errorMessages.push("O convidado não pode ter um valor menor que 0  de convites enviados.");
  }

  return errorMessages;
}
