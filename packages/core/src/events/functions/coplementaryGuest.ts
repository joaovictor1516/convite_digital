import { GenerateId } from "../../shared";
import { GuestProps, checkGuestInformations } from "../";

export function complementaryGuest(
  guestPartial: Partial<GuestProps>,
): GuestProps {
  const errorMessages = checkGuestInformations(guestPartial);

  if (errorMessages.length) {
    throw new Error(errorMessages.join("\n"));
  }

  const amountInvitesMade = guestPartial.amountInvitesMade ?? 0;

  const hasId = guestPartial.id !== undefined;

  const hasCompanion =
    guestPartial.isConfirmed &&
    guestPartial.hasCompanion &&
    amountInvitesMade > 0;

  const guest = {
    id: hasId ? guestPartial.id : GenerateId.new(),
    name: guestPartial.name,
    email: guestPartial.email,
    isConfirmed: hasCompanion,
    hasCompanion: hasCompanion,
    amountInvitesMade: amountInvitesMade,
  } as GuestProps;

  return guest;
}
