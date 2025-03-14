'use client'

import { Playground } from 'nextra/components'
import React from 'react'

interface CustomPlaygroundProps {
  source: string
  fallback?: React.ReactNode
}

export default function CustomPlayground({ source, fallback }: CustomPlaygroundProps) {
  // 在客户端组件内部定义组件配置
  const customComponents = {
    h2: (props: any) => <h2 {...props} className="myClass" />
  }

  return (
    <Playground
      source={source}
      components={customComponents}
      fallback={fallback || <div>Loading playground...</div>}
    />
  )
} 