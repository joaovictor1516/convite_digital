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
      imageBackground: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
      imageMain: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
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
      imageBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
      imageMain: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
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
