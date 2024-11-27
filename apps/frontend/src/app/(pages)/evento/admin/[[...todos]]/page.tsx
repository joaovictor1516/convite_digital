"use client";
import Image from "next/image";
import { EventProps, events } from "@/core";
import { use, useEffect, useState } from "react";

export interface AdminEventPageType{
    params: {
        todos: [id: string, password: string]
    }
}

export default function AdminEventPage(props: any){
    const parameters: any = use(props.params);
    const id: string = parameters.todos[0];
    const [event, setEvent] = useState<EventProps | null>(null);
    const [password, setPassword] = useState<string | null>(parameters.todos[1] ?? null);

    function loadEvent(){
        const event = events.find((ev) => ev.id === id && ev.password);
        console.log(events);
        setEvent(event ?? null);
    }

    useEffect(() => {
        loadEvent();
        console.log(id);
        console.log(event)
    }, [id]);

    return event ? (
        <div className="flex flex-col">
            <Image src={event.imageMain} alt={event.title} width={400} height={400}/>
            <span>{event.title}</span>
            <p>{event.description}</p>
        </div>
    ) : null
}