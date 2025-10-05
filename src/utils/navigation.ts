// 네비게이션 헬퍼 함수들
export const navigationPaths = {
  // 메인 탭
  home: "/home",
  map: "/map",
  guidebook: "/guidebook",
  profile: "/profile",

  // 리뷰 작성 플로우
  writeReview: "/write-review",
  receiptSelection: "/receipt-selection",
  reviewForm: "/review-form",
  reviewPublish: "/review-publish",

  // 가이드북 관련
  guidebookDetail: (id: string) => `/guidebook/${id}`,
  createGuidebook: "/create-guidebook",

  // 가게 상세
  storeDetail: (id: string) => `/store/${id}`,

  // 초기 설정
  init: "/init",
} as const;

// 리뷰 작성 플로우 단계별 네비게이션
export const reviewFlowSteps = [
  navigationPaths.writeReview,
  navigationPaths.receiptSelection,
  navigationPaths.reviewForm,
  navigationPaths.reviewPublish,
] as const;
