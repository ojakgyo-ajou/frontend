import { Route, Routes } from 'react-router';
import Root from '@/components/pages/Root';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Register from '@/components/pages/Register';
import List from '@/components/pages/List';
import Item from '@/components/pages/Item';
import Product from '@/components/pages/Product';
import Recipe from '@/components/pages/Recipe';
import Setting from '@/components/pages/Setting';
import NotFound from '@/components/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="list" element={<List />} />
        <Route path="item/:item" element={<Item />} />
        <Route path="product/:item" element={<Product />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="setting" element={<Setting />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
