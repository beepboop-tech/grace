(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),c=t.n(o),i=(t(15),t(1)),s=t(2),u=t(4),l=t(3),m=t(5);function h(n){return"http://localhost:5000"+n}t(7);var f=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this,n))).state={drinks:[]},t}return Object(m.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch(h("/api/drinks/")).then(function(n){return n.json()}).then(function(e){return n.setState({drinks:e.drinks||[]})}).catch(function(n){return console.log(n)})}},{key:"_onDrinkClicked",value:function(n){(function(n,e){var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};return fetch(h(n),t)})("/api/orders/",{ref:n.ref}).then(function(n){return n.json()}).then(function(n){return console.log(n)}).catch(function(n){return console.log(n)})}},{key:"render",value:function(){var n=this;return r.a.createElement("ul",{className:"DrinkList"},this.state.drinks.map(function(e){return r.a.createElement(d,{name:e.name,onClick:n._onDrinkClicked.bind(n,e),key:e.ref})}))}}]),e}(a.Component);function d(n){return r.a.createElement("div",{className:"DrinkItem",onClick:n.onClick},r.a.createElement("img",{src:"https://realhousemoms.com/wp-content/uploads/Manhattan-Drink-IG.jpg",alt:"",className:"DrinkImage"}),r.a.createElement("div",{className:"DrinkTextContainer"},r.a.createElement("p",{className:"DrinkItemText"},n.name)))}var k=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(f,null)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},7:function(n,e,t){},9:function(n,e,t){n.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f08778e2.chunk.js.map