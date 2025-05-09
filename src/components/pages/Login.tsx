import React, { useState } from 'react';
import { Link } from 'react-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
      } else {
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login request error:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">로그인</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            아이디
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="아이디를 입력해주세요"
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
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            로그인 상태 유지
          </label>
          <a href="#" className="ml-auto text-sm text-primary hover:underline">
            비밀번호 찾기
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-200 flex justify-center items-center"
        >
          로그인
        </button>
      </form>

      <div className="mt-8">
        <div className="mt-8 text-center">
          <p className="text-gray-600">아직 회원이 아니신가요?</p>
          <Link to="/register" className="text-primary font-medium hover:underline mt-1 inline-block">
            회원가입 하기
          </Link>
        </div>
      </div>
    </div>
  );
}
