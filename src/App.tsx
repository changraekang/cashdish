import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import { adaptive } from "@toss/tds-colors";
import { createGlobalStyle } from "styled-components";
import TabNavigator from "./components/TabNavigator";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${adaptive.grey50};
    color: ${adaptive.grey900};
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Spoqa Han Sans Neo", sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`;

function App() {
  return (
    <TDSMobileAITProvider deploymentId={() => import.meta.env.VITE_AIT_DEPLOYMENT_ID}>
      <GlobalStyle />
      <TabNavigator />
    </TDSMobileAITProvider>
  );
}

export default App;
