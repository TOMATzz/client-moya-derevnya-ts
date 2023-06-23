import { auto } from "@popperjs/core";
import React from "react";

export const headerStyle: React.CSSProperties = {
   // border: '2px',
   // borderStyle: 'solid',
   // borderColor: 'rgb(152, 251, 152)',

   padding: 0,
   lineHeight: '64px',
   backgroundColor: 'rgba(171,231,165, 0.8)',
   position: "relative",
   zIndex: 10,

   borderRadius: 8,

   // backgroundImage: linear - gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30 %, rgba(0, 0, 0, 0)),
   // boxShadow: 0 8px 16px 0 'rgba(0, 0, 0, 0.2)', 0 6px 20px 0 rgba(0, 0, 0, 0.19)

};


export const contentStyle: React.CSSProperties = {
   padding: 0,

   textAlign: 'center',
   minHeight: 120,
   lineHeight: '120px',
   top: 0,
   left: 0,
   right: 0,
   position: "absolute",
   // color: '#fff',

};
export const footerStyle: React.CSSProperties = {
   textAlign: 'center',
   color: '#fff',
   backgroundColor: 'rgba(171,231,165)',
   position: "absolute",

   left: 0,
   right: 0,

};