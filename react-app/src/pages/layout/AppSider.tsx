import {useLocation} from 'react-router';
import config from 'pages/configure/layout';

export default function AppSider() {
    const {pathname} = useLocation();
    return !config.hideSiderbarLinks.includes(pathname) && <div>AppSider</div>;
}
