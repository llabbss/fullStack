import {ReactNode, useMemo} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useLocation} from 'react-router';
import routes from 'routes/config';
import config from 'pages/configure/layout';
import './index.less';
export default function AppMain() {
    const location = useLocation();
    const titleHeader: ReactNode = useMemo(() => {
        return !config.hideHeaderLinks.includes(location?.pathname) ? <div>{config.headerTitle}</div> : <></>;
    }, [location]);

    const renderRouter = useMemo(() => {
        return (
            <div className="out-container">
                <Routes>
                    {routes.map(route => (
                        <Route key={route?.path} path={route.path} element={route?.element}></Route>
                    ))}
                </Routes>
            </div>
        );
    }, []);
    return (
        <>
            {titleHeader}
            {renderRouter}
        </>
    );
}
