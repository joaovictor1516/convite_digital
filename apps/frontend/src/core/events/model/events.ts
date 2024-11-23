import { GuestProps } from "./guests";

export interface EventProps{
    id: string;
    uniqueHunanReadableIdentifier: string;
    password: string;
    title: string;
    description: string;
    localisation: string;
    date: string;
    imageBackground: string;
    imageMain: string;
    publicExpected: number;
    guests: GuestProps[];
}