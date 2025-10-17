# 토스 앱 로그인 구현

이 프로젝트에 토스 앱 로그인 기능이 추가되었습니다. `with-app-login` 폴더의 예제를 참고하여 웹 환경에 맞게 구현했습니다.

## 📁 추가된 파일들

### 타입 정의

- `src/types/auth.ts` - 인증 관련 타입 정의
- `src/types/user.ts` - 유저 정보 관련 타입 정의

### 훅

- `src/hooks/useAuth.ts` - 인증 상태 관리 훅 (로그인, 토큰 재발급, 로그아웃)
- `src/hooks/useUserInfo.ts` - 유저 정보 관리 훅

### 유틸리티

- `src/config/api.ts` - API 기본 URL 설정
- `src/utils/fetcher.ts` - HTTP 요청 유틸리티 함수

### 컴포넌트

- `src/components/ui/TextBox.tsx` - 텍스트 박스 UI 컴포넌트
- `src/components/ui/Visibility.tsx` - 조건부 렌더링 컴포넌트
- `src/components/LoginStateView.tsx` - 로그인 상태 표시 컴포넌트
- `src/components/UserInfoView.tsx` - 유저 정보 표시 컴포넌트
- `src/components/LoadingView.tsx` - 로딩 상태 표시 컴포넌트
- `src/components/ErrorView.tsx` - 에러 상태 표시 컴포넌트

### 페이지

- `src/pages/TossLogin.tsx` - 토스 로그인 메인 페이지

## 🚀 사용 방법

### 1. 환경 변수 설정

`.env` 파일을 생성하고 서버 URL을 설정해주세요:

```bash
VITE_SERVER_BASE_URL=http://localhost:4000
```

### 2. 서버 실행

`with-app-login/server` 폴더의 서버를 실행해주세요:

```bash
cd with-app-login/server
yarn install
yarn dev
```

### 3. 앱에서 접근

1. 앱을 실행합니다: `yarn dev`
2. 하단 탭바에서 "프로필" 탭을 선택합니다
3. "토스 로그인 테스트" 버튼을 클릭합니다
4. 토스 로그인 페이지에서 다양한 기능을 테스트할 수 있습니다

## 🔧 주요 기능

### 로그인

- 토스 앱을 통한 로그인
- 인가 코드와 referrer를 서버로 전달
- AccessToken과 RefreshToken 획득

### 토큰 관리

- AccessToken 재발급
- RefreshToken을 사용한 토큰 갱신

### 유저 정보

- AccessToken을 사용한 유저 정보 조회
- 개인정보 표시 (이름, 전화번호, 생년월일 등)

### 로그아웃

- AccessToken을 사용한 로그아웃
- UserKey를 사용한 로그아웃

## 📝 참고사항

- 이 구현은 웹 환경을 위해 `@apps-in-toss/web-framework`를 사용합니다
- 서버는 `with-app-login/server` 폴더의 예제 서버를 사용합니다
- 모든 API 호출은 CORS 설정이 필요할 수 있습니다
- 토스 앱 로그인을 위해서는 적절한 환경 설정이 필요합니다

## 🐛 문제 해결

### 서버 연결 오류

- 서버가 실행 중인지 확인해주세요
- `VITE_SERVER_BASE_URL` 환경 변수가 올바르게 설정되었는지 확인해주세요

### 토스 로그인 오류

- 토스 앱이 설치되어 있는지 확인해주세요
- 개발 환경에서 토스 앱 로그인이 활성화되어 있는지 확인해주세요
