import nextra from 'nextra'

// 使用正确的Nextra配置格式
const withNextra = nextra({
  // 不需要额外配置，使用默认设置
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
})