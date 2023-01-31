import {FC} from 'react';
import LoginFrom from './LoginForm';
import './login.less'

const Login: FC = () => {
    return (
        <div className="login-container">
            <div className="login-bg">你好，欢迎来到Oliver主页</div>
            <div className="login-body">
                <h2>登录</h2>
                <div className="login-form">
                    <LoginFrom />
                </div>
            </div>
        </div>
    );
};

export default Login;
