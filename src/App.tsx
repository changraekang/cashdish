import "./App.css";
import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <TDSMobileAITProvider>
      <AppRouter />
    </TDSMobileAITProvider>
  );
}

export default App;
