import { IconStar } from '@tabler/icons-react';

interface ReviewCardProps {
  reviewId: number;
  score: number;
  comment: string;
  purchaseCount: number;
}

export default function ReviewCard({ reviewId, score, comment, purchaseCount }: ReviewCardProps) {
  return (
    <div key={reviewId} className="w-full p-6 bg-neutral-50 rounded-2xl inline-flex flex-col gap-2.5">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="inline-flex items-center gap-2.5">
          <IconStar className="size-5 text-green-700" />
          <div className="flex items-baseline gap-3">
            <div className="justify-start text-green-700 text-xl font-bold">{score}</div>
            <div className="opacity-30 justify-start text-black text-xs font-bold">{purchaseCount}번 구매</div>
          </div>
        </div>
        <div className="self-stretch justify-start text-black text-base">{comment}</div>
      </div>
    </div>
  );
}
