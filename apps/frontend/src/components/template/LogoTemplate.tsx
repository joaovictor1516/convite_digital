import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
    subsets: ['latin'],
    weight: ['400']
})

export function LogoTemplate(){
    return(
        <Link href="/" className={`${font.className} flex gap-2 items-center`}>
            <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
            <div className="flex flex-col items-center leading-5 text-lg">
                <span>CONVIT<span className="text-blue-500">3</span></span>
                <span>DIGITAL</span>
            </div>
        </Link>
    )
}