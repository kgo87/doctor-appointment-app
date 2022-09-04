import React from  'react'
import { Link, useNavigate } from "react-router-dom";
import {Form, Input, Button} from 'antd';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
          dispatch(showLoading());
          const response = await axios.post("/api/user/login", values);
          dispatch(hideLoading());
          if (response.data.success) {
            toast.success(response.data.message);
            localStorage.setItem("token", response.data.data);
            navigate("/");
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          dispatch(hideLoading());
          toast.error("Something went wrong");
        }
      };

    return (
        <div className = 'authentication'>
            <div className = 'register-form card p-3'> </div>
            <h1 className = 'card-title'> Log-in Form </h1>
            <Form layout = 'vertical' onFinish = {onFinish}>

                <Form.Item label = 'Email' name = 'email'>
                    <Input placeholder = 'Email'/>
                </Form.Item>

                <Form.Item label = 'Password' name = 'password'>
                    <Input placeholder = 'Password' type = 'password'/>
                </Form.Item>

                <Button className = 'primary-button my-2 full-width-button' htmlType = 'submit'>LOG IN</Button>
                <Link to= '/register' className = 'anchor mt-2'>Click here to register </Link>
            </Form>
        </div>
    )
}

export default Login