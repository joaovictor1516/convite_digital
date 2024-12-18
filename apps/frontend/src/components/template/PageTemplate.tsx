import { LogoTemplate } from "./LogoTemplate";

export interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTemplate(props: Readonly<PageTemplateProps>) {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <header>
        <LogoTemplate />
      </header>
      <main
        className={`flex-1 flex flex-col justify-center py-10 container ${props.className}`}
      >
        {props.children}
      </main>
    </div>
  );
}
