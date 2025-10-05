import { Button, List, ListHeader, ListRow, Paragraph, Text, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import styled from "styled-components";

const reviewFlow = [
  {
    title: "리뷰 쓰기 버튼을 눌러요",
    detail: "홈 추천 카드에서도 바로 연결돼요",
    emoji: "➕",
  },
  {
    title: "영수증 인증 방식을 고를게요",
    detail: "토스 결제 내역이나 영수증 사진을 선택해요",
    emoji: "🧾",
  },
  {
    title: "사진과 태그를 채워요",
    detail: "최대 10장까지 업로드하고 재방문 의사를 남겨요",
    emoji: "📸",
  },
  {
    title: "공개 범위와 피드 스타일을 정해요",
    detail: "카드형·인스타형·쇼츠형 중 마음에 드는 스타일로 보여줘요",
    emoji: "🌟",
  },
];

const publishTips = [
  {
    title: "가격대와 동행을 알려줘요",
    detail: "소득·지출 데이터와 매칭돼 추천 정확도가 올라가요",
  },
  {
    title: "맛과 분위기를 솔직하게 적어줘요",
    detail: "유사 고객에게 리뷰가 자동으로 추천돼요",
  },
  {
    title: "가이드북에 담을 메뉴를 골라요",
    detail: "리뷰 10개 이상이면 내 가이드북으로 바로 연결돼요",
  },
];

function ReviewScreen() {
  return (
    <ScreenContainer>
      <Top>
        <Top.TitleParagraph size="large">리뷰를 생생하게 남겨봐요</Top.TitleParagraph>
        <Top.SubtitleParagraph size="small">
          영수증 인증부터 발행까지 가볍게 진행돼요
        </Top.SubtitleParagraph>
      </Top>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            단계대로 따라가면 3분 안에 작성해요
          </Paragraph.Text>
        </Paragraph>
        <List>
          <ListHeader>리뷰 작성 플로우</ListHeader>
          {reviewFlow.map((step) => (
            <ListRow
              key={step.title}
              border="indented"
              left={<Emoji>{step.emoji}</Emoji>}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {step.title}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {step.detail}
                  </Text>
                </RowTexts>
              }
            />
          ))}
        </List>
        <Button color="primary" size="large" display="full">
          지금 리뷰 쓰러 가요
        </Button>
      </Section>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            발행 전에 체크해요
          </Paragraph.Text>
          <Paragraph.Text typography="st11" color={adaptive.grey600}>
            정보가 채워질수록 추천 품질이 좋아져요
          </Paragraph.Text>
        </Paragraph>
        <List>
          {publishTips.map((tip) => (
            <ListRow
              key={tip.title}
              border="indented"
              left={<TipDot />}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {tip.title}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {tip.detail}
                  </Text>
                </RowTexts>
              }
            />
          ))}
        </List>
        <Button color="light" size="large" display="full">
          발행 미리보기를 확인해요
        </Button>
      </Section>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 24px 20px 120px;
  background: ${adaptive.background};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 20px;
  background: ${adaptive.floatBackground};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
`;

const RowTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Emoji = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  font-size: 18px;
  background: ${adaptive.grey100};
`;

const TipDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: ${adaptive.blue300};
  display: inline-block;
  margin-top: 6px;
`;

export default ReviewScreen;
