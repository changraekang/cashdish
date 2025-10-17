import styled from "styled-components";
import { colors } from "@toss/tds-colors";
import type { UserInfo } from "../types/user";

interface UserInfoViewProps {
  userInfo: UserInfo | null;
}

const Container = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${colors.grey900};
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 8px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: ${colors.grey50};
  border-radius: 6px;
  font-size: 14px;
`;

const Label = styled.span`
  font-weight: 500;
  color: ${colors.grey700};
`;

const Value = styled.span`
  color: ${colors.grey900};
  word-break: break-all;
`;

export function UserInfoView({ userInfo }: UserInfoViewProps) {
  if (!userInfo) return null;

  const formatValue = (value: string | number | null) => {
    if (value === null) return "없음";
    return String(value);
  };

  return (
    <Container>
      <Title>유저 정보</Title>
      <InfoGrid>
        <InfoItem>
          <Label>이름:</Label>
          <Value>{formatValue(userInfo.name)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>전화번호:</Label>
          <Value>{formatValue(userInfo.phone)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>생년월일:</Label>
          <Value>{formatValue(userInfo.birthday)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>성별:</Label>
          <Value>{formatValue(userInfo.gender)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>국적:</Label>
          <Value>{formatValue(userInfo.nationality)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>이메일:</Label>
          <Value>{formatValue(userInfo.email)}</Value>
        </InfoItem>
        <InfoItem>
          <Label>User Key:</Label>
          <Value>{userInfo.userKey}</Value>
        </InfoItem>
      </InfoGrid>
    </Container>
  );
}
