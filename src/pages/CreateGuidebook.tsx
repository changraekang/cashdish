import {
  Top,
  FixedBottomCTA,
  TextField,
  TextArea,
  List,
  ListRow,
  Border,
  ListHeader,
  Badge,
  Paragraph,
  Asset,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useState } from "react";

interface CreateGuidebookProps {
  onHidePage: () => void;
}

function CreateGuidebook({ onHidePage }: CreateGuidebookProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");

  const handleBack = () => {
    onHidePage();
  };

  const handlePublish = () => {
    // 가이드북 발행 로직
    console.log("가이드북 발행:", { title, description, targetAudience });
    onHidePage();
  };

  return (
    <div style={{ height: "100vh", backgroundColor: adaptive.background }}>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            가이드북 만들기
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

      <div style={{ padding: "0 8px" }}>
        {/* 가이드북 기본 정보 */}
        <List>
          <ListRow
            contents={
              <TextField
                variant="box"
                label="가이드북 제목"
                placeholder="어떤 가이드북인지 알려주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                labelOption="sustain"
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <TextField
                variant="box"
                label="대상 독자"
                placeholder="누구에게 추천하는 가이드북인가요?"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                labelOption="sustain"
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <TextArea
                variant="box"
                label="가이드북 설명"
                placeholder="가이드북에 대해 자세히 설명해주세요"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                labelOption="sustain"
                rows={3}
              />
            }
            verticalPadding="large"
          />
        </List>

        <Border variant="height16" />

        {/* 구성 규칙 */}
        <div style={{ marginBottom: "20px" }}>
          <ListHeader
            title={
              <ListHeader.TitleParagraph
                color={adaptive.grey800}
                fontWeight="bold"
                typography="t5"
              >
                구성 규칙
              </ListHeader.TitleParagraph>
            }
            descriptionPosition="bottom"
          />

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <Badge variant="fill" color="blue" size="small">
              한식
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              일식
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              양식
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              카페
            </Badge>
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <Badge variant="fill" color="blue" size="small">
              강남구
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              홍대
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              이태원
            </Badge>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Badge variant="fill" color="blue" size="small">
              1-3만원
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              3-5만원
            </Badge>
            <Badge variant="weak" color="elephant" size="small">
              5만원 이상
            </Badge>
          </div>
        </div>

        <Border variant="height16" />

        {/* 내 리뷰에서 선택 */}
        <div style={{ marginBottom: "20px" }}>
          <ListHeader
            title={
              <ListHeader.TitleParagraph
                color={adaptive.grey800}
                fontWeight="bold"
                typography="t5"
              >
                가이드북에 포함할 맛집
              </ListHeader.TitleParagraph>
            }
            descriptionPosition="bottom"
          />

          <div
            style={{
              backgroundColor: adaptive.grey50,
              borderRadius: "12px",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <Paragraph
              color={adaptive.grey600}
              typography="t6"
              style={{ marginBottom: "12px" }}
            >
              내가 작성한 리뷰가 없어요
            </Paragraph>
            <Paragraph color={adaptive.grey500} typography="t7">
              리뷰를 10개 이상 작성하면 가이드북을 만들 수 있어요
            </Paragraph>
          </div>
        </div>

        <Border variant="height16" />

        {/* 공개 설정 */}
        <div style={{ marginBottom: "32px" }}>
          <ListHeader
            title={
              <ListHeader.TitleParagraph
                color={adaptive.grey800}
                fontWeight="bold"
                typography="t5"
              >
                공개 설정
              </ListHeader.TitleParagraph>
            }
            descriptionPosition="bottom"
          />

          <List>
            <ListRow
              contents={
                <ListRow.Texts
                  type="2RowTypeA"
                  top="공개"
                  topProps={{ color: adaptive.grey900 }}
                  bottom="모든 사용자가 볼 수 있어요"
                  bottomProps={{ color: adaptive.grey600 }}
                />
              }
              right={
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: adaptive.blue500,
                  }}
                />
              }
              verticalPadding="large"
            />

            <ListRow
              contents={
                <ListRow.Texts
                  type="2RowTypeA"
                  top="비공개"
                  topProps={{ color: adaptive.grey900 }}
                  bottom="나만 볼 수 있어요"
                  bottomProps={{ color: adaptive.grey600 }}
                />
              }
              right={
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: `2px solid ${adaptive.grey300}`,
                  }}
                />
              }
              verticalPadding="large"
            />
          </List>
        </div>
      </div>

      <div onClick={handlePublish}>
        <FixedBottomCTA loading={false}>가이드북 발행하기</FixedBottomCTA>
      </div>
    </div>
  );
}

export default CreateGuidebook;
