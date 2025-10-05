import { createContext, useContext, useState, ReactNode } from "react";

type TabType = "home" | "review" | "guidebook" | "settings";

interface TabContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onShowPage: (page: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

interface TabProviderProps {
  children: ReactNode;
  onShowPage?: (page: string) => void;
}

export const TabProvider = ({ children, onShowPage }: TabProviderProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <TabContext.Provider
      value={{ activeTab, setActiveTab, onShowPage: onShowPage || (() => {}) }}
    >
      {children}
    </TabContext.Provider>
  );
};
