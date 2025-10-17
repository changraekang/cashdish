import styled from "styled-components";

interface VisibilityProps {
  children: React.ReactNode;
  visible: boolean;
}

const StyledVisibility = styled.div<{ $visible: boolean }>`
  display: ${(props) => (props.$visible ? "block" : "none")};
`;

export function Visibility({ children, visible }: VisibilityProps) {
  return <StyledVisibility $visible={visible}>{children}</StyledVisibility>;
}
