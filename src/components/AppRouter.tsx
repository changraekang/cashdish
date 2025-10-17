import { TabProvider } from "../contexts/TabContext";
import MainTabs from "./MainTabs";
import Init from "../pages/Init";
import GuidebookDetail from "../pages/GuidebookDetail";
import TossLogin from "../pages/TossLogin";
import { useState } from "react";

function AppRouter() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("");

  const handleInitComplete = () => {
    setIsInitialized(true);
  };

  const handleShowPage = (page: string) => {
    setCurrentPage(page);
  };

  const handleHidePage = () => {
    setCurrentPage("");
  };

  if (!isInitialized) {
    return <Init onComplete={handleInitComplete} />;
  }

  // 가이드북 상세 페이지 라우팅
  if (currentPage.startsWith("guidebook-detail-")) {
    return (
      <GuidebookDetail
        onHidePage={handleHidePage}
        guidebookId={currentPage.replace("guidebook-detail-", "")}
      />
    );
  }

  // 토스 로그인 페이지 라우팅
  if (currentPage === "toss-login") {
    return <TossLogin onHidePage={handleHidePage} />;
  }

  return (
    <TabProvider onShowPage={handleShowPage}>
      <MainTabs />
    </TabProvider>
  );
}

export default AppRouter;
