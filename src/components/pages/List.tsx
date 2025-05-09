import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { IconSearch, IconUserCircle } from '@tabler/icons-react';
import ProductCard from '@/components/product-card';

const products = [
  {
    itemCode: '111',
    kindCode: '01',
    kindName: '감자',
    unit: '10kg',
    todayPrice: 22000,
    yesterdayPrice: 23000,
    priceChangeRate: -1.8867924528301887,
    priceDirection: 0,
    latestDate: '2024-10-09',
  },
  {
    itemCode: '111',
    kindCode: '02',
    kindName: '당근',
    unit: '20kg',
    todayPrice: 55000,
    yesterdayPrice: 54500,
    priceChangeRate: 0.9174311926605505,
    priceDirection: 1,
    latestDate: '2024-10-09',
  },
  {
    itemCode: '112',
    kindCode: '01',
    kindName: '찹쌀',
    unit: '1kg',
    todayPrice: 4000,
    yesterdayPrice: 4000,
    priceChangeRate: 0.0,
    priceDirection: 2,
    latestDate: '2024-10-09',
  },
];

export default function ListPage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/kamis/dashboard');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      <header className="flex flex-row justify-between items-center px-2">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">2025년 05월 09일</h1>
        <div className="flex flex-row items-center gap-5">
          <Link to="/search">
            <IconSearch className="size-7" />
          </Link>
          <Link to="/login">
            <IconUserCircle className="size-8" />
          </Link>
        </div>
      </header>

      <div className="w-full flex flex-col gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
