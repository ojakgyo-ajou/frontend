"use client";
import { useState, useEffect, useRef } from "react";

// API


// store


// types
export interface SlideSelectorProps {
  data: Array<BasicDataType>
  init?: string
  onSelect?: (data: BasicDataType) => any
}

export type BasicDataType = {
  key: string,
  value: string | number
}

// components


const SlideSelector = ({ data, init, onSelect }: SlideSelectorProps) => {

  const [ selected, setSelected ] = useState<BasicDataType['key']>(init || data[0]?.key);
  const [ ui_info, setUIiInfo ] = useState<{width: number, left: number}>({width: 0, left: 0});

  useEffect(() => {
    const new_selected_ui = document.querySelector(`#${selected}`)?.getBoundingClientRect();
    if (!new_selected_ui) return;

    setUIiInfo({
      width: new_selected_ui.width,
      left: new_selected_ui.left,
    })
  }, [selected]);

  const onSelectionClick = (key: string) => {
    setSelected(key);

    const selection_data = data.find(v => v.key == key);
    if (!selection_data) {
      setSelected(data[0]?.key);
      return;
    }
    if (onSelect) onSelect(selection_data);
  }  

  return <section className={`
    w-full h-fit px-6 py-2 box-border 
    flex justify-around align-middle
    bg-white border-1 rounded-2xl z-0
    relative select-none
  `} style={{
    transition: "all 0.25s cubic-bezier(0, 1, 0.49, 1.1)"
  }}>
    <div style={{
      width: `${ui_info.width}px`,
      left: `${ui_info.left}px`,
      transition: "all 0.25s cubic-bezier(0, 1, 0.49, 1.1)"
    }} className={`
      h-full px-6 py-1
      rounded-lg bg-neutral-100
      absolute top-1/2 -translate-y-1/2
      -z-10 select-none
    `}/>
    {
      data.map(({key, value}) => <>
        <div id={key} key={key} className={`
          px-6 py-1 select-none cursor-pointer box-border 
          ${key == selected ? "font-bold" : ""}
        `}
          onClick={() => onSelectionClick(key)}
        >
          <span>{value}</span>
        </div>
      </>)  
    }
  </section>
};
export default SlideSelector