import React, { FC } from 'react';
import { Button, Form, Input, Row, Card, Space } from "antd";
// import { useDispatch } from 'react-redux';

import { setIsClickButtonRegistration } from '../store/userClickBattonRegistration';
import { useTypedDispatch } from '../hooks/useTypedSelector';


import ".././styles/counter.css"
import "../styles/modal.css"


import button_false from '.././images/false.png'
import button_true from '.././images/true.png'


//----------------------------------------------------
const Registration: FC = () => {

   const dispatch = useTypedDispatch()

   const onFinish = (values: any) => {
      console.log('Success:', values);
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };




   // const dispatch = useDispatch()


   return (




      <Card title="Регистрация"
         className='card'

         headStyle={{ fontFamily: "Georgia", borderColor: "PaleGreen", textAlign: 'center', }}


      >


         <Form

            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}

            // style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >

            <Form.Item
               label="Ваше имя"
               name="user"
               rules={[{ required: true, message: 'Человека без имени не бывает)' }]}
            >
               <Input />
            </Form.Item>


            <Form.Item
               label="Эл.почта"
               name="email"
               rules={[{ required: true, message: 'Эл.почта нужна для регистрации!' }]}
            >
               <Input />
            </Form.Item>


            <Form.Item
               label="Пароль"
               name="password"
               rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
            >
               <Input.Password />
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

                  onClick={() => dispatch(setIsClickButtonRegistration(false))}
               />

            </div>

         </Form>

      </Card >




   );

};

export default Registration;