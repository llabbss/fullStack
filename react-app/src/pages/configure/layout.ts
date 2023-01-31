import {LayoutRouteProps} from 'react-router';

interface layoutConfig {
    header?: LayoutRouteProps[];
    headerTitle: string;
    hideHeaderLinks: string[];
    hideSiderbarLinks: string[];
    siderBar: LayoutRouteProps[];
}
const layout: layoutConfig = {
    headerTitle: '',
    hideHeaderLinks: ['/login'],
    hideSiderbarLinks: ['/login', '/'],
    siderBar: []
};

export default layout;
