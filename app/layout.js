import { Signika } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";
import FooterBottom from "@/components/footer/footer";
import Dependency from "@/utilities/dependency";
import RequestCallStyle from "@/components/callToactionFooter/callToAction";
import Footer from "@/components/digiFooter/digiFooter";
import { ToastContainer } from "react-toastify";
import { StateProvider } from "@/hooks/StateContext";
import Header from "@/components/navbar/Header";
import SeoStructureData from "@/seo/SeoStructuredData";
import PWAServiceWorker from "@/utilities/PWAServiceWorker";
import Devider from "@/utilities/devider";

const signika = Signika({ subsets: ["latin"] });

// Metadata for the entire site (update this section as needed)
export const viewport = {
  themeColor: " #df0a0a", // Place themeColor here
};

export const metadata = {
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-32x32.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SeoStructureData />
      <PWAServiceWorker />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PFVPPJL');`,
        }}
      ></Script>

      <body className={signika.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFVPPJL"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <ToastContainer />
        <StateProvider>
          <Header />
        </StateProvider>
        <Devider />
        <Dependency />
        {children}
        <RequestCallStyle />
        <Footer />
        <FooterBottom />
      </body>
    </html>
  );
}
