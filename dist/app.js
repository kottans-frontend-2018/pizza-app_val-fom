!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getTime=function(){var e=new Date,t=e.getSeconds().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0");return e.getHours().toString().padStart(2,"0")+":"+n+":"+t},t.parseHTML=function(e){var t=document.createElement("template");return t.innerHTML=e.trim(),t.content},t.insertChildren=function(e,t){return"string"==typeof t?e.insertAdjacentHTML("beforeend",t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?e.insertAdjacentHTML("beforeend",t):e.append(t)}):e.append(t),e},t.status=function(e){if(e.ok||400===e.status)return e;throw console.log(e),new Error(e.statusText)},t.json=function(e){return e.json()},t.errorHandler=function(e){throw e.validations?new Error(e.error+":\n"+e.validations.join("\n")):new Error(e.error)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.AUTH_SERVICE=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),u=(n(1),function(){function e(){r(this,e),this._token=localStorage.getItem("token")||null,this._claims=null,this.isAuthorized=this.isAuthorized.bind(this)}return o(e,[{key:"isAuthorized",value:function(){return!!this.token}},{key:"clearToken",value:function(){this._token=null,localStorage.removeItem("token")}},{key:"login",value:function(e){var t=this;return(0,a.loginUser)(e).then(function(e){var n=e.success,r=e.token;return n?(t.token=r,{success:n}):e})}},{key:"token",set:function(e){this._token=e,localStorage.setItem("token",e)},get:function(){return this._token}}]),e}());t.AUTH_SERVICE=new u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(24);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createUser=t.loginUser=t.getStoreList=void 0;var r=n(1),o="https://pizza-tele.ga/api/v1",a={storeList:"/store/list",userCreate:"/user/create",userLogin:"/user/login",userInfo:"/user/my_info",ingredientList:"/ingredient/list"};t.getStoreList=function(){return fetch(o+a.storeList).then(function(e){if(e.ok)return e.json();throw new Error(e.error)})},t.loginUser=function(e){return fetch(o+a.userLogin,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})}).then(r.status).then(r.json)},t.createUser=function(e){return fetch(o+a.userCreate,{method:"POST",body:JSON.stringify(e),headers:new Headers({"content-type":"application/json"})}).then(r.status).then(r.json)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=function(){function e(t){r(this,e),this.props=t||{},this.state={},this.host=null,this.updateState=this.updateState.bind(this)}return a(e,[{key:"componentsStateWillUpdate",value:function(e){}},{key:"updateState",value:function(e){return this.componentsStateWillUpdate(e),this.state=o({},this.state,e),this._render(),this.state}},{key:"update",value:function(e){return this.beforeUpdate(e),this.props=e,this._render()}},{key:"beforeUpdate",value:function(){}},{key:"_render",value:function(){var e=this.render();return this.host.innerHTML="",(0,u.insertChildren)(this.host,e)}},{key:"render",value:function(){}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(30);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(10),a=r(o),u=n(41),i=r(u),s=new i.default(a.default);document.getElementById("root").appendChild(s.host)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(11),u=r(a),i=n(26),s=r(i),c=n(32),l=r(c),f=n(36),p=r(f);t.default=[{href:"",redirectTo:"/"},{href:"/",Component:u.default,canActivate:o.AUTH_SERVICE.isAuthorized},{href:"/login",Component:s.default},{href:"/register",Component:l.default},{href:"/user",Component:p.default,canActivate:o.AUTH_SERVICE.isAuthorized}]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(12);var s=n(0),c=n(3),l=r(c),f=n(18),p=r(f),d=n(4),h=r(d),b=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e.host=document.createElement("div"),e.host.classList.add("app__container"),e.header=new l.default,e.main=new p.default,e.footer=new h.default,e}return u(t,e),i(t,[{key:"render",value:function(){return[this.header.update(),this.main.update(),this.footer.update()]}}]),t}(s.Component);t.default=b},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(14);var i=n(1),s=n(0),c=n(15),l=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("header__container"),e.clock=new l.default,e}return a(t,e),u(t,[{key:"render",value:function(){var e=(0,i.parseHTML)('\n\t\t\t<header class="header">\n\t\t\t\t<div class="header__time" id="time">\n\t\t\t\t</div>\n\t\t\t\t<div class="header__logo">\n\t\t\t\t\t<a href="#/">\n\t\t\t\t\t\t<img class="logo__img" src="img/pizza-logo.png"\n\t\t\t\t\t\t\talt="Pizza app logo">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="header__login">\n\t\t\t\t\t<a href="#/user" class="button login__button">\n\t\t\t\t\t\t<i class="fa fa-sign-in"></i>\n\t\t\t\t\t\tLogin/Signup\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t');return e.getElementById("time").append(this.clock.update()),e}}]),t}(s.Component);t.default=f},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(17);var i=n(1),s=n(0),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={currentTime:(0,i.getTime)()},e.host=document.createElement("div"),e.host.classList.add("clock__container"),setInterval(function(){var t=(0,i.getTime)();e.updateState({currentTime:t})},1e3),e}return a(t,e),u(t,[{key:"render",value:function(){return'\n\t\t\t<i class="fa fa-clock-o"></i>\n\t\t\t<time class="time__current-time" id="current-time">\n\t\t\t\t'+this.state.currentTime+"\n\t\t\t</time>\n\t\t"}}]),t}(s.Component);t.default=c},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(20);var i=n(0),s=n(21),c=function(e){return e&&e.__esModule?e:{default:e}}(s),l=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("main"),e.host.classList.add("main__container"),e.list=new c.default,e}return a(t,e),u(t,[{key:"render",value:function(){return['<button class="button main__button">+ Add new pizza</button>',this.list.update()]}}]),t}(i.Component);t.default=l},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(23);var i=n(0),s=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("list__container"),e}return a(t,e),u(t,[{key:"render",value:function(){for(var e=[],t=11;t>=0;t--){e.push('\n\t\t\t\t<article class="list__item">\n\t\t\t\t\t<img src="img/item__pizza_2x.png" alt="" class="item__pic">\n\t\t\t\t\t<time class="item__order-time">10:25:46</time>\n\t\t\t\t\t<h3 class="item__number-in-queue">#1</h3>\n\t\t\t\t\t<time datetime="0h 1m 0s" class="item__eta">ETA: 1min</time>\n\t\t\t\t\t<span class="item__price">$5.00</span>\n\t\t\t\t</article>\n\t\t\t')}return e}}]),t}(i.Component);t.default=s},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(25);var i=n(0),s=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("footer__container"),e}return a(t,e),u(t,[{key:"render",value:function(){return'\n\t\t\t<footer class="footer">\n\t\t\t\t<address class="footer__address">\n\t\t\t\t\tKottans, Kottans Str. 1,\n\t\t\t\t\t<a href="tel:5778887">tel. 57-788-87</a>\n\t\t\t\t</address>\n\t\t\t\t<span class="footer__copyright">Pizza Manager &copy; 2018</span>\n\t\t\t</footer>\n\t\t'}}]),t}(i.Component);t.default=s},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=n(3),l=r(c),f=n(27),p=r(f),d=n(4),h=r(d),b=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("login__container"),e.header=new l.default,e.loginForm=new p.default,e.footer=new h.default,e}return u(t,e),i(t,[{key:"render",value:function(){return[this.header.update(),this.loginForm.update(),this.footer.update()]}}]),t}(s.Component);t.default=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(28);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(29);var i=(n(1),n(0)),s=n(2),c=n(7),l=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("login-form__container"),e.host.addEventListener("submit",function(t){return e.handleSubmit(t)}),e.message=new l.default,e}return a(t,e),u(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={username:e.target.username.value,password:e.target.password.value};s.AUTH_SERVICE.login(n).then(function(e){e.success?(t.message.update({response:e}),setTimeout(function(){window.location.hash="/user"},1e3)):t.message.update({response:e})}).catch(console.error)}},{key:"render",value:function(){return['\n<form class="login-form" method="post">\n\t<label for="username">Username:</label>\n\t<input type="text" class="login-form__name" name="username" id="username" required>\n\t<label for="password">Password:</label>\n\t<input type="password" class="login-form__password" name="password"\n\t\tid="password" required>\n\t<div class="login-form__button-wrapper">\n\t\t<input type="submit" class="button login-form__button button--sign-in"\n\t\t\tvalue="Sign in">\n\t\t<a href="#/register" class="button login-form__button button--sign-up">\n\t\t\tSign up\n\t\t</a>\n\t</div>\n</form>\n\t\t',this.message.update()]}}]),t}(i.Component);t.default=f},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(31);var i=n(0),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.host=document.createElement("div"),n.host.classList.add("message__container"),n}return a(t,e),u(t,[{key:"render",value:function(){if(!this.props)return"";var e=this.props.response,t=e.success,n=e.error,r=e.validations;return t?'<p class="message--success">Login success! Redirecting...</p>':r?'\n\t\t\t\t<p class="message--error">'+n+':</p>\n\t\t\t\t<ul class="message__validations">\n\t\t\t\t\t'+r.map(function(e){return"<li>"+e+"</li>"}).join("")+"\n\t\t\t\t</ul>\n\t\t\t":'<p class="message__error">'+n+":</p>"}}]),t}(i.Component);t.default=s},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=n(3),l=r(c),f=n(33),p=r(f),d=n(4),h=r(d),b=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("register__container"),e.header=new l.default,e.registerForm=new p.default,e.footer=new h.default,e}return u(t,e),i(t,[{key:"render",value:function(){return[this.header.update(),this.registerForm.update(),this.footer.update()]}}]),t}(s.Component);t.default=b},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(34);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(35);var i=(n(1),n(0)),s=n(5),c=n(7),l=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={stores:[]},e.host=document.createElement("div"),e.host.classList.add("login-form__container"),e.host.addEventListener("submit",function(t){return e.handleSubmit(t)}),e.message=new l.default,e.getStores(),e}return a(t,e),u(t,[{key:"getStores",value:function(){var e=this;return(0,s.getStoreList)().then(function(t){return e.updateState({stores:t})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n={username:e.target.username.value,password:e.target.password.value,password_repeat:e.target.password_repeat.value,email:e.target.email.value,store_id:+e.target.store_id.value,store_password:e.target.store_password.value};return(0,s.createUser)(n).then(function(e){e.success?(t.message.update({response:e}),setTimeout(function(){window.location.hash="/login"},1e3)):t.message.update({response:e})}).catch(console.error)}},{key:"render",value:function(){return['\n<form class="register-form" method="post">\n\t<label for="username">Username:</label>\n\t<input type="text" class="register-form__name" name="username" id="username" required>\n\t<label for="email">Email:</label>\n\t<input type="email" class="register-form__email" name="email" id="email" required>\n\t<label for="password">Password:</label>\n\t<input type="password" class="register-form__password" name="password"\n\t\tid="password" required>\n\t<label for="password_repeat">Confirm password:</label>\n\t<input type="password" class="register-form__password" name="password_repeat"\n\t\tid="password_repeat" required>\n\t<label for="store_id">Choose your store:</label>\n\t<select class="register-form__store_id" name="store_id"\n\t\tid="store_id" required>\n\t\t'+this.state.stores.map(function(e){var t="";return 2==e.id&&(t="selected"),'<option value="'+e.id+'" '+t+">"+e.name+"</option>"}).join("")+'\n\t</select>\n\t<label for="store_password">Store password:</label>\n\t<input type="password" class="register-form__store_password" name="store_password"\n\t\tid="store_password" required>\n\t<input type="submit" class="button register-form__button button--register"\n\t\tvalue="Sign up">\n</form>\n\t\t',this.message.update()]}}]),t}(i.Component);t.default=f},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=n(3),l=r(c),f=n(37),p=r(f),d=n(4),h=r(d),b=n(40),_=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={userData:null},e.host=document.createElement("div"),e.host.classList.add("login__container"),e.header=new l.default,e.userInfo=new p.default,e.footer=new h.default,e.getUserData(),e}return u(t,e),i(t,[{key:"getUserData",value:function(){var e=this;return b.AUTH_HTTP.get("https://pizza-tele.ga/api/v1/user/my_info").then(function(t){return e.updateState({userData:t})})}},{key:"render",value:function(){var e=this.state.userData;return[this.header.update(),this.userInfo.update({userData:e}),this.footer.update()]}}]),t}(s.Component);t.default=_},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(38);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(39);var i=n(2),s=n(1),c=n(0),l=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.classList.add("user-info__container"),e.host.addEventListener("click",function(t){return e.handleLogout(t)}),e}return a(t,e),u(t,[{key:"handleLogout",value:function(e){console.log(e.target),"logout"===e.target.dataset.action&&i.AUTH_SERVICE.clearToken()}},{key:"render",value:function(){var e=this.props.userData;if(!e)return"";var t=(0,s.parseHTML)('\n\t\t\t<table class="user-info__table">\n\t\t\t\t<caption>User Info</caption>\n\t\t\t\t<tbody id="table">\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<div class="user-info__button-wrapper">\n\t\t\t\t<a href="#/" class="button user-info__button">Pizza List</a>\n\t\t\t\t<a href="#/login" class="button user-info__button button--red"\n\t\t\t\t\tdata-action="logout">Log out</a>\n\t\t\t</div>\n\t\t'),n=t.getElementById("table");for(var r in e){var o=(0,s.parseHTML)("\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>"+r+":</td>\n\t\t\t\t\t\t<td>"+e[r]+"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t");n.append(o)}return t}}]),t}(c.Component);t.default=l},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.AUTH_HTTP=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),u=n(2),i=function(){function e(){r(this,e)}return o(e,[{key:"get",value:function(e){if(!u.AUTH_SERVICE.isAuthorized)throw new Error("Non-authorized request");var t=new Headers;return t.append("Authorization","Bearer "+u.AUTH_SERVICE.token),t.append("content-type","application/json"),fetch(e,{method:"GET",headers:t}).then(a.status).then(a.json)}},{key:"post",value:function(){}},{key:"patch",value:function(){}}]),e}();t.AUTH_HTTP=new i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),s=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeRoute:null,activeComponent:null,routes:e},n.host=document.createElement("div"),n.host.classList.add("router__container"),window.addEventListener("hashchange",function(){n.handleUrlChange(n.path)}),n.handleRedirect=n.handleRedirect.bind(n),n.applyRoute=n.applyRoute.bind(n),n.handleUrlChange(n.path),n}return a(t,e),u(t,[{key:"handleUrlChange",value:function(e){var t=this.state.routes,n=t.find(function(t){return t.href===e});return n.redirectTo?this.handleRedirect(n.redirectTo):n.canActivate&&!n.canActivate()?this.navigateTo("/login"):n.onEnter?this.handleOnEnter(n,e):void this.applyRoute(n,e)}},{key:"handleRedirect",value:function(e){console.log("redirectTo",e),this.navigateTo(e)}},{key:"navigateTo",value:function(e){window.location.hash=e}},{key:"handleOnEnter",value:function(e,t){e.onEnter(this.handleRedirect,e)}},{key:"applyRoute",value:function(e,t){var n=e.Component,r=new n;this.updateState({activeRoute:e,activeComponent:r})}},{key:"render",value:function(){return this.state.activeComponent.update()}},{key:"path",get:function(){return window.location.hash.slice(1)}}]),t}(s.default);t.default=c}]);