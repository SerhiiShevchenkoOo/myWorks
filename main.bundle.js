/*! For license information please see main.bundle.js.LICENSE.txt */
!function(e){function t(t){for(var n,r,a=t[0],l=t[1],c=t[2],m=0,d=[];m<a.length;m++)r=a[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==s[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={0:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;i.push([122,1]),o()}({122:function(e,t,o){o(123),e.exports=o(312)},309:function(e,t,o){},310:function(e,t){document.getElementById("DayGroup");var o=document.getElementsByClassName("canoe"),n=document.getElementsByClassName("canoeReflection"),s=document.getElementsByClassName("treesPink"),i=document.getElementsByClassName("treesOrange"),r=document.getElementsByClassName("CoralTriangle1"),a=document.getElementsByClassName("CoralTriangle2"),l=document.getElementsByClassName("CoralTriangle3"),c=document.getElementsByClassName("waveRight"),u=document.getElementsByClassName("waveLeft"),m=document.getElementsByClassName("blueCloudLeft"),d=document.getElementsByClassName("blueCloudRight"),f=document.getElementsByClassName("pinkCloud"),h=document.getElementsByClassName("sunRayLeft"),g=document.getElementsByClassName("sunRayRight"),v=document.getElementsByClassName("treesPinkR"),p=document.getElementsByClassName("treesOrangeR"),y=document.getElementsByClassName("RCoralTriangle1"),b=document.getElementsByClassName("RCoralTriangle2"),x=document.getElementsByClassName("RCoralTriangle3"),k=new TimelineMax({repeat:-1,yoyo:!0,ease:"easeInOut"});k.fromTo(o,1.5,{y:0},{y:4}),k.fromTo(n,1.5,{y:0},{y:-4},"-=1.5");var w=new TimelineMax({repeat:-1,yoyo:!0,ease:"easeInOut"});w.fromTo(u,5,{x:0},{x:35}),w.fromTo(c,5,{x:0},{x:-35},"-=5"),new TimelineMax({repeat:-1,yoyo:!0,ease:"easeInOut"}).staggerFromTo(s,2,{transformOrigin:"50% 0%",rotation:"5deg"},{rotation:"-5deg"},.2),new TimelineMax({repeat:-1,yoyo:!0}).staggerFromTo(v,2,{transformOrigin:"50% 0%",rotation:"-5deg"},{rotation:"5deg"},.2),new TimelineMax({repeat:-1,yoyo:!0,ease:"easeInOut"}).fromTo(i,2,{transformOrigin:"50% 100%",rotation:"1deg"},{rotation:"-1deg"},.2),new TimelineMax({repeat:-1,yoyo:!0}).fromTo(p,2,{transformOrigin:"50% 0%",rotation:"-1deg"},{rotation:"1deg"},.2);var A=new TimelineMax({repeat:-1});A.set([r,l],{transformOrigin:"50% 20%",rotation:"0deg",repeatDelay:2}),A.to([r,l],1,{rotation:"6deg",ease:"easeInOut"}),A.to([r,l],1,{rotation:"-6deg",ease:"easeInOut"}),A.to([r,l],.5,{rotation:"3deg",ease:"easeInOut"}),A.to([r,l],.5,{rotation:"-3deg",ease:"easeInOut"}),A.to([r,l],.4,{rotation:"2.5deg",ease:"easeInOut"}),A.to([r,l],.4,{rotation:"-2.5deg",ease:"easeInOut"}),A.to([r,l],.4,{rotation:"0deg",ease:"easeInOut"});var S=new TimelineMax({repeat:-1});S.set(a,{transformOrigin:"50% 20%",rotation:"0deg",delay:.5,repeatDelay:2.2}),S.to(a,.85,{rotation:"6deg",ease:"easeInOut"}),S.to(a,.85,{rotation:"-6deg",ease:"easeInOut"}),S.to(a,.5,{rotation:"3deg",ease:"easeInOut"}),S.to(a,.5,{rotation:"-3deg",ease:"easeInOut"}),S.to(a,.4,{rotation:"2.5deg",ease:"easeInOut"}),S.to(a,.4,{rotation:"-2.5deg",ease:"easeInOut"}),S.to(a,.4,{rotation:"0deg",ease:"easeInOut"});var _=new TimelineMax({repeat:-1});_.set([y,x],{transformOrigin:"50% 80%",rotation:"0deg",repeatDelay:2}),_.to([y,x],1,{rotation:"-6deg",ease:"easeInOut"}),_.to([y,x],1,{rotation:"6deg",ease:"easeInOut"}),_.to([y,x],.5,{rotation:"-3deg",ease:"easeInOut"}),_.to([y,x],.5,{rotation:"3deg",ease:"easeInOut"}),_.to([y,x],.4,{rotation:"-2.5deg",ease:"easeInOut"}),_.to([y,x],.4,{rotation:"2.5deg",ease:"easeInOut"}),_.to([y,x],.4,{rotation:"0deg",ease:"easeInOut"});var q=new TimelineMax({repeat:-1});q.set(a,{transformOrigin:"50% 80%",rotation:"0deg",delay:.5,repeatDelay:2.2}),q.to(b,.85,{rotation:"-6deg",ease:"easeInOut"}),q.to(b,.85,{rotation:"6deg",ease:"easeInOut"}),q.to(b,.5,{rotation:"-3deg",ease:"easeInOut"}),q.to(b,.5,{rotation:"3deg",ease:"easeInOut"}),q.to(b,.4,{rotation:"-2.5deg",ease:"easeInOut"}),q.to(b,.4,{rotation:"2.5deg",ease:"easeInOut"}),q.to(b,.4,{rotation:"0deg",ease:"easeInOut"});var L=new TimelineMax({repeat:-1,yoyo:!0});L.fromTo(m,5.5,{x:0},{x:55,ease:"linear"}),L.fromTo(d,5.5,{x:0},{x:-55,ease:"linear"},"-=5"),new TimelineMax({repeat:-1,yoyo:!0,ease:"easeInOut"}).staggerFromTo(f,20,{x:0},{x:300},1.5);var T=new TimelineMax({repeat:-1,yoyo:!0});T.fromTo(h,4.5,{x:0},{x:25,ease:"linear"}),T.fromTo(g,4.5,{x:0},{x:-25,ease:"linear"},"-=5")},312:function(e,t,o){"use strict";o.r(t);var n={};o.r(n),o.d(n,"set",(function(){return d})),o.d(n,"get",(function(){return f})),o.d(n,"del",(function(){return h}));o(309);var s=o(88),i=(o(310),o(311),[[new Audio("./assets/songs/animals/1.mp3"),new Audio("./assets/songs/animals/0.mp3"),new Audio("./assets/songs/animals/2.mp3"),new Audio("./assets/songs/animals/3.mp3"),new Audio("./assets/songs/animals/4.mp3"),new Audio("./assets/songs/animals/5.mp3"),new Audio("./assets/songs/animals/999.mp3"),new Audio("./assets/songs/animals/7.mp3")],[new Audio("./assets/songs/colors/red.mp3"),new Audio("./assets/songs/colors/orange.mp3"),new Audio("./assets/songs/colors/yellow.mp3"),new Audio("./assets/songs/colors/green.mp3"),new Audio("./assets/songs/colors/blue.mp3"),new Audio("./assets/songs/colors/purple.mp3"),new Audio("./assets/songs/colors/black.mp3"),new Audio("./assets/songs/colors/white.mp3")],[new Audio("./assets/songs/family/children.mp3"),new Audio("./assets/songs/family/parents.mp3"),new Audio("./assets/songs/family/grandpa.mp3"),new Audio("./assets/songs/family/grandma.mp3"),new Audio("./assets/songs/family/granny.mp3"),new Audio("./assets/songs/family/father.mp3"),new Audio("./assets/songs/family/brother.mp3"),new Audio("./assets/songs/family/mather.mp3")],[new Audio("./assets/songs/food/apple.mp3"),new Audio("./assets/songs/food/banana.mp3"),new Audio("./assets/songs/food/pizza.mp3"),new Audio("./assets/songs/food/soup.mp3"),new Audio("./assets/songs/food/cheese.mp3"),new Audio("./assets/songs/food/egg.mp3"),new Audio("./assets/songs/food/sandwich.mp3"),new Audio("./assets/songs/food/donut.mp3")],[new Audio("./assets/songs/works/teacher.mp3"),new Audio("./assets/songs/works/policeman.mp3"),new Audio("./assets/songs/works/doctor.mp3"),new Audio("./assets/songs/works/fireman.mp3"),new Audio("./assets/songs/works/driver.mp3"),new Audio("./assets/songs/works/businessman.mp3"),new Audio("./assets/songs/works/engineer.mp3"),new Audio("./assets/songs/works/cook.mp3")],[new Audio("./assets/songs/body/head.mp3"),new Audio("./assets/songs/body/hand.mp3"),new Audio("./assets/songs/body/foot.mp3"),new Audio("./assets/songs/body/eye.mp3"),new Audio("./assets/songs/body/finger.mp3"),new Audio("./assets/songs/body/leg.mp3"),new Audio("./assets/songs/body/arm.mp3"),new Audio("./assets/songs/body/hair.mp3")],[new Audio("./assets/songs/emotion/happy.mp3"),new Audio("./assets/songs/emotion/depressed.mp3"),new Audio("./assets/songs/emotion/calm.mp3"),new Audio("./assets/songs/emotion/cheerful.mp3"),new Audio("./assets/songs/emotion/sad.mp3"),new Audio("./assets/songs/emotion/upset.mp3"),new Audio("./assets/songs/emotion/hope.mp3"),new Audio("./assets/songs/emotion/attachment.mp3")],[new Audio("./assets/songs/clothes/sock.mp3"),new Audio("./assets/songs/clothes/suit.mp3"),new Audio("./assets/songs/clothes/tShirt.mp3"),new Audio("./assets/songs/clothes/dress.mp3"),new Audio("./assets/songs/clothes/glasses.mp3"),new Audio("./assets/songs/clothes/scarf.mp3"),new Audio("./assets/songs/clothes/skirt.mp3"),new Audio("./assets/songs/clothes/pinafore.mp3")]]);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,s=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){s=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(s)throw i}}return o}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function m(e,t,o,n){var s,i=null;try{i=document.createElement(e)}catch(e){throw new Error("Unable to create HTMLElement! Give a proper tag name")}t&&(s=i.classList).add.apply(s,l(t.split(" "))),o&&Array.isArray(o)?o.forEach((function(e){return e&&i.appendChild(e)})):o&&"object"===a(o)?i.appendChild(o):o&&"string"==typeof o&&(i.innerHTML=o),n&&n.appendChild(i);for(var c=arguments.length,u=new Array(c>4?c-4:0),m=4;m<c;m++)u[m-4]=arguments[m];return u.length&&u.forEach((function(e){var t=r(e,2),o=t[0],n=t[1];""===n&&i.setAttribute(o,""),o.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)?i.setAttribute(o,n):i.dataset[o]=n})),i}function d(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return JSON.parse(window.localStorage.getItem(e)||t)}function h(e){localStorage.removeItem(e)}new Image("./pig.svg");var g=[[{button:"animals",front:{elem:"div",text:"Pig"},back:{elem:"div",text:"Свинья"},vol:""},{button:"animals",front:{elem:"div",text:"Dog"},back:{elem:"div",text:"Собака"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Bird"},back:{elem:"div",text:"Птица"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Сat"},back:{elem:"div",text:"Кошка"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Hamster"},back:{elem:"div",text:"Хомяк"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Frog"},back:{elem:"div",text:"Лягушка"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Cow"},back:{elem:"div",text:"Корова"},vol:"",image:""},{button:"animals",front:{elem:"div",text:"Chicken"},back:{elem:"div",text:"Курица"},vol:"",image:""}],[{button:"colors",front:{elem:"div",text:"Red"},back:{elem:"div",text:"Красный"},vol:""},{button:"colors",front:{elem:"div",text:"Orange"},back:{elem:"div",text:"Оранжевый"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"Yellow"},back:{elem:"div",text:"Жёлтый"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"Green"},back:{elem:"div",text:"Зеленый"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"Blue"},back:{elem:"div",text:"Синий"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"Purple"},back:{elem:"div",text:"Фиолетовый"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"Black"},back:{elem:"div",text:"Чёрный"},vol:"",image:""},{button:"colors",front:{elem:"div",text:"White"},back:{elem:"div",text:"Белый"},vol:"",image:""}],[{button:"family",front:{elem:"div",text:"Mather"},back:{elem:"div",text:"Мама"},vol:""},{button:"family",front:{elem:"div",text:"Father"},back:{elem:"div",text:"Папа"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Brother"},back:{elem:"div",text:"Брат"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Sister"},back:{elem:"div",text:"Сестра"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Granny"},back:{elem:"div",text:"Бабушка"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Grandpa"},back:{elem:"div",text:"Дедушка"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Parents"},back:{elem:"div",text:"Родители"},vol:"",image:""},{button:"family",front:{elem:"div",text:"Children"},back:{elem:"div",text:"Дети"},vol:"",image:""}],[{button:"food",front:{elem:"div",text:"Apple"},back:{elem:"div",text:"Яблоко"},vol:""},{button:"food",front:{elem:"div",text:"Banana"},back:{elem:"div",text:"Банан"},vol:""},{button:"food",front:{elem:"div",text:"Pizza"},back:{elem:"div",text:"Пицца"},vol:""},{button:"food",front:{elem:"div",text:"Soup"},back:{elem:"div",text:"Суп"},vol:"",image:""},{button:"food",front:{elem:"div",text:"Cheese"},back:{elem:"div",text:"Сыр"},vol:"",image:""},{button:"food",front:{elem:"div",text:"Egg"},back:{elem:"div",text:"Яйцо"},vol:"",image:""},{button:"food",front:{elem:"div",text:"Sandwich"},back:{elem:"div",text:"Сэндвич"},vol:"",image:""},{button:"food",front:{elem:"div",text:"Donut"},back:{elem:"div",text:"Пончик"},vol:"",image:""}],[{button:"works",front:{elem:"div",text:"Teacher"},back:{elem:"div",text:"Учитель"},vol:""},{button:"works",front:{elem:"div",text:"Policeman"},back:{elem:"div",text:"Полицейский"},vol:"",image:""},{button:"works",front:{elem:"div",text:"Doctor"},back:{elem:"div",text:"Врач"},vol:"",image:""},{button:"works",front:{elem:"div",text:"Fireman"},back:{elem:"div",text:"Пожарник"},vol:"",image:""},{button:"works",front:{elem:"div",text:"Driver"},back:{elem:"div",text:"Водитель"},vol:"",image:""},{button:"works",front:{elem:"div",text:"Businessman"},back:{elem:"div",text:"Бизнесмен"},vol:"",image:""},{button:"works",front:{elem:"div",text:"Engineer"},back:{elem:"div",text:"Инженер"},vol:""},{button:"works",front:{elem:"div",text:"Cook"},back:{elem:"div",text:"Повар"},vol:""}],[{button:"body",front:{elem:"div",text:"Head"},back:{elem:"div",text:"Голова"},vol:""},{button:"body",front:{elem:"div",text:"Hand"},back:{elem:"div",text:"Ладонь"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Foot"},back:{elem:"div",text:"Стопа"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Eye"},back:{elem:"div",text:"Глаз"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Finger"},back:{elem:"div",text:"Палец"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Leg"},back:{elem:"div",text:"Нога"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Arm"},back:{elem:"div",text:"Рука"},vol:"",image:""},{button:"body",front:{elem:"div",text:"Hair"},back:{elem:"div",text:"Волосы"},vol:"",image:""}],[{button:"emotion",front:{elem:"div",text:"Happy"},back:{elem:"div",text:"Счастливый"},vol:""},{button:"emotion",front:{elem:"div",text:"Depressed"},back:{elem:"div",text:"Подавленный"},vol:"",image:""},{button:"emotion",front:{elem:"div",text:"Calm"},back:{elem:"div",text:"Спокойный"},vol:"",image:""},{button:"emotion",front:{elem:"div",text:"Cheerful"},back:{elem:"div",text:"Веселый"},vol:"",image:""},{button:"emotion",front:{elem:"div",text:"Sad"},back:{elem:"div",text:"Грустный"},vol:"",image:""},{button:"emotion",front:{elem:"div",text:"Upset"},back:{elem:"div",text:"Расстроеный"},vol:"",image:""},{button:"emotion",front:{elem:"div",text:"Hope"},back:{elem:"div",text:"Надеяться"},vol:""},{button:"emotion",front:{elem:"div",text:"Attachment"},back:{elem:"div",text:"Верность"},vol:"",image:""}],[{button:"clothes",front:{elem:"div",text:"Socks"},back:{elem:"div",text:"Носки"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Suit"},back:{elem:"div",text:"Костюм"},vol:""},{button:"clothes",front:{elem:"div",text:"T-shirt"},back:{elem:"div",text:"Футболка"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Dress"},back:{elem:"div",text:"Платье"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Glasses"},back:{elem:"div",text:"Очки"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Scarf"},back:{elem:"div",text:"Шарф"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Skirt"},back:{elem:"div",text:"Юбка"},vol:"",image:""},{button:"clothes",front:{elem:"div",text:"Pinafore"},back:{elem:"div",text:"Фартух"},vol:"",image:""}]];function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}for(var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.history=[],this.pages=document.querySelectorAll(".page"),this.cards=document.querySelectorAll(".card"),this.noise=i,this.activePage=document.querySelectorAll(".swiper-slide-active")[1].querySelectorAll(".swiper-slide-active"),this.gameButton=document.querySelector(".toggle__handler"),this.settingInfo=document.querySelectorAll(".nav__item"),this.startGameButton=document.querySelector(".play-game"),this.hart=document.querySelector(".hart")}var t,o,s;return t=e,(o=[{key:"goToPlay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.activeIndex;document.querySelector(".hart").innerHTML="",0!=e?(this.openPage=this.pages[e],this.gameImages=this.openPage.querySelectorAll(".flip__ready-to-start"),this.gameButton.classList.contains("game")?(this.settingInfo.forEach((function(e){return e.classList.remove("nav__item--active")})),this.settingInfo[1].classList.add("nav__item--active"),this.gameImages.forEach((function(e){return e.classList.add("ready")})),this.gameButton.classList.add("toggle__handler--active")):(this.settingInfo.forEach((function(e){return e.classList.remove("nav__item--active")})),this.settingInfo[0].classList.add("nav__item--active"),this.gameImages.forEach((function(e){return e.classList.remove("ready")})),this.gameButton.classList.remove("toggle__handler--active"))):this.gameButton.classList.remove("game")}},{key:"playGame",value:function(){var e=this;this.storage=n,this.repeat=document.querySelector(".repeat"),this.page=document.querySelectorAll(".page")[w.activeIndex],this.arr=i[w.activeIndex-1].slice(),this.checkArr=this.arr.slice().sort((function(){return Math.random()-.5})).slice(),this.gameCards=this.page.querySelectorAll(".flip__ready-to-start"),this.errors=0,this.value=0,document.querySelector(".hart").innerHTML="",this.create=m,this.checkArr[this.value].play(),this.goNextCard=function(t){if(e.cardIndex=Array.from(e.gameCards).indexOf(t),-1!=e.cardIndex)return e.arr[e.cardIndex]!=e.checkArr[e.value]&&(e.history.forEach((function(e){t.parentElement.querySelector("p").textContent==e.front.text&&(e.click++,e.errors++)})),m("img","heart-bad",null,document.querySelector(".hart")),document.querySelectorAll(".heart-bad").forEach((function(e){e.src="./assets/image/like.svg"})),e.errors++,new Audio("./assets/songs/focus.mp3").play()),e.arr[e.cardIndex]==e.checkArr[e.value]?(e.history.forEach((function(e){t.parentElement.querySelector("p").textContent==e.front.text&&(e.correct++,e.click++)})),m("img","heart",null,document.querySelector(".hart")),document.querySelectorAll(".heart").forEach((function(e){e.src="./assets/image/heart.svg"})),console.log(e.cardIndex),e.checkArr[e.value].pause(),e.page.querySelectorAll(".flip")[e.cardIndex].classList.add("open"),e.value++,e.value==e.gameCards.length?(setTimeout((function(){e.page.querySelectorAll(".flip").forEach((function(e){return e.classList.remove("open")})),document.querySelector(".hart").innerHTML=""}),500),0==e.errors?(new Audio("./assets/songs/win.mp3").play(),document.querySelector(".win").classList.add("finish"),setTimeout((function(){return document.querySelector(".win").classList.remove("finish")}),3e3),setTimeout((function(){return w.slideTo(0)}),1e3)):(new Audio("./assets/songs/ups.mp3").play(),document.querySelector(".lose").querySelector("p").textContent="У вас были замечены ошибки!\n\t\t\t\t\t\tих количество: ".concat(e.errors),document.querySelector(".toggle__handler").classList.remove("game"),document.querySelector(".lose").classList.add("finish"),setTimeout((function(){return document.querySelector(".lose").classList.remove("finish")}),3e3),setTimeout((function(){return w.slideTo(0)}),1e3)),e.settingInfo.forEach((function(e){return e.classList.remove("nav__item--active")})),e.gameButton.classList.remove("game"),e.settingInfo[0].classList.add("nav__item--active"),e.gameImages.forEach((function(e){return e.classList.remove("ready")})),void e.gameButton.classList.remove("toggle__handler--active")):(new Audio("./assets/songs/onclick.mp3").play(),void setTimeout((function(){e.checkArr[e.value].play(),e.goNextCard()}),1e3))):void 0},this.repeat.onclick=function(){return e.checkArr[e.value].play()},this.gameCards.forEach((function(t){return t.onclick=e.goNextCard.bind(null,t)})),document.querySelectorAll(".nav__item")[1].classList.remove("nav__item--active"),document.querySelectorAll(".nav__item")[2].classList.add("nav__item--active")}},{key:"initGame",value:function(){for(var e=this,t=function(t){for(var o=e.pages[t+1],n=function(n){var s=o.querySelectorAll(".flip")[n],r=s.querySelector(".front"),a=s.querySelector(".front__button"),l=function(){if(e.history.forEach((function(e){s.querySelector("p").innerHTML==e.front.text&&e.click++})),a.contains(event.target))return i[t-1][n].play&&i[t-1][n].pause(),s.querySelector(".card").classList.add("cardBack"),void s.querySelector(".front__button").classList.add("off");r.contains(event.target)||i[t][n].pause();for(var o=0;o<i[t].length;o++)i[t][o].play&&i[t][o].pause();i[t][n].play()||i[t][n].play()};r.removeEventListener("click",l),r.addEventListener("click",l),s.addEventListener("touchend",(function(){setTimeout((function(){s.querySelector(".front__button").classList.remove("off"),s.querySelector(".card").classList.remove("cardBack")}),2e3)})),s.addEventListener("mouseleave",(function(){setTimeout((function(){s.querySelector(".front__button").classList.remove("off"),s.querySelector(".card").classList.remove("cardBack")}),800)})),a.addEventListener("click",(function(){s.querySelector(".card").classList.add("cardBack"),s.querySelector(".front__button").classList.add("off")}))},s=0;s<o.querySelectorAll(".flip").length;s++)n(s);e.setHistory=function(){h("statistic"),d("statistic",e.history),document.querySelector(".content-hacker__item").innerHTML="",e.history.forEach((function(e){m("p","items",e.front.text,document.querySelector(".content-hacker__item")),m("p","items",e.back.text,document.querySelector(".content-hacker__item")),m("p","items",e.button,document.querySelector(".content-hacker__item")),m("p","items","".concat(e.click),document.querySelector(".content-hacker__item")),m("p","items","".concat(e.correct),document.querySelector(".content-hacker__item")),m("p","items","".concat(e.errors),document.querySelector(".content-hacker__item"))})),document.querySelector(".content-hacker__item").querySelectorAll("p").forEach((function(e){return e.addEventListener("mouseover",(function(){e.classList.add("end"),setTimeout((function(){return e.classList.remove("end")}),4e3)}))}))}},o=0;o<this.pages.length-1;o++)t(o);document.querySelector(".toggle").addEventListener("click",(function(){e.gameButton.classList.toggle("game"),e.goToPlay(),setTimeout(e.goToPlay(),0),document.querySelectorAll(".flip").forEach((function(e){return e.classList.remove("open")})),document.querySelector(".hart").innerHTML=""})),this.startGameButton.addEventListener("click",(function(){e.playGame()})),document.querySelectorAll(".swiper-pagination-bullets")[document.querySelectorAll(".swiper-pagination-bullets").length-1].addEventListener("click",this.setHistory),this.nav=document.querySelectorAll(".nav__card"),this.nav.forEach((function(t){return t.addEventListener("click",(function(){switch(t.querySelector("p").textContent){case"Word":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.front.text-t.front.text})):e.history.sort((function(e,t){return e.front.text-t.front.text})).reverse();break;case"Translation":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.back.text-t.back.text})):e.history.sort((function(e,t){return e.back.text-t.back.text})).reverse();break;case"Category":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.button-t.button})):e.history.sort((function(e,t){return e.button-t.button})).reverse();break;case"Clicks":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.click-t.click})):e.history.sort((function(e,t){return e.click-t.click})).reverse();break;case"Correct":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.correct-t.correct})):e.history.sort((function(e,t){return e.correct-t.correct})).reverse();break;case"Wrong":t.classList.contains("sort-items")?e.history.sort((function(e,t){return e.errors-t.errors})):e.history.sort((function(e,t){return e.errors-t.errors})).reverse()}t.classList.toggle("sort-items"),e.setHistory()}))})),document.querySelector(".footer-hacker__errors").onclick=function(){w.slideTo(["Main page","animals","colors","family","food","works","body","emotion","clothes","statistics"].indexOf(e.history.sort((function(e,t){return t.errors-e.errors}))[0].button))},document.querySelector(".footer-hacker__reset").onclick=function(){h("statistic"),e.history=[],g.forEach((function(t){return t.forEach((function(t){t.errors=0,t.click=0,t.correct=0,e.history.push(t)}))})),d("statistic",e.history),e.setHistory()},window.localStorage.statistic?(this.history=f("statistic"),d("statistic",this.history)):(g.forEach((function(t){return t.forEach((function(t){t.errors=0,t.click=0,t.correct=0,e.history.push(t)}))})),d("statistic",this.history))}}])&&v(t.prototype,o),s&&v(t,s),e}(),y=document.querySelector(".menu-button"),b=function(){x.slidePrev()},x=new s.a(".main",{slidesPerView:"auto",allowTouchMove:!1,speed:1e3,initialSlide:1,effect:"slide",on:{slideChangeTransitionStart:function(){0===this.activeIndex?(y.classList.add("cross"),y.removeEventListener("click",b,!0)):y.classList.remove("cross")},slideChangeTransitionEnd:function(){1===this.activeIndex&&y.addEventListener("click",b,!0)}}}),k=["Main page","Animals","Colors","Family","Food","Works","Body","Emotion","Clothes","Statistics"],w=new s.a(".page-container",{speed:1e3,allowTouchMove:!1,direction:"vertical",pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+k[e]+"</span>"}}}),A=document.querySelectorAll(".page__cards--main"),S=function(e){A[e].addEventListener("click",(function(){w.slideTo(e+1),E()}))},_=0;_<A.length;_++)S(_);var q=document.querySelector(".menu");document.addEventListener("click",(function(e){q.contains(e.target)||y.contains(e.target)||0===x.activeIndex&&x.slideTo(1)}));for(var L=document.querySelectorAll(".swiper-pagination-bullet"),T=0;T<L.length;T++){L[T].addEventListener("click",(function(){x.slideTo(1),E()}))}var E=function(){9!=w.activeIndex&&(document.querySelectorAll(".flip").forEach((function(e){return e.classList.remove("open")})),document.querySelector(".toggle__handler").classList.remove("game"),document.querySelector(".hart").innerHTML="",(new p).goToPlay())},O=document.querySelector(".menu__canvas");O.width=document.querySelector(".menu__canvas").clientWidth,O.height=document.querySelector(".menu__canvas").clientHeight;var I=O.getContext("2d"),C=(O.height,[]),M=40,B={x:0,y:0};window.requestAnimationFrame((function e(){I.clearRect(0,0,O.width,O.height),I.beginPath();for(var t=0;t<C.length;t++)C[t].position.x=50*Math.sin(C[t].count/C[t].distanceBetweenWaves)+C[t].xOff,C[t].position.y=C[t].count,C[t].render(),C[t].count<0-C[t].radius?C[t].count=O.height+C[t].yOff:C[t].count-=1;for(t=0;t<C.length;t++)if(B.x>C[t].position.x-C[t].radius&&B.x<C[t].position.x+C[t].radius&&B.y>C[t].position.y-C[t].radius&&B.y<C[t].position.y+C[t].radius)for(var o=0;o<C[t].lines.length;o++)M=.5*C[t].radius,C[t].lines[o].popping=!0,C[t].popping=!0;window.requestAnimationFrame(e)}));for(var P=function(){this.position={x:0,y:0},this.radius=8+6*Math.random(),this.xOff=Math.random()*O.width-this.radius,this.yOff=Math.random()*O.height,this.distanceBetweenWaves=50+40*Math.random(),this.count=O.height+this.yOff,this.color="#8bc9ee",this.lines=[],this.popping=!1,this.maxRotation=85,this.rotation=Math.floor(Math.random()*(this.maxRotation- -1*this.maxRotation))+-1*this.maxRotation,this.rotationDirection="forward";for(var e=0;e<6;e++){var t=new R;t.bubble=this,t.index=e,this.lines.push(t)}this.resetPosition=function(){this.position={x:0,y:0},this.radius=8+6*Math.random(),this.xOff=Math.random()*O.width-this.radius,this.yOff=Math.random()*O.height,this.distanceBetweenWaves=50+40*Math.random(),this.count=O.height+this.yOff,this.popping=!1},this.render=function(){"forward"===this.rotationDirection?this.rotation<this.maxRotation?this.rotation++:this.rotationDirection="backward":this.rotation>-1*this.maxRotation?this.rotation--:this.rotationDirection="forward",I.save(),I.translate(this.position.x,this.position.y),I.rotate(this.rotation*Math.PI/180),this.popping||(I.beginPath(),I.strokeStyle="#8bc9ee",I.lineWidth=1,I.arc(0,0,this.radius-3,0,1.5*Math.PI,!0),I.stroke(),I.beginPath(),I.arc(0,0,this.radius,0,2*Math.PI,!1),I.stroke()),I.restore();for(var e=0;e<this.lines.length;e++)this.lines[e].popping&&(this.lines[e].lineLength<M&&!this.lines[e].inversePop?this.lines[e].popDistance+=.06:this.lines[e].popDistance>=0?(this.lines[e].inversePop=!0,this.lines[e].popDistanceReturn+=1,this.lines[e].popDistance-=.03):(this.lines[e].resetValues(),this.resetPosition()),this.lines[e].updateValues(),this.lines[e].render())}},D=0;D<20;D++){var N=new P;C.push(N)}function R(){this.lineLength=0,this.popDistance=0,this.popDistanceReturn=0,this.inversePop=!1,this.popping=!1,this.resetValues=function(){this.lineLength=0,this.popDistance=0,this.popDistanceReturn=0,this.inversePop=!1,this.popping=!1,this.updateValues()},this.updateValues=function(){this.x=this.bubble.position.x+(this.bubble.radius+this.popDistanceReturn)*Math.cos(2*Math.PI*this.index/this.bubble.lines.length),this.y=this.bubble.position.y+(this.bubble.radius+this.popDistanceReturn)*Math.sin(2*Math.PI*this.index/this.bubble.lines.length),this.lineLength=this.bubble.radius*this.popDistance,this.endX=this.lineLength,this.endY=this.lineLength},this.render=function(){this.updateValues(),I.beginPath(),I.strokeStyle="#8bc9ee",I.lineWidth=2,I.moveTo(this.x,this.y),this.x<this.bubble.position.x&&(this.endX=-1*this.lineLength),this.y<this.bubble.position.y&&(this.endY=-1*this.lineLength),this.y===this.bubble.position.y&&(this.endY=0),this.x===this.bubble.position.x&&(this.endX=0),I.lineTo(this.x+this.endX,this.y+this.endY),I.stroke()}}O.addEventListener("mousemove",(function(e){B.x=e.offsetX,B.y=e.offsetY})),window.addEventListener("resize",(function(){O.width=document.querySelector(".menu__canvas").clientWidth,O.height=document.querySelector(".menu__canvas").clientHeight}));!function(){for(var e=document.querySelectorAll(".page"),t=0;t<e.length-1;t++)for(var o=e[t+1],n=0;n<g[t].length;n++)m("figure","flip",null,o),m("div","card",null,o.querySelectorAll(".flip")[n]),m("img","flip__ready-to-start",null,o.querySelectorAll(".flip")[n]),m("div","card-face front",null,o.querySelectorAll(".card")[n]),m("img","front__img",null,o.querySelectorAll(".front")[n]),m("div","front__content",null,o.querySelectorAll(".front")[n]),m("p","front__text",g[t][n].front.text,o.querySelectorAll(".front__content")[n]),m("div","front__button",null,o.querySelectorAll(".front__content")[n]),m("figcaption","card-face back",null,o.querySelectorAll(".card")[n]),m("img","back__img",null,o.querySelectorAll(".back")[n]),m("p","back__text",g[t][n].back.text,o.querySelectorAll(".back")[n]),o.querySelectorAll(".flip__ready-to-start")[n].src="./assets/image/".concat(t,"/").concat(n,".")+"jpg",o.querySelectorAll(".front__img")[n].src="./assets/image/".concat(t,"/").concat(n,".")+"jpg",o.querySelectorAll(".back__img")[n].src="./assets/image/".concat(t,"/").concat(n,".")+"jpg";(new p).initGame()}();document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){document.querySelector(".stage-wrapper").style.display="none",document.querySelector(".container").style.opacity="1",document.querySelector(".wrapper").style.opacity="1",document.querySelector(".toggleWrapper").style.opacity="1"}),0)}));!function(){for(var e=0,t=0;t<document.querySelectorAll(".page").length;t++)document.querySelectorAll(".swiper-slide-active")[1]==document.querySelectorAll(".page")[t]&&(e=document.querySelectorAll(".page")[t].querySelectorAll(".page__cards")[t],console.log(e));console.log(e)}()}});