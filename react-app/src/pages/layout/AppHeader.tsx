import '@fontsource/advent-pro';
import {useLocation} from 'react-router';
import config from 'pages/configure/layout';

export default function AppHeader() {
    const {pathname} = useLocation();
    return !config.hideHeaderLinks.includes(pathname) && <div className="header-bar">Oliver Home</div>;
}
