export interface ItemCardProps {
  itemName: string;
  percentageChange: number;
  imageUrl: string;
}

export default function ItemCard({ itemName, percentageChange, imageUrl }: ItemCardProps) {
  const isPositiveChange = percentageChange >= 0;
  const changeColor = isPositiveChange ? 'text-blue-500' : 'text-red-500';
  const sign = isPositiveChange ? '+' : '-';

  return (
    <div
      className={`bg-gray-100 rounded-lg p-3 flex flex-col items-center w-[120px] h-[170px] justify-start shadow-md`}
    >
      <div className="bg-gray-200 rounded-full p-2 w-16 h-16 flex items-center justify-center mb-3">
        <img src={imageUrl} alt={itemName} width={36} height={36} className="object-contain" />
      </div>
      <p className="text-md font-bold text-gray-800 text-center h-10 flex items-center justify-center">{itemName}</p>
      <p className={`text-base font-semibold ${changeColor} flex items-center`}>
        {sign}
        {Math.abs(percentageChange)}%
      </p>
    </div>
  );
}
