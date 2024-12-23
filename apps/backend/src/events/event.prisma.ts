import { PrismaProvider } from "src/db/prisma.provider";
import { Injectable } from "@nestjs/common";
import { EventProps, GuestProps } from "core";

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}
  saveEvent(event: EventProps) {
    return this.prisma.event.create({
      data: event as any,
    });
  }

  saveGuest(event: EventProps, guest: GuestProps) {
    return this.prisma.guest.create({
      data: {
        ...guest,
        amountInvitesMade: +(guest.amountInvitesMade || 0),
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });
  }

  async searchAllEvents(): Promise<EventProps[]> {
    return this.prisma.event.findMany() as unknown as EventProps[];
  }

  async searchEventById(id: string): Promise<EventProps> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        alias: true,
        title: true,
        description: true,
        date: true,
        localisation: true,
        guests: true,
        publicExpected: true,
      },
      where: {
        id: id,
      },
    }) as unknown as EventProps;
  }

  async searchEventByAlias(alias: string): Promise<EventProps> {
    return this.prisma.event.findUnique({
      select: {
        id: true,
        alias: true,
        title: true,
        description: true,
        date: true,
        localisation: true,
        guests: true,
        publicExpected: true,
      },
      where: {
        alias: alias,
      },
    }) as unknown as EventProps;
  }
}
