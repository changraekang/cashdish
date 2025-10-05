import {
  Top,
  FixedBottomCTA,
  Asset,
  TextField,
  TextArea,
} from "@toss/tds-mobile";
import { adaptive } from "@toss/tds-colors";
import { useState } from "react";

interface WriteReviewProps {
  onHidePage: () => void;
  onShowPage?: (page: string) => void;
}

function WriteReview({ onHidePage, onShowPage }: WriteReviewProps) {
  const [storeName, setStoreName] = useState("");
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleNext = () => {
    onShowPage?.("receipt-selection");
  };

  const handleBack = () => {
    onHidePage();
  };

  const handleImageSelect = () => {
    // 이미지 선택 로직
    console.log("이미지 선택");
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={22} color={adaptive.grey900}>
            리뷰 작성
          </Top.TitleParagraph>
        }
      />

      {/* 뒤로가기 버튼 */}
      <div
        onClick={handleBack}
        style={{
          cursor: "pointer",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Asset.Icon
          frameShape={Asset.frameShape.CleanW20}
          name="icon-arrow-back-ios-mono"
          color={adaptive.grey800}
          aria-hidden={true}
        />
        <span style={{ fontSize: "16px", color: adaptive.grey800 }}>뒤로</span>
      </div>

      <div style={{ padding: "20px" }}>
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
        <div style={{ marginBottom: "20px" }}>
          <TextField
            variant="box"
            label="가게 이름"
            placeholder="가게 이름을 입력해주세요"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            labelOption="sustain"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <TextField
            variant="box"
            label="메뉴 이름"
            placeholder="메뉴 이름을 입력해주세요"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            labelOption="sustain"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <TextField
            variant="box"
            label="가격"
            placeholder="가격을 입력해주세요"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            labelOption="sustain"
            suffix="원"
          />
        </div>

        {/* 리뷰 작성 */}
        <div style={{ marginBottom: "32px" }}>
          <TextArea
            variant="box"
            label="리뷰"
            placeholder="맛집 후기를 작성해주세요"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            labelOption="sustain"
            rows={4}
          />
        </div>
      </div>

      <div onClick={handleNext}>
        <FixedBottomCTA loading={false}>다음</FixedBottomCTA>
      </div>
    </>
  );
}

export default WriteReview;
