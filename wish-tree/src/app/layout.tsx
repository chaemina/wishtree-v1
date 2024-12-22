import "./globals.css";
import Header from "../../shared/components/atoms/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <body className="w-screen h-dvh items-center flex flex-col">
            <Header className="relative h-[5rem] w-[50%] mobile:w-[35%] laptop:w-[30%] desktop:w-[20%] mt-10"/>
            {children}
        </body>
    </html>
  );
}
