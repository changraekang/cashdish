/* eslint-disable react-refresh/only-export-components */
import { Global, ThemeProvider, css, keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import type { FC } from "react";

export type { Theme } from "@emotion/react";

export const createGlobalStyle = (
  styles: TemplateStringsArray,
  ...interpolations: Array<unknown>
) => {
  const globalStyles = css(styles, ...interpolations);
  const GlobalStyle: FC = () => <Global styles={globalStyles} />;
  return GlobalStyle;
};

export { css, keyframes, ThemeProvider, useTheme };

export default styled;
