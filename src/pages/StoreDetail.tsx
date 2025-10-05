import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface StoreDetailProps {
  onHidePage: () => void;
}

function StoreDetail({ onHidePage }: StoreDetailProps) {
  const handleBack = () => {
    onHidePage();
  };
  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가게 상세
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>가게 상세 페이지</h2>
        <p>리뷰·사진·가이드북 포함 여부·길찾기</p>
      </div>
      <div onClick={() => {}}>
        <FixedBottomCTA loading={false}>길찾기</FixedBottomCTA>
      </div>
    </>
  );
}

export default StoreDetail;
