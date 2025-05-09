interface CardItem {
  tags: string[];
  title: string;
  url: string;
}

type CardData = CardItem[];

const cardList: CardData = [
  {
    tags: ['#당근', '#특별', '#독특'],
    title: '당근으로 해먹는 특별한 레시피',
    url: '/api/images/케이크',
  },
  {
    tags: ['#퀴노아', '#영양', '#비건'],
    title: '퀴노아 샐러드로 만드는 영양 만점 비건식',
    url: '/api/images/케이크',
  },
  {
    tags: ['#두부', '#맛있어', '#간편'],
    title: '두부 스테이크로 간편하게 즐기는 맛있는 저녁',
    url: '/api/images/케이크',
  },
  {
    tags: ['#감자', '#속풀림', '#혼밥'],
    title: '감자탕으로 속 푸는 혼자만의 따뜻한 저녁',
    url: '/api/images/케이크',
  },
  {
    tags: ['#계란', '#빠르게', '#아침식사'],
    title: '계란말이로 빠르게 해결하는 아침 한끼',
    url: '/api/images/케이크',
  },
  {
    tags: ['#김치', '#한그릇', '#집밥'],
    title: '김치볶음밥으로 완성하는 든든한 한그릇',
    url: '/api/images/케이크',
  },
  {
    tags: ['#연어', '#프로틴', '#다이어트'],
    title: '연어 스테이크로 단백질 가득 다이어트 식단',
    url: '/api/images/케이크',
  },
  {
    tags: ['#참치', '#샌드위치', '#간편'],
    title: '참치마요 샌드위치로 빠르게 해결하는 점심',
    url: '/api/images/케이크',
  },
  {
    tags: ['#고구마', '#간식', '#저탄수'],
    title: '에어프라이어 고구마로 건강한 간식 타임',
    url: '/api/images/케이크',
  },
];

export default function RecipeStoryCarousel() {
  return (
    <div className="carousel w-full space-x-4">
      {cardList.map((card, cardIndex) => (
        <div key={cardIndex} className="carousel-item w-36 h-56 px-5 py-6 bg-stone-50 rounded-xl">
          <div className="flex flex-col justify-end items-end gap-1.5">
            <div className="inline-flex justify-end items-center gap-1.5">
              {card.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className="opacity-30 text-center justify-start text-black text-xs">
                  {tag}
                </div>
              ))}
            </div>
            <div className="self-stretch text-right justify-start text-black text-base font-bold">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
