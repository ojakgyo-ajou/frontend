import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login attempt with:', { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="card-title text-2xl font-bold text-center mb-6">로그인</h2>

          <div className="form-control">
            <label className="label" htmlFor="username">
              <span className="label-text">아이디</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="아이디를 입력하세요"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label" htmlFor="password">
              <span className="label-text">비밀번호</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              로그인
            </button>
          </div>

          <div className="text-center mt-4">
            <a href="#" className="link link-hover text-sm">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
