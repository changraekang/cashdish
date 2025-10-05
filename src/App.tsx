import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TDSMobileAITProvider>
      <Home />
    </TDSMobileAITProvider>
  );
}

export default App;
