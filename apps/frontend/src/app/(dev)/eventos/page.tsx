import { events } from "@/core"

export default function Eventos(){
    return (
        <div>
            {events.map((event) => (
                <span key={event.id}>
                    {event.title}
                </span>
            ))}
        </div>
    )
}