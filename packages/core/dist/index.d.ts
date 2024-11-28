interface GuestProps {
    id: string;
    name: string;
    email: string;
    isConfirmed: boolean;
    hasCompanion: boolean;
    amountInvitesMade: number;
}

interface EventProps {
    id: string;
    uniqueHumanReadableIdentifier: string;
    password: string;
    title: string;
    description: string;
    localisation: string;
    date: Date;
    imageBackground: string;
    imageMain: string;
    publicExpected: number;
    guests: GuestProps[];
}

declare function checkEventInformations(event: Partial<EventProps>): string[];

declare function checkGuestInformations(guest: Partial<GuestProps>): string[];

declare function complementaryEvent(eventPartial: Partial<EventProps>): EventProps;

declare function complementaryGuest(guestPartial: Partial<GuestProps>): GuestProps;

declare function createEmptyEvent(): Partial<EventProps>;

declare function createEmptyGuest(): Partial<GuestProps>;

declare const events: EventProps[];

declare class UniqueHumanReadableIdentifier {
    static format(text: string): string;
}

declare class Password {
    static new(length?: number): string;
}

declare class DateEvent {
    static format(date?: Date): string;
    static unformat(date: string): Date;
}

declare class GenerateId {
    static new(): string;
    private static hash;
}

export { DateEvent, type EventProps, GenerateId, type GuestProps, Password, UniqueHumanReadableIdentifier, checkEventInformations, checkGuestInformations, complementaryEvent, complementaryGuest, createEmptyEvent, createEmptyGuest, events };
