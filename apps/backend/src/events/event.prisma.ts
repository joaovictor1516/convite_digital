import { PrismaProvider } from "src/db/prismaProvider";
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
}
