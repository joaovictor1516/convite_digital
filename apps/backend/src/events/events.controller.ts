import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  complementaryGuest,
  DateEvent,
  EventProps,
  events,
  GenerateId,
  GuestProps,
} from "core";
import { EventPrisma } from "./event.prisma";

@Controller("events")
export class EventsController {
  constructor(readonly eventPrisma: EventPrisma) {}

  @Get()
  async findEvents() {
    const events = await this.eventPrisma.searchAllEvents();
    return events.map(this.serialize);
  }

  @Get(":idOrAlias")
  async findEvent(@Param("idOrAlias") idOrAlias: string) {
    let event: EventProps;

    if (GenerateId.validate(idOrAlias)) {
      event = await this.eventPrisma.searchEventById(idOrAlias);
    } else {
      event = await this.eventPrisma.searchEventByAlias(idOrAlias);
    }

    return this.serialize(event);
  }

  @Post("access")
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = events.find(
      (event) => event.id === data.id && event.password === data.password,
    );

    return this.serialize(event);
  }

  @Post(":alias/guest")
  async saveGuest(@Param("alias") alias: string, @Body() newGuest: GuestProps) {
    const event = events.find((event) => event.alias === alias);

    if (!event) {
      return this.serialize(event);
    }

    const complementaryNewGuest = complementaryGuest(newGuest);

    const guest = event.guests.find(
      (guest) => guest.id === complementaryNewGuest.id,
    );

    if (!guest) {
      event.guests.push(complementaryNewGuest);
      return this.serialize(event);
    } else {
      return "guest already exists";
    }
  }

  @Post()
  async saveEvent(@Body() newEvent: EventProps) {
    const event = events.find((event) => event.alias === newEvent.alias);

    if (event && event.id !== newEvent.id) {
      return "event alias already exists";
    } else if (event && event.id === newEvent.id) {
      return "event already exists";
    }

    events.push(newEvent);
    return this.serialize(newEvent);
  }

  @Get("validate/:alias/:id")
  async validateAlias(@Param("alias") alias: string, @Param("id") id: string) {
    const event = events.find((event: EventProps) => event.alias === alias);
    if (event && event.id === id) {
      return "the alias is already in use and the id is the same";
    } else if (!event) {
      return "the event alias is not in use";
    } else {
      return "the alias is already in use but the id is not the same";
    }
  }

  private serialize(event: EventProps) {
    if (!event) return "event not found";

    return {
      ...event,
      date: DateEvent.format(event.date),
    };
  }

  private deserialize(event: any) {
    if (!event) return "event not found";

    return {
      ...event,
      date: DateEvent.unformat(event.date),
    } as EventProps[];
  }
}
