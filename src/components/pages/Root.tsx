import { Outlet } from 'react-router';
import { Home, Search, Sparkles, Utensils, Settings } from 'lucide-react';

function App() {
  return (
    <>
      <Outlet />

      <div className="dock">
        <button>
          <Home className="size-[1.2em]" />
          <span className="dock-label">홈</span>
        </button>
        <button>
          <Search className="size-[1.2em]" />
          <span className="dock-label">검색</span>
        </button>

        <button className="dock-active">
          <Sparkles className="size-[1.2em]" />
          <span className="dock-label">AI 추천</span>
        </button>

        <button className="dock-active">
          <Utensils className="size-[1.2em]" />
          <span className="dock-label">오늘의 메뉴</span>
        </button>

        <button>
          <Settings className="size-[1.2em]" />
          <span className="dock-label">설정</span>
        </button>
      </div>
    </>
  );
}

export default App;
