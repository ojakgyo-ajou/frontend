import { Link } from 'react-router';
import { IconArrowUp, IconArrowDown, IconMinus } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export interface ProductProp {
  productName: string;
  unit: string;
  todayPrice: number;
  yesterdayPrice: number;
  priceChangeRate: number;
  priceDirection: number;
  latestDate: string;
}

export default function ProductCard(product: ProductProp) {
  const { productName, unit, todayPrice, priceChangeRate, priceDirection } = product;
  const absChangeRate = Math.abs(priceChangeRate).toFixed(2);

  return (
    <Link
      to={`/item/_`}
      className="self-stretch px-6 py-2 bg-white rounded-lg outline outline-gray-200 inline-flex flex-col justify-start items-start gap-2.5"
    >
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="flex justify-start items-baseline gap-1.5">
          <div className="justify-start text-black text-xl font-bold">{productName}</div>
          <div className="opacity-30 justify-start text-black text-xs font-bold">{unit}</div>
        </div>
        <div className="inline-flex flex-col justify-center items-end">
          <div className="text-right justify-start text-black text-base font-bold">{todayPrice.toLocaleString()}원</div>
          <div
            className={cn('inline-flex items-center text-right justify-start text-xs font-bold', {
              'text-blue-600': priceDirection === 0,
              'text-red-600': priceDirection === 1,
              'text-gray-500': priceDirection === 2,
            })}
          >
            {priceDirection === 0 && <IconArrowDown className="size-3.5 mr-0.25" />}
            {priceDirection === 1 && <IconArrowUp className="size-3.5 mr-0.25" />}
            {priceDirection === 2 && <IconMinus className="size-3.5 mr-0.25" />}
            {absChangeRate}%
          </div>
        </div>
      </div>
    </Link>
  );
}
