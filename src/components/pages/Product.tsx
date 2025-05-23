import { useNavigate } from 'react-router';
import { IconStar, IconArrowLeft, IconShoppingCart } from '@tabler/icons-react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import ShopList from '@/components/shop-list';
import ReviewCard from '@/components/review-card';

const reviews = [
  {
    reviewId: 3,
    score: 5.0,
    comment: '정말 만족스러운 구매였습니다.',
    purchaseCount: 10,
  },
  {
    reviewId: 5,
    score: 4.8,
    comment: '다음에도 구매할 예정입니다.',
    purchaseCount: 3,
  },
  {
    reviewId: 8,
    score: 4.7,
    comment: '정말 신선합니다.',
    purchaseCount: 1,
  },
  {
    reviewId: 10,
    score: 4.6,
    comment: '만족스러운 구매였습니다.',
    purchaseCount: 4,
  },
  {
    reviewId: 1,
    score: 4.5,
    comment: '신선하고 맛있는 감자입니다.',
    purchaseCount: 5,
  },
  {
    reviewId: 9,
    score: 4.3,
    comment: '가격이 조금 비싸지만 품질이 좋습니다.',
    purchaseCount: 2,
  },
  {
    reviewId: 6,
    score: 4.2,
    comment: '좋은 품질입니다.',
    purchaseCount: 3,
  },
  {
    reviewId: 2,
    score: 4.0,
    comment: '가격 대비 좋은 품질입니다.',
    purchaseCount: 1,
  },
  {
    reviewId: 7,
    score: 3.8,
    comment: '기대했던 것보다는 조금 아쉽습니다.',
    purchaseCount: 2,
  },
  {
    reviewId: 4,
    score: 3.5,
    comment: '보통입니다.',
    purchaseCount: 1,
  },
];

export default function Product() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-8 px-6 py-8">
        <header className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-baseline px-2">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">구입하기</h1>
            <div className="flex flex-row text-base font-medium">전체 평점</div>
          </div>
          <div className="flex flex-row justify-between items-center px-2">
            <div className="inline-flex justify-start items-end gap-2">
              <span className="scroll-m-20 text-xl">천진강 농부님</span>
            </div>
            <div className="inline-flex justify-end items-center gap-1">
              <IconStar className="size-5 text-green-700" />
              <div className="justify-start text-green-700 text-lg font-bold">5.0</div>
            </div>
          </div>
        </header>

        <div className="w-full p-6 rounded-2xl outline outline-gray-200 inline-flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <div className="justify-start text-green-700 text-xl font-bold">감자</div>
          </div>
          <div className="inline-flex items-center gap-1">
            <IconStar className="size-5 text-green-700" />
            <div className="flex items-baseline gap-1.25">
              <div className="justify-start text-green-700 text-xl font-bold">5.0</div>
              <div className="opacity-30 justify-start text-black text-xs font-bold">/ 5.0</div>
            </div>
          </div>
        </div>

        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 z-50">
        <div className="inline-flex items-center gap-4">
          <div
            className="w-20 h-14 p-4 bg-neutral-50 rounded-xl flex justify-center items-center gap-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IconArrowLeft className="size-6 text-green-700" />
          </div>
          <Drawer>
            <DrawerTrigger>
              <div className="flex flex-row justify-center items-center w-[70dvw] max-w-md p-4 bg-green-700 rounded-xl gap-3 cursor-pointer">
                <div className=" text-neutral-50 text-base font-medium">구입하기</div>
                <IconShoppingCart className="size-6 text-neutral-50" />
              </div>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>구입 완료!</DrawerTitle>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
}
