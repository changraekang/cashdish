import { Top, FixedBottomCTA } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface CreateGuidebookProps {
  onHidePage: () => void;
}

function CreateGuidebook({ onHidePage }: CreateGuidebookProps) {
  const handleBack = () => {
    onHidePage();
  };
  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가이드북 만들기
          </Top.TitleParagraph>
        }
        left={<Top.BackButton onClick={handleBack} />}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>내 가이드북 생성</h2>
        <p>제목/설명/대상/구성 규칙(태그·지역·가격대)</p>
      </div>
      <div onClick={() => {}}>
        <FixedBottomCTA loading={false}>발행</FixedBottomCTA>
      </div>
    </>
  );
}

export default CreateGuidebook;
