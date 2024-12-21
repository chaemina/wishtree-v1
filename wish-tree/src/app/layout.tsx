import "./globals.css";
import Header from "../../shared/componets/atoms/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <body className="w-screen h-screen justify-center flex items-center">
            <Header className="w-[50%] md:w-[40%] lg:w-[30%] 2xl:w-[25%]"/>
            {children}
        </body>
    </html>
  );
}
