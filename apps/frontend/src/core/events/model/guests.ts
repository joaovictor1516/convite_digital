export interface GuestProps{
    id: string;
    name: string;
    email: string;
    isConfirmed: boolean;
    hasCompanion: boolean;
    amountInvitesMade: number | null;
}