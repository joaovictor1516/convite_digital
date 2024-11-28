import Image from "next/image";

export interface StatisticProps{
    text: string;
    valaue: unknown;
    image: string;
}

export function Statistic(props: Readonly<StatisticProps>){
    return (
        <div className="">
            <div className="">
                <span className="">{props.text}</span>
                <span className="">{props.value}</span>
            </div>
            <Image src={props.image} alt="icone" width={80} height={80}/>
        </div>
    )
}