import {FC} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {useNavigate} from 'react-router';
import md5 from 'js-md5';
import axios from 'axios';
import configs from '../../config/config';

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const Login: FC = () => {
    const navigatePath = useNavigate();
    console.log(navigatePath, '===navigatePath');
    const onFinish = (values: any) => {
        const {password} = values;
        const data = {...values, password: md5(password)};
        axios.post('/login', {...data}).then(res => {
            const {data} = res;
            if (data.code === 200) {
                navigatePath('/');
                console.log(data.token, '----token');
                
            }
        });
    };
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            labelAlign={'left'}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item label="用户名" name="username" rules={[{required: true, message: '请输入用户名'}]}>
                <Input />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码'}]}>
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 0, span: 16}}>
                <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 0, span: 16}}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
