import { GuestProps } from "@/core"

export interface ItemGuestProps{
    guest: GuestProps
}

export function ItemGuest(props: Readonly<ItemGuestProps>){
    return (
        <li className="">
            <div className="">
                <span className="">{props.guest.name}</span>
                <span className="">{props.guest.email}</span>
            </div>

            <div className="">
                <span className="">Acompanhantes:</span>
                <span className="">{props.guest.amountInvitesMade}</span>
            </div>
        </li>
    )
}