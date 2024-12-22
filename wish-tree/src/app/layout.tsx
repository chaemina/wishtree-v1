import Header from "../../shared/components/atoms/icons/Header";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html>
      <body className="w-full h-screen items-center flex flex-col overflow-hidden">
        <Header className="z-10 h-[4rem] w-[50%] mobile:w-[50%] laptop:w-[40%] desktop:w-[20%] mt-10 mb-1" />
        {children}
      </body>
    </html>
  );
}
