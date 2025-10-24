export const baseURL =
  import.meta.env.VITE_SERVER_BASE_URL ??
  "https://api.sparkling-rae.com/tossLogin";

if (!import.meta.env.VITE_SERVER_BASE_URL) {
  console.warn(
    "VITE_SERVER_BASE_URL 환경 변수가 설정되지 않았어요. 기본 주소(http://localhost:4000)를 사용해요."
  );
}
