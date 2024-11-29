import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DateEvent, EventProps, events, GenerateId, GuestProps } from "core";

@Controller("events")
export class EventsController {
  @Get()
  async findEvents() {
    return events.map(this.deserialize);
  }

  @Get(":idOrAlias")
  async findEvent(@Param("idOrAlias") idOrAlias: string) {
    if (GenerateId.validate(idOrAlias)) {
      return this.serialize(
        events.find((event: EventProps) => event.id === idOrAlias),
      );
    } else {
      return this.serialize(
        events.find((event: EventProps) => event.alias === idOrAlias),
      );
    }
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

    const guest = event.guests.find((guest) => guest.id === newGuest.id);

    if (!guest) {
      event.guests.push(newGuest);
      return this.serialize(event);
    } else {
      return "guest already exists";
    }
  }

  @Post()
  async saveEvent(@Body() newEvent: EventProps) {
    const event = events.find((event) => event.id === newEvent.id);

    if (event) {
      return this.serialize(event);
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
