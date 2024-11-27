import { events } from "@/core"
import Image from "next/image"

export default function Eventos(){
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map((event) => (
                
                <div key={event.id} className="flex flex-col w-96 bg-zinc-500 rounded-lg">

                    <div className="relative w-96 h-44">
                        <Image src={event.imageMain} alt={event.title} fill className="rounded-t-lg object-cover"/>
                    </div>

                    <span className="">
                        {event.title}
                    </span>
                </div>
            ))}
        </div>
    )
}