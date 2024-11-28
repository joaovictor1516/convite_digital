"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DateEvent: () => DateEvent,
  GenerateId: () => GenerateId,
  Password: () => Password,
  UniqueHumanReadableIdentifier: () => UniqueHumanReadableIdentifier,
  checkEventInformations: () => checkEventInformations,
  checkGuestInformations: () => checkGuestInformations,
  complementaryEvent: () => complementaryEvent,
  complementaryGuest: () => complementaryGuest,
  createEmptyEvent: () => createEmptyEvent,
  createEmptyGuest: () => createEmptyGuest,
  events: () => events
});
module.exports = __toCommonJS(src_exports);

// src/constant/events.ts
var events = [
  {
    id: "hu9axkpth5c-jaqh97nmmt-k7g6tszaum",
    uniqueHumanReadableIdentifier: "event-001",
    password: "securePassword123",
    title: "Tech Conference 2024",
    description: "An event to discuss the latest trends in technology.",
    localisation: "New York, NY",
    date: /* @__PURE__ */ new Date("2024-12-15T09:00:00.000Z"),
    imageBackground: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imageMain: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicExpected: 500,
    guests: [
      {
        id: "0xw2qmjrnq5-nazymg2psd-58n41qlanh5",
        name: "John Doe",
        email: "johndoe@example.com",
        isConfirmed: true,
        hasCompanion: false,
        amountInvitesMade: 2
      },
      {
        id: "t48tb7zidml-gvxuk2zeuas-ofzhx6atil",
        name: "Jane Smith",
        email: "janesmith@example.com",
        isConfirmed: false,
        hasCompanion: true,
        amountInvitesMade: 0
      }
    ]
  },
  {
    id: "8kz2f1tn2bq-8c73xvuocce-97thvw3fl04",
    uniqueHumanReadableIdentifier: "event-002",
    password: "event2024",
    title: "Music Festival",
    description: "A day filled with live music and performances.",
    localisation: "Los Angeles, CA",
    date: /* @__PURE__ */ new Date("2024-12-22T14:00:00.000Z"),
    imageBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    imageMain: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    publicExpected: 2e3,
    guests: [
      {
        id: "7r5hi7k6t4a-yuobp2bkw8-q2678xhj3ek",
        name: "Alice Cooper",
        email: "alicecooper@example.com",
        isConfirmed: true,
        hasCompanion: true,
        amountInvitesMade: 5
      },
      {
        id: "brv7efplynq-2muy1woua3h-nlq5ulok95e",
        name: "Bob Marley",
        email: "bobmarley@example.com",
        isConfirmed: false,
        hasCompanion: false,
        amountInvitesMade: 0
      }
    ]
  }
];

// src/events/functions/isEmptyEventInformations.ts
function checkEventInformations(event) {
  const errorMessages = [];
  if (event.title === "") {
    errorMessages.push("O titulo \xE9 obrigat\xF3rio.");
  }
  if (event.date.toString() === "") {
    errorMessages.push("A data \xE9 obrigat\xF3ria.");
  }
  if (event.localisation === "") {
    errorMessages.push("A localiza\xE7\xE3o \xE9 obrigat\xF3ria.");
  }
  if (event.imageMain === "") {
    errorMessages.push("A imagem principal \xE9 obrigat\xF3ria.");
  }
  if (event.imageBackground === "") {
    errorMessages.push("A imagem de fundo \xE9 obrigat\xF3ria.");
  }
  if (event.description === "") {
    errorMessages.push("A descri\xE7\xE3o \xE9 obrigat\xF3ria.");
  }
  if (!event.publicExpected || event.publicExpected <= 0) {
    errorMessages.push(
      "O n\xFAmero de p\xFAblico esperado \xE9 obrigat\xF3rio eprecisa ser maior que 0."
    );
  }
  return errorMessages;
}

