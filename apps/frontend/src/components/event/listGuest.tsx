import { GuestProps } from "core";
import { ItemGuest } from "./itemGuest";

export interface ListGuestProps {
  guests: GuestProps[];
}

export function ListGuest(props: Readonly<ListGuestProps>) {
  return (
    <div className="">
      <ul className="flex flex-col gap-2">
        {props.guests.map((guest) => (
          <ItemGuest key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
