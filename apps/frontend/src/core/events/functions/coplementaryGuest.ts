import { GenerateId, GuestProps, checkGuestInformations } from "@/core";

export function complementaryGuest(guestPartial: Partial<GuestProps>): GuestProps{
    const errorMessages = checkGuestInformations(guestPartial);

    if(errorMessages.length){
        throw new Error(errorMessages.join('\n'));
    }

    const guest: GuestProps = {
        ...guestPartial,
        id: guestPartial.id ?? GenerateId.new(),
        isConfirmed: guestPartial.isConfirmed ?? false,
        hasCompanion: guestPartial.hasCompanion ?? false,
        amountInvitesMade: guestPartial.amountInvitesMade ?? null
    } as GuestProps;

    return guest;
}