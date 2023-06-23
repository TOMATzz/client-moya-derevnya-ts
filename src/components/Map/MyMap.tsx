import React, { FC, useEffect, useRef, useState } from 'react';
import { useYMaps } from '@pbe/react-yandex-maps';
import { setUserGeoCoords } from '../../store/userGeoCoordsSlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import $ from 'jquery'
import "../../styles/buttonGeo.css"
import "../../styles/myMap.css"
import "../../styles/counter.css"



import button_false from '../../images/false.png'
import button_true from '../../images/true.png'

import { GeoBtn } from './GeoButton';

import message from "../../audio/new_message-3.mp3"
import axios from 'axios';

import { setIsClickGeoButton } from '../../store/userClickGeoButtonSlice';
import { setIsClickButtonOkInput } from '../../store/userClickButtonOkInputSlice';
import { setIsClickButtonCloseInput } from '../../store/userClickButtonCloseInputSlice';



export const MyMap: FC = () => {


   const ymaps = useYMaps();
   const mapRef = useRef(null);
   const dispatch = useTypedDispatch()


   const userGeo = useTypedSelector(state => state.userGeo.userGeoCoordes)
   const userClickGeoButton = useTypedSelector(state => state.geoButton.userClickButton)
   const userClickButtonCloseInput = useTypedSelector(state => state.buttonCloseInput.userClickButton)







   const userClickButtonOkInput = useTypedSelector(state => state.buttonOkInput.userClickButton)


   // создаем экземпляр(инстанс)  сервера
   const $host = axios.create({ baseURL: 'http://localhost:5000/' })
   var myMap: any = {}


   useEffect(() => {



      if (!ymaps || !mapRef.current) {
         return;
      }

      myMap = new ymaps.Map(mapRef.current, {
         center: userGeo,
         zoom: 10,
         controls: ["fullscreenControl"]
      })


      // создаем кнопку поиска -------------------------------------------
      const myButton = GeoBtn.createButton(ymaps, myMap, "Найти меня", 'btnGeoImg')

      // добавлям кнопку на карту 

      myMap.controls.add(myButton);

      // слушаем событие

      myButton.events.add('click', function (e: any) {


         // получаем координаты из браузера

         navigator.geolocation.getCurrentPosition(function (data) {

            //если глобальные  координаты пользователя не равны полученным координатам с браузера и в инпуте небыло изменения адреса то замещаем глобальные координаты ,иначе центр карты переводим в глобальные координаты,это исключает многократный рендер 
            if (userGeo[0] !== data.coords.latitude && userGeo[1] !== data.coords.longitude && !
               userClickButtonOkInput) {

               dispatch(setUserGeoCoords([data.coords.latitude, data.coords.longitude]))
            } else {
               myMap.setCenter(userGeo);

            }

         }, (error) => { console.log(error) });

         if (userClickButtonCloseInput == false) dispatch(setIsClickGeoButton(true))


      });
      // создаем метку геоположения пользователя на карте
      var userPlacemark = new ymaps.Placemark(userGeo,
         {
            iconContent: 'Я',
         },
         {
            // создаем кастомный балон с инпутом
            balloonLayout: BalloonContentLayout,
            balloonAutoPan: true,
            balloonOffset: [40, -20],

            preset: "islands#redStretchyIcon",

            hideIconOnBalloonOpen: false,

         }
      );
      // звуковое оповещение балона
      userClickGeoButton && myMap.geoObjects.add(userPlacemark);

      BalloonContentLayout && setTimeout(() => {
         var audio = new Audio(message);
         audio.play();
         userPlacemark.balloon.open()

      }, 1000);
      // возращаем функцию удаления предыдущей карты

      // window.addEventListener('resize', function (event) {
      //    console.log(myMap.container.getSize())
      // }, true);




      return function cleanup() {
         myMap.destroy()


      }


   }, [ymaps, userGeo]);


   if (ymaps) {

      //  балун на метке геоположения пользователя
      if (ymaps && userClickGeoButton && userClickButtonCloseInput == false) {


         var BalloonContentLayout: any = ymaps.templateLayoutFactory.createClass(

            // Создаем инпут

            '<div class="dropdown">' + '<div class="d33"></div>' +
            '<div class="input_container">' +
            '<input  class="inputSugg" type="text"  placeholder="Не соответствует ?, введите адрес:" value=""  >' +
            `<input type="image" src="${button_true}" class="btn-true" />` +
            `<input type="image" src="${button_false}" class="btn-false" />` +
            '</div>' +
            '</div>',
            {

               // Переопределяем функцию build
               build: function () {
                  //Вызываем метод build родительского класса.
                  BalloonContentLayout.superclass.build.call(this);
                  //при нажатии на кректик закрываем инпут и не открываем до обновления страницы
                  $(".btn-false").on('click', this.onClose)
                  // при нажатии на галку обращаемся на сервер для получения координат по адресу
                  $(".btn-true").on('click', this.onHost)
                  //вводим адрес в инпут
                  $(".inputSugg").on('input', this.onInput)
                  //фокус на инпут при открытии балона
                  $(".inputSugg").focus();

               },

               // Переопределяем функцию clear
               clear: function () {

                  $(".inputSugg").off('input', this.onInput)
                  $(".btn-true").off('click', this.onHost)
                  $(".btn-false").off('click', this.onClose)
                  BalloonContentLayout.superclass.clear.call(this);
               },
               //onInput ожидает начало ввода
               onInput: () => {
                  //получаем value инпута
                  let textGeoInput: any = $('.inputSugg').val()

                  // если что-то вводим и  есть предупреждение об отсутсвии адреса или пустой строки,закрываем их
                  if (textGeoInput) {
                     $(".warning-content").length && $("div ").remove(".warning-content")
                     $(".empty-content").length && $("div ").remove(".empty-content")
                  }

                  //если выпадающего списка нет то выводим его
                  if (!$(".dropdown-content").length) {
                     // если есть предупреждение об отсутсвии адреса,закрываем его



                     $(".dropdown").append(
                        '<div  class="dropdown-content">' +

                        `<input  id="one"    type="button" >` +
                        `<input  id="two"    type="button" >` +
                        `<input  id="three"  type="button" >` +

                        '</div>');
                  }
                  // если длинна строки ввода в инпут равна 0 ,то удаляем выпадающей список
                  if (textGeoInput.length == 0) {

                     $("div ").remove(".dropdown-content");
                  }

                  // обращаемся к suggets для получения данных с сервера яндекс
                  ymaps.suggest(textGeoInput).then((items: any) => {
                     // начинаем запонять выпадающий список с первого символа


                     if (textGeoInput.length > 0) {

                        $("#one").val(items[0].displayName)
                        $("#two").val(items[1].displayName)
                        $("#three").val(items[2].displayName)
                     }
                     // кликаем по спискам ,выводим в input 


                     $("#one").on('click', () => {



                        $(".inputSugg").val(items[0].displayName)
                        $("div ").remove(".dropdown-content");
                     })

                     $("#two").on('click', () => {


                        $(".inputSugg").val(items[1].displayName)
                        $("div ").remove(".dropdown-content");
                     })

                     $("#three").on('click', () => {

                        $(".inputSugg").val(items[2].displayName)
                        $("div ").remove(".dropdown-content");
                     })


                  });

               },
               onHost: async (event: any) => {
                  // запоминаем что кнопку галка нажали
                  dispatch(setIsClickButtonOkInput(true))
                  // исключаем многократное нажатие
                  if (!event.detail || event.detail == 1) {
                     //если выпадающий список есть закрываем его

                     if ($(".dropdown-content").length) {
                        $("div ").remove(".dropdown-content");
                     }
                     // если в инпуте ничего нет,выводим предупреждение
                     if (!$('.inputSugg').val()) {
                        $(".dropdown").append(
                           '<div  class="empty-content">' +
                           '<h4 class="warning">Введите адрес!</h4>' + '</div>');

                     }
                     // если инпут не пустой делаем запрос на сервер для получения координат по адресу,проверяем исключения
                     if ($('.inputSugg').val()) {
                        try {
                           const { data } = await $host.get('api/geoCoords/coords', {
                              params: {
                                 request: $('.inputSugg').val()
                              }
                           });
                           //если ответ с серера не пустой то закрываем инпут и рендерим карту
                           if (data) {
                              $("div ").remove(".dropdown")

                              dispatch(setUserGeoCoords(data))
                              // if (myMap) myMap.destroy()
                           } else {

                              //если ответ с сервера пустой открываем предупреждение  изменить ввод,если нет предупреждения  то выводим его

                              if (!$(".warning-content").length)
                                 $(".dropdown").append(
                                    '<div  class="warning-content">' +
                                    '<h4 class="warning"> Адрес не найден в базе!</h4>' + '<p class="warning_context"> Попробуйте ближайший населенный пункт или улицу </p>' + '</div>');


                           }


                        } catch (error) { console.error(error); }
                     }
                  }

               },
               onClose: () => {
                  dispatch(setIsClickButtonCloseInput(true))

                  $("div ").remove(".dropdown")
               }
            });
      }
   }

   // -----------------------------------------------------------------------------





   return (


      <div ref={mapRef} className='myMap' > </div>



   )


}
