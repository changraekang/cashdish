import { Top, FixedBottomCTA } from "@toss/tds-mobile";
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
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
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
