import { EventProps } from "../events";

export const events: EventProps[] = [
  {
    id: "21ff36d7-8fa7-495e-9339-d1687458b660",
    alias: "event-001",
    password: "securePassword123",
    title: "Tech Conference 2024",
    description: "An event to discuss the latest trends in technology.",
    localisation: "New York, NY",
    date: new Date("2024-12-15T09:00:00.000Z"),
    imageBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imageMain:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicExpected: 500,
    guests: [
      {
        id: "9db594ba-2015-4126-923b-9453d7edd552",
        name: "John Doe",
        email: "johndoe@example.com",
        isConfirmed: true,
        hasCompanion: false,
        amountInvitesMade: 0,
      },
      {
        id: "7f76598d-5025-45d7-950a-45dbc52307ab",
        name: "Jane Smith",
        email: "janesmith@example.com",
        isConfirmed: false,
        hasCompanion: false,
        amountInvitesMade: 0,
      },
    ],
  },
  {
        id: "be33b1e3-6d44-45d3-80dc-c9a4b61e389a",
    alias: "event-002",
    password: "event2024",
    title: "Music Festival",
    description: "A day filled with live music and performances.",
    localisation: "Los Angeles, CA",
    date: new Date("2024-12-22T14:00:00.000Z"),
    imageBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    imageMain:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    publicExpected: 2000,
    guests: [
      {
    id: "f4b18eb7-13c6-4bde-aa26-a9551a5c31f2",
        name: "Alice Cooper",
        email: "alicecooper@example.com",
        isConfirmed: true,
        hasCompanion: true,
        amountInvitesMade: 5,
      },
      {
        id: "ce7781f9-ce90-480b-b33f-79551b436b30",
        name: "Bob Marley",
        email: "bobmarley@example.com",
        isConfirmed: false,
        hasCompanion: false,
        amountInvitesMade: 0,
      },
    ],
  },
];
