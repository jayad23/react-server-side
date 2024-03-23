import { ComponentType } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

interface routeItem { component: ComponentType<object> | null | undefined; path: string; id: number}
type RoutesType = Record<string, { default: ComponentType<object>}>;

const ROUTES: RoutesType = import.meta.glob(
  ['/src/pages/**/[\\w[-]*.{jsx,tsx}', '!**/(_app|404).*'],
  { eager: true }
);

const filesRoutes = Object.keys(ROUTES).map((route, index) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { id: index, path, component: ROUTES[route].default }
});

console.log(filesRoutes)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {filesRoutes.map((route: routeItem) => (
                  <Route key={route.id} path={route.path} Component={route.component} />
                ))}
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
