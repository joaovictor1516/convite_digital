import { EventProps } from "../events";

export const events: EventProps[] = [
  {
    id: "hu9axkpth5c-jaqh97nmmt-k7g6tszaum",
    uniqueHumanReadableIdentifier: "event-001",
    password: "securePassword123",
    title: "Tech Conference 2024",
    description: "An event to discuss the latest trends in technology.",
    localisation: "New York, NY",
    date: new Date("2024-12-15T09:00:00.000Z"),
    imageBackground:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imageMain:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicExpected: 500,
    guests: [
      {
        id: "0xw2qmjrnq5-nazymg2psd-58n41qlanh5",
        name: "John Doe",
        email: "johndoe@example.com",
        isConfirmed: true,
        hasCompanion: false,
        amountInvitesMade: 2,
      },
      {
        id: "t48tb7zidml-gvxuk2zeuas-ofzhx6atil",
        name: "Jane Smith",
        email: "janesmith@example.com",
        isConfirmed: false,
        hasCompanion: true,
        amountInvitesMade: 0,
      },
    ],
  },
  {
    id: "8kz2f1tn2bq-8c73xvuocce-97thvw3fl04",
    uniqueHumanReadableIdentifier: "event-002",
    password: "event2024",
    title: "Music Festival",
    description: "A day filled with live music and performances.",
    localisation: "Los Angeles, CA",
    date: new Date("2024-12-22T14:00:00.000Z"),
    imageBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    imageMain:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    publicExpected: 2000,
    guests: [
      {
        id: "7r5hi7k6t4a-yuobp2bkw8-q2678xhj3ek",
        name: "Alice Cooper",
        email: "alicecooper@example.com",
        isConfirmed: true,
        hasCompanion: true,
        amountInvitesMade: 5,
      },
      {
        id: "brv7efplynq-2muy1woua3h-nlq5ulok95e",
        name: "Bob Marley",
        email: "bobmarley@example.com",
        isConfirmed: false,
        hasCompanion: false,
        amountInvitesMade: 0,
      },
    ],
  },
];
