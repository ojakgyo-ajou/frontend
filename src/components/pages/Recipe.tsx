import { IconArrowRight } from '@tabler/icons-react';
export default function Recipe() {
  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      <section className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center">
        <div className="mr-3">
          <span className="text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </span>
        </div>
        <div>
          <h2 className="text-lg font-bold">참치 구매한 당근</h2>
          <p className="text-gray-500 text-sm">맛있게 잘 드셨나요?</p>
        </div>
        <div className="ml-auto">
          <button className="text-gray-400">
            <span>리뷰 남기기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">필요한 재료</h2>
        <p className="text-gray-500 mb-4">준비하기 쉬운 재료</p>

        <div className="grid grid-cols-4 gap-2">
          <div className="bg-green-50 rounded-xl p-3 flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="참치" className="mb-2 rounded-full" />
            <span className="font-medium">참치</span>
            <span className="text-red-500 font-medium">1캔</span>
          </div>
          <div className="bg-green-50 rounded-xl p-3 flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="토마토" className="mb-2 rounded-full" />
            <span className="font-medium">토마토</span>
            <span className="text-red-500 font-medium">1개</span>
          </div>
          <div className="bg-green-50 rounded-xl p-3 flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="식빵" className="mb-2 rounded-full" />
            <span className="font-medium">식빵</span>
            <span className="text-red-500 font-medium">2장</span>
          </div>
          <div className="bg-green-50 rounded-xl p-3 flex flex-col items-center">
            <img src="https://via.placeholder.com/50" alt="마요네즈" className="mb-2 rounded-full" />
            <span className="font-medium">마요네즈</span>
            <span className="text-red-500 font-medium">적당량</span>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">레시피 단계</h2>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 flex items-start">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold mb-1">참치 준비하기</h3>
              <p>참치캔을 열어 물기를 빼고 그릇에 담습니다.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-start">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold mb-1">토마토 준비하기</h3>
              <p>토마토를 깨끗이 씻어 얇게 슬라이스합니다.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-start">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold mb-1">참치 양념하기</h3>
              <p>마요네즈와 참치를 섞어 맛있는 참치 샐러드를 만듭니다.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-start">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold mb-1">샌드위치 만들기</h3>
              <p>식빵 위에 참치 샐러드를 올리고 토마토를 올린 후 다른 식빵으로 덮습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-2">다른 추천 레시피</h2>
        <p className="text-gray-500 mb-4">함께 즐기면 좋은 메뉴</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="추천 레시피 1"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <div className="text-xs text-gray-500 mb-1">#참치 #샐러드 #간단</div>
            <h3 className="font-bold">참치로 만드는 샐러드 한 그릇</h3>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="추천 레시피 2"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <div className="text-xs text-gray-500 mb-1">#토마토 #스프 #레시피</div>
            <h3 className="font-bold">토마토 수프 만들기</h3>
          </div>
        </div>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-xl font-bold mb-1">오늘의 식단,</h2>
        <p className="mb-4">아직 못정하셨나요?</p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold">
          <div className="flex items-center justify-center gap-2">
            <span>AI 식단 추천받기</span>
            <IconArrowRight className="size-5" />
          </div>
        </button>
      </section>
    </div>
  );
}
