import {
  Top,
  Asset,
  Paragraph,
  List,
  ListRow,
  ListHeader,
  Badge,
  Border,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useMemo, useState } from "react";

interface HomeProps {
  onShowPage: (page: string) => void;
}

interface PropertyItem {
  id: string;
  rank: number;
  name: string;
  address: string;
  type: string;
  tradeType: string;
  price: string;
  area: string;
  views: string;
  change: string;
}

const TIMEFRAME_OPTIONS = [
  { id: "7d", label: "최근 7일" },
  { id: "30d", label: "최근 30일" },
  { id: "90d", label: "최근 90일" },
];

const PROPERTY_DATA: Record<string, PropertyItem[]> = {
  "7d": [
    {
      id: "hopyeong-doosan",
      rank: 1,
      name: "호평두산위브파크",
      address: "경기도 남양주시 호평동 622",
      type: "아파트",
      tradeType: "매매",
      price: "7억 5,800",
      area: "84㎡",
      views: "7,810회 조회",
      change: "지난주 대비 +12.5%",
    },
    {
      id: "daerim-planet",
      rank: 2,
      name: "대림e-편한세상(검단2지구6BL1L)",
      address: "인천광역시 서구 마전동",
      type: "아파트",
      tradeType: "매매",
      price: "3억 5,400",
      area: "59㎡",
      views: "5,120회 조회",
      change: "지난주 대비 +8.2%",
    },
    {
      id: "jije-station",
      rank: 3,
      name: "지제역 푸르지오 엘리아츠",
      address: "경기도 평택시 지제동",
      type: "아파트",
      tradeType: "매매",
      price: "6억 9,200",
      area: "84㎡",
      views: "4,880회 조회",
      change: "지난주 대비 +6.4%",
    },
    {
      id: "banpo-riverpark",
      rank: 4,
      name: "반포자이",
      address: "서울특별시 서초구 반포동",
      type: "아파트",
      tradeType: "매매",
      price: "24억 2,000",
      area: "84㎡",
      views: "4,110회 조회",
      change: "지난주 대비 +3.1%",
    },
    {
      id: "pangyo-prugio",
      rank: 5,
      name: "판교더샵포레스트",
      address: "경기도 성남시 분당구 삼평동",
      type: "아파트",
      tradeType: "매매",
      price: "17억 8,500",
      area: "101㎡",
      views: "3,860회 조회",
      change: "지난주 대비 +4.6%",
    },
  ],
  "30d": [
    {
      id: "pangyo-prugio",
      rank: 1,
      name: "판교더샵포레스트",
      address: "경기도 성남시 분당구 삼평동",
      type: "아파트",
      tradeType: "매매",
      price: "17억 8,500",
      area: "101㎡",
      views: "28,430회 조회",
      change: "전월 대비 +18.3%",
    },
    {
      id: "suseo-forest",
      rank: 2,
      name: "수서역센트럴푸르지오",
      address: "서울특별시 강남구 수서동",
      type: "아파트",
      tradeType: "매매",
      price: "15억 2,000",
      area: "84㎡",
      views: "25,180회 조회",
      change: "전월 대비 +10.2%",
    },
    {
      id: "gwanggyo-hillstate",
      rank: 3,
      name: "광교힐스테이트레이크",
      address: "경기도 수원시 영통구 하동",
      type: "아파트",
      tradeType: "매매",
      price: "9억 7,400",
      area: "99㎡",
      views: "23,040회 조회",
      change: "전월 대비 +7.9%",
    },
    {
      id: "mapo-prugio",
      rank: 4,
      name: "마포프레스티지자이",
      address: "서울특별시 마포구 아현동",
      type: "아파트",
      tradeType: "매매",
      price: "18억 3,600",
      area: "84㎡",
      views: "20,810회 조회",
      change: "전월 대비 +5.6%",
    },
    {
      id: "songdo-prugio",
      rank: 5,
      name: "송도더샵센트럴시티",
      address: "인천광역시 연수구 송도동",
      type: "아파트",
      tradeType: "매매",
      price: "8억 9,100",
      area: "84㎡",
      views: "18,540회 조회",
      change: "전월 대비 +4.2%",
    },
  ],
  "90d": [
    {
      id: "banpo-riverpark",
      rank: 1,
      name: "반포자이",
      address: "서울특별시 서초구 반포동",
      type: "아파트",
      tradeType: "매매",
      price: "24억 2,000",
      area: "84㎡",
      views: "79,420회 조회",
      change: "분기 대비 +9.3%",
    },
    {
      id: "jamsil-lotte",
      rank: 2,
      name: "잠실엘스",
      address: "서울특별시 송파구 잠실동",
      type: "아파트",
      tradeType: "매매",
      price: "20억 1,500",
      area: "84㎡",
      views: "75,810회 조회",
      change: "분기 대비 +7.1%",
    },
    {
      id: "pangyo-prugio",
      rank: 3,
      name: "판교더샵포레스트",
      address: "경기도 성남시 분당구 삼평동",
      type: "아파트",
      tradeType: "매매",
      price: "17억 8,500",
      area: "101㎡",
      views: "72,440회 조회",
      change: "분기 대비 +6.5%",
    },
    {
      id: "daechi-triple",
      rank: 4,
      name: "대치쌍용1차",
      address: "서울특별시 강남구 대치동",
      type: "아파트",
      tradeType: "매매",
      price: "21억 7,300",
      area: "84㎡",
      views: "68,120회 조회",
      change: "분기 대비 +4.8%",
    },
    {
      id: "hwigyeong-lotte",
      rank: 5,
      name: "휘경롯데캐슬",
      address: "서울특별시 동대문구 휘경동",
      type: "아파트",
      tradeType: "매매",
      price: "12억 4,900",
      area: "84㎡",
      views: "65,780회 조회",
      change: "분기 대비 +3.5%",
    },
  ],
};

