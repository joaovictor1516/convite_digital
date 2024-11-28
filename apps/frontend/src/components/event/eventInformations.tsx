import { Information } from "../shared/information";
import { EventProps } from "core";

export interface EventInformationsProps {
  event: EventProps;
  className?: string;
}

export function EventInformations(props: Readonly<EventInformationsProps>) {
  const { event } = props;

  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 px-6 py-3 border border-zinc-800 rounded-lg">
        <span className="text-2xl font-black">
          {event.uniqueHumanReadableIdentifier}:
        </span>
        <span className="text-xl text-zinc-300">{event.title}</span>
      </div>

      <div className="flex gap-2">
        <Information label="Data:">
          <span>
            {event.date.toLocaleDateString()}
            {" às "}
            {event.date.toLocaleTimeString()}
          </span>
        </Information>

        <Information label="Local:">{event.localisation}</Information>
      </div>

      <Information label="Descrição">{event.description}</Information>
    </div>
  );
}
