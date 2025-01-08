import { PrismaProvider } from "src/db/prisma.provider";
import { Injectable } from "@nestjs/common";
import { EventProps, GuestProps } from "core";

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}
  saveEvent(event: EventProps) {
    return this.prisma.event.create({
      data: {
        id: event.id,
        password: event.password,
        title: event.title,
        alias: event.alias,
        description: event.description,
        localisation: event.localisation,
        date: event.date,
        imageBackground: event.imageBackground,
        imageMain: event.imageMain,
        publicExpected: event.publicExpected,
        guests: {
          create: event.guests,
        },
      },
    });
  }

  saveGuest(event: EventProps, guest: GuestProps) {
    return this.prisma.guest.create({
      data: {
        id: guest.id,
        name: guest.name,
        email: guest.email,
        isConfirmed: guest.isConfirmed,
        hasCompanion: guest.hasCompanion,
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
        password: true,
        alias: true,
        title: true,
        description: true,
        date: true,
        localisation: true,
        imageMain: true,
        imageBackground: true,
        publicExpected: true,
        guests: true,
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
        password: true,
        alias: true,
        title: true,
        description: true,
        date: true,
        localisation: true,
        imageMain: true,
        imageBackground: true,
        publicExpected: true,
        guests: true,
      },
      where: {
        alias: alias,
      },
    }) as unknown as EventProps;
  }
}
