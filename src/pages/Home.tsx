import { Top, Asset, Paragraph, List, ListRow } from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useState } from "react";

interface HomeProps {
  onShowPage: (page: string) => void;
}

function Home({ onShowPage }: HomeProps) {
  const [selectedTab, setSelectedTab] = useState<"recommend" | "guidebook">(
    "recommend"
  );
  const [selectedSort, setSelectedSort] = useState<"price" | "distance">(
    "price"
  );

  const handleWriteReview = () => {
    onShowPage("write-review");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: adaptive.background,
      }}
    >
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            캐쉬디쉬
          </Top.TitleParagraph>
        }
        right={
          <div
            onClick={handleWriteReview}
            style={{ cursor: "pointer", padding: "8px" }}
          ></div>
        }
      />

      {/* 검색바 */}
      <div style={{ padding: "0 8px" }}>
        <div
          style={{
            backgroundColor: adaptive.grey50,
            borderRadius: "12px",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            maxWidth: "375px",
            margin: "0 auto",
          }}
        >
          <Asset.Icon
            frameShape={Asset.frameShape.CleanW20}
            name="icon-search-mono"
            color={adaptive.grey400}
            aria-hidden={true}
          />
          <span style={{ color: adaptive.grey500, fontSize: "16px" }}>
            지역, 음식, 키워드로 검색해요
          </span>
        </div>
      </div>

      {/* 탭 섹션 */}
      <div style={{ padding: "0 8px" }}>
        <div
          style={{
            display: "flex",
            backgroundColor: adaptive.grey100,
            borderRadius: "8px",
            padding: "4px",
            maxWidth: "375px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedTab("recommend")}
            style={{
              flex: 1,
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              backgroundColor:
                selectedTab === "recommend" ? adaptive.grey800 : "transparent",
              color:
                selectedTab === "recommend"
                  ? adaptive.background
                  : adaptive.grey600,
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            추천
          </button>
          <button
            onClick={() => setSelectedTab("guidebook")}
            style={{
              flex: 1,
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              backgroundColor:
                selectedTab === "guidebook" ? adaptive.grey800 : "transparent",
              color:
                selectedTab === "guidebook"
                  ? adaptive.background
                  : adaptive.grey600,
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            가이드북
          </button>
        </div>
      </div>

      {/* 정렬 필터 */}
      <div style={{ padding: "0 8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "375px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <select
              value={selectedSort}
              onChange={(e) =>
                setSelectedSort(e.target.value as "price" | "distance")
              }
              style={{
                borderRadius: "6px",
                border: `1px solid ${adaptive.grey200}`,
                backgroundColor: adaptive.background,
                fontSize: "14px",
                color: adaptive.grey700,
                cursor: "pointer",
              }}
            >
              <option value="price">가격순</option>
              <option value="distance">거리순</option>
            </select>
          </div>
          <span style={{ fontSize: "12px", color: adaptive.grey500 }}>
            10월 5일 15:45 기준
          </span>
        </div>
      </div>

      {/* 맛집 목록 */}
      <div style={{ padding: "0 8px" }}>
        {selectedTab === "recommend" ? (
          <>
            {/* 맛집 리스트 */}
            <List style={{ maxWidth: "375px", margin: "0 auto" }}></List>
          </>
        ) : (
          <>
            {/* 가이드북 리스트 */}
            <List style={{ maxWidth: "375px", margin: "0 auto" }}>
              <ListRow
                contents={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: adaptive.grey500,
                          backgroundColor: adaptive.grey100,
                          padding: "2px 6px",
                          borderRadius: "4px",
                        }}
                      >
                        1
                      </span>
                      <Paragraph
                        color={adaptive.grey900}
                        fontWeight="bold"
                        typography="t4"
                      >
                        월 200만원대 소비자를 위한 맛집 가이드
                      </Paragraph>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{ fontSize: "15px", color: adaptive.grey700 }}
                      >
                        가성비 맛집
                      </span>
                      <span
                        style={{ fontSize: "15px", color: adaptive.grey700 }}
                      >
                        <Asset.Icon
                          frameShape={Asset.frameShape.CleanW24}
                          backgroundColor="transparent"
                          name="icon-jelly-star"
                          aria-hidden={true}
                          ratio="1/1"
                        />{" "}
                        4.8
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{ fontSize: "15px", color: adaptive.grey700 }}
                      >
                        혼밥
                      </span>
                      <span
                        style={{ fontSize: "15px", color: adaptive.grey700 }}
                      >
                        리뷰 45개
                      </span>
                    </div>
                  </div>
                }
                right={
                  <div
                    style={{
                      textAlign: "right",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                        color: adaptive.grey900,
                        fontWeight: "bold",
                      }}
                    >
                      가이드북
                    </span>
                    <span style={{ fontSize: "15px", color: adaptive.grey700 }}>
                      15개 맛집
                    </span>
                    <span style={{ fontSize: "15px", color: adaptive.grey700 }}>
                      구독중
                    </span>
                  </div>
                }
                verticalPadding="large"
              />
            </List>
          </>
        )}
      </div>

      <div style={{ height: "100px" }} />
    </div>
  );
}

export default Home;
