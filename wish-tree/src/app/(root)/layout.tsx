import { SVGBackground, SVGBackgroundM } from "../../../shared/components/molecules/SVGBackground";
import { POSITIONS,POSITIONS_M } from "../../../shared/constants/position";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html>
      <body>
         {POSITIONS.map((position, index) => (
          <SVGBackground key={index} position={position} />
        ))}
          {POSITIONS_M.map((position, index) => (
          <SVGBackgroundM key={index} position={position} />
        ))}
        {children}
      </body>
    </html>
  );
}
