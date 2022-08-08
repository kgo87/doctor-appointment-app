import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Form, Input, Button} from 'antd';
import axios from 'axios';
import toast from "react-hot-toast";

function Register() {
    const navigate = useNavigate();
    const onFinish = async(values) => 
    {
        console.log("Received values of form: ", values);
        try 
        {
            const response = await axios.post("/api/user/register", values);
            if(response.data.success) 
            {
                toast.success(response.data.message);
                navigate("/login");
            }
            else 
            {
                toast.error(response.data.message);
            }
        } 
        catch (error) 
        {
            toast.error("Something went wrong", error);
        }
    }

    return (
        <div className = 'authentication'>
            <div className = 'register-form card p-3'> </div>
            <h1 className = 'card-title'> Register Form </h1>
            <Form layout = 'vertical' onFinish = {onFinish}>
                <Form.Item label = 'Name' name = 'name'>
                    <Input placeholder = 'Name'/>
                </Form.Item>

                <Form.Item label = 'Email' name = 'email'>
                    <Input placeholder = 'Email'/>
                </Form.Item>

                <Form.Item label = 'Password' name = 'password'>
                    <Input placeholder = 'Password' type = 'password'/>
                </Form.Item>

                <Button className = 'primary-button my-2 full-width-button' htmlType = 'submit'>REGISTER</Button>
                <Link to= '/login' className = 'anchor mt-2'>Click here to log in </Link>
            </Form>
        </div>
    )
}

export default Register;