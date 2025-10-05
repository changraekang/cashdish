import {
  Top,
  Asset,
  Paragraph,
  List,
  ListRow,
  ListHeader,
  Badge,
  Border,
  GridList,
  SegmentedControl,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useMemo, useState } from "react";

interface RestaurantItem {
  id: string;
  rank: number;
  name: string;
  address: string;
  category: string;
  price: string;
  rating: string;
  reviews: string;
}

const SORT_OPTIONS = [
  { id: "price", label: "가격순" },
  { id: "distance", label: "거리순" },
];

const RESTAURANT_DATA: RestaurantItem[] = [
  {
    id: "gangnam-matjip",
    rank: 1,
    name: "강남 맛집",
    address: "강남구 역삼동 123",
    category: "한식",
    price: "1인 8,000원",
    rating: "4.8",
    reviews: "리뷰 127개",
  },
  {
    id: "hongdae-matjip",
    rank: 2,
    name: "홍대 맛집",
    address: "마포구 홍대입구역",
    category: "일식",
    price: "1인 12,000원",
    rating: "4.6",
    reviews: "리뷰 89개",
  },
  {
    id: "itaewon-cafe",
    rank: 3,
    name: "이태원 카페",
    address: "용산구 이태원동",
    category: "카페",
    price: "1인 6,500원",
    rating: "4.7",
    reviews: "리뷰 156개",
  },
  {
    id: "banpo-matjip",
    rank: 4,
    name: "반포 맛집",
    address: "서초구 반포동",
    category: "양식",
    price: "1인 25,000원",
    rating: "4.9",
    reviews: "리뷰 203개",
  },
  {
    id: "myeongdong-korean",
    rank: 5,
    name: "명동 한정식",
    address: "중구 명동",
    category: "한식",
    price: "1인 15,000원",
    rating: "4.5",
    reviews: "리뷰 98개",
  },
];

function Home() {
  const [selectedSort, setSelectedSort] = useState<string>("recommend");

  const restaurants = useMemo<RestaurantItem[]>(() => {
    return RESTAURANT_DATA;
  }, []);

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph>
            당신의 지갑을 분석한 맛집 추천입니다.
          </Top.TitleParagraph>
        }
      />
      <SegmentedControl
        value={selectedSort}
        onChange={(value) => setSelectedSort(value)}
      >
        <SegmentedControl.Item value="recommend">
          추천맛집
        </SegmentedControl.Item>
        <SegmentedControl.Item value="guidebook">
          가이드북
        </SegmentedControl.Item>
      </SegmentedControl>
      <List style={{ maxWidth: "375px" }}>
        {restaurants.map((restaurant) => (
          <ListRow
            key={restaurant.id}
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
                  {restaurant.rank}
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
                    {restaurant.name}
                  </Paragraph>
                  <Badge variant="weak" color="blue" size="small">
                    {restaurant.category}
                  </Badge>
                </div>
                <Paragraph typography="t6" color={adaptive.grey600}>
                  {restaurant.address}
                </Paragraph>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Paragraph
                    typography="t5"
                    fontWeight="bold"
                    color={adaptive.grey900}
                  >
                    {restaurant.price}
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
                  <Asset.Icon
                    frameShape={Asset.frameShape.CleanW24}
                    backgroundColor="transparent"
                    name="icon-jelly-star"
                    aria-hidden={true}
                    ratio="1/1"
                    style={{ marginRight: "4px" }}
                  />
                  {restaurant.rating}
                </Paragraph>
                <Paragraph typography="t7" color={adaptive.grey500}>
                  {restaurant.reviews}
                </Paragraph>
              </div>
            }
          />
        ))}
      </List>
      <div style={{ height: "100px" }} />
    </>
  );
}

export default Home;
