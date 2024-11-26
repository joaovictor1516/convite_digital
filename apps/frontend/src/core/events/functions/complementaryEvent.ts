import { Password, GenerateId, EventProps, checkEventInformations } from "@/core";

export function complementaryEvent(eventPartial:Partial<EventProps>): EventProps{
    const errorMessages = checkEventInformations(eventPartial);

    if(errorMessages.length){
        throw new Error(errorMessages.join('\n'));
    }

    const event: EventProps = {
        ...eventPartial,
        id: eventPartial.id ?? GenerateId.new(),
        password: eventPartial.password ?? Password.creat(),
        publicExpected: + (eventPartial.publicExpected ?? 1)
    } as EventProps;

    return event;
}