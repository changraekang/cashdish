import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface ReceiptSelectionProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function ReceiptSelection({ onHidePage, onShowPage }: ReceiptSelectionProps) {
  const handleComplete = () => {
    onShowPage?.("review-form");
  };

  const handleBack = () => {
    onHidePage();
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            영수증 선택
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>영수증 선택</h2>
        <p>토스 연동 결제 내역 또는 영수증 사진 스캔</p>
      </div>
      <div onClick={handleComplete}>
        <FixedBottomCTA loading={false}>선택 완료</FixedBottomCTA>
      </div>
    </>
  );
}

export default ReceiptSelection;
