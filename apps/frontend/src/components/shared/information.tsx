import { ReactNode } from "react";

export interface InformationProps {
  label: string;
  children: ReactNode;
}

export function Information(props: Readonly<InformationProps>) {
  return (
    <div className="flex flex-col flex-1 items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold">{props.label}</span>

      <div className="text-xl">{props.children}</div>
    </div>
  );
}
