import { Link } from 'react-router';
import { IconSearch, IconUserCircle } from '@tabler/icons-react';
import HomeCarousel from '@/components/home-carousel';
import ItemCarousel from '@/components/item-carousel';
import RecipeCarousel from '@/components/recipe-story-carousel';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      <header className="flex flex-row justify-between items-center px-2">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">2025년 05월 09일</h1>
        <div className="flex flex-row items-center gap-5">
          <Link to="/search">
            <IconSearch className="size-7" />
          </Link>
          <Link to="/login">
            <IconUserCircle className="size-8" />
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
