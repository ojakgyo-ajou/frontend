import { Outlet } from 'react-router';
import MenuBar from '@/components/menu-bar';

export default function Root() {
  return (
    <>
      <main className="h-screen overflow-y-auto pb-16">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 z-50">
        <MenuBar />
      </div>
    </>
  );
}
