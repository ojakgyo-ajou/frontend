// import { Search } from 'lucide-react';
import HomeCarousel from '@/components/home-carousel';
import ItemCarousel from '@/components/item-carousel';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-6">
      <header className="mt-4 py-4">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">2025년 05월 09일</h1>
      </header>

      <div className="rounded-2xl overflow-hidden">
        <HomeCarousel />
      </div>

      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">다음주 장을 봐볼까요?</h1>
        <h2 className="text-muted-foreground mb-4">오늘의 밥상 가격</h2>
        <ItemCarousel />
      </div>
    </div>
  );
}
