
import { YMaps } from '@pbe/react-yandex-maps';
import React, { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, } from "../routes";


const AppRouter: FC = () => {


   return (
      <YMaps
         query={{
            ns: "use-load-option",
            load: "package.full",
         }}


      >
         <Routes>
            isAuth
            ?
            {privateRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)}
            :
            {publicRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)}

         </Routes>
      </YMaps>

   );
};

export default AppRouter;