import Main from "../pages/Main";
import React from "react";

import Login from "../components/Login";
import Registration from "../components/Registration";
import User from "../pages/User";

export interface IRoute {
   path: string
   element: React.ComponentType
}

export enum RouteNames {
   LOGIN = '/login', MAIN = '/', USER = '/user', NOT = '*'
}

export const publicRoutes: IRoute[] = [


   {
      path: RouteNames.LOGIN,
      element: Login
   },
   {
      path: RouteNames.MAIN,
      element: Main
   },

   {
      path: RouteNames.NOT,
      element: Main
   }
]
export const privateRoutes: IRoute[] = [
   {
      path: RouteNames.LOGIN,
      element: Login
   },
   {
      path: RouteNames.MAIN,
      element: Main
   },
   {
      path: RouteNames.USER,
      element: User
   },
   {
      path: RouteNames.NOT,
      element: Main
   }
]