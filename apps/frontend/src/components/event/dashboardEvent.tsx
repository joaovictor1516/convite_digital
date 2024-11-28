import { Statistic } from "../shared/statistic";
import { AccessViaQrCode } from "./accessViaQrCode";
import { EventInformations } from "./eventInformations";
import { EventProps, GuestProps } from "@/core";
import { ListGuest } from "./listGuest";

export interface DashboardEventProps {
  event: EventProps;
  presents: GuestProps[];
  absents: GuestProps[];
  totalGeneral: number;
}

export function DashboardEvent(props: Readonly<DashboardEventProps>) {
  const { event } = props;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <EventInformations event={event} className="flex-1" />
        <AccessViaQrCode event={event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistic
          text="Expectativa de Convidados:"
          value={event.publicExpected.toString()}
          image="/icons/guests.svg"
        />

        <Statistic
          text="Corfirmações:"
          value={props.presents.length.toString()}
          image="/icons/confirmed.svg"
        />

        <Statistic
          text="Total Confirmados:"
          value={props.totalGeneral.toString()}
          image="/icons/companions.svg"
        />
      </div>

      <button className="button blue self-end mt-12">
        <span>Atualizar lista de convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram presença:
      </span>

      <ListGuest guests={props.presents} />

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram ausência:
      </span>

      <ListGuest guests={props.absents} />

      <span className=""></span>
    </div>
  );
}
