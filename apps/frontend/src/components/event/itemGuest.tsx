import { GuestProps } from "@/core";

export interface ItemGuestProps {
  guest: GuestProps;
}

export function ItemGuest(props: Readonly<ItemGuestProps>) {
  return (
    <li className="flex justify-between bg-black/40 px-6 py-3 border boreder-zinc-800 rounded-md">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.guest.name}</span>
        <span className="text-sm text-zinc-400">{props.guest.email}</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm text-zinc-400">Acompanhantes:</span>
        <span className="text-xl font-bold">
          {props.guest.amountInvitesMade}
        </span>
      </div>
    </li>
  );
}
