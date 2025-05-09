import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
export interface ItemCardProps {
  itemName: string;
  percentageChange: number;
  imageUrl: string;
}

export default function ItemCard({ itemName, percentageChange, imageUrl }: ItemCardProps) {
  const isPositiveChange = percentageChange >= 0;
  const changeColor = isPositiveChange ? 'text-blue-600' : 'text-red-600';
  const Sign = isPositiveChange ? (
    <ArrowUp className={cn(changeColor, 'w-4 h-4')} />
  ) : (
    <ArrowDown className={cn(changeColor, 'w-4 h-4')} />
  );

  return (
    <div className="px-4 py-3 bg-stone-50 rounded-xl inline-flex flex-col justify-center items-center gap-2">
      <div className="p-1.5 inline-flex justify-start items-center gap-2.5">
        <img className="w-10 h-10" src={imageUrl} />
      </div>
      <div className="text-center justify-start text-black text-base font-bold">{itemName}</div>
      <div className="self-stretch inline-flex justify-center items-center gap-1.5">
        <div className={cn(changeColor, 'text-center justify-start text-sm font-bold')}>{percentageChange}%</div>
        <div className="w-4 h-4 relative overflow-hidden">{Sign}</div>
      </div>
    </div>
  );
}