// src/events/functions/isEmptyGuestInformations.ts
function checkGuestInformations(guest) {
  const errorMessages = [];
  if (guest.name === "") {
    errorMessages.push("Adicione o nome do convidado.");
  }
  if (guest.email === "") {
    errorMessages.push("Adicione o e-mail do convidado.");
  }
  if (guest.amountInvitesMade < 0) {
    errorMessages.push("O convidado n\xE3o pode ter um valor menor que 0  de convites enviados.");
  }
  return errorMessages;
}

// src/shared/uniqueHumanReadableIdentifier.ts
var UniqueHumanReadableIdentifier = class {
  static format(text) {
    return text.replace(/ /g, "-").toLowerCase();
  }
};

// src/shared/password.ts
var Password = class {
  static new(length = 8) {
    const lowerCasesalphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperCasesAlphabet = lowerCasesalphabet.toUpperCase;
    const numbers = "0123456789";
    const specialCharacters = "!@#$%&*_/-+=";
    const groups = [
      lowerCasesalphabet,
      upperCasesAlphabet,
      numbers,
      specialCharacters
    ];
    const password = [];
    for (let i = 0; i < length; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)].toString();
      password.push(group[Math.floor(Math.random() * group.length)]);
    }
    return password.join("");
  }
};

// src/shared/date.ts
var DateEvent = class {
  static format(date = /* @__PURE__ */ new Date()) {
    const pad = (number) => number.toString().padStart(2, "0");
    const dateParts = date;
    const year = dateParts.getFullYear();
    const month = pad(dateParts.getMonth() + 1);
    const day = pad(dateParts.getDate());
    const hour = pad(dateParts.getHours());
    const minute = pad(dateParts.getMinutes());
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }
  static unformat(date) {
    const [year, month, day] = date.split("T")[0].split("-");
    const [hour, minute] = date.split("T")[1].split(":");
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
};

// src/shared/id.ts
var GenerateId = class {
  static new() {
    return `${this.hash()}-${this.hash()}-${this.hash()}`;
  }
  static hash() {
    return Math.random().toString(36).substring(2, 15);
  }
};

// src/events/functions/complementaryEvent.ts
function complementaryEvent(eventPartial) {
  const errorMessages = checkEventInformations(eventPartial);
  if (errorMessages.length) {
    throw new Error(errorMessages.join("\n"));
  }
  const event = {
    ...eventPartial,
    id: eventPartial.id ?? GenerateId.new(),
    password: eventPartial.password ?? Password.new(),
    publicExpected: +(eventPartial.publicExpected ?? 1)
  };
  return event;
}

// src/events/functions/coplementaryGuest.ts
function complementaryGuest(guestPartial) {
  const errorMessages = checkGuestInformations(guestPartial);
  if (errorMessages.length) {
    throw new Error(errorMessages.join("\n"));
  }
  const amountInvitesMade = guestPartial.amountInvitesMade ?? 0;
  const hasCompanion = guestPartial.isConfirmed && guestPartial.hasCompanion && amountInvitesMade > 0;
  const guest = {
    ...guestPartial,
    id: guestPartial.id ?? GenerateId.new(),
    isConfirmed: hasCompanion ?? false,
    hasCompanion: hasCompanion ?? false,
    amountInvitesMade: hasCompanion ? guestPartial.amountInvitesMade : 0
  };
  return guest;
}

// src/events/functions/createEmptyEvent.ts
function createEmptyEvent() {
  return {
    id: GenerateId.new(),
    title: "",
    date: /* @__PURE__ */ new Date(),
    description: "",
    localisation: "",
    imageBackground: "",
    imageMain: ""
  };
}

// src/events/functions/createEmptyGuest.ts
function createEmptyGuest() {
  return {
    id: GenerateId.new(),
    name: "",
    email: "",
    isConfirmed: false,
    hasCompanion: false,
    amountInvitesMade: 0
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateEvent,
  GenerateId,
  Password,
  UniqueHumanReadableIdentifier,
  checkEventInformations,
  checkGuestInformations,
  complementaryEvent,
  complementaryGuest,
  createEmptyEvent,
  createEmptyGuest,
  events
});
