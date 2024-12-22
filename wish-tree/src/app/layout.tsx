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
            <Header className="relative h-[4rem] w-[50%] mobile:w-[50%] laptop:w-[40%] desktop:w-[20%] mt-10 mb-1"/>
            {children}
        </body>
    </html>
  );
}
