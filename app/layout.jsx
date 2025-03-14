import 'nextra-theme-docs/style.css'
import '../globals.css'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
  title: 'Zapmyco Docs',
  description: 'Documentation for Zapmyco',
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={<span style={{ fontWeight: 'bold' }}>Zapmyco</span>}
    />
  )
  
  const footer = (
    <Footer>
      Apache 2.0 {new Date().getFullYear()} © Zapmyco.
    </Footer>
  )
  
  const pageMap = await getPageMap()

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
