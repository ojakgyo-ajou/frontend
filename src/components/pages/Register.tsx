import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Register() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          email,
          password,
          address,
        }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setErrorMessage('회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('Registration request error:', error);
      setErrorMessage('서버 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">회원가입</h1>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
            아이디
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="아이디를 입력해주세요"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="이름을 입력해주세요"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            이메일
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="이메일 주소를 입력해주세요"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="비밀번호를 입력해주세요"
            required
            minLength={8}
          />
          <p className="text-xs text-gray-500 mt-1">8자 이상의 비밀번호를 사용해주세요</p>
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            주소
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="주소를 입력해주세요"
            required
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              <span>
                이용약관 및{' '}
                <a href="#" className="text-primary hover:underline">
                  개인정보 처리방침
                </a>
                에 동의합니다
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-200 flex justify-center items-center"
        >
          회원가입
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">이미 계정이 있으신가요?</p>
        <a href="/login" className="text-primary font-medium hover:underline mt-1 inline-block">
          로그인 하기
        </a>
      </div>
    </div>
  );
}
