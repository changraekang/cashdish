import styled from "styled-components";
import { colors } from "@toss/tds-colors";

interface ErrorViewProps {
  children: React.ReactNode;
  error: string | null;
}

const ErrorMessage = styled.div`
  background-color: ${colors.red50};
  color: ${colors.red600};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  border: 1px solid ${colors.red200};
`;

export function ErrorView({ children, error }: ErrorViewProps) {
  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {children}
    </>
  );
}
