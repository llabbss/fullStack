import {ConfigProvider, Watermark} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import layout from 'pages/configure/layout';
import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppSider from './AppSider';
import 'antd/dist/reset.css';
import './index.less';
console.log(layout);

export default function PrimaryLayout() {
    return (
        <ConfigProvider locale={zhCN}>
            <div className="app-container">
                <AppSider />
                <div className="app-content">
                    <AppHeader />
                    <Watermark content="oliver house">
                        <AppMain />
                    </Watermark>
                </div>
            </div>
        </ConfigProvider>
    );
}
