import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import type { ReactNode } from 'react';

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components: Record<string, any>) {
  return {
    ...themeComponents,
    ...components,
    wrapper: ({ children, ...props }: { children: ReactNode } & Record<string, any>) => {
      // 使用类型断言来避免类型错误
      const Wrapper = themeComponents.wrapper || (({ children }: { children: ReactNode }) => <>{children}</>);
      
      // 确保传递所有必需的属性
      const wrapperProps = {
        toc: props.toc || [],
        metadata: props.metadata || {},
        ...props
      } as any; // 使用类型断言避免类型检查错误
      
      return <Wrapper {...wrapperProps}>{children}</Wrapper>;
    },
  };
}