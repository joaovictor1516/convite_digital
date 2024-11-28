import { GuestProps, GenerateId } from "@/core";

export function createEmptyGuest(): Partial<GuestProps> {
  return {
    id: GenerateId.new(),
    name: "",
    email: "",
    isConfirmed: false,
    hasCompanion: false,
    amountInvitesMade: 0,
  };
}
