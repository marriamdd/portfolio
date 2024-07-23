import "./globals.css";
import Nav from "./components/Nav";

import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <div>
          <header className="m-[2rem] rounded-lg border border-[#1E2D3D] bg-[#011627]">
            {" "}
            <Nav />
          </header>
          <div
            className="content
        
        
            overflow-y-scroll pb-[5rem] mt-[7rem] mx-[6.1rem] rounded-lg border border-[#1E2D3D] bg-[#011627]"
          >
            {children}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
