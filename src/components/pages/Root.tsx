import { Outlet, useLocation } from 'react-router';
import MenuBar from '@/components/menu-bar';

export default function Root() {
  const location = useLocation();
  const isMenubarVisible = !location.pathname.startsWith('/item') && !location.pathname.startsWith('/product');

  return (
    <div className="mx-auto max-w-screen-sm h-screen flex flex-col overflow-hidden bg-white">
      <main className="flex-grow overflow-y-auto pb-16">
        <Outlet />
      </main>

      {isMenubarVisible && (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 z-50 max-w-screen-sm mx-auto">
          <MenuBar />
        </div>
      )}
    </div>
  );
}
