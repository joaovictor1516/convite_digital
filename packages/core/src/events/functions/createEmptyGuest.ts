import { GenerateId } from "../../shared";
import { GuestProps } from "../";

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
