import { LogoInitialPage } from "@/components/template/logoInitialPage";
import Link from "next/link";

export default function Home() {

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10 bg-[url('/background-initial-screen.svg')] bg-cover ">
      <div className="flex flex-col items-center gap-4">
        <LogoInitialPage/>

        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida e fácil!  
        </p>     
      </div>

      <Link href="./evento" className="button blue text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  );
}
