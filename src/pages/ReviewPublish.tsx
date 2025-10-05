import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface ReviewPublishProps {
  onHidePage: () => void;
}

function ReviewPublish({ onHidePage }: ReviewPublishProps) {
  const handlePublish = () => {
    // 발행 완료 후 메인 페이지로 돌아가기
    onHidePage();
  };

  const handleBack = () => {
    onHidePage();
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            공개 범위 설정
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>공개 범위/익명/피드 스타일</h2>
        <p>기본 카드형, 인스타 피드형(정사각), 쇼츠형(9:16) 프리뷰</p>
      </div>
      <div onClick={handlePublish}>
        <FixedBottomCTA loading={false}>발행 완료</FixedBottomCTA>
      </div>
    </>
  );
}

export default ReviewPublish;
