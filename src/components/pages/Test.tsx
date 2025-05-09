"use client";

import Chart from "../chart";


// API


// store


// types
export interface TestPageProps {
  
}

// components


const TestPage = ({}: TestPageProps) => {
  // return <MenuBar/>
  return <Chart data={
    Array.from({length: 10}).map((_, i) => ({
      year: 2025,
      month: i,
      price: Math.floor(Math.random()* 100) % 100 * 2
    }))
    .map((v: any) => ([
      new Date(`${v?.year || new Date().getFullYear()}-${(v?.month || 1)-0}-${v.day || 1}`),
      v.price
    ]))
  } units={[
    { key: "day", value: "일" },
    { key: "week", value: "주" },
    { key: "month", value: "월" },
    { key: "year", value: "년" },
  ]}/>
};
export default TestPage