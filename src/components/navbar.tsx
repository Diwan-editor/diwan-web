import Image from "next/image";
import { Navbar } from "nextra-theme-docs";
import { JSX } from "react/jsx-runtime";


export default function DiwanNavbar(): JSX.Element {
  return (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <Image src="/dicon.svg" alt="Diwan" width={40} height={40} />
          <span className="font-bold text-xl tracking-tighter">Diwan</span>
        </div>
      }
      projectLink="https://github.com/Diwan-editor/Diwan"
      align="right"
    />
  );
}
