import "./globals.css";

export const metadata = {
  title: "Nova Mine",
  description: "Nova Mine Telegram Mini App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
