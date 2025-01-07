import { Password, GenerateId } from "../../shared";

import { EventProps, checkEventInformations } from "../";

export function complementaryEvent(
  eventPartial: Partial<EventProps>,
): EventProps {
  const errorMessages = checkEventInformations(eventPartial);

  if (errorMessages.length) {
    throw new Error(errorMessages.join("\n"));
  }

  const event: EventProps = {
    id: eventPartial.id ?? GenerateId.new(),
    password: eventPartial.password ?? Password.new(),
    title: eventPartial.title,
    alias: eventPartial.alias ?? eventPartial.title.toLowerCase().replace(/\s/g, "-"),
    date: eventPartial.date ?? new Date(),
    description: eventPartial.description,
    imageBackground: eventPartial.imageBackground,
    imageMain: eventPartial.imageMain,
    localisation: eventPartial.localisation,
    publicExpected: eventPartial.publicExpected,
    guests: eventPartial.guests ?? [],
  } as EventProps;

  return event;
}
