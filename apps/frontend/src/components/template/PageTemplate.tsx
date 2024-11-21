export interface PageTemplateProps{
    children: React.ReactNode;
    className?: string;
}


export function PageTemplate(props: Readonly<PageTemplateProps>){
    return (
        <div className="flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover bg-center">
            <main className={props.className}>
                {props.children}
            </main>
        </div>
    )
}