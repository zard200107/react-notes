import "./globals.css";
import Sidebar from "@components/sidebar";
import Footer from "@components/footer";
import { locales } from "@/config";

export async function generateStaticParam() {
  return locales.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "zh" }];
}
