(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),l=t.n(r),m=(t(25),t(2)),i=t.n(m),u=t(7),c=t(14),h=t(15),p=t(19),d=t(17),s=t(18),b=(t(27),t(8)),g=t.n(b),C=(t(11),t(29),function(e){return o.a.createElement("div",null,o.a.createElement("form",{name:"first",onSubmit:e.handleSubmit},o.a.createElement("label",null,"1\xb0 (100 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"100",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"second",onSubmit:e.handleSubmit},o.a.createElement("label",null,"2\xb0(75 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"75",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"third",onSubmit:e.handleSubmit},o.a.createElement("label",null,"3\xb0(50 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"50",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"4th",onSubmit:e.handleSubmit},o.a.createElement("label",null,"4\xb0(25 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"25",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"5th",onSubmit:e.handleSubmit},o.a.createElement("label",null,"5\xb0(15 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"15",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"5th",onSubmit:e.handleSubmit},o.a.createElement("label",null,"5\xb0(15 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"15",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"5th",onSubmit:e.handleSubmit},o.a.createElement("label",null,"5\xb0(15 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"15",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("form",{name:"5th",onSubmit:e.handleSubmit},o.a.createElement("label",null,"5\xb0(15 puntos) Nombre,c\xf3digo y n\xb0Torneo:",o.a.createElement("input",{name:"nombre",type:"text",placeholder:"nombre",onChange:e.handleChangeNombre}),o.a.createElement("input",{name:"codigo",type:"text",placeholder:"codigo",onChange:e.handleChangeCodigo}),o.a.createElement("input",{name:"torneo",id:"15",type:"number",placeholder:"torneo",onChange:e.handleChangeTorneo})),o.a.createElement("input",{type:"submit",value:"Submit"})))});g.a.initializeApp({apiKey:"AIzaSyDr-2kOz_dKDnG02RZX-_GwOgSzyv8jVHk",authDomain:"tablas-posiciones.firebaseapp.com",databaseURL:"https://tablas-posiciones.firebaseio.com",projectId:"tablas-posiciones",storageBucket:"tablas-posiciones.appspot.com",messagingSenderId:"378257734787",appId:"1:378257734787:web:27a9ef41e5f0d10cb96fb6",measurementId:"G-B033JV69H0"});var y=g.a.database().ref("/pokemon"),E=function(e){Object(p.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).componentDidMount=Object(u.a)(i.a.mark((function n(){var t,a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.once("value").then((function(e){return e.val()}));case 2:(t=n.sent)&&(t=Object.values(t),a=[],t.forEach((function(e){a.push(e)})),e.setState({players:a}));case 4:case"end":return n.stop()}}),n)}))),e.handleChangeNombre=function(n){var t=Object.assign({},e.state.newPlayer);t.name=n.target.value,e.setState({newPlayer:t})},e.handleChangeCodigo=function(n){n.target.value=n.target.value.replace(/\D/g,"");var t=Object.assign({},e.state.newPlayer);t.onlineCode=n.target.value,e.setState({newPlayer:t})},e.handleChangeTorneo=function(n){var t=Object.assign({},e.state.newPlayer);t.puntajeTorneos=[0,0,0,0,0],t.puntajeTorneos[n.target.value-1]=n.target.id,t.puntajeTotal=0,t.puntajeTorneos.map((function(e){return t.puntajeTotal+=Number(e)})),t.key=4,e.setState({newPlayer:t})},e.handleSubmit=function(){var n=Object(u.a)(i.a.mark((function n(t){var a,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),a=!1,(o=e.state.players).forEach((function(n){if(n.onlineCode===e.state.newPlayer.onlineCode){a=!0;var t=e.state.newPlayer.puntajeTorneos.findIndex((function(e){return e>0}));n.puntajeTorneos[t]=Number(e.state.newPlayer.puntajeTorneos[t]),n.puntajeTotal=0,n.puntajeTorneos.map((function(e){return n.puntajeTotal+=Number(e)}))}})),a||o.push(e.state.newPlayer),n.next=7,e.setState({players:o});case 7:e.state.players.forEach((function(e){y.child(e.onlineCode).set({name:e.name,onlineCode:e.onlineCode,puntajeTorneos:e.puntajeTorneos,puntajeTotal:e.puntajeTotal})}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.state={players:[],newPlayer:{},torneos:["torneo 1","torneo 2","torneo 3","torneo 4","torneo 5"]},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state.players;return o.a.createElement("div",{className:"tabla-posiciones"},o.a.createElement("h3",null,"Rellenar una linea de formulario y luego submit"),o.a.createElement(C,{handleChangeNombre:this.handleChangeNombre,handleChangeCodigo:this.handleChangeCodigo,handleChangeTorneo:this.handleChangeTorneo,handleSubmit:this.handleSubmit}),o.a.createElement(s.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Nombre"),this.state.torneos.map((function(e){return o.a.createElement("th",{key:e},e)})),o.a.createElement("th",null,"Total"))),o.a.createElement("tbody",null,e.map((function(e){return o.a.createElement("tr",{key:e.onlineCode},o.a.createElement("td",null,e.name),e.puntajeTorneos.map((function(e,n){return o.a.createElement("td",{key:n},e)})),o.a.createElement("td",null,e.puntajeTotal))})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(32);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.221fa7b0.chunk.js.map