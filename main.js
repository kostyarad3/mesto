(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){var r=e.item,n=e.userId,o=e.templateSelector,i=e.handleCardClick,u=e.popupDeleteCard,a=e.giveLikeToCard,c=e.removeLikeFromCard,l=e.deleteCardCb;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=r,this._userId=n,this._link=r.link,this._text=r.name,this._itemId=r._id,this._likes=r.likes,this._templateSelector=o,this._handleCardClick=i,this._popupDeleteCard=u,this._giveLikeToCard=a,this._removeLikeFromCard=c,this._deleteCardCb=l,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".place__image"),this._cardName=this._element.querySelector(".place__name"),this._likeButton=this._element.querySelector(".place__like"),this._trashIcon=this._element.querySelector(".place__delete"),this._likesCounter=this._element.querySelector(".place__like-counter")}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"generateCard",value:function(){return this._cardImage.src=this._link,this._cardImage.alt=this._text,this._cardName.textContent=this._text,this._likesCounter.textContent=this._likes.length,this._handleUserLikesAndTrash(),this._setEventListeners(),this._element}},{key:"_handleUserLikesAndTrash",value:function(){var t=this;this._userId!==this._item.owner._id&&this._trashIcon.remove(),this._likes.forEach((function(e){t._userId===e._id&&t._likeButton.classList.add("place__like_active")}))}},{key:"handleLikesState",value:function(t){this._likes=t.likes,this._likesCounter.textContent=this._likes.length,this._likeButton.classList.toggle("place__like_active")}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._text,t._link)})),this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("place__like_active")?t._removeLikeFromCard(t._itemId):t._giveLikeToCard(t._itemId)})),this._trashIcon.addEventListener("click",(function(){t._popupDeleteCard.open(),t._popupDeleteCard.submitFormCb((function(){t._deleteCardCb(t._itemId)}))}))}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r,this._inputs=this._form.querySelectorAll(this._inputSelector),this._buttonSubmit=this._form.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_handleButtonState",value:function(){this._isFormValid=this._form.checkValidity(),this._buttonSubmit.disabled=!this._isFormValid,this._buttonSubmit.classList.toggle(this._inactiveButtonClass,!this._isFormValid)}},{key:"_showError",value:function(){this._input.classList.add(this._inputErrorClass),this._errorSpan.textContent=this._input.validationMessage,this._errorSpan.classList.add(this._errorClass)}},{key:"_hideError",value:function(){this._input.classList.remove(this._inputErrorClass),this._errorSpan.classList.remove(this._errorClass),this._errorSpan.textContent=""}},{key:"_handleInputValidity",value:function(t){this._input=t,this._inputNameAttribute=this._input.getAttribute("name"),this._errorSpan=this._form.querySelector("#".concat(this._inputNameAttribute,"-error")),this._input.validity.valid?this._hideError():this._showError()}},{key:"resetValidation",value:function(){var t=this;this._handleButtonState(),this._inputs.forEach((function(e){t._input=e,t._inputNameAttribute=t._input.getAttribute("name"),t._errorSpan=t._form.querySelector("#".concat(t._inputNameAttribute,"-error")),t._hideError()}))}},{key:"_setInputsListeners",value:function(){var t=this;this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._handleButtonState(),t._handleInputValidity(e)}))}))}},{key:"enableValidation",value:function(){this._handleButtonState(),this._setInputsListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;this._items=t,this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeEsc=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeEsc)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("button_type_close")&&t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPlaceImg=e._popup.querySelector(".popup__image"),e._popupPlaceName=e._popup.querySelector(".popup__caption"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupPlaceImg.src=e,this._popupPlaceImg.alt=t,this._popupPlaceName.textContent=t,h(v(u.prototype),"open",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._form=e._popup.querySelector(".form"),e._inputList=e._form.querySelectorAll(".form__input"),e._submitForm=n,e._submitButton=e._form.querySelector(".form__submit"),e._buttonInitialText=e._submitButton.textContent,e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){this._form.reset(),S(k(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())})),S(k(u.prototype),"setEventListeners",this).call(this)}},{key:"isButtonLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._buttonInitialText}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._form=e._popup.querySelector(".form_type_confirmation"),e}return e=u,(r=[{key:"submitFormCb",value:function(t){this._submit=t}},{key:"setEventListeners",value:function(){var t=this;j(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submit()}))}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var R=function(){function t(e){var r=e.profileNameSelector,n=e.profileJobSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(r),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent,profileJob:this._profileJob.textContent,profileAvatar:this._profileAvatar.src}}},{key:"setUserInfo",value:function(t){this._profileName.textContent=t.name,this._profileJob.textContent=t.about,this._profileAvatar.src=t.avatar}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Где-то ошибочка:( : ".concat(t.status))}},{key:"getInitialData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"editUserInfo",value:function(t,e){var r=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return r._getResponseData(t)}))}},{key:"addNewCard",value:function(t,e){var r=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return r._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"giveLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"editUserAvatar",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._getResponseData(t)}))}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),A=[document.querySelector(".form_type_profile"),document.querySelector(".form_type_cards"),document.querySelector(".form_type_avatar")],x=document.querySelector(".button_type_edit"),N=document.querySelector(".button_type_add"),U=document.querySelector("#profile-name"),V=document.querySelector("#profile-job"),F=document.querySelector(".profile__avatar-button");function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var G,H=new R({profileNameSelector:".profile__name",profileJobSelector:".profile__info",profileAvatarSelector:".profile__avatar"}),M=new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"57eaed88-c38c-4ce7-a324-426034faa455","Content-Type":"application/json"}});M.getInitialData().then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];H.setUserInfo(o),G=o._id;var u=i.reverse();z.renderItems(u)})).catch((function(t){return console.log(t)}));var z=new c({renderer:function(t){z.addItem(K(t))}},".places");function $(t,e){Q.open(t,e)}function K(t){var e=new r({item:t,userId:G,templateSelector:"#card-template",handleCardClick:$,popupDeleteCard:X,giveLikeToCard:function(t){M.giveLike(t).then((function(t){e.handleLikesState(t)})).catch((function(t){return console.log(t)}))},removeLikeFromCard:function(t){M.removeLike(t).then((function(t){e.handleLikesState(t)})).catch((function(t){return console.log(t)}))},deleteCardCb:function(t){M.deleteCard(t).then((function(){e.handleDeleteCard(),X.close()})).catch((function(t){return console.log(t)}))}});return e.generateCard()}var Q=new d(".popup_type_place");Q.setEventListeners();var W=new w({popupSelector:".popup_type_profile",submitForm:function(t){W.isButtonLoading(!0),M.editUserInfo(t["profile-name"],t["profile-job"]).then((function(t){H.setUserInfo(t),W.close()})).catch((function(t){return console.log(t)})).finally((function(){W.isButtonLoading(!1)}))}});W.setEventListeners();var X=new L({popupSelector:".popup_type_confirmation"});X.setEventListeners();var Y=new w({popupSelector:".popup_type_avatar",submitForm:function(t){Y.isButtonLoading(!0),M.editUserAvatar(t["avatar-link"]).then((function(t){H.setUserInfo(t),Y.close()})).catch((function(t){return console.log(t)})).finally((function(){Y.isButtonLoading(!1)}))}});Y.setEventListeners();var Z=new w({popupSelector:".popup_type_cards",submitForm:function(t){Z.isButtonLoading(!0),M.addNewCard(t["card-name"],t["card-link"]).then((function(t){z.addItem(K(t)),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){Z.isButtonLoading(!1)}))}});Z.setEventListeners(),x.addEventListener("click",(function(){var t=H.getUserInfo();U.value=t.profileName,V.value=t.profileJob,W.open(),et["form-profile"].resetValidation()})),N.addEventListener("click",(function(){et["form-cards"].resetValidation(),Z.open()})),F.addEventListener("click",(function(){Y.open()}));var tt,et={};tt={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_type_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},A.forEach((function(t){var e=new i(tt,t),r=t.getAttribute("name");et[r]=e,e.enableValidation()}))})();