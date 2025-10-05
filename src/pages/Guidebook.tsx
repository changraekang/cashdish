import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface GuidebookProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function Guidebook({ onHidePage, onShowPage }: GuidebookProps) {
  const handleCreateGuidebook = () => {
    onShowPage?.("create-guidebook");
  };

  const handleGuidebookDetail = (id: string) => {
    onShowPage?.("guidebook-detail");
  };

  const handleBack = () => {
    onHidePage();
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가이드북
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>가이드북 스토어</h2>
        <p>혼밥/가성비/미슐랭/동네 등 카테고리별 가이드북</p>
        <button
          onClick={() => handleGuidebookDetail("sample-guidebook")}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#34C759",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          가이드북 상세 보기
        </button>
      </div>
    </>
  );
}

export default Guidebook;
