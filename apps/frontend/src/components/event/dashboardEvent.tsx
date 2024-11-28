import { AccessViaQrCode } from "./accessViaQrCode";
import { EventInformations } from "./eventInformations";
import { EventProps } from "@/core"

export interface DashboardEventProps{
    event: EventProps;
}

export function DashboardEvent(props: Readonly<DashboardEventProps>){
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <EventInformations event={props.event} className="flex-1"/>
                <AccessViaQrCode event={props.event}/>
            </div>
        </div>
    )
}