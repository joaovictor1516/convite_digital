export default function ConvitePage(
  props: Readonly<{
    params: {
      uniqueHumanReadableIdentifier: string;
    };
  }>,
) {
  return <div>{props.params.uniqueHumanReadableIdentifier}</div>;
}
