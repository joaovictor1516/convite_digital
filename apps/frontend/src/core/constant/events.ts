import { EventProps } from '../events';
import { GenerateId } from '../shared'

export const events: EventProps[] = [
    {
      id: GenerateId.new(),
      uniqueHumanReadableIdentifier: "event-001",
      password: "securePassword123",
      title: "Tech Conference 2024",
      description: "An event to discuss the latest trends in technology.",
      localisation: "New York, NY",
      date: new Date("2024-12-15T09:00:00.000Z"),
      imageBackground: "https://example.com/images/background-tech.jpg",
      imageMain: "https://example.com/images/main-tech.jpg",
      publicExpected: 500,
      guests: [
        {
          id: GenerateId.new(),
          name: "John Doe",
          email: "johndoe@example.com",
          isConfirmed: true,
          hasCompanion: false,
          amountInvitesMade: 2
        },
        {
          id: GenerateId.new(),
          name: "Jane Smith",
          email: "janesmith@example.com",
          isConfirmed: false,
          hasCompanion: true,
          amountInvitesMade: null
        }
      ]
    },
    {
      id: GenerateId.new(),
      uniqueHumanReadableIdentifier: "event-002",
      password: "event2024",
      title: "Music Festival",
      description: "A day filled with live music and performances.",
      localisation: "Los Angeles, CA",
      date: new Date("2024-12-22T14:00:00.000Z"),
      imageBackground: "https://example.com/images/background-music.jpg",
      imageMain: "https://example.com/images/main-music.jpg",
      publicExpected: 2000,
      guests: [
        {
          id: GenerateId.new(),
          name: "Alice Cooper",
          email: "alicecooper@example.com",
          isConfirmed: true,
          hasCompanion: true,
          amountInvitesMade: 5
        },
        {
          id: GenerateId.new(),
          name: "Bob Marley",
          email: "bobmarley@example.com",
          isConfirmed: false,
          hasCompanion: false,
          amountInvitesMade: 0
        }
      ]
    }
  ];
