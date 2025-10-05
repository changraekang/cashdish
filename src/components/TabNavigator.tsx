import { Asset, Text } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useMemo, useState } from "react";
import styled from "styled-components";
import GuidebookScreen from "../screens/GuidebookScreen";
import HomeScreen from "../screens/HomeScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";

type TabKey = "home" | "review" | "guidebook" | "settings";

type TabItem = {
  key: TabKey;
  label: string;
  icon: string;
  component: () => JSX.Element;
};

const TAB_ITEMS: TabItem[] = [
  { key: "home", label: "홈", icon: "icon-home-mono", component: HomeScreen },
  {
    key: "review",
    label: "리뷰",
    icon: "icon-pencil-line-mono",
    component: ReviewScreen,
  },
  {
    key: "guidebook",
    label: "가이드북",
    icon: "icon-documents-lines-tab",
    component: GuidebookScreen,
  },
  {
    key: "settings",
    label: "설정",
    icon: "icon-line-three-mono",
    component: SettingsScreen,
  },
];

function TabNavigator() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  const ActiveComponent = useMemo(
    () => TAB_ITEMS.find((item) => item.key === activeTab)?.component ?? HomeScreen,
    [activeTab]
  );

  return (
    <AppBackground>
      <Viewport>
        <ScreenArea>
          <ActiveComponent />
        </ScreenArea>
        <BottomNav role="tablist" aria-label="cashdish main navigation">
          {TAB_ITEMS.map((item) => (
            <TabButton
              key={item.key}
              type="button"
              role="tab"
              aria-selected={item.key === activeTab}
              $active={item.key === activeTab}
              onClick={() => setActiveTab(item.key)}
            >
              <Asset.Icon
                frameShape={Asset.frameShape.CleanW24}
                name={item.icon}
                color={item.key === activeTab ? adaptive.blue500 : adaptive.grey500}
                aria-hidden
              />
              <TabText
                typography="st13"
                fontWeight="medium"
                color={item.key === activeTab ? adaptive.grey900 : adaptive.grey600}
              >
                {item.label}
              </TabText>
            </TabButton>
          ))}
        </BottomNav>
      </Viewport>
    </AppBackground>
  );
}

const AppBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: ${adaptive.grey50};
`;

const Viewport = styled.div`
  flex: 1;
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${adaptive.background};
`;

const ScreenArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  padding-bottom: calc(12px + env(safe-area-inset-bottom));
  background: ${adaptive.background};
  border-top: 1px solid ${adaptive.grey200};
`;

const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const TabText = styled(Text)`
  line-height: 1;
`;

export default TabNavigator;
