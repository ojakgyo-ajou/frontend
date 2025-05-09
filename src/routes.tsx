import { Route, Routes } from 'react-router';
import Root from '@/components/pages/Root';
import Home from '@/components/pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
