import { useState, useEffect, useRef, type HTMLAttributes } from 'react';
import { IconHome, IconChartAreaLine, IconShoppingCart, IconToolsKitchen } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router';

export interface MenuBarProps {}

interface CalcedLoc {
  width: number;
  left: number;
}

const MenuStatus = {
  HOME: 'PAGE_STATUS_HOME',
  TOTAL_PRICE: 'PAGE_STATUS_TOTAL_PRICE',
  SCHEDULE: 'PAGE_STATUS_SCHEDULE',
  CART: 'PAGE_STATUS_CART',
} as const;
type MenuStatus = (typeof MenuStatus)[keyof typeof MenuStatus];

const MenuInfo = {
  [MenuStatus.HOME]: {
    title: '홈',
    Icon: (state: MenuStatus, props?: HTMLAttributes<SVGSVGElement>) => (
      <>
        <IconHome
          {...props}
          className={`w-6 h-6 ${props?.className || ''}`}
          color={`${state === MenuStatus.HOME ? 'white' : props?.color || 'var(--primary)'}`}
        />
      </>
    ),
    url: '/',
  },
  [MenuStatus.TOTAL_PRICE]: {
    title: '식자재 물가',
    Icon: (state: MenuStatus, props?: HTMLAttributes<SVGSVGElement>) => (
      <>
        <IconChartAreaLine
          {...props}
          className={`w-6 h-6 ${props?.className || ''}`}
          color={`${state === MenuStatus.TOTAL_PRICE ? 'white' : props?.color || 'var(--primary)'}`}
        />
      </>
    ),
    url: '/list',
  },
  [MenuStatus.SCHEDULE]: {
    title: '식단추천',
    Icon: (state: MenuStatus, props?: HTMLAttributes<SVGSVGElement>) => (
      <>
        <IconToolsKitchen
          {...props}
          className={`w-6 h-6 ${props?.className || ''}`}
          color={`${state === MenuStatus.SCHEDULE ? 'white' : props?.color || 'var(--primary)'}`}
        />
      </>
    ),
    url: '/recipe',
  },
  [MenuStatus.CART]: {
    title: '장바구니',
    Icon: (state: MenuStatus, props?: HTMLAttributes<SVGSVGElement>) => (
      <>
        <IconShoppingCart
          {...props}
          className={`w-6 h-6 ${props?.className || ''}`}
          color={`${state === MenuStatus.CART ? 'white' : props?.color || 'var(--primary)'}`}
        />
      </>
    ),
    url: '/cart',
  },
};

// components

const MenuBar = ({}: MenuBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const parent_element = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState<MenuStatus | null>(MenuStatus.HOME);
  const [calced_loc, setCalcedLoc] = useState<CalcedLoc>({ width: 0, left: 0 });

  useEffect(() => {
    if (!parent_element.current) {
      return;
    }

    const menu_el = parent_element.current.querySelector(`#${page}`) as HTMLElement | null;
    if (!menu_el) return;

    setCalcedLoc({ width: menu_el.offsetWidth, left: menu_el.offsetLeft });
  }, [page]);

  useEffect(() => {
    const subpath = location.pathname.split('/')[1];

    switch (subpath) {
      case '':
        setPage(MenuStatus.HOME);
        break;
      case 'list':
        setPage(MenuStatus.TOTAL_PRICE);
        break;
      case 'recipe':
        setPage(MenuStatus.SCHEDULE);
        break;
      case 'cart':
        setPage(MenuStatus.CART);
        break;
      default:
        return;
    }
  }, [location]);

  const onMenuItemClick = (key: MenuStatus) => {
    navigate(MenuInfo[key]?.url || '/');
    setPage(key);
  };

  return (
    <nav
      className="w-fit h-fit p-2 bg-stone-50 rounded-2xl inline-flex justify-between items-center relative z-0 select-none"
      ref={parent_element}
    >
      <div
        style={{
          width: `${calced_loc.width}px`,
          left: `${calced_loc.left}px`,
          transition: 'all 0.5s cubic-bezier(0, 1, 0.49, 1.1)',
        }}
        className={`
      absolute -z-10
      h-[calc(100%-1rem)] bg-primary rounded-2xl
    `}
      />
      {Object.values(MenuStatus).map((menu_key) => (
        <section
          id={menu_key}
          className="w-fit h-fit px-5 py-3 rounded-2xl inline-flex justify-start items-center gap-2 menu-item"
          onClick={() => onMenuItemClick(menu_key)}
        >
          {MenuInfo[menu_key].Icon(page)}
          <span
            className={`
            text-s font-bold
            ${(page === menu_key && 'text-neutral-50') || 'w-0 h-0 overflow-hidden'}
          `}
            style={{
              transition: 'width .5s ease',
            }}
          >
            {MenuInfo[menu_key].title}
          </span>
        </section>
      ))}
    </nav>
  );
};
export default MenuBar;
