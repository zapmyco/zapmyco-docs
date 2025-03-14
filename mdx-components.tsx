import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { ReactNode } from "react";

const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

export function useMDXComponents(components: Record<string, any>) {
  return {
    ...docsComponents,
    ...components,
  };
}
