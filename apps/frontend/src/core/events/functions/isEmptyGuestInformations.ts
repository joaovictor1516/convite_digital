import { GuestProps } from "@/core";

export function checkGuestInformations(guest: Partial<GuestProps>): string[]{
    const errorMessages: string[] = [];
    
    if(guest.name === ""){
        errorMessages.push("Adicione o nome do/a convidado/a.");
    }

    if(guest.telephoneNumber === ""){
        errorMessages.push("Adicione o número de telefone do/a convidado/a.");
    }

    if(guest.email === ""){
        errorMessages.push("Adicione o e-mail do/a convidado/a.");
    }

    return errorMessages;
}