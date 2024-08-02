import "./globals.css";
import Nav from "./components/Nav";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <AntdRegistry>
          <AppRouterCacheProvider
            options={{
              key: "css",
              enableCssLayer: true,
            }}
          >
            <div>
              <header className="m-[2rem] h-[57px] rounded-lg border border-[#1E2D3D] bg-[#011627]">
                {" "}
                <Nav />
              </header>

              <div
                className="content

            overflow-y-scroll pb-[5rem] mt-[7rem] mx-[6.1rem] rounded-lg border border-[#1E2D3D] bg-[#011627]"
              >
                {" "}
                {children}
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </AppRouterCacheProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
