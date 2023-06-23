import React, { FC, useState } from 'react';
import { Button, Row, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../routes";
import logiSite from "../images/logoSite.png"
import "../styles/NavBar.css"
import "../styles/authButtonNavBar.css"
import ".././styles/modal.css"
import Registration from './Registration';
import { useTypedDispatch, useTypedSelector } from '../hooks/useTypedSelector';
import { setIsClickButtonRegistration } from '../store/userClickBattonRegistration';
import button_home from '.././images/green-house_l.png'
import Link from 'antd/es/typography/Link';
import { setIsClickButtonLogin } from '../store/userClickButtonLogin';
import Login from './Login';

const NavBar: FC = () => {
   const navigate = useNavigate()

   const isAuth = useTypedSelector((state) => state.auth.isAuth)

   const userClickButtonRegistration = useTypedSelector(state => state.buttonRegistration.userClickButton)

   const userClickButtonLogin = useTypedSelector(state => state.buttonLogin.userClickButton)

   console.log(userClickButtonLogin)

   const dispatch = useTypedDispatch()

   return (
      <div>

         <Row justify="space-between">


            <img className='logoSite' src={logiSite} onClick={() => { navigate(RouteNames.MAIN) }}></img>

            <div >

               {
                  isAuth
                     ?
                     <Button className='authButtonNavBar' onClick={() => navigate(RouteNames.USER)} ghost type="primary">Моя Страница</Button>

                     :


                     <div style={{ display: 'flex', alignItems: 'center' }}>
                        <a
                           className='authButtonNavBar'
                           onClick={() => dispatch(setIsClickButtonRegistration(true))}
                        >
                           Регистрация

                        </a>


                        <input
                           type="image"
                           style={{ height: '30px', width: '37px', marginRight: 10 }}
                           src={button_home}
                           onClick={() => dispatch(setIsClickButtonLogin(true))}
                        />



                     </div>


               }








            </div>

         </Row >

         <div className={(userClickButtonRegistration) ? 'modal' : 'modal active'}>
            <Registration />
         </div>

         <div className={(userClickButtonLogin) ? 'modal' : 'modal active'}>
            <Login />
         </div>

      </div>

   );
};

export default NavBar;