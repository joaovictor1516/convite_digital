export default function ConvitePage(
  props: Readonly<{
    params: {
      alias: string;
    };
  }>,
) {
  return <div>{props.params.alias}</div>;
}
