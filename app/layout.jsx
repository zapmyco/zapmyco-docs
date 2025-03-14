import "nextra-theme-docs/style.css";
import "../globals.css";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { Banner, Head } from "nextra/components";
export const metadata = {
  title: "Zapmyco Docs",
  description: "Documentation for Zapmyco",
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar logo={<span style={{ fontWeight: "bold" }}>Zapmyco</span>} />
  );

  const footer = (
    <Footer>Apache 2.0 {new Date().getFullYear()} © Zapmyco.</Footer>
  );

  const pageMap = await getPageMap();

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta name="description" content="Documentation for Zapmyco" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/apmyco/zapmyco"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
