import { Button, List, ListHeader, ListRow, Paragraph, Text, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import styled from "styled-components";

const myGuidebookActions = [
  {
    title: "리뷰 10개를 채우고 가이드북을 만들어요",
    detail: "주제, 설명, 대상 고객을 입력하고 맞춤 추천을 설정해요",
  },
  {
    title: "리스트 항목을 내 리뷰에서 골라요",
    detail: "태그·지역·가격대를 기준으로 자동 추천도 받아요",
  },
  {
    title: "공개 범위와 구독 여부를 정해요",
    detail: "내가 선택한 사람에게만 공유하거나 모두에게 공개해요",
  },
];

const subscribedGuidebooks = [
  {
    title: "월 200~300만 원대 디너 추천",
    detail: "비슷한 소득대 사용자가 즐겨 찾는 맛집 14선",
    emoji: "🍽️",
  },
  {
    title: "혼밥이 편한 홍대 라인업",
    detail: "퇴근 후 바로 들르기 좋은 1인 식당 9곳",
    emoji: "🍛",
  },
  {
    title: "데이오프 브런치 루트",
    detail: "주말 오전에 가볍게 돌기 좋은 카페·베이커리",
    emoji: "🥐",
  },
];

const storeCategories = [
  { emoji: "🔥", title: "이번 주 트렌드", detail: "가성비부터 미슐랭까지 실시간 인기" },
  { emoji: "🧑‍🤝‍🧑", title: "동행 맞춤 추천", detail: "커플·단체·혼밥에 맞춘 가이드북" },
  { emoji: "🗺️", title: "동네 탐색", detail: "강남·성수·판교 등 지역별 큐레이션" },
];

function GuidebookScreen() {
  return (
    <ScreenContainer>
      <Top>
        <Top.TitleParagraph size="large">가이드북을 큐레이션해봐요</Top.TitleParagraph>
        <Top.SubtitleParagraph size="small">
          내 취향을 공유하고 새로운 큐레이션을 구독해요
        </Top.SubtitleParagraph>
      </Top>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            내 가이드북을 키워봐요
          </Paragraph.Text>
          <Paragraph.Text typography="st11" color={adaptive.grey600}>
            리뷰 10개 이상이면 만들기 버튼이 활성화돼요
          </Paragraph.Text>
        </Paragraph>
        <List>
          {myGuidebookActions.map((item) => (
            <ListRow
              key={item.title}
              border="indented"
              left={<Bullet />}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {item.title}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {item.detail}
                  </Text>
                </RowTexts>
              }
            />
          ))}
        </List>
        <Button color="primary" size="large" display="full">
          지금 가이드북을 만들어봐요
        </Button>
      </Section>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            구독 중인 가이드북을 살펴봐요
          </Paragraph.Text>
          <Paragraph.Text typography="st11" color={adaptive.grey600}>
            업데이트가 있으면 홈에서 바로 알려줄게요
          </Paragraph.Text>
        </Paragraph>
        <List>
          <ListHeader>내가 구독한 큐레이션</ListHeader>
          {subscribedGuidebooks.map((item) => (
            <ListRow
              key={item.title}
              border="indented"
              left={<Emoji>{item.emoji}</Emoji>}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {item.title}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {item.detail}
                  </Text>
                </RowTexts>
              }
              right={
                <SubscribeBadge typography="st12" fontWeight="medium" color={adaptive.blue500}>
                  업데이트 받아요
                </SubscribeBadge>
              }
            />
          ))}
        </List>
      </Section>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            스토어에서 새 큐레이션을 발견해요
          </Paragraph.Text>
        </Paragraph>
        <List>
          {storeCategories.map((item) => (
            <ListRow
              key={item.title}
              border="indented"
              left={<Emoji>{item.emoji}</Emoji>}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {item.title}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {item.detail}
                  </Text>
                </RowTexts>
              }
              right={
                <SubscribeBadge typography="st12" fontWeight="medium" color={adaptive.grey600}>
                  구독 후보 담기
                </SubscribeBadge>
              }
            />
          ))}
        </List>
        <Button color="light" size="large" display="full">
          스토어 전체를 살펴봐요
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

const Bullet = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: ${adaptive.blue200};
  display: inline-block;
  margin-top: 6px;
`;

const Emoji = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: ${adaptive.grey100};
  font-size: 18px;
`;

const SubscribeBadge = styled(Text)`
  display: inline-flex;
  align-items: center;
`;

export default GuidebookScreen;
