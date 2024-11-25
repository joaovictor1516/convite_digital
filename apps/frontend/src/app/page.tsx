import { PageTemplate } from "@/components/template/PageTemplate";
import { GenerateId } from "@/core";
import { EventProps } from "@/core";

export default function Home() {
  const id = GenerateId.new();

  const event: Partial<EventProps> =  {id: id};
  console.log(event)
  return (
    <PageTemplate>
      <div></div>
    </PageTemplate>
  );
}
