import React from "react";
import { Asset, StepperRow, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { ListHeader } from "@toss/tds-mobile";
import { FixedBottomCTA } from "@toss/tds-mobile";
function Home() {
  return (
    <>
      <>
        <Top
          title={
            <Top.TitleParagraph size={22} color={adaptive.grey900}>
              타이틀을 입력해주세요.
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
              타이틀 내용
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
                title="스텝을 3개 이상 만들고"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={2} />}
            center={
              <StepperRow.Texts
                type="A"
                title="문장에 액션을 포함해서"
                description=""
              />
            }
          />
          <StepperRow
            left={<StepperRow.NumberIcon number={3} />}
            center={
              <StepperRow.Texts
                type="A"
                title="한 줄로 적어요"
                description=""
              />
            }
            hideLine={true}
          />
        </>
        <FixedBottomCTA loading={false}>다음</FixedBottomCTA>
      </>
    </>
  );
}

Home.propTypes = {};

export default Home;
