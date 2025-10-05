import { List, ListRow, Paragraph, Slider, Text, Top } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useState } from "react";
import styled from "styled-components";

const foodPreferences = [
  { label: "한식", active: true },
  { label: "일식", active: true },
  { label: "디저트", active: false },
  { label: "양식", active: true },
  { label: "바", active: false },
];

const areaPreferences = [
  { label: "강남", active: true },
  { label: "성수", active: true },
  { label: "홍대", active: false },
  { label: "판교", active: true },
  { label: "한남", active: false },
];

const companionPreferences = [
  { label: "혼밥", active: true },
  { label: "커플", active: true },
  { label: "친구", active: true },
  { label: "가족", active: false },
  { label: "단체", active: false },
];

function formatCurrency(value: number) {
  return `${value.toLocaleString()}만원`;
}

function SettingsScreen() {
  const [income, setIncome] = useState(320);
  const [asset, setAsset] = useState(1500);
  const [spending, setSpending] = useState(180);

  return (
    <ScreenContainer>
      <Top>
        <Top.TitleParagraph size="large">나의 조건을 정리해봐요</Top.TitleParagraph>
        <Top.SubtitleParagraph size="small">
          정확한 데이터를 입력할수록 추천 품질이 올라가요
        </Top.SubtitleParagraph>
      </Top>

      <ProfileSection>
        <Avatar aria-hidden>🍽️</Avatar>
        <div>
          <Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            민서 님
          </Text>
          <Text typography="st11" color={adaptive.grey600}>
            취향을 분석하고 맞춤 루트를 추천해요
          </Text>
        </div>
      </ProfileSection>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            자산·소득·지출을 조정해요
          </Paragraph.Text>
          <Paragraph.Text typography="st11" color={adaptive.grey600}>
            범위를 조정하면 홈 추천과 가이드북이 새로 고쳐져요
          </Paragraph.Text>
        </Paragraph>
        <List>
          <ListRow
            border="indented"
            contents={
              <RowBlock>
                <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                  월 소득 {formatCurrency(income)}
                </Text>
                <Slider
                  min={100}
                  max={800}
                  step={10}
                  value={income}
                  onValueChange={setIncome}
                  aria-label="monthly income"
                />
              </RowBlock>
            }
          />
          <ListRow
            border="indented"
            contents={
              <RowBlock>
                <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                  총 자산 {formatCurrency(asset)}
                </Text>
                <Slider
                  min={200}
                  max={4000}
                  step={50}
                  value={asset}
                  onValueChange={setAsset}
                  aria-label="total asset"
                />
              </RowBlock>
            }
          />
          <ListRow
            border="indented"
            contents={
              <RowBlock>
                <Text typography="t6" fontWeight="bold" color={adaptive.grey900}>
                  월 지출 {formatCurrency(spending)}
                </Text>
                <Slider
                  min={80}
                  max={400}
                  step={10}
                  value={spending}
                  onValueChange={setSpending}
                  aria-label="monthly spending"
                />
              </RowBlock>
            }
          />
        </List>
      </Section>

      <Section>
        <Paragraph>
          <Paragraph.Text typography="t4" fontWeight="bold" color={adaptive.grey900}>
            선호 정보를 선택해요
          </Paragraph.Text>
          <Paragraph.Text typography="st11" color={adaptive.grey600}>
            자주 선택한 항목은 진한 파랑으로 표시돼요
          </Paragraph.Text>
        </Paragraph>
        <PreferenceBlock>
          <PreferenceTitle typography="st11" color={adaptive.grey600}>
            선호 음식
          </PreferenceTitle>
          <ChipGrid>
            {foodPreferences.map((option) => (
              <Chip key={option.label} $active={option.active}>
                {option.label}
              </Chip>
            ))}
          </ChipGrid>
        </PreferenceBlock>
        <PreferenceBlock>
          <PreferenceTitle typography="st11" color={adaptive.grey600}>
            선호 지역
          </PreferenceTitle>
          <ChipGrid>
            {areaPreferences.map((option) => (
              <Chip key={option.label} $active={option.active}>
                {option.label}
              </Chip>
            ))}
          </ChipGrid>
        </PreferenceBlock>
        <PreferenceBlock>
          <PreferenceTitle typography="st11" color={adaptive.grey600}>
            동행 유형
          </PreferenceTitle>
          <ChipGrid>
            {companionPreferences.map((option) => (
              <Chip key={option.label} $active={option.active}>
                {option.label}
              </Chip>
            ))}
          </ChipGrid>
        </PreferenceBlock>
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

const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 20px;
  background: ${adaptive.floatBackground};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
`;

const Avatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 18px;
  font-size: 28px;
  background: ${adaptive.blue50};
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

const RowBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PreferenceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PreferenceTitle = styled(Text)`
  text-transform: uppercase;
`;

const ChipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button<{ $active?: boolean }>`
  padding: 8px 14px;
  border-radius: 9999px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background: ${({ $active }) => ($active ? adaptive.blue50 : adaptive.grey100)};
  color: ${({ $active }) => ($active ? adaptive.blue700 : adaptive.grey700)};
  cursor: pointer;
`;

export default SettingsScreen;
