import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    wrapper: ({ children, ...props }) => {
      const Wrapper = themeComponents.wrapper || (({ children }) => <>{children}</>);
      return <Wrapper {...props}>{children}</Wrapper>;
    },
  };
}
