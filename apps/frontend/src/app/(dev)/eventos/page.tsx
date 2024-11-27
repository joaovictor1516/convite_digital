import QRCode from "react-qr-code";
import { events } from "@/core";
import Image from "next/image";
import Link from "next/link";

export default function Eventos(){
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map((event) => (
                
                <div key={event.id} className="flex flex-col justify-center w-full bg-zinc-500 rounded-lg overflow-hidden">

                    <div className="relative w-full h-44">
                        <Image src={event.imageMain} alt={event.title} fill className="object-cover"/>
                    </div>

                    <div className="flex-1 flex flex-col p-7 gap-5 items-center">
                        <span className="text-xl text-zinc-950 font-bold">{event.title}</span>
                        <p className="text-zinc-800 font-semibold">{event.description}</p>

                        <QRCode
                            value={JSON.stringify({
                                id: event.id,
                                password: event.password
                            })}
                            className="w-44 h-44"
                        />
                        
                        <div className="flex gap-5">
                            <Link href={`/evento/admin/${event.id}/${event.password}`} className="button red">
                                admim
                            </Link>

                            <Link href={`/convite/${event.uniqueHumanReadableIdentifier}`} className="button green">
                                Convite
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}