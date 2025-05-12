import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { IconSearch, IconUserCircle } from '@tabler/icons-react';
import ProductCard, { type ProductProp } from '@/components/product-card';

export default function ListPage() {
  const [products, setProducts] = useState<ProductProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/kamis/dashboard');

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setProducts(data);
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
