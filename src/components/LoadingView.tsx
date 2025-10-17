import styled, { keyframes } from "styled-components";

interface LoadingViewProps {
  children: React.ReactNode;
  loading: boolean;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 2px solid #f3f3f3;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 16px;
`;

const Container = styled.div`
  opacity: ${(props: { $loading: boolean }) => (props.$loading ? 0.6 : 1)};
  transition: opacity 0.2s ease;
`;

export function LoadingView({ children, loading }: LoadingViewProps) {
  return (
    <Container $loading={loading}>
      {loading && <LoadingSpinner />}
      {children}
    </Container>
  );
}
