import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAccessTokenCheck = () => {
  const navigate = useNavigate();
  const [isAccessToken, setIsAccessToken] = useState(null);

  useEffect(() => {
    const isAccessToken = localStorage.getItem('access_token');

    setIsAccessToken(isAccessToken ? true : false);
  }, []);

  const handleDeleteAccessToken = useCallback(() => {
    localStorage.removeItem('access_token');
    setIsAccessToken(false);
    alert('로그아웃 되었습니다.');
    navigate('/signin');
  }, [navigate]);

  return { isAccessToken, handleDeleteAccessToken };
};
