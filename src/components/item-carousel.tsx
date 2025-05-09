import ItemCard, { type ItemCardProps } from '@/components/item-card';

const dummyItems: ItemCardProps[] = [
  { itemName: '양배추', percentageChange: -12, imageUrl: '/assets/cabbage.png' },
  { itemName: '브로콜리', percentageChange: +7, imageUrl: '/assets/broccoli.png' },
  { itemName: '당근', percentageChange: -9, imageUrl: '/assets/carrot.png' },
  { itemName: '토마토', percentageChange: -15, imageUrl: '/assets/tomato.png' },
  { itemName: '오이', percentageChange: +6, imageUrl: '/assets/cucumber.png' },
  { itemName: '감자', percentageChange: -10, imageUrl: '/assets/potato.png' },
  { itemName: '양파', percentageChange: -5, imageUrl: '/assets/onion.png' },
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