function Home({ onShowPage }: HomeProps) {
  void onShowPage;

  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("7d");

  const properties = useMemo<PropertyItem[]>(() => {
    return PROPERTY_DATA[selectedTimeframe] ?? [];
  }, [selectedTimeframe]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: adaptive.background,
      }}
    >
      <Top
        title={
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <Top.TitleParagraph size={22} color={adaptive.grey900}>
              안전진사
            </Top.TitleParagraph>
            <Paragraph typography="t6" color={adaptive.grey600}>
              가장 많이 본 · 조회된 인기 매물을 확인해 보세요
            </Paragraph>
          </div>
        }
        right={
          <div style={{ display: "flex", gap: "8px" }}>
            <Asset.Icon
              frameShape={Asset.frameShape.CircleW36}
              name="icon-search-mono"
              backgroundColor={adaptive.grey100}
              color={adaptive.grey600}
              aria-hidden={true}
            />
            <Asset.Icon
              frameShape={Asset.frameShape.CircleW36}
              name="icon-jelly-menu"
              backgroundColor={adaptive.grey100}
              color={adaptive.grey600}
              aria-hidden={true}
            />
          </div>
        }
      />

      <div
        style={{
          margin: "0 auto",
          maxWidth: "375px",
          padding: "0 16px 96px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Paragraph typography="t7" color={adaptive.grey500}>
          10월 5일 15:45 기준
        </Paragraph>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <ListHeader
            title={
              <ListHeader.TitleParagraph
                typography="t3"
                fontWeight="bold"
                color={adaptive.grey900}
              >
                많이 분석한 집
              </ListHeader.TitleParagraph>
            }
            description={
              <Paragraph typography="t6" color={adaptive.grey600}>
                분석 데이터로 선정한 인기 급상승 아파트를 살펴보세요
              </Paragraph>
            }
            descriptionPosition="bottom"
          />

          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {TIMEFRAME_OPTIONS.map((option) => {
              const isSelected = option.id === selectedTimeframe;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedTimeframe(option.id)}
                  style={{
                    flex: 1,
                    minHeight: "40px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: isSelected
                      ? adaptive.grey900
                      : adaptive.grey100,
                    color: isSelected ? adaptive.background : adaptive.grey700,
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <Border variant="height8" />

        <List>
          {properties.map((property) => (
            <ListRow
              key={`${selectedTimeframe}-${property.id}`}
              horizontalPadding="small"
              verticalPadding="xlarge"
              left={
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: adaptive.grey100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Paragraph
                    typography="t4"
                    fontWeight="bold"
                    color={adaptive.grey700}
                  >
                    {property.rank}
                  </Paragraph>
                </div>
              }
              contents={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    <Paragraph
                      typography="t4"
                      fontWeight="bold"
                      color={adaptive.grey900}
                    >
                      {property.name}
                    </Paragraph>
                    <Badge variant="weak" color="blue" size="small">
                      {property.type}
                    </Badge>
                  </div>
                  <Paragraph typography="t6" color={adaptive.grey600}>
                    {property.address}
                  </Paragraph>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Badge variant="fill" color="blue" size="small">
                      {property.tradeType}
                    </Badge>
                    <Paragraph
                      typography="t5"
                      fontWeight="bold"
                      color={adaptive.grey900}
                    >
                      {property.price}
                    </Paragraph>
                    <Paragraph typography="t7" color={adaptive.grey500}>
                      {property.area}
                    </Paragraph>
                  </div>
                </div>
              }
              right={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "4px",
                  }}
                >
                  <Paragraph
                    typography="t6"
                    fontWeight="bold"
                    color={adaptive.grey900}
                  >
                    {property.views}
                  </Paragraph>
                  <Paragraph typography="t7" color={adaptive.blue600}>
                    {property.change}
                  </Paragraph>
                </div>
              }
            />
          ))}
        </List>
      </div>
    </div>
  );
}

export default Home;
