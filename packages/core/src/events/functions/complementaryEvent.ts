import {
  Password,
  GenerateId
} from "../../shared";

import {
  EventProps,
  checkEventInformations,
} from "../"

export function complementaryEvent(
  eventPartial: Partial<EventProps>,
): EventProps {
  const errorMessages = checkEventInformations(eventPartial);

  if (errorMessages.length) {
    throw new Error(errorMessages.join("\n"));
  }

  const event: EventProps = {
    ...eventPartial,
    id: eventPartial.id ?? GenerateId.new(),
    password: eventPartial.password ?? Password.new(),
    publicExpected: +(eventPartial.publicExpected ?? 1),
  } as EventProps;

  return event;
}
