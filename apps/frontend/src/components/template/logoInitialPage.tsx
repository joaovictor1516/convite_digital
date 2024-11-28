import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export function LogoInitialPage() {
  return (
    <Link
      href="/"
      className={`${font.className} flex flex-col gap-x-1.5 items-center`}
    >
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <h1 className="text-5xl">
        CONVIT<span className="text-blue-500">3</span> DIGITAL
      </h1>
    </Link>
  );
}
