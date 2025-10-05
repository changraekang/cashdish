import { TabProvider } from "../contexts/TabContext";
import MainTabs from "./MainTabs";
import Init from "../pages/Init";
import { useState } from "react";

function AppRouter() {
  const [isInitialized, setIsInitialized] = useState(false);

  const handleInitComplete = () => {
    setIsInitialized(true);
  };

  if (!isInitialized) {
    return <Init onComplete={handleInitComplete} />;
  }

  return (
    <TabProvider onShowPage={() => {}}>
      <MainTabs />
    </TabProvider>
  );
}

export default AppRouter;
