import styled from "styled-components";

interface TextBoxProps {
  text: string;
  bgColor: string;
  fontColor: string;
}

const StyledTextBox = styled.div<{ $bgColor: string; $fontColor: string }>`
  padding: 12px 16px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$fontColor};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export function TextBox({ text, bgColor, fontColor }: TextBoxProps) {
  return (
    <StyledTextBox $bgColor={bgColor} $fontColor={fontColor}>
      {text}
    </StyledTextBox>
  );
}
