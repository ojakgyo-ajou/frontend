import { IconStarFilled } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

interface shopData {
  name: string;
  rating: number;
  price: number;
}

const shopList: shopData[] = [
  {
    name: '산악가이드',
    rating: 4.5,
    price: 15000,
  },
  {
    name: '도서관사서',
    rating: 4.8,
    price: 18000,
  },
  {
    name: '나농부',
    rating: 4.7,
    price: 20000,
  },
  {
    name: '바다요리사',
    rating: 4.9,
    price: 25000,
  },
  {
    name: '음악가',
    rating: 4.8,
    price: 28000,
  },
  {
    name: '컴퓨터프로그램 개발자',
    rating: 4.6,
    price: 30000,
  },
];

export default function ShopList() {
  return (
    <>
      {shopList.map((shop, index) => (
        <Link to="/product/1" key={index} className="w-full">
          <Button key={index} variant="ghost" size="xl" className="w-full p-0 cursor-pointer">
            <div className="w-full p-3 rounded-lg inline-flex justify-between items-center">
              <div className="text-center justify-start text-black text-base font-medium font-['Noto_Sans_CJK_KR']">
                {shop.name}
              </div>
              <div className="flex justify-end items-center gap-6">
                <div className="flex flex-row justify-center items-center gap-1 text-black text-base font-medium">
                  <IconStarFilled className="size-4 fill-amber-300" />
                  <span>{shop.rating}</span>
                </div>
                <div className="text-base font-medium">{shop.price.toLocaleString()}</div>
              </div>
            </div>
          </Button>
        </Link>
      ))}
    </>
  );
}
