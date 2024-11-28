import { EventProps } from "@/core"
import { Information } from "../shared/information";

export interface EventInformationsProps{
    event: EventProps;
    className?: string;
}

export function EventInformations(props: Readonly<EventInformationsProps>){
    const {event} = props;
    
    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
            <div className="flex gap-2">
                <Information label="Data:">
                    <span>
                        {event.date.toLocaleDateString()}
                        {" às "}
                        {event.date.toLocaleTimeString()}
                    </span>
                </Information>
            </div>
        </div>
    )
}