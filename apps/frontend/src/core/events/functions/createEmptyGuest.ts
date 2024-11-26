import { GuestProps, GenerateId } from "@/core";

export function createEmptyGuest(): Partial<GuestProps>{
    return {
        id: GenerateId.new(),
        name: "",
        email: "",
        telephoneNumber: "",
        isConfirmed: false,
        hasCompanion: false,
        amountInvitesMade: null
    };
}