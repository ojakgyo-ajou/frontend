"use client";
import { useState, useEffect, useRef, type HTMLAttributes, useMemo } from "react";
import { IconHome, IconChartAreaLine, IconShoppingCart, IconToolsKitchen } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router";

// API


// store


// types
export interface MenuBarProps {

}

const MenuStatus = {
  HOME: "PAGE_STATUS_HOME",
  TOTAL_PRICE: "PAGE_STATUS_TOTAL_PRICE",
  SCHEDULE: "PAGE_STATUS_SCHEDULE",
  CART: "PAGE_STATUS_CART",
} as const;
type MenuStatus = typeof MenuStatus[ keyof typeof MenuStatus ]

const MenuInfo = {
  [MenuStatus.HOME]: {
    title: "홈",
    Icon: (state: MenuStatus, props?: HTMLAttributes<any>) => <>
      <IconHome { ...props }
        className={`w-6 h-6 ${props?.className || ""}`}
        color={`${state === MenuStatus.HOME ? "white" : props?.color || "var(--primary)"}`}
      />
    </>,
    url: "/"  
  },
  [MenuStatus.TOTAL_PRICE]: {
    title: "식자재 물가",
    Icon: (state: MenuStatus, props?: HTMLAttributes<any>) => <>
      <IconChartAreaLine { ...props }
        className={`w-6 h-6 ${props?.className || ""}`}
        color={`${state === MenuStatus.TOTAL_PRICE ? "white" : props?.color || "var(--primary)"}`}
      />
    </>,
    url: "/total"  
  },
  [MenuStatus.SCHEDULE]: {
    title: "식단추천",
    Icon: (state: MenuStatus, props?: HTMLAttributes<any>) => <>
      <IconToolsKitchen { ...props }
        className={`w-6 h-6 ${props?.className || ""}`}
        color={`${state === MenuStatus.SCHEDULE ? "white" : props?.color || "var(--primary)"}`}
      />
    </>,
    url: "/schedule"  
  },
  [MenuStatus.CART]: {
    title: "장바구니",
    Icon: (state: MenuStatus, props?: HTMLAttributes<any>) => <>
      <IconShoppingCart { ...props }
        className={`w-6 h-6 ${props?.className || ""}`}
        color={`${state === MenuStatus.CART ? "white" : props?.color || "var(--primary)"}`}
      />
    </>,
    url: "/cart"  
  },
}

// components

const MenuBar = ({}: MenuBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const parent_element = useRef<HTMLDivElement>(null);

  const [ page, setPage ] = useState<MenuStatus>(MenuStatus.HOME);
  const [ calced_loc, setCalcedLoc ] = useState<DOMRect>({
    width: 0, height: 0,
    x: 0, y: 0,
    bottom: 0,left: 0,right: 0,top: 0,
    toJSON: () => ({})
  });

  useEffect(() => {
    if (!parent_element.current) {
      setTimeout(() => setPage(MenuStatus.HOME), 100); // for re-call
      return;
    }

    const menu_el = parent_element.current.querySelector(`#${page}`);
    if (!menu_el) return;

    setCalcedLoc(menu_el.getBoundingClientRect());
  }, [page]);

  useEffect(() => {
    const [_, subpath] = location.pathname.split("/");

    switch(subpath) {
      case "": setPage(MenuStatus.HOME); break;
      case "total": setPage(MenuStatus.TOTAL_PRICE); break;
      case "schedule": setPage(MenuStatus.SCHEDULE); break;
      case "cart": setPage(MenuStatus.CART); break;
      default: return;
    }
  }, [location]);

  const onMenuItemClick = (key: MenuStatus) => {
    navigate(MenuInfo[key]?.url || "/");
  }

  return <div 
    className="w-fit h-fit p-2 bg-stone-50 rounded-2xl inline-flex justify-between items-center relative z-0 select-none" 
    ref={parent_element}
  >
    <div style={{
      width: `${calced_loc.width}px`, left: `${calced_loc.left}px`,
      transition: "all 0.5s cubic-bezier(0, 1, 0.49, 1.1)"
    }} className={`
      absolute -z-10
      h-[calc(100%-1rem)] bg-primary rounded-2xl
    `}/>
    {
      Object.values(MenuStatus).map(menu_key =>
        <section
          id={menu_key}
          className="w-fit h-fit px-5 py-3 rounded-2xl inline-flex justify-start items-center gap-2 menu-item"
          onClick={() => onMenuItemClick(menu_key)}
        >
          { MenuInfo[menu_key].Icon(page) }
          <span className={`
            text-s font-bold
            ${ (page === menu_key) && "text-neutral-50" || "w-0 h-0 overflow-hidden" }
          `} style={{
            transition: "width .5s ease"
          }}
          >{MenuInfo[menu_key].title}</span>
        </section>
      )
    }
  </div>
};
export default MenuBar