import { Outlet, Link, useLocation } from 'react-router';
import { Home, Search, Sparkles, Utensils, Settings } from 'lucide-react';

export default function Root() {
  const location = useLocation();

  return (
    <>
      <Outlet />

      <div className="dock">
        <Link to="/" className={location.pathname === '/' ? 'dock-active' : ''}>
          <Home className="size-[1.2em]" />
          <span className="dock-label">홈</span>
        </Link>
        <Link to="/search" className={location.pathname === '/search' ? 'dock-active' : ''}>
          <Search className="size-[1.2em]" />
          <span className="dock-label">검색</span>
        </Link>

        <Link to="/ai" className={location.pathname === '/ai' ? 'dock-active' : ''}>
          <Sparkles className="size-[1.2em]" />
          <span className="dock-label">AI 추천</span>
        </Link>

        <Link to="/menu" className={location.pathname === '/menu' ? 'dock-active' : ''}>
          <Utensils className="size-[1.2em]" />
          <span className="dock-label">오늘의 메뉴</span>
        </Link>

        <Link to="/setting" className={location.pathname === '/setting' ? 'dock-active' : ''}>
          <Settings className="size-[1.2em]" />
          <span className="dock-label">설정</span>
        </Link>
      </div>
    </>
  );
}
