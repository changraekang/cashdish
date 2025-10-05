import { Button, List, ListRow, SearchField, Text, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import styled from "styled-components";

const todaysPicks = [
  {
    emoji: "🍜",
    name: "소월길 모던라멘",
    summary: "명란 라멘이 오늘 가장 사랑받고 있어요",
    distance: "도보 8분",
  },
  {
    emoji: "🥩",
    name: "성수 로스터리 스테이크",
    summary: "25만 원대 시그니처 코스가 인기예요",
    distance: "지하철 2정거장",
  },
  {
    emoji: "🍷",
    name: "연남 와인바 레브",
    summary: "가벼운 내추럴 와인이 준비됐어요",
    distance: "차로 10분",
  },
];

const similarFavorites = [
  {
    emoji: "🍣",
    name: "을지로 스탠딩 스시",
    summary: "또래 연봉대 사용자가 가장 많이 찾았어요",
  },
  {
    emoji: "🍕",
    name: "한남 네아폴리탄",
    summary: "평일 저녁 2인 예약이 쉽게 열려요",
  },
  {
    emoji: "🍺",
    name: "합정 크래프트하우스",
    summary: "금요일 퇴근 후 즐기기 좋은 맥주집이에요",
  },
];

const freshUpdates = [
  {
    emoji: "📝",
    title: "밍밍 님이 홍대 루프탑 리뷰를 올렸어요",
    detail: "감성 가득 테라스와 코스 요리를 기록했어요",
  },
  {
    emoji: "📘",
    title: "혜인 님의 ‘주말 점심 특선’ 가이드북",
    detail: "월 200만 원대 소비자 추천 리스트를 선보였어요",
  },
  {
    emoji: "🧁",
    title: "새 디저트 가이드북이 등록됐어요",
    detail: "판교 직장인 단골 카페 12곳을 모았어요",
  },
];

function HomeScreen() {
  return (
    <ScreenContainer>
      <Top>
        <Top.TitleParagraph size="large">캐시디시 추천을 즐겨봐요</Top.TitleParagraph>
        <Top.SubtitleParagraph size="small">
          소득·지출·선호 데이터를 반영했어요
        </Top.SubtitleParagraph>
      </Top>

      <SearchBar>
        <SearchField placeholder="동네나 메뉴를 바로 찾아봐요" aria-label="search restaurants" />
      </SearchBar>

      <Section>
        <SectionHeading>
          <Text typography="t3" fontWeight="bold" color={adaptive.grey900}>
            오늘 추천을 확인해요
          </Text>
          <Text typography="st11" color={adaptive.grey600}>
            지금 취향과 예산에 꼭 맞게 골랐어요
          </Text>
        </SectionHeading>
        <List>
          {todaysPicks.map((item) => (
            <ListRow
              key={item.name}
              border="indented"
              withTouchEffect
              left={<Emoji>{item.emoji}</Emoji>}
              contents={
                <RowTexts>
                  <Text typography="t5" fontWeight="bold" color={adaptive.grey900}>
                    {item.name}
                  </Text>
                  <Text typography="st11" color={adaptive.grey600}>
                    {item.summary}
                  </Text>
                </RowTexts>
              }
              right={
                <ListRowRight typography="st11" color={adaptive.blue500}>
                  {item.distance}
                </ListRowRight>
              }
            />
          ))}
        </List>
        <Button color="primary" size="large" display="full">
          추천 루트를 저장해요
        </Button>
      </Section>

      <Section>
        <SectionHeading>
          <Text typography="t3" fontWeight="bold" color={adaptive.grey900}>
            나와 비슷한 사람이 자주 갔어요
          </Text>
          <Text typography="st11" color={adaptive.grey600}>
            연령·소득·동행 데이터를 반영했어요
          </Text>
        </SectionHeading>
        <List>
          {similarFavorites.map((item) => (
            <ListRow
              key={item.name}
              border="indented"
              left={<Emoji>{item.emoji}</Emoji>}
              contents={
                <RowTexts>
                  <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                    {item.name}
                  </Text>
                  <Text typography="st12" color={adaptive.grey600}>
                    {item.summary}
                  </Text>
                </RowTexts>
              }
            />
          ))}
        </List>
      </Section>

      <Section>
        <SectionHeading>
          <Text typography="t3" fontWeight="bold" color={adaptive.grey900}>
            최신 리뷰와 가이드북을 살펴봐요
          </Text>
          <Text typography="st11" color={adaptive.grey600}>
            구독 중인 큐레이션을 바로 확인해요
          </Text>
        </SectionHeading>
        <List>
          {freshUpdates.map((item) => (
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
            />
          ))}
        </List>
        <Button color="light" size="large" display="full">
          더 많은 소식을 모아봐요
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

const SearchBar = styled.div`
  padding: 0 4px;
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

const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RowTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ListRowRight = styled(Text)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const Emoji = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  font-size: 20px;
  background: ${adaptive.grey100};
`;

export default HomeScreen;
