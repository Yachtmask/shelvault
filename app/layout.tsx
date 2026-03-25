import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body className="bg-animate">
        <Header />
        {children}
      </body>
    </html>
  );
}
