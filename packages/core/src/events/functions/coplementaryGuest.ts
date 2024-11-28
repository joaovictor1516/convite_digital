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

  const hasCompanion =
    guestPartial.isConfirmed &&
    guestPartial.hasCompanion &&
    amountInvitesMade > 0;

  const guest: GuestProps = {
    ...guestPartial,
    id: guestPartial.id ?? GenerateId.new(),
    isConfirmed: hasCompanion ?? false,
    hasCompanion: hasCompanion ?? false,
    amountInvitesMade: hasCompanion ? guestPartial.amountInvitesMade : 0,
  } as GuestProps;

  return guest;
}
