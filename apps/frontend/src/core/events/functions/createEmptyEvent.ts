import { EventProps } from "@/core";
import {GenerateId} from "@/core";

export function createEmptyEvent(): Partial<EventProps>{
    return {
        id: GenerateId.new(),
        title: "",
        date: ""
    };
}