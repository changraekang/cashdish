import { Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface MapProps {
  onShowPage: (page: string) => void;
}

function Map({ onShowPage }: MapProps) {
  const handleStoreDetail = (id: string) => {
    onShowPage("store-detail");
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            지도
          </Top.TitleParagraph>
        }
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>내 주변 맛집 지도</h2>
        <p>지도/리스트 토글, 거리/점수/유사도 정렬</p>
        <button
          onClick={() => handleStoreDetail("sample-store")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#FF9500",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          가게 상세 보기
        </button>
      </div>
    </>
  );
}

export default Map;
