import { EventProps } from "@/core";

export function checkEventInformations(event: Partial<EventProps>): string[]{
    const errorMessages: string[] = [];
    
    if(event.title === ""){
        errorMessages.push("O titulo é obrigatório.");
    }

    if(event.date === ""){
        errorMessages.push("A data é obrigatória.");
    }

    if(event.localisation === ""){
        errorMessages.push("A localização é obrigatória.");
    }

    if(event.imageMain === ""){
        errorMessages.push("A imagem principal é obrigatória.");
    }

    if(event.imageBackground === ""){
        errorMessages.push("A imagem de fundo é obrigatória.");
    }

    if(event.description === ""){
        errorMessages.push("A descrição é obrigatória.");
    }

    if(!event.publicExpected || event.publicExpected <= 0){
        errorMessages.push("O número de público esperado é obrigatório eprecisa ser maior que 0.");
    }

    return errorMessages;
}