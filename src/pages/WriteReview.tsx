import {
  Top,
  Asset,
  TextField,
  TextArea,
  List,
  ListRow,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useState } from "react";

function WriteReview() {
  const [storeName, setStoreName] = useState("");
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleImageSelect = () => {
    // 이미지 선택 로직
    console.log("이미지 선택");
  };

  return (
    <div style={{ height: "100vh", backgroundColor: adaptive.background }}>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            리뷰 작성
          </Top.TitleParagraph>
        }
      />

      <div style={{ padding: "0 8px" }}>
        {/* 사진 선택 영역 */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            onClick={handleImageSelect}
            style={{
              width: "120px",
              height: "120px",
              border: `2px dashed ${adaptive.grey300}`,
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              cursor: "pointer",
              backgroundColor: adaptive.grey50,
            }}
          >
            <Asset.Icon
              frameShape={Asset.frameShape.CleanW24}
              name="icon-camera-mono"
              color={adaptive.grey400}
              aria-hidden={true}
            />
            <div
              style={{
                marginTop: "8px",
                fontSize: "12px",
                color: adaptive.grey600,
              }}
            >
              사진 추가
            </div>
          </div>
        </div>

        {/* 가게 정보 입력 */}
        <List>
          <ListRow
            contents={
              <TextField
                variant="box"
                label="가게 이름"
                placeholder="맛집 이름을 입력해요"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                labelOption="sustain"
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <TextField
                variant="box"
                label="메뉴 이름"
                placeholder="주문한 메뉴를 입력해요"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
                labelOption="sustain"
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <TextField
                variant="box"
                label="가격"
                placeholder="얼마나 들었는지 입력해요"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                labelOption="sustain"
                suffix="원"
              />
            }
            verticalPadding="large"
          />

          <ListRow
            contents={
              <TextArea
                variant="box"
                label="리뷰"
                placeholder="맛집 후기를 자유롭게 작성해요"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                labelOption="sustain"
                rows={4}
              />
            }
            verticalPadding="large"
          />
        </List>
      </div>
    </div>
  );
}

export default WriteReview;
