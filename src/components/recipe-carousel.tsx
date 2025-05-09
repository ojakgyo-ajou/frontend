interface CardItem {
  title: string;
  imageUrl: string;
}

type CardData = CardItem[];

const cardList: CardData = [
  {
    title: '당근 케이크',
    imageUrl: 'https://example.com/carrot.jpg',
  },
  {
    title: '닭가슴살 구이',
    imageUrl: 'https://example.com/chicken.jpg',
  },
  {
    title: '퀴노아 샐러드',
    imageUrl: 'https://example.com/salad.jpg',
  },
  {
    title: '두부 스테이크',
    imageUrl: 'https://example.com/tofu.jpg',
  },
  {
    title: '감자탕',
    imageUrl: 'https://example.com/potato.jpg',
  },
  {
    title: '계란말이',
    imageUrl: 'https://example.com/egg.jpg',
  },
  {
    title: '김치볶음밥',
    imageUrl: 'https://example.com/kimchi.jpg',
  },
  {
    title: '연어 스테이크',
    imageUrl: 'https://example.com/salmon.jpg',
  },
  {
    title: '참치마요 샌드위치',
    imageUrl: 'https://example.com/tuna_mayo.jpg',
  },
  {
    title: '에어프라이어 고구마',
    imageUrl: 'https://example.com/sweet_potato.jpg',
  },
];

export default function RecipeCarousel() {
  return (
    <div className="carousel w-full space-x-4">
      {cardList.map((card, cardIndex) => (
        <div
          key={cardIndex}
          className="carousel-item w-24 p-3 bg-neutral-50 rounded-2xl inline-flex flex-col justify-center items-center gap-3"
        >
          <img className="w-12 h-12" src={card.imageUrl} />
          <div className="self-stretch text-center justify-start text-black text-sm font-bold">{card.title}</div>
        </div>
      ))}
    </div>
  );
}
