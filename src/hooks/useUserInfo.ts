import { useState } from "react";
import { get } from "../utils/fetcher";
import type {
  UserInfo,
  UserInfoState,
  GetUserInfoResponse,
} from "../types/user";

export const useUserInfo = (): UserInfoState => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUserInfo = async (accessToken: string) => {
    try {
      setLoading(true);
      setError(null);

      const data = await get<GetUserInfoResponse>(
        "/get-user-info",
        accessToken
      );
      const user = data?.data?.success;

      if (user) {
        setUserInfo(user);
      } else {
        setError("유저 정보를 가져오지 못했어요.");
      }
    } catch (e) {
      console.error(e);
      setError("유저 정보를 가져오는 중 문제가 발생했어요.");
    } finally {
      setLoading(false);
    }
  };

  const clearUserInfo = () => {
    setUserInfo(null);
  };

  return {
    userInfo,
    loading,
    error,
    getUserInfo,
    clearUserInfo,
  };
};
