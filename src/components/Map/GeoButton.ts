
import greenArrow from "../../images/greenArrow_2.png";
export interface IGeoBtn {
   createButton: (ymaps: any, myMap: any, textBtn: string, classBtn: string) => any;

}


export const GeoBtn: IGeoBtn = {
   createButton: (ymaps: any, myMap: any, textBtn: string, classBtn: string) => {


      if (myMap.container.getSize()[0] < 400) {

         var textBtn = '', classBtn = 'btnGeoImgSmall'
      }
      return new ymaps.control.Button({
         data: { content: textBtn, image: greenArrow, },
         options: {

            position: {
               left: '10px', top: '90px',
               float: "left", floatIndex: 0
            },

            layout: ymaps.templateLayoutFactory.createClass(

               "<div  class='myButton'>" +

               `<img class=${classBtn} src={{ data.image }}>` +
               "{{ data.content }}" +

               "</div>"

            )
         }
      });

   }


}










