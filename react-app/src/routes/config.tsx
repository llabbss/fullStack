import {lazy, ReactNode, Suspense} from 'react';
import {RouteProps} from 'react-router';
// import Dashboard from 'pages/Dashboard';
const lazyLoader = (path: string): ReactNode => {
    const Comp = lazy(() => import(`pages/${path}`));
    return (
        <Suspense fallback="加载中">
            <Comp />
        </Suspense>
    );
};
const routes: RouteProps[] = [
    {
        path: '/',
        element: lazyLoader('Index')
        // children: [
        //     {
        //         path: '/index',
        //         element: lazyLoader('pages/Index')
        //     }
        // ]
    },
    {
        path: '/login',
        element: lazyLoader('Login')
    }
];
export default routes;
