import "./globals.css";

import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


const styles: any = {
  body: {
    margin: 0,
    background: "radial-gradient(circle at top, #111 0%, #000 100%)",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },
};