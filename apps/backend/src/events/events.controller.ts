import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  complementaryEvent,
  complementaryGuest,
  DateEvent,
  EventProps,
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
    const { id, password } = data;

    const event = await this.eventPrisma.searchEventById(id);

    console.log(event);

    if (!event) {
      throw new Error("event not found");
    } else if (event.password !== password) {
      throw new Error("wrong password");
    }

    return this.serialize(event);
  }

  @Post(":alias/guest")
  async saveGuest(
    @Param("alias") alias: string,
    @Body() newGuest: Partial<GuestProps>,
  ) {
    const event = await this.eventPrisma.searchEventByAlias(alias);

    if (!event) {
      throw new Error("event not found");
    }

    const complementaryNewGuest = complementaryGuest(newGuest);

    await this.eventPrisma.saveGuest(event, complementaryNewGuest);
    return "Guest saved";
  }

  @Post()
  async saveEvent(@Body() newEvent: Partial<EventProps>) {
    const event = await this.eventPrisma.searchEventByAlias(newEvent.alias);

    if (event) {
      return "event alias already exists";
    }

    const complementaryNewEvent = complementaryEvent(newEvent);

    await this.eventPrisma.saveEvent(complementaryNewEvent);
    return this.deserialize(complementaryNewEvent), "Event saved";
  }

  @Get("validate/:alias/:id")
  async validateAlias(@Param("alias") alias: string, @Param("id") id: string) {
    const event = await this.eventPrisma.searchEventByAlias(alias);
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

    if (event.date instanceof Date) {
      return {
        ...event,
        date: DateEvent.format(event.date),
      };
    }
  }

  private deserialize(event: EventProps) {
    if (!event) return "event not found";

    if (typeof event.date === "string") {
      return {
        ...event,
        date: DateEvent.unformat(event.date),
      };
    }
  }
}
