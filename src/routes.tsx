import { Route, Routes } from 'react-router';
import Root from '@/components/pages/Root';
import Home from '@/components/pages/Home';
import Setting from '@/components/pages/Setting';
import NotFound from '@/components/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="setting" element={<Setting />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
