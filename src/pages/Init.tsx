import { Asset, StepperRow, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { ListHeader } from "@toss/tds-mobile";
import { FixedBottomCTA } from "@toss/tds-mobile";

interface InitProps {
  onComplete: () => void;
}

function Init({ onComplete }: InitProps) {
  return (
    <>
      <>
        <Top
          title={
            <Top.TitleParagraph size={22} color={adaptive.grey900}>
              캐쉬디쉬
            </Top.TitleParagraph>
          }
        />
        <>
          <Asset.Image
            frameShape={{ width: 220 }}
            src="https://static.toss.im/3d/tossmobile-kv-mobile-pay-hero.png"
            aria-hidden={true}
          />
        </>
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              내 지갑에 딱 맞는 맛집을 찾아드릴게요
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />
        <>
          <StepperRow
            left={<StepperRow.NumberIcon number={1} />}
            center={
              <StepperRow.Texts
                type="A"
                title="소득을 선택해주세요"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={2} />}
            center={
              <StepperRow.Texts
                type="A"
                title="자산을 선택해주세요"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={3} />}
            center={
              <StepperRow.Texts
                type="A"
                title="맞춤 추천 시작하기"
                description=""
              />
            }
            hideLine={true}
          />
        </>
        <div onClick={onComplete}>
          <FixedBottomCTA loading={false}>다음</FixedBottomCTA>
        </div>
      </>
    </>
  );
}

Init.propTypes = {};

export default Init;
