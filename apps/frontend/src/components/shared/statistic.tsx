import Image from "next/image";

export interface StatisticProps {
  text: string;
  value: string;
  image: string;
}

export function Statistic(props: Readonly<StatisticProps>) {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{props.text}</span>
        <span className="text-2xl font-black">{props.value}</span>
      </div>
      <Image src={props.image} alt="icone" width={80} height={80} />
    </div>
  );
}