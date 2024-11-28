import { EventInformations } from "./eventInformations";
import { EventProps } from "@/core"

export interface DashboardEventProps{
    event: EventProps;
}

export function DashboardEvent(props: Readonly<DashboardEventProps>){
    return (
        <div className="">
            <span className="">Dashboard</span>
            <EventInformations event={props.event} className="flex-1"/>
        </div>
    )
}