import Header from "../../shared/components/atoms/icons/Header";
import SVGBackground from "../../shared/components/molecules/SVGBackground";
import { POSITIONS } from "../../shared/constants/position";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html>
      <body className="relative w-screen h-dvh items-center flex flex-col">
        {/* <div className="absolute top-0 left-10 w-full h-full z-0">
          <LargeLight className="w-full h-full" />
        </div> */}
         {POSITIONS.map((position, index) => (
          <SVGBackground key={index} position={position} />
        ))}
        <Header className="relative z-10 h-[4rem] w-[50%] mobile:w-[50%] laptop:w-[40%] desktop:w-[20%] mt-10 mb-1" />
        {children}
      </body>
    </html>
  );
}
