import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "cashdish",
  brand: {
    displayName: "cashdish", // 화면에 노출될 앱의 한글 이름으로 바꿔주세요.
    primaryColor: "#3182F6", // 화면에 노출될 앱의 기본 색상으로 바꿔주세요.
    icon: "/src/assets/cashdish.png", // 화면에 노출될 앱의 아이콘 이미지 주소로 바꿔주세요.
    bridgeColorMode: "basic",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite dev",
      build: "vite build",
    },
  },
  viewport: {
    userScalable: false, // 핀치줌 비활성화
    initialScale: 1.0,
    maximumScale: 1.0,
    minimumScale: 1.0,
  },
  permissions: [],
  outdir: "dist",
});
