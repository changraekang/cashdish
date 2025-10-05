import { Top, FixedBottomCTA, Asset } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface GuidebookDetailProps {
  onHidePage: () => void;
}

function GuidebookDetail({ onHidePage }: GuidebookDetailProps) {
  const handleBack = () => {
    onHidePage();
  };
  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가이드북 상세
          </Top.TitleParagraph>
        }
        right={
          <div
            onClick={handleBack}
            style={{ cursor: "pointer", padding: "8px" }}
          >
            <Asset.Icon
              frameShape={Asset.frameShape.CleanW20}
              name="icon-arrow-back-ios-mono"
              color={adaptive.grey800}
              aria-hidden={true}
            />
          </div>
        }
      />
      <div style={{ padding: "0 8px", textAlign: "center" }}>
        <h2>가이드북 상세</h2>
        <p>프리뷰(목차/대표 리스트/작성자 프로필) → 구독</p>
      </div>
      <div onClick={() => {}}>
        <FixedBottomCTA loading={false}>구독하기</FixedBottomCTA>
      </div>
    </>
  );
}

export default GuidebookDetail;
