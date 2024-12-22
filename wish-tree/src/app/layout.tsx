import "./globals.css";
import Header from "../../shared/componets/atoms/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
        <body className="w-screen h-dvh justify-center flex">
            <Header className="relative h-[5rem] w-[50%] mobile:w-[35%] laptop:w-[25%] desktop:w-[20%] top-20"/>
            {children}
        </body>
    </html>
  );
}
