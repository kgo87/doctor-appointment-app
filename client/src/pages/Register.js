import React from 'react';
import {Form, Input, Button} from 'antd';

function Register() {
    return (
        <div className = 'authentication'>
            <div className = 'register-form card p-3'> </div>
            <h1 className = 'card-title'> Register Form </h1>
            <Form layout = 'vertical'>
                <Form.Item label = 'Name' name = 'name'>
                    <Input placeholder = 'Name'/>
                </Form.Item>

                <Form.Item label = 'Email' name = 'email'>
                    <Input placeholder = 'Email'/>
                </Form.Item>

                <Form.Item label = 'Password' name = 'password'>
                    <Input placeholder = 'Password'/>
                </Form.Item>

                <Button className = 'primary-button mt-3'>REGISTER</Button>
            </Form>
        </div>
    )
}

export default Register;