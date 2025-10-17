import {
  Top,
  Asset,
  List,
  ListRow,
  Border,
  ListHeader,
  Badge,
  Button,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface ProfileProps {
  onShowPage: (page: string) => void;
}

function Profile({ onShowPage }: ProfileProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        width: "375px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Top
            title={
              <Top.TitleParagraph size={22} color={adaptive.grey900}>
                프로필
              </Top.TitleParagraph>
            }
          />

          {/* 프로필 이미지 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 8px",
            }}
          >
            <img
              src="https://static.toss.im/illusts/img-profile-03.png"
              alt="프로필 이미지"
              style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            />
          </div>
        </div>

        {/* 기본 정보 */}
        <div style={{ paddingTop: "60px" }}>
          <List>
            <ListRow
              contents={
                <ListRow.Texts
                  type="1RowTypeA"
                  top="닉네임"
                  topProps={{ color: adaptive.grey800 }}
                />
              }
              right={
                <ListRow.Texts
                  type="Right1RowTypeA"
                  top="맛집탐험가"
                  topProps={{ color: adaptive.grey700 }}
                  marginTop={0}
                />
              }
              verticalPadding="large"
            />

            <ListRow
              contents={
                <ListRow.Texts
                  type="1RowTypeA"
                  top="가입일"
                  topProps={{ color: adaptive.grey800 }}
                />
              }
              right={
                <ListRow.Texts
                  type="Right1RowTypeA"
                  top="2024.01.15"
                  topProps={{ color: adaptive.grey700 }}
                  marginTop={0}
                />
              }
              verticalPadding="large"
            />

            <ListRow
              contents={
                <ListRow.Texts
                  type="1RowTypeA"
                  top="작성한 리뷰"
                  topProps={{ color: adaptive.grey800 }}
                />
              }
              right={
                <ListRow.Texts
                  type="Right1RowTypeA"
                  top="24개"
                  topProps={{ color: adaptive.grey700 }}
                  marginTop={0}
                />
              }
              verticalPadding="large"
            />
          </List>
        </div>
      </div>

      <Border variant="height16" />

      {/* 소득 정보 */}
      <div
        style={{
          padding: "0 8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      ></div>

      <div style={{ height: "16px" }} />

      {/* 취향 정보 */}
      <div
        style={{
          padding: "0 8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              소득 정보
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />
        <Badge variant="weak" color="elephant" size="small">
          나만의 맞춤 추천을 위해 사용해요
        </Badge>

        <List>
          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="월 소득"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="300만원"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />
          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="토스 연동"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="연결됨"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="월 평균 지출"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="120만원"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />
        </List>

        <Border variant="padding24" />

        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              취향 정보
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />

        <List>
          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="자주 가는 동네"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="강남구, 홍대, 이태원"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="좋아하는 음식 종류"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="한식, 일식, 카페"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="선호 가격대"
                topProps={{ color: adaptive.grey800 }}
              />
            }
            right={
              <ListRow.Texts
                type="Right1RowTypeA"
                top="1-3만원"
                topProps={{ color: adaptive.grey700 }}
                marginTop={0}
              />
            }
            verticalPadding="large"
          />
        </List>
      </div>

      <Border variant="padding24" />

      {/* 토스 로그인 섹션 */}
      <div
        style={{
          padding: "0 8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              계정 관리
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />

        <Button
          variant="primary"
          size="large"
          onClick={() => onShowPage("toss-login")}
          style={{ marginTop: "16px" }}
        >
          토스 로그인 테스트
        </Button>
      </div>

      <div style={{ height: "64px" }} />
    </div>
  );
}

export default Profile;
