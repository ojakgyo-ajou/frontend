import { Link } from 'react-router';
import {
  IconBell,
  IconShoppingCart,
  IconArrowUpRight,
  IconChefHat,
  IconNews,
  IconRobotFace,
  IconScale,
} from '@tabler/icons-react';
import RecipeCarousel from '@/components/recipe-carousel';
import ArticleCard from '@/components/article-card';

const articles = [
  {
    title: '식자재 가격 확인부터 알뜰 장보기까지',
    source: '한겨레',
    date: '3일 전',
    url: '#',
  },
  {
    title: '이번 주 인기 식재료 트렌드는 무엇?',
    source: '매일경제',
    date: '5시간 전',
    url: '#',
  },
  {
    title: '친환경 포장재 사용 확대 추세',
    source: '환경일보',
    date: '하루 전',
    url: '#',
  },
];

export default function Item() {
  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      <header className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center px-2">
          <h1 className="text-green-700 scroll-m-20 text-2xl font-semibold tracking-tight">양배추</h1>
          <div className="flex flex-row gap-5">
            <Link to="#">
              <IconBell className="size-7" />
            </Link>
            <Link to="/cart">
              <IconShoppingCart className="size-7" />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-2">
          <div className="inline-flex justify-start items-end gap-2">
            <span className="scroll-m-20 text-2xl font-semibold tracking-tight">19,000원</span>
            <span className="scroll-m-20 text-muted-foreground text-base font-semibold tracking-tight">/ 통</span>
          </div>
          <div className="inline-flex justify-start items-center gap-2">
            <div className="flex justify-start items-center gap-2">
              <div className="justify-start text-red-600 text-xl font-bold">16%</div>
              <IconArrowUpRight className="size-7 text-red-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gray-200 rounded-2xl w-full h-72"></div>

      <div className="flex flex-col justify-start items-start gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <IconRobotFace className="size-7" />
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">AI 가격 분석</h1>
        </div>
        <div className="self-stretch px-4 py-4 bg-neutral-50 rounded-2xl flex flex-col justify-center items-start gap-4">
          <div className="self-stretch inline-flex justify-center items-center">
            <div className="flex justify-center items-center text-base">
              <span className="justify-start text-black font-normal">지금&nbsp;</span>
              <span className="justify-start text-black font-bold">양배추</span>
              <span className="justify-start text-black font-normal">의 가격은&nbsp;</span>
              <span className="justify-start text-red-600 font-bold">비싼</span>
              <span className="justify-start text-black font-normal">편이에요</span>
            </div>
            <div className="flex justify-center items-center gap-2.5"></div>
          </div>
        </div>
        <div className="self-stretch p-2.5 inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-black text-sm">
            양배추의 가격이 10% 이상 올랐지만, 가격에 영향을 줄 수 있는 정책변화나 기사, 자연재해 등이 발생하지 않았어요
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <IconScale className="size-7" />
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">물가비교</h1>
        </div>
        <div className="self-stretch px-4 py-4 rounded-2xl outline outline-gray-200 flex flex-col justify-center items-start gap-4">
          <div className="self-stretch inline-flex justify-center items-center">
            <div className="pr-1 flex justify-center items-center gap-0.5 text-base">
              <span className="justify-start text-black font-normal">지금은&nbsp;</span>
              <span className="justify-start text-green-700 font-bold">재래시장</span>
              <span className="justify-start text-black font-normal">이 제일 저렴해요</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div className="flex-1 p-3 rounded-2xl inline-flex flex-col justify-center items-center gap-2">
              <div className="justify-start text-black text-base font-bold">온라인 평균</div>
              <div className="self-stretch text-center justify-start text-black text-base">21,000원</div>
            </div>
            <div className="flex-1 p-3 rounded-2xl inline-flex flex-col justify-center items-center gap-2">
              <div className="justify-start text-black text-base font-bold">재래시장 평균</div>
              <div className="self-stretch text-center justify-start text-black text-base">21,000원</div>
            </div>
            <div className="flex-1 p-3 rounded-2xl inline-flex flex-col justify-center items-center gap-2">
              <div className="justify-start text-black text-base font-bold">마트 평균</div>
              <div className="self-stretch text-center justify-start text-black text-base">21,000원</div>
            </div>
          </div>
          <div className="self-stretch bg-stone-300/30 rounded-2xl inline-flex justify-start items-center gap-3">
            <div className="flex-1 p-3 rounded-2xl inline-flex flex-col justify-center items-center gap-1">
              <div className="justify-start text-green-700 text-base font-bold">오작교 최저가</div>
              <div className="self-stretch text-center justify-start text-black">19,000원</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <IconChefHat className="size-7" />
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">레시피 추천</h1>
        </div>
        <RecipeCarousel />
      </div>

      <div className="flex flex-col justify-start items-start gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <IconNews className="size-7" />
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">관련 기사</h1>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2.5">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
