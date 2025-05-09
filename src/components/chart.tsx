"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import SlideSelector from "./slide-selector";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

// API


// store


// types
export interface ChartProps<T> {
  units: Array<Unit>,
  data: Array<Array<any>>
}

export type Unit = {
  key: string;
  value: string | number;
}

// components


const Chart = <T extends Object>({ units, data }: ChartProps<T>) => {

  const parent = useRef<HTMLElement>(null);

  const [ unit, setUnit ] = useState<Unit>(units[0]);
  const [ size, setSize ] = useState<number>(300);

  const chart_options = useMemo(() => ({
    chart: {id: 'area-datetime', type: 'area', height: size, zoom: {autoScaleYaxis: true}, toolbar: {show: false}},
    colors: ['#1C8218'],
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
      labels: {
        show: false,
        formatter: function (val: any) {
          const date = new Date(val);
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return `${month}월 ${day}일`;
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.9, stops: [0, 100]}
    },
  }), [ size ]);

  const onSliderChange = (selected_unit: Unit) => {
    setUnit(selected_unit);
  }

  useEffect(() => {
    if (!parent?.current) return;

    const { width } = parent.current.getBoundingClientRect();
    console.log(width);

    setSize(width);
  }, []);

  return <section className="w-full inline-flex flex-col justify-start items-start gap-4" ref={parent}>
    <div className="w-[calc(100%-2em)]">
      <ReactApexChart type="area"
        series={[{ data: data.sort((a, b) => a[0]-b[0]) }]}
        options={chart_options}
      />
    </div>
    <SlideSelector data={units} onSelect={onSliderChange}/>
  </section>
};
export default Chart