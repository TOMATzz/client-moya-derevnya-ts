import React, { FC } from 'react';
import { Button, Card, Checkbox, Form, Input, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import ".././styles/counter.css"
import "../styles/modal.css"


import button_false from '.././images/false.png'
import button_true from '.././images/true.png'

import { useTypedDispatch } from '../hooks/useTypedSelector';
import { setIsClickButtonLogin } from '../store/userClickButtonLogin';


const Login: FC = () => {

   //----------------------------------------------------

   const navigate = useNavigate();

   const dispatch = useTypedDispatch()
   const onFinish = (values: any) => {
      console.log('Success:', values);
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };


   return (

      <Card title="Моя страница"
         className='card'

         headStyle={{ fontFamily: "Georgia", borderColor: "PaleGreen", textAlign: 'center', }}


      >
         <Form

            name="basic_login"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}

            // style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >


            <Form.Item
               label="Эл.почта"
               name="email_login"
               rules={[{ required: true, message: 'Обязательное поле!' }]}
            >
               <Input />
            </Form.Item>


            <Form.Item
               label="Пароль"
               name="password_login"
               rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
            >
               <Input.Password />

            </Form.Item>


            <Link style={{ textDecoration: "underline" }}>
               Забыли пароль?
            </Link>

            <Form.Item

               name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
               <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>



            <div style={{ display: ' flex', justifyContent: 'right' }} >

               <input
                  type="image"
                  src={button_true}
                  style={{ marginRight: 10 }}
               />

               <input
                  type="image"
                  src={button_false}

                  onClick={() => dispatch(setIsClickButtonLogin(false))}
               />

            </div>




         </Form>
      </Card>

   );
};


export default Login;