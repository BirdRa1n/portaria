(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{240:function(e,t,r){"use strict";r.d(t,"a",(function(){return K}));var n=r(239),a=r(0),c=r.n(a),s=r(355),o=r(360),i=r(357),l=r(84),j=r(241),b=r(1),d=r.n(b),h=r(2),O=r.n(h),u=r(9),p=r.n(u),x=r(165),f=r(358),m=r(344),g=r(366),w=r(345),v=r(18),S=r(346),y=r(347),P=r(52),I=r(332),z=r(226),_=r(348),D=r(361),E=r(362),k=r(363),A=r(142),T=r(349),C=r(125),L=r.n(C),R=r(8);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e){var t=e.navigation,r=c.a.useState({}),n=O()(r,2),a=n[0],s=n[1];var o=function(e){var t;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=JSON.stringify(e),r.next=4,p.a.awrap(A.a.setItem("@data_user",t));case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),console.log("erro ao efetuar o estado "+r.t0);case 9:case"end":return r.stop()}}),null,null,[[0,6]],Promise)};return Object(R.jsx)(f.a,{children:Object(R.jsx)(m.a,{w:"100%",h:"100%",bg:"#fff",children:Object(R.jsx)(g.a,{children:Object(R.jsx)(w.a,{children:Object(R.jsxs)(v.a,{w:"90%",maxW:400,h:"91%",maxH:"900",bg:"light.100",borderRadius:10,top:5,children:[Object(R.jsx)(w.a,{children:Object(R.jsx)(S.a,{top:5,source:{uri:"https://pbs.twimg.com/profile_images/438771627854024704/Az4OY07a_400x400.png"},alt:"Alternate Text",size:"sm"})}),Object(R.jsxs)(w.a,{top:5,children:[Object(R.jsx)(y.a,{size:"sm",children:"INSTITUTO"}),Object(R.jsx)(y.a,{size:"sm",children:"FEDERAL"}),Object(R.jsx)(P.a,{fontSize:"xl",children:"Piau\xed"})]}),Object(R.jsx)(w.a,{w:"100%",children:Object(R.jsxs)(v.a,{safeArea:!0,p:"2",py:"8",w:"90%",maxW:"290",children:[Object(R.jsx)(y.a,{size:"lg",fontWeight:"600",color:"coolGray.800",_dark:{color:"warmGray.50"},children:"Bem vindo de volta"}),Object(R.jsx)(y.a,{mt:"1",_dark:{color:"warmGray.200"},color:"coolGray.600",fontWeight:"medium",size:"xs",children:"fa\xe7a login para continuar!"}),Object(R.jsxs)(x.a,{space:3,mt:"5",children:[Object(R.jsxs)(I.a,{isInvalid:a.IDState,children:[Object(R.jsx)(I.a.Label,{children:Object(R.jsxs)(z.a,{space:2,children:[Object(R.jsx)(I.a.Label,{children:"ID"}),Object(R.jsx)(I.a.ErrorMessage,{top:-1.2,leftIcon:Object(R.jsx)(_.a,{size:"xs"}),children:"Usu\xe1rio n\xe3o encontrado"})]})}),Object(R.jsx)(D.a,{onChangeText:function(e){return s(F(F({},a),{},{id_code:e}))}})]}),Object(R.jsxs)(I.a,{isInvalid:a.PasswordState,children:[Object(R.jsx)(I.a.Label,{children:Object(R.jsxs)(z.a,{space:2,children:[Object(R.jsx)(I.a.Label,{children:"Senha"}),Object(R.jsx)(I.a.ErrorMessage,{top:-1.2,leftIcon:Object(R.jsx)(_.a,{size:"xs"}),children:"Senha incorreta"})]})}),Object(R.jsx)(D.a,{type:"password",onChangeText:function(e){return s(F(F({},a),{},{password:e}))}}),Object(R.jsx)(E.a,{_text:{fontSize:"xs",fontWeight:"500",color:"success.500"},alignSelf:"flex-end",mt:"1",children:"Esqueceu a senha?"})]}),Object(R.jsx)(k.a,{mt:"2",colorScheme:"success",onPress:function(){L.a.get("https://birdra1n.x10.bz/IFPI_PORTARIA/api/user/login/",{params:{method:"normal",id_code:a.id_code,password:a.password}}).then((function(e){var r=e.data;o(e.data),void 0!=r.warning_error&"user does not exist"==r.warning_error&&s(F(F({},a),{},{IDState:!0,PasswordState:!1})),void 0!=r.warning_error&"incorrect password"==r.warning_error&&s(F(F({},a),{},{PasswordState:!0,IDState:!1})),void 0!==e.data.token_session&&(s(F(F({},a),{},{PasswordState:!1,IDState:!1})),t.navigate("Dashboard"))}))},children:"Entrar"}),Object(R.jsxs)(z.a,{mt:"6",justifyContent:"center",children:[Object(R.jsxs)(P.a,{fontSize:"sm",color:"coolGray.600",_dark:{color:"warmGray.200"},children:["Veja o projeto no"," "]}),Object(R.jsx)(E.a,{_text:{color:"success.500",fontWeight:"medium",fontSize:"sm"},href:"#",children:"GitHub"})]}),Object(R.jsx)(w.a,{children:Object(R.jsx)(k.a,{colorScheme:"success",leftIcon:Object(R.jsx)(T.a,{name:"qrcode-scan",size:24,color:"black"}),children:"Entre com QRCode"})})]})]})})]})})})})})}r(350),r(356);var N=r(351),W=r(230);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e){e.navigation;var t=c.a.useState({}),r=O()(t,2),n=r[0],s=r[1],o=c.a.useState({}),i=O()(o,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){L.a.get("https://birdra1n.x10.bz/IFPI_PORTARIA/api/keys/list",{params:{filter:"all"}}).then((function(e){console.log(e),s(J(J({},n),{},{HallList:e.data}))})),function(){var e;p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(A.a.getItem("@data_user"));case 3:e=t.sent,j(JSON.parse(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]],Promise)}()}),[]),Object(R.jsx)(f.a,{children:Object(R.jsxs)(v.a,{w:"100%",bg:"#FBFBFB",h:"100%",children:[Object(R.jsx)(v.a,{p:2,safeArea:!0,children:Object(R.jsxs)(z.a,{children:[Object(R.jsx)(S.a,{source:{uri:"https://pbs.twimg.com/profile_images/438771627854024704/Az4OY07a_400x400.png"},alt:"Alternate Text",size:"sm"}),Object(R.jsxs)(m.a,{marginLeft:"2%",children:[Object(R.jsx)(y.a,{size:"sm",children:l.name}),Object(R.jsx)(P.a,{fontSize:10,children:l.description}),Object(R.jsx)(P.a,{fontSize:10,top:2,children:"INSTITUTO FEDERAL CAMPUS PEDRO II"})]})]})}),Object(R.jsx)(N.a,{w:"95%",h:"80%",numColumns:3,columnWrapperStyle:{flex:1,justifyContent:"space-around",marginLeft:10,marginBottom:10},showsVerticalScrollIndicator:!1,data:n.HallList,renderItem:function(e){var t=e.item;return Object(R.jsx)(W.a,{onPress:function(){return ActionSheetRequestKey(t.hall,t.description,t.status,t.conveyer)},children:Object(R.jsx)(v.a,{marginBottom:1,alignItems:"center",bg:"light.50",borderRadius:5,w:16,h:59,p:1,shadow:1,children:Object(R.jsx)(z.a,{children:Object(R.jsxs)(x.a,{children:[Object(R.jsx)(y.a,{size:"sm",children:"Sala"}),Object(R.jsx)(y.a,{children:t.hall})]})})})})},keyExtractor:function(e){return e.id}})]})})}var q=Object(o.a)(),M=Object(i.a)(),V=n.a("/");function Y(){return Object(R.jsx)(M.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var r,n=e.focused,a=e.color,c=e.size;return"Chaves"===t.name?r=n?"ios-home-outline":"ios-home-sharp":"Solicita\xe7\xf5es"===t.name?r="reorder-three-sharp":"Conta"===t.name&&(r=n?"person-circle-outline":"person-circle"),Object(R.jsx)(j.a,{name:r,size:c,color:a})},tabBarActiveTintColor:"green",tabBarInactiveTintColor:"black"}},children:Object(R.jsx)(M.Screen,{name:"Chaves",component:U,options:{headerShown:!1,headerTitle:"Portaria"}})})}function K(){var e={prefixes:[V]};return Object(R.jsx)(l.a,{children:Object(R.jsx)(s.a,{linking:e,children:Object(R.jsxs)(q.Navigator,{screenOptions:{headerShown:!1},initialRouteName:"Login",children:[Object(R.jsx)(q.Screen,{name:"Login",component:G}),Object(R.jsx)(q.Screen,{name:"Dashboard",component:Y})]})})})}},253:function(e,t,r){e.exports=r(331)},272:function(e,t){}},[[253,1,2]]]);
//# sourceMappingURL=app.e721fe5d.chunk.js.map