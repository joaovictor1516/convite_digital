import { Controller, Get, Param } from "@nestjs/common";
import { DateEvent, EventProps, events, GenerateId } from "core";

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

  @Get("validate/:alias/:id")
  async validateAlias(@Param("alias") alias: string, @Param("id") id: string) {
    const event = events.find((event: EventProps) => event.alias === alias);
    return { valid: !event || event.id === id };
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
