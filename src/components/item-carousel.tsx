import ItemCard, { type ItemCardProps } from '@/components/item-card';

const dummyItems: ItemCardProps[] = [
  { itemName: '양배추', percentageChange: -12, imageUrl: '/api/images/양배추' },
  { itemName: '브로콜리', percentageChange: +7, imageUrl: '/api/images/브로콜리' },
  { itemName: '당근', percentageChange: -9, imageUrl: '/api/images/당근' },
  { itemName: '토마토', percentageChange: -15, imageUrl: '/api/images/토마토' },
  { itemName: '오이', percentageChange: +6, imageUrl: '/api/images/오이' },
  { itemName: '감자', percentageChange: -10, imageUrl: '/api/images/감자' },
  { itemName: '양파', percentageChange: -5, imageUrl: '/api/images/양파' },
];

export default function ItemCarousel() {
  return (
    <div className="carousel w-full space-x-4 bg-transparent">
      {dummyItems.map((item, index) => (
        <div className="carousel-item" key={index}>
          <ItemCard itemName={item.itemName} percentageChange={item.percentageChange} imageUrl={item.imageUrl} />
        </div>
      ))}
    </div>
  );
}
