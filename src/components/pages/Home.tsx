import { Link } from 'react-router';
import { Search, UserRound } from 'lucide-react';
import HomeCarousel from '@/components/home-carousel';
import ItemCarousel from '@/components/item-carousel';
import RecipeCarousel from '@/components/recipe-carousel';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      <header className="flex flex-row justify-between items-center px-2">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">2025년 05월 09일</h1>
        <div className="flex flex-row gap-5">
          <Link to="/search">
            <Search className="size-7" />
          </Link>
          <Link to="/mypage">
            <UserRound className="size-7" />
          </Link>
        </div>
      </header>

      <div className="rounded-2xl overflow-hidden">
        <HomeCarousel />
      </div>

      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">다음주 장을 봐볼까요?</h1>
        <h2 className="text-muted-foreground mb-6">오늘의 밥상 가격</h2>
        <ItemCarousel />
      </div>

      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">다음주 장을 봐볼까요?</h1>
        <h2 className="text-muted-foreground mb-6">오늘의 밥상 가격</h2>
        <RecipeCarousel />
      </div>
    </div>
  );
}
