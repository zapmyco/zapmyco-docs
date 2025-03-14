import nextra from 'nextra'

// 使用最简单的Nextra配置，提供空对象作为最小要求
const withNextra = nextra({})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
})