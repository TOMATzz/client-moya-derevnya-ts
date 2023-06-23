import React, { FC } from 'react';
import './styles/App.css';
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { headerStyle, contentStyle, footerStyle } from "./styles/layout";
import { Provider } from "react-redux";
import { store } from "./store";

const App: FC = () => {

   return (

      <Provider store={store}>

         <Layout className='App'>
            <Header style={headerStyle}>
               <NavBar />
            </Header>
            <Content style={contentStyle}>

               <AppRouter />

               <Footer style={footerStyle}>
               </Footer>
            </Content>


         </Layout>



      </Provider>
   );
}

export default App;
