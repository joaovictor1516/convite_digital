import { EventProps } from "core";
import QRCode from "react-qr-code";

export interface AccessViaQrCodeProps {
  event: EventProps;
}

export function AccessViaQrCode(props: Readonly<AccessViaQrCodeProps>) {
  const { event } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-4 border border-zinc-800 px-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse via mobile
      </span>

      <QRCode
        value={JSON.stringify({
          id: event.id,
          password: event.password,
        })}
        className="w-32 h-32"
      />
    </div>
  );
}
