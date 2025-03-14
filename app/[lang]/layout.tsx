import {
  Layout,
  Navbar,
  Footer,
  LocaleSwitch,
  LastUpdated,
} from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { Head } from "nextra/components";
import { getDictionary, getDirection } from "@app/_dictionaries/get-dictionary";
import "@app/styles.css";

export const metadata = {
  title: "Zapmyco Docs",
  description: "Documentation for Zapmyco",
};

export default async function RootLayout({ children, params }) {
  const navbar = (
    <Navbar logo={<span style={{ fontWeight: "bold" }}>Zapmyco</span>}>
      <LocaleSwitch lite />
    </Navbar>
  );

  const footer = (
    <Footer>Apache 2.0 {new Date().getFullYear()} © Zapmyco.</Footer>
  );
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const pageMap = await getPageMap(`/${lang}`);

  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head>
        <meta name="description" content="Documentation for Zapmyco" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/apmyco/zapmyco"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          i18n={[
            { locale: "en", name: "English" },
            { locale: "zh", name: "中文" },
          ]}
          toc={{
            backToTop: dictionary.backToTop,
          }}
          editLink={dictionary.editPage}
          pageMap={pageMap}
          nextThemes={{ defaultTheme: "dark" }}
          lastUpdated={<LastUpdated>{dictionary.lastUpdated}</LastUpdated>}
          themeSwitch={{
            dark: dictionary.dark,
            light: dictionary.light,
            system: dictionary.system,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
