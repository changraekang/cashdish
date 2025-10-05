import { useTab } from "../contexts/TabContext";
import { Text, Asset } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

function TabBar() {
  const { activeTab, setActiveTab } = useTab();
  return (
    <div
      style={{
        position: "fixed",
        bottom: "36px",
        padding: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        width: "328px",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "30px",
        backgroundColor: "white",
        boxShadow:
          "0px 20px 20px -16px #191F2911, 0px 40px 200px 0px #191F293f",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("home")}
      >
        <Asset.Icon
          frameShape={Asset.frameShape.CleanW24}
          name="icon-home-mono"
          color={activeTab === "home" ? adaptive.grey800 : adaptive.grey400}
          aria-hidden={true}
        />
        <Text
          display="block"
          color={activeTab === "home" ? adaptive.grey900 : adaptive.grey600}
          typography="st13"
          fontWeight="medium"
          textAlign="center"
        >
          홈
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("review")}
      >
        <Asset.Icon
          frameShape={Asset.frameShape.CleanW24}
          name="icon-pencil-line-mono"
          color={activeTab === "review" ? adaptive.grey800 : adaptive.grey400}
          aria-hidden={true}
        />
        <Text
          display="block"
          color={activeTab === "review" ? adaptive.grey900 : adaptive.grey600}
          typography="st13"
          fontWeight="medium"
          textAlign="center"
        >
          리뷰
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("guidebook")}
      >
        <Asset.Icon
          frameShape={Asset.frameShape.CleanW24}
          name="icon-documents-lines-tab"
          color={
            activeTab === "guidebook" ? adaptive.grey800 : adaptive.grey400
          }
          aria-hidden={true}
        />
        <Text
          display="block"
          color={
            activeTab === "guidebook" ? adaptive.grey900 : adaptive.grey600
          }
          typography="st13"
          fontWeight="medium"
          textAlign="center"
        >
          가이드북
        </Text>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("settings")}
      >
        <Asset.Icon
          frameShape={Asset.frameShape.CleanW24}
          name="icon-line-three-mono"
          color={activeTab === "settings" ? adaptive.grey800 : adaptive.grey400}
          aria-hidden={true}
        />

        <Text
          display="block"
          color={activeTab === "settings" ? adaptive.grey900 : adaptive.grey600}
          typography="st13"
          fontWeight="medium"
          textAlign="center"
        >
          설정
        </Text>
      </div>
    </div>
  );
}

export default TabBar;
