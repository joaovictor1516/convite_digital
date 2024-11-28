"use client";
import { EventProps, events, GuestProps } from "@/core";
import { use, useEffect, useState } from "react";
import { DashboardEvent } from "@/components/event/dashboardEvent";
import { FormPasswordEvent } from "@/components/event/formPasswordEvent";

export interface AdminEventPageProps{
    params: {
        todos: [id: string, password: string]
    }
}

export default function AdminEventPage(props: Readonly<AdminEventPageProps>){
    const parameters: {todos: [id: string, password: string]} = use(props.params);
    const id: string = parameters.todos[0];
    const [event, setEvent] = useState<EventProps | null>(null);
    const [password, setPassword] = useState<string | null>(parameters.todos[1] ?? null);

    const presents = event?.guests.filter((guest) => guest.isConfirmed) ?? [];
    const absents = event?.guests.filter((guest) => !guest.isConfirmed) ?? [];

    const totalGeneral = presents?.reduce((total: number, guest: GuestProps) => {
        return total + guest.amountInvitesMade + 1
    }, 0) ?? 0;

    function loadEvent(){
        const event = events.find((ev) => ev.id === id && ev.password === password);
        setEvent(event ?? null);
    }

    useEffect(() => {
        loadEvent();
    }, [id, password]);

    return (
        <div className="flex flex-col justify-center items-center">
            {event ? ( <DashboardEvent 
                        event={event} 
                        presents={presents} 
                        absents={absents} 
                        totalGeneral={totalGeneral}/> ) : (<FormPasswordEvent/>)}
        </div>
    )
}