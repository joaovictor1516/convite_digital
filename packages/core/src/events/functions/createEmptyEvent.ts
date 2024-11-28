import { GenerateId } from "../../shared";
import { EventProps } from "../";

export function createEmptyEvent(): Partial<EventProps> {
  return {
    id: GenerateId.new(),
    title: "",
    date: new Date(),
    description: "",
    localisation: "",
    imageBackground: "",
    imageMain: "",
  };
}
