import { GuestProps } from "./guests";

export interface EventProps {
  id: string;
  alias: string;
  password: string;
  title: string;
  description: string;
  localisation: string;
  date: Date | string;
  imageBackground: string;
  imageMain: string;
  publicExpected: number;
  guests: GuestProps[];
}
