import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

// модули:
// axios -асинхронный запрос на сервер
// react-index.ts-dom -постраничная навигация
// @types react-index.ts-dom-типы для react-index.ts-dom
// react-bootstrap-верстка
// redux-управление состоянием
// redux-thunk асинхронные экшен
// react-redux для связки
// antd-шаблоны пользовательских компонентов
// @types/react-redux -типы
// @types/redux-thunk-типы


const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />


      </BrowserRouter>
   </Provider>
);

