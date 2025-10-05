import {
  Top,
  List,
  ListRow,
  Border,
  ListHeader,
  Badge,
  Button,
  Paragraph,
  Asset,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";

interface GuidebookProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function Guidebook({ onHidePage, onShowPage }: GuidebookProps) {
  const handleCreateGuidebook = () => {
    onShowPage?.("create-guidebook");
  };

  const handleBack = () => {
    onHidePage();
  };

  return (
    <div style={{ height: "100vh", backgroundColor: adaptive.background }}>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가이드북
          </Top.TitleParagraph>
        }
        right={
          <div
            onClick={handleBack}
            style={{ cursor: "pointer", padding: "8px" }}
          >
            <Asset.Icon
              frameShape={Asset.frameShape.CleanW20}
              name="icon-x-mono"
              color={adaptive.grey800}
              aria-hidden={true}
            />
          </div>
        }
      />

      {/* 내 가이드북 */}
      <div style={{ padding: "0 8px" }}>
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              📖 내 가이드북
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />

        <List>
          <ListRow
            contents={
              <div style={{ textAlign: "center", width: "100%" }}>
                <Paragraph
                  color={adaptive.grey600}
                  typography="t6"
                  style={{ marginBottom: "12px" }}
                >
                  아직 작성한 가이드북이 없어요
                </Paragraph>
                <Button
                  size="small"
                  variant="weak"
                  onClick={handleCreateGuidebook}
                >
                  첫 가이드북 만들기
                </Button>
              </div>
            }
            verticalPadding="large"
          />
        </List>
      </div>

      <Border variant="height16" />

      {/* 구독한 가이드북 */}
      <div style={{ padding: "0 8px" }}>
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              📚 구독한 가이드북
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />

        <List>
          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="월 200만원대 소비자를 위한 맛집 가이드"
                topProps={{ color: adaptive.grey900, fontWeight: "bold" }}
              />
            }
            right={
              <Badge variant="weak" color="elephant" size="small">
                구독중
              </Badge>
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="강남 맛집 완벽 가이드"
                topProps={{ color: adaptive.grey900, fontWeight: "bold" }}
              />
            }
            right={
              <Badge variant="weak" color="elephant" size="small">
                구독중
              </Badge>
            }
            verticalPadding="large"
          />
        </List>
      </div>

      <Border variant="height16" />

      {/* 가이드북 스토어 */}
      <div style={{ padding: "0 8px" }}>
        <ListHeader
          title={
            <ListHeader.TitleParagraph
              color={adaptive.grey800}
              fontWeight="bold"
              typography="t5"
            >
              🏪 가이드북 스토어
            </ListHeader.TitleParagraph>
          }
          descriptionPosition="bottom"
        />

        {/* 카테고리 */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <Badge variant="fill" color="blue" size="small">
            혼밥
          </Badge>
          <Badge variant="weak" color="elephant" size="small">
            가성비
          </Badge>
          <Badge variant="weak" color="elephant" size="small">
            미슐랭
          </Badge>
          <Badge variant="weak" color="elephant" size="small">
            동네
          </Badge>
        </div>

        <List>
          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="혼밥러를 위한 완벽 가이드"
                topProps={{ color: adaptive.grey900, fontWeight: "bold" }}
              />
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
                <Badge variant="weak" color="elephant" size="small">
                  혼밥
                </Badge>
                <span style={{ fontSize: "12px", color: adaptive.grey500 }}>
                  15개 맛집
                </span>
              </div>
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top="가성비 맛집 TOP 20"
                topProps={{ color: adaptive.grey900, fontWeight: "bold" }}
              />
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
                <Badge variant="weak" color="elephant" size="small">
                  가성비
                </Badge>
                <span style={{ fontSize: "12px", color: adaptive.grey500 }}>
                  20개 맛집
                </span>
              </div>
            }
            verticalPadding="large"
          />
        </List>
      </div>
    </div>
  );
}

export default Guidebook;
