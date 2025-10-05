import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface ReviewFormProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function ReviewForm({ onHidePage, onShowPage }: ReviewFormProps) {
  const handleNext = () => {
    onShowPage?.("review-publish");
  };

  const handleBack = () => {
    onHidePage();
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            사진/후기 작성
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>사진/후기 작성</h2>
        <p>최대 10장, 별점·가격대·재방문 의사·카테고리·태그·동행 유형</p>
      </div>
    </>
  );
}

export default ReviewForm;
