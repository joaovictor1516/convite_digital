import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
    subsets: ['latin'],
    weight: ['400']
})

export function LogoTemplate(){
    return(
        <Link href="/" className={`${font.className} flex gap-x-1.5`}>
            <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
            <div className="flex flex-col">
                <span className="">CONVITE</span>
                <span className="">DIGITAL</span>
            </div>
        </Link>
    )
}