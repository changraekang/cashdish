import { useTab } from "../contexts/TabContext";
import TabBar from "./TabBar";
import Home from "../pages/Home";
import WriteReview from "../pages/WriteReview";
import Guidebook from "../pages/Guidebook";
import Profile from "../pages/Profile";

// 리뷰 작성 관련 페이지들
import ReceiptSelection from "../pages/ReceiptSelection";
import ReviewForm from "../pages/ReviewForm";
import ReviewPublish from "../pages/ReviewPublish";

// 가이드북 관련 페이지들
import GuidebookDetail from "../pages/GuidebookDetail";
import CreateGuidebook from "../pages/CreateGuidebook";

// 가게 상세
import StoreDetail from "../pages/StoreDetail";

// 현재 보여질 페이지 상태 관리
import { useState } from "react";

function MainTabs() {
  const { activeTab, setActiveTab, onShowPage } = useTab();
  const [currentPage, setCurrentPage] = useState<string>("");

  // 페이지 전환 함수
  const showPage = (page: string) => {
    setCurrentPage(page);
    onShowPage(page);
  };

  const hidePage = () => {
    setCurrentPage("");
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* 메인 탭 페이지들 */}
      <div
        style={{
          display: activeTab === "home" ? "block" : "none",
          paddingBottom: "30px",
        }}
      >
        <Home onShowPage={showPage} />
      </div>

      <div
        style={{
          display: activeTab === "review" ? "block" : "none",
          paddingBottom: "40px",
        }}
      >
        <WriteReview
          onHidePage={() => setActiveTab("home")}
          onShowPage={showPage}
        />
      </div>

      <div
        style={{
          display: activeTab === "guidebook" ? "block" : "none",
          paddingBottom: "40px",
        }}
      >
        <Guidebook
          onHidePage={() => setActiveTab("home")}
          onShowPage={showPage}
        />
      </div>

      <div
        style={{
          display: activeTab === "settings" ? "block" : "none",
          paddingBottom: "80px",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
        }}
      >
        <Profile onShowPage={showPage} />
      </div>

      {/* 탭바 */}

      {/* 오버레이 페이지들 */}
      {currentPage === "write-review" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <WriteReview onHidePage={hidePage} onShowPage={showPage} />
        </div>
      )}

      {currentPage === "receipt-selection" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <ReceiptSelection onHidePage={hidePage} onShowPage={showPage} />
        </div>
      )}

      {currentPage === "review-form" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <ReviewForm onHidePage={hidePage} onShowPage={showPage} />
        </div>
      )}

      {currentPage === "review-publish" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <ReviewPublish onHidePage={hidePage} />
        </div>
      )}

      {currentPage === "guidebook" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <Guidebook onHidePage={hidePage} onShowPage={showPage} />
        </div>
      )}

      {currentPage === "guidebook-detail" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <GuidebookDetail onHidePage={hidePage} />
        </div>
      )}

      {currentPage === "create-guidebook" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <CreateGuidebook onHidePage={hidePage} />
        </div>
      )}

      {currentPage === "store-detail" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "white",
            zIndex: 1000,
          }}
        >
          <StoreDetail onHidePage={hidePage} />
        </div>
      )}
      <TabBar />
    </div>
  );
}

export default MainTabs;
