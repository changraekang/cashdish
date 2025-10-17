import styled from "styled-components";
import { colors } from "@toss/tds-colors";
import { useAuth } from "../hooks/useAuth";
import { useUserInfo } from "../hooks/useUserInfo";
import { LoadingView } from "../components/LoadingView";
import { ErrorView } from "../components/ErrorView";
import { Visibility } from "../components/ui/Visibility";
import { LoginStateView } from "../components/LoginStateView";
import { UserInfoView } from "../components/UserInfoView";

const Container = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${colors.grey900};
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => {
    if (props.$variant === "primary") {
      return `
        background-color: ${colors.blue500};
        color: white;
        
        &:hover:not(:disabled) {
          background-color: ${colors.blue600};
        }
      `;
    }
    return `
      background-color: ${colors.grey100};
      color: ${colors.grey700};
      
      &:hover:not(:disabled) {
        background-color: ${colors.grey200};
      }
    `;
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${colors.grey100};
  color: ${colors.grey700};

  &:hover:not(:disabled) {
    background-color: ${colors.grey200};
  }
`;

interface TossLoginProps {
  onHidePage: () => void;
}

export default function TossLogin({ onHidePage }: TossLoginProps) {
  const auth = useAuth();
  const user = useUserInfo();
  const isLoading = auth.loading || user.loading;
  const hasAccessToken = auth.accessToken !== null;

  const handleLogout = async (
    logoutFn: () => Promise<{ ok: boolean } | null>
  ) => {
    const res = await logoutFn();
    if (res?.ok) user.clearUserInfo();
  };

  return (
    <Container>
      <Title>앱 로그인 예제</Title>

      <LoadingView loading={isLoading}>
        <ErrorView error={auth.error || user.error}>
          <LoginStateView accessToken={auth.accessToken} />
          <UserInfoView userInfo={user.userInfo} />
        </ErrorView>
      </LoadingView>

      <Visibility visible={auth.accessToken === null}>
        <Button $variant="primary" onClick={auth.login} disabled={isLoading}>
          토스 로그인하기
        </Button>
      </Visibility>

      <Visibility visible={hasAccessToken}>
        <ButtonGroup>
          <Button
            $variant="secondary"
            onClick={auth.refreshAccessToken}
            disabled={isLoading}
          >
            AccessToken 재발급
          </Button>

          <Button
            $variant="secondary"
            onClick={() => {
              if (auth.accessToken) user.getUserInfo(auth.accessToken);
            }}
            disabled={isLoading}
          >
            유저 정보 불러오기
          </Button>

          <Button
            $variant="secondary"
            onClick={() => handleLogout(auth.logoutByAccessToken)}
            disabled={isLoading}
          >
            토큰으로 로그아웃하기
          </Button>

          <Button
            $variant="secondary"
            onClick={async () => {
              const userKey = user.userInfo?.userKey;

              if (userKey) {
                await handleLogout(() => auth.logoutByUserKey(`${userKey}`));
                return;
              }
              alert(
                `유저 키가 필요해요. 유저 정보 불러오기를 실행해 유저 정보를 먼저 가져와 주세요.`
              );
            }}
            disabled={isLoading}
          >
            유저 키로 로그아웃하기
          </Button>

          <Button
            $variant="secondary"
            onClick={onHidePage}
            disabled={isLoading}
          >
            뒤로 가기
          </Button>
        </ButtonGroup>
      </Visibility>
    </Container>
  );
}
