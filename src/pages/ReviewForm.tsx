import { Top, Asset } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface ReviewFormProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function ReviewForm({ onHidePage }: ReviewFormProps) {
  const handleBack = () => {
    onHidePage();
  };

  return (
    <div style={{ height: "100vh", backgroundColor: adaptive.background }}>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            사진/후기 작성
          </Top.TitleParagraph>
        }
        right={
          <div
            onClick={handleBack}
            style={{ cursor: "pointer", padding: "8px" }}
          >
            <Asset.Icon
              frameShape={Asset.frameShape.CleanW20}
              name="icon-x-mono"
              color={adaptive.grey800}
              aria-hidden={true}
            />
          </div>
        }
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>사진/후기 작성</h2>
        <p>최대 10장, 별점·가격대·재방문 의사·카테고리·태그·동행 유형</p>
      </div>
    </div>
  );
}

export default ReviewForm;
