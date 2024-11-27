import { PageTemplate, PageTemplateProps } from "@/components/template/PageTemplate";

export default function LayoutPages(props: Readonly<PageTemplateProps>){
    return (
        <PageTemplate>
            {props.children}
        </PageTemplate>
    )
}