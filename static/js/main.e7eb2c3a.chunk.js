(this["webpackJsonpblog-auth-api-formik"]=this["webpackJsonpblog-auth-api-formik"]||[]).push([[0],{10:function(e,t,a){e.exports={article:"ArticleInfo_article__QQkTN",articleProfile:"ArticleInfo_articleProfile__1IVVm",articleTitle:"ArticleInfo_articleTitle__1EjYj",articleSubtitle:"ArticleInfo_articleSubtitle__rspfW",bio:"ArticleInfo_bio__3lxWR",articleText:"ArticleInfo_articleText__2KvbF",textWrap:"ArticleInfo_textWrap__p9rA2",articleDate:"ArticleInfo_articleDate__33BLZ",articleBody:"ArticleInfo_articleBody__1VaMK",articleContent:"ArticleInfo_articleContent__1UmRo",tagList:"ArticleInfo_tagList__2RUcH",tag:"ArticleInfo_tag__1Bef2",footer:"ArticleInfo_footer__1AJL8",likes:"ArticleInfo_likes__2_0cm",lineUpFooter:"ArticleInfo_lineUpFooter__1Y7Am",footerLikes:"ArticleInfo_footerLikes__3S1BG",btnsWrap:"ArticleInfo_btnsWrap__258l5",btnDelete:"ArticleInfo_btnDelete__1n2pZ"}},109:function(e,t,a){e.exports={header:"Header_header__3kNPY",info:"Header_info__1gRFb",nameUser:"Header_nameUser__32lqn",linkUser:"Header_linkUser__1hCqs",linkUserText:"Header_linkUserText__bqqzf"}},201:function(e,t,a){e.exports=a(294)},207:function(e,t,a){},22:function(e,t,a){e.exports={formAuth:"Auth_formAuth__2gx4L",title:"Auth_title__1Kcj5",btnsWrap:"Auth_btnsWrap__1iG-V",successModal:"Auth_successModal__3ehlu"}},294:function(e,t,a){"use strict";a.r(t);var r,n,c=a(0),i=a.n(c),s=a(27),l=a.n(s),u=(a(206),a(207),a(13)),o=a(109),m=a.n(o),d=a(298),p=a(9),b=a(308),h=a(309),f=a(18),E=a(5),A=a.n(E),g=a(8),O=a(306),j=a(2),v=a(36),_=a.n(v),L="https://conduit.productionready.io/api",k={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},json:!0},S=function(){var e=Object(g.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()(Object(j.a)(Object(j.a)({},k),{},{data:JSON.stringify(t),url:"".concat(L,"/users")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(g.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()(Object(j.a)(Object(j.a)({},k),{},{data:JSON.stringify(t),url:"".concat(L,"/users/login")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=a(176),y=a(177),w=a(304),U=a(296),T=a(297),I=a(307),C=Object(O.a)("ERROR_NETWORK"),R=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},F=function(){function e(t,a){Object(x.a)(this,e),this.timeNow=t,this.timeCreatedAt=a}return Object(y.a)(e,[{key:"getDay",value:function(){return Object(w.a)(this.timeNow,this.timeCreatedAt)}},{key:"getHours",value:function(){var e=Object(U.a)(this.timeNow,this.timeCreatedAt);return e%=24}},{key:"getMinutes",value:function(){var e=Object(T.a)(this.timeNow,this.timeCreatedAt);return e%=60}}]),e}(),W=function(e){var t=new F(new Date,Object(I.a)(e)),a=t.getDay(),r=t.getHours(),n=t.getMinutes(),c=function(e,t){return 0!==e?"".concat(e," ").concat(t):""};return 0===a&&0===r&&0===n?"now":"".concat(c(a,"days")," ").concat(c(r,"hours")," ").concat(c(n,"minutes")," ago")},V=function(e,t,a){"Network Error"===e.message&&a(C({error:e})),e.response.data.errors["email or password"]&&(t("email","email or password is invalid"),t("password","email or password is invalid"))},D=function(e,t,a){"Network Error"===e.message&&a(C({error:e}));var r=e.response.data.errors;for(var n in r)t(n.toString(),r[n][0])},G=Object(O.a)("USER_SIGNUP_REQUEST"),H=Object(O.a)("USER_SIGNUP_SUCCESS"),P=Object(O.a)("USER_SIGNUP_FAILURE"),B=Object(O.a)("USER_SIGNIN_REQUEST"),q=Object(O.a)("USER_SIGNIN_SUCCESS"),z=Object(O.a)("USER_SIGNIN_FAILURE"),J=Object(O.a)("LOG_OUT_PROFILE"),M=Object(O.a)("USER_FIRST_VALIDATE_REQUEST"),K=Object(O.a)("USER_FIRST_VALIDATE_SUCCESS"),Q=Object(O.a)("USER_FIRST_VALIDATE_FAILURE"),Y={home:"/",add:"/add","sign-in":"/sign-in","sign-up":"/sign-up","article-edit":"/articles/:slug/edit","article-info":"/articles/:slug"},Z=Object(p.b)((function(e){return{username:e.reducerAuth.currentUser.username,isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.isAuth,a=e.dispatch,r=e.username,n=function(){var e;e="currentUser",localStorage.removeItem(e),a(J({isAuth:!1,isLoadingAuth:!1,name:null,token:null,isFirstValidate:!0}))};return i.a.createElement("div",{className:m.a.header},i.a.createElement(d.a,{orientation:"left",style:{minWidth:"0"}},"Blog"),i.a.createElement("div",{className:m.a.info},t||localStorage.currentUser?i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:m.a.nameUser},r),i.a.createElement(b.a,{style:{fontSize:"24px"},onClick:n})):i.a.createElement(f.b,{to:Y["sign-in"],className:m.a.linkUser},i.a.createElement("span",{className:m.a.linkUserText},"Sign in"),i.a.createElement(h.a,null))))})),$=a(22),X=a.n($),ee=a(34),te=a(305),ae=a(15),re=a(310),ne=a(311),ce=a(84),ie=function(e){return i.a.createElement("span",{style:{color:"red"}},e)},se=function(e){var t=e.name,a=Object(ce.a)(e,["name"]);return i.a.createElement("div",null,i.a.createElement(te.a.TextArea,Object.assign({name:t},a)),i.a.createElement(ee.a,{name:t},(function(e){return ie(e)})))},le=function(e){var t=e.name,a=Object(ce.a)(e,["name"]);return i.a.createElement("div",null,i.a.createElement(te.a,Object.assign({name:t},a)),i.a.createElement(ee.a,{name:t},(function(e){return ie(e)})))},ue=Object(p.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth}}),{signInAuth:function(e){var t=e.username,a=e.email,r=e.password,n=e.setFieldError;return function(){var e=Object(g.a)(A.a.mark((function e(c){var i,s,l,u,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(B({isLoadingAuth:!0})),e.prev=1,i={user:{email:a,password:r,username:t}},e.next=5,N(i);case 5:return s=e.sent,e.next=8,s.data.user.token;case 8:return l=e.sent,e.next=11,s.data.user.username;case 11:u=e.sent,R("currentUser",o={isAuth:!0,name:u,token:l,isLoadingAuth:!1}),c(q({currentUser:o,isFirstValidate:!0})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),V(e.t0,n,c),c(z({isAuth:!1,isLoadingAuth:!1}));case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=ae.a().shape({email:ae.b().email("Not correct email").required("Enter email"),password:ae.b().required("Enter password")});return i.a.createElement("div",null,i.a.createElement(ee.d,{initialValues:{email:"toniktoo@gmail.com",password:"Swimm1998er"},validationSchema:function(){return t},onSubmit:function(t,a){var r=a.setFieldError,n=t.email,c=t.password;e.signInAuth({email:n,password:c,setFieldError:r})}},(function(t){return function(t){return e.isLoadingAuth?i.a.createElement("div",{className:X.a.loaderWrap},i.a.createElement(re.a,{style:{fontSize:40},spin:!0})):i.a.createElement("form",{onSubmit:t,className:X.a.formAuth},i.a.createElement("h1",{className:X.a.title},"Login"),i.a.createElement("hr",{className:X.a.lineBottomTitle}),i.a.createElement("label",null,"Email"),i.a.createElement(le,{name:"email",component:"input",placeholder:"enter email..."}),i.a.createElement("label",null,"Password"),i.a.createElement(le,{name:"password",type:"password",component:"input",placeholder:"enter password..."}),i.a.createElement("div",{className:X.a.btnsWrap},i.a.createElement(te.a,{type:"submit",value:"Sign in",style:{width:"100px"}}),i.a.createElement(f.b,{to:Y["sign-up"],className:"linkWithImageRigth"},i.a.createElement("span",{className:"linkWithImageRigthText"},"Registration"),i.a.createElement(ne.a,null))))}(t.handleSubmit)})))})),oe=Object(p.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth}}),{signUpAuth:function(e){var t=e.username,a=e.email,r=e.password,n=e.setFieldError;return function(){var e=Object(g.a)(A.a.mark((function e(c){var i,s,l,u,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(G({isLoadingAuth:!0})),e.prev=1,i={user:{email:a,password:r,username:t}},e.next=5,S(i);case 5:return s=e.sent,e.next=8,s.data.user.token;case 8:return l=e.sent,e.next=11,s.data.user.username;case 11:return u=e.sent,R("currentUser",o={isAuth:!0,name:u,token:l,isLoadingAuth:!1}),e.next=16,c(H({currentUser:o,isFirstValidate:!0}));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),D(e.t0,n,c),c(P({isAuth:!1,isLoadingAuth:!1}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=ae.a().shape({username:ae.b().max(50,"no more than 50 characters").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f"),email:ae.b().email("Not correct email").required("Enter email"),password:ae.b().required("Enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password between 8 and 40 characters, at least one number and one capital letter")});return i.a.createElement("div",null,i.a.createElement(ee.d,{initialValues:{email:"toniktoo@mail.ru",password:"Swimm1998er",username:"toniktoo"},validationSchema:function(){return t},onSubmit:function(t,a){var r=a.setFieldError,n=t.email,c=t.password,i=t.username;e.signUpAuth({email:n,password:c,username:i,setFieldError:r})}},(function(t){return function(t){return e.isLoadingAuth?i.a.createElement("div",{className:X.a.loaderWrap},i.a.createElement(re.a,{style:{fontSize:40},spin:!0})):i.a.createElement("form",{onSubmit:t,className:X.a.formAuth},i.a.createElement("h1",{className:X.a.title},"Registration"),i.a.createElement("hr",{className:X.a.lineBottomTitle}),i.a.createElement("label",null,"Username"),i.a.createElement(le,{name:"username",component:"input",placeholder:"enter username..."}),i.a.createElement("label",null,"Email"),i.a.createElement(le,{name:"email",component:"input",placeholder:"enter email..."}),i.a.createElement("label",null,"Password"),i.a.createElement(le,{name:"password",type:"password",component:"input",placeholder:"enter password..."}),i.a.createElement("div",{className:X.a.btnsWrap},i.a.createElement(te.a,{type:"submit",value:"Sign in",style:{width:"100px"}}),i.a.createElement(f.b,{to:Y["sign-in"],className:"linkWithImageRigth"},i.a.createElement("span",{className:"linkWithImageRigthText"},"Login"),i.a.createElement(ne.a,null))))}(t.handleSubmit)})))})),me=a(54),de=a(66),pe=a.n(de),be=a(314),he=a(300),fe=a(303),Ee=a(312),Ae=a(313),ge=a(57),Oe=a.n(ge),je={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"}},ve=function(e){return{"Content-Type":"application/json;charset=utf-8",Authorization:"Token ".concat(e)}},_e=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()(Object(j.a)(Object(j.a)({},je),{},{method:"GET",url:"".concat(L,"/articles?limit=").concat(a,"&offset=").concat(10*(t-1))}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Le=function(){var e=Object(g.a)(A.a.mark((function e(t,a,r){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"".concat(L,"/articles?limit=").concat(r,"&offset=").concat(10*(a-1)),headers:ve(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),ke=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"".concat(L,"/articles/").concat(t),headers:ve(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Se=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"POST",url:"".concat(L,"/articles"),headers:ve(a),data:JSON.stringify(t)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"POST",url:"".concat(L,"/articles/").concat(t,"/favorite"),headers:ve(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),xe=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"DELETE",url:"".concat(L,"/articles/").concat(t,"/favorite"),headers:ve(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ye=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"".concat(L).concat(t),headers:ve(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),we=function(){var e=Object(g.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"".concat(L).concat(t),headers:{"Content-Type":"application/json;charset=utf-8"}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(g.a)(A.a.mark((function e(t,a,r){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"PUT",url:"".concat(L).concat(t),data:JSON.stringify(r),headers:ve(a)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),Te=function(){var e=Object(g.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"DELETE",url:"".concat(L).concat(t),headers:ve(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ie=a(134),Ce=a.n(Ie),Re=Object(O.a)("GET_ARTICLES_ALL_REQUEST"),Fe=Object(O.a)("GET_ARTICLES_ALL_SUCCESS"),We=Object(O.a)("GET_ARTICLES_ALL_FAILURE"),Ve=Object(O.a)("ARTICLE_LIKE_REQUEST"),De=Object(O.a)("ARTICLE_LIKE_SUCCESS"),Ge=Object(O.a)("ARTICLE_LIKE_FAILURE"),He=Object(O.a)("ARTICLE_DISLIKE_REQUEST"),Pe=Object(O.a)("ARTICLE_DISLIKE_SUCCESS"),Be=Object(O.a)("ARTICLE_DISLIKE_FAILURE"),qe=Object(O.a)("ARTICLE_REQUEST"),ze=Object(O.a)("ARTICLE_SUCCESS"),Je=Object(O.a)("ARTICLE_FAILURE"),Me=function(e,t,a){return function(){var r=Object(g.a)(A.a.mark((function r(n){var c,i;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n(qe({isLoadingArticles:!0})),r.prev=1,c=null,!a){r.next=9;break}return r.next=6,ye(e,t);case 6:c=r.sent,r.next=12;break;case 9:return r.next=11,we(e);case 11:c=r.sent;case 12:i=c.data.article,n(ze({isLoadingArticles:!1,article:i})),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(1),"Network Error"===r.t0.message&&n(C({error:r.t0})),n(Je({isLoadingArticles:!1}));case 20:case"end":return r.stop()}}),r,null,[[1,16]])})));return function(e){return r.apply(this,arguments)}}()},Ke=Object(p.b)(null,{setLikeArticle:function(e,t,a){return function(){var r=Object(g.a)(A.a.mark((function r(n){var c,i,s,l;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=16;break}return n(He({isLoadingLike:!0})),r.prev=2,r.next=5,xe(t,a);case 5:c=r.sent,i=c.data.article,n(Pe({newArticle:i,slug:t,isLoadingLike:!1})),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(2),"Network Error"===r.t0.message&&n(C({error:r.t0})),n(Be({isLoadingLike:!1}));case 14:r.next=30;break;case 16:return n(Ve()),r.prev=17,r.next=20,Ne(t,a);case 20:s=r.sent,l=s.data.article,n(De({newArticle:l,slug:t})),r.next=30;break;case 25:return r.prev=25,r.t1=r.catch(17),"Network Error"===r.t1.message&&n(C({error:r.t1})),r.next=30,n(Ge());case 30:case"end":return r.stop()}}),r,null,[[2,10],[17,25]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.title,a=e.author,r=e.createdAt,n=e.tagList,s=e.favoritesCount,l=e.slug,u=e.favorited,o=e.setLikeArticle,m=e.token,d=e.isAuth,p=Object(c.useState)(u),b=Object(me.a)(p,2),h=b[0],E=b[1],O=Object(c.useState)(s),j=Object(me.a)(O,2),v=j[0],_=j[1],L=function(){var e=Object(g.a)(A.a.mark((function e(t){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,ke(l,m);case 4:a=e.sent,r=a.data.article.favorited,o(r,l,m),E(!u),_(u?function(e){return e-1}:function(e){return e+1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error component article ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),k=i.a.createElement("div",{style:{width:"200px"}},i.a.createElement("p",null,d?"like or dislike this article":"sign in to like this article"));return i.a.createElement(f.b,{to:"/articles/".concat(l),className:Oe.a.articleLinkWrap},i.a.createElement("div",{className:Oe.a.article},i.a.createElement("div",{className:Oe.a.contentWrap},i.a.createElement("span",{className:Oe.a.date},W(r)),i.a.createElement("h3",{className:Oe.a.title},t),i.a.createElement("div",{className:Oe.a.autorWrap},"Autor",i.a.createElement("span",{className:Oe.a.author},a.username)),i.a.createElement("div",null,i.a.createElement("div",{className:Oe.a.tags},"Tags:",n.map((function(e){return i.a.createElement("p",{key:e,className:Oe.a.tag},e)}))),i.a.createElement(fe.a,{title:"Note",trigger:"hover",content:k,className:Oe.a.likes,onClick:L},h?i.a.createElement(Ee.a,null):i.a.createElement(Ae.a,null)," ".concat(v))))))})),Qe=Object(p.b)((function(e){return{isLoadingArticles:e.reducerArticles.isLoadingArticles,articles:e.reducerArticles.articles,isAuth:e.reducerAuth.currentUser.isAuth,token:e.reducerAuth.currentUser.token,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate}}),{getAllArticles:function(e,t,a,r){return function(){var n=Object(g.a)(A.a.mark((function n(c){var i,s;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c(Re({isLoadingArticles:!0})),i=null,n.prev=2,!e){n.next=9;break}return n.next=6,Le(t,a,r);case 6:i=n.sent,n.next=12;break;case 9:return n.next=11,_e(a,r);case 11:i=n.sent;case 12:s=i.data.articles.map((function(e,t){return Object(j.a)({id:Object(Ie.uniqueId)()},e)})),c(Fe({isLoadingArticles:!1,articles:s})),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(2),console.log(n.t0),"Network Error"===n.t0.message&&c(C({error:n.t0})),c(We({isLoadingArticles:!1}));case 21:return n.abrupt("return",i.data.articlesCount);case 22:case"end":return n.stop()}}),n,null,[[2,16]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.isLoadingArticles,a=e.articles,r=e.getAllArticles,n=e.isAuth,s=e.token,l=e.isFirstValidate,u=Object(c.useState)(0),o=Object(me.a)(u,2),m=o[0],d=o[1],p=Object(c.useState)(1),b=Object(me.a)(p,2),h=b[0],E=b[1],O=Object(c.useState)(10),j=Object(me.a)(O,1)[0];Object(c.useEffect)((function(){l&&function(){var e=Object(g.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n,s,h,10);case 2:return t=e.sent,e.next=5,d(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n,h,r,s,l]);return i.a.createElement("div",{className:pe.a.home},i.a.createElement("div",{className:pe.a.articlesHeader},i.a.createElement("h2",{className:pe.a.articlesTitle},"Articles List:"),i.a.createElement(f.b,{to:Y.add,className:pe.a.articlesCreateLink},i.a.createElement("h3",{className:pe.a.articlesCreateLinkText},"Create article"),i.a.createElement(be.a,null))),i.a.createElement("div",{className:pe.a.articlesWrap},t?i.a.createElement("div",{className:pe.a.loaderWrap},i.a.createElement(re.a,{style:{fontSize:40}})):a.map((function(e){return i.a.createElement(Ke,Object.assign({key:e.id},e,{token:s,isAuth:n}))}))),i.a.createElement("div",{className:pe.a.pagination},i.a.createElement(he.a,{defaultCurrent:1,currentPage:h,total:m||10,pageSize:j,showSizeChanger:!1,onChange:function(e){return E(e)}})))})),Ye=function(){var e=Object(p.c)((function(e){return e.reducerErrors.errors}));return e?i.a.createElement("div",{className:"errorModalWrap"},i.a.createElement("div",{className:"errorModal"},i.a.createElement("h3",null,e))):null},Ze=function(){return i.a.createElement("div",{className:"successModal"},"Success!")},$e=a(83),Xe=a(302),et=ae.a().shape({title:ae.b().required(),description:ae.b().required(),body:ae.b().required(),tagList:ae.b()}),tt=function(){var e=Object(g.a)(A.a.mark((function e(t,a,r){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={article:Object(j.a)(Object(j.a)({},t),{},{tagList:Object($e.a)(new Set(t.tagList.split(" ")))})},e.prev=1,e.next=4,Se(n,a);case 4:setTimeout((function(){r(!1)}),1e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a,r){return e.apply(this,arguments)}}(),at=Object(p.b)((function(e){return{token:e.reducerAuth.currentUser.token}}))((function(e){var t=e.token,a=Object(c.useState)(!1),r=Object(me.a)(a,2),n=r[0],s=r[1];return i.a.createElement("div",null,i.a.createElement(ee.d,{initialValues:{title:"",description:"",body:"",tagList:""},validationSchema:function(){return et},onSubmit:function(e,a){var r=a.resetForm;tt(e,t,s),r(),s(!0)}},(function(e){return function(e){return i.a.createElement("form",{onSubmit:e},i.a.createElement("div",{className:"form"},n?i.a.createElement(Ze,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"title"},"Create article"),i.a.createElement("hr",{className:"lineTitle"}),i.a.createElement("span",null,"Title"),i.a.createElement(le,{name:"title",placeholder:"enter title..."}),i.a.createElement("span",null,"Description:"),i.a.createElement(le,{name:"description",placeholder:"enter description..."}),i.a.createElement("span",null,"Body:"),i.a.createElement(se,{name:"body",placeholder:"enter body..."}),i.a.createElement("span",null,"Tags:"),i.a.createElement(le,{name:"tagList",placeholder:"write tags with a space..."}),i.a.createElement(Xe.a,{type:"submit",value:"Create",style:{marginTop:"8px"}}))))}(e.handleSubmit)})))})),rt=a(10),nt=a.n(rt),ct=a(299),it=a(155),st=a(315),lt=a(316),ut=Object(p.b)((function(e){return{article:e.reducerArticles.article,author:e.reducerArticles.article.author,isLoadingArticles:e.reducerArticles.isLoadingArticles,token:e.reducerAuth.currentUser.token,isAuth:e.reducerAuth.currentUser.isAuth,username:e.reducerAuth.currentUser.username,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate}}),{getArticle:Me})((function(e){var t=e.token,a=e.username,r=e.isAuth,n=e.isFirstValidate,s=e.location,l=e.article,u=e.author,o=e.getArticle,m=e.isLoadingArticles,d=e.history,p=l.title,b=l.createdAt,h=l.updatedAt,E=l.description,A=l.body,g=l.tagList;Object(c.useEffect)((function(){var e=s.pathname;n&&o(e,t,r)}),[s,o,t,r,n]);var O=function(){var e=s.pathname;Te(e,t),d.goBack()};return i.a.createElement(i.a.Fragment,null,m?i.a.createElement("div",{className:nt.a.loaderWrap},i.a.createElement(re.a,{style:{fontSize:40},spin:!0})):i.a.createElement("div",{className:nt.a.article},i.a.createElement("div",{className:nt.a.articleProfile},i.a.createElement(ct.a,{src:u.image,size:120}),i.a.createElement("h1",{className:nt.a.articleTitle},"name: ",i.a.createElement("span",{className:nt.a.textWrap},u.username)),i.a.createElement("span",{className:nt.a.articleTitle},"bio: ",i.a.createElement("span",{className:nt.a.textWrap},u.bio))),i.a.createElement("div",{className:nt.a.articleContent},i.a.createElement("h1",{className:nt.a.articleTitle},"title: ",i.a.createElement("span",{className:nt.a.textWrap},p)),i.a.createElement("h2",{className:nt.a.articleSubtitle},"description:"," ",i.a.createElement("span",{className:nt.a.articleText},E)),i.a.createElement("span",{className:nt.a.articleDate},"createdAt:"," ",i.a.createElement("span",{className:nt.a.articleText},W(b))),i.a.createElement("span",{className:nt.a.articleDate},"updatedAt:"," ",i.a.createElement("span",{className:nt.a.articleText},W(h))),i.a.createElement("span",{className:nt.a.articleBody},"body: ",i.a.createElement("span",{className:nt.a.articleText},A)),i.a.createElement("span",{className:nt.a.tagList},"tags:"," ",g.map((function(e){return i.a.createElement("p",{key:e,className:nt.a.tag},e)}))),i.a.createElement("div",{className:nt.a.lineUpFooter}),i.a.createElement("div",{className:nt.a.footer},i.a.createElement("div",{className:nt.a.btnsWrap},i.a.createElement(f.b,{to:"".concat(s.pathname,"/edit"),disabled:a!==u.username,className:"linkWithImgRigth"},i.a.createElement("span",{className:"linkWithImageRigthText"},"Edit"),i.a.createElement(st.a,null)),i.a.createElement(it.a,{type:"link",disabled:a!==u.username,className:nt.a.btnDelete,onClick:O},i.a.createElement("span",null,"Delete"),i.a.createElement(lt.a,null)))))))})),ot=Object(p.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate,token:e.reducerAuth.currentUser.token,isAuth:e.reducerAuth.currentUser.isAuth,isLoadingArticles:e.reducerArticles.isLoadingArticles,article:e.reducerArticles.article}}),{getArticle:Me})((function(e){var t=e.isLoadingArticles,a=e.article,r=e.token,n=e.isAuth,s=e.getArticle,l=e.isFirstValidate,o=a.title,m=a.description,d=a.body,p=a.tagList,b=Object(c.useState)(!1),h=Object(me.a)(b,2),f=h[0],E=h[1],A=Object(u.g)(),g=Object(u.h)("/articles/:slug");Object(c.useEffect)((function(){if(l){var e=g.url;s(e,r,n)}}),[r,n,s,l]);var O=ae.a().shape({title:ae.b(),description:ae.b(),body:ae.b(),tagList:ae.b()});return i.a.createElement("div",null,i.a.createElement(ee.d,{initialValues:{title:"",description:"",body:"",tagList:""},validationSchema:function(){return O},onSubmit:function(e){!function(e){var t=Ce.a.omitBy(e,(function(e,t){return""===e})),a={article:Object(j.a)(Object(j.a)({},t),{},{tagList:Object($e.a)(new Set(e.tagList.split(" ")))})},n=window.location.pathname;n=g.url,Ue(n,r,a),setTimeout((function(){E(!1),A.goBack()}),1e3)}(e),E(!0)}},(function(e){var a=e.handleSubmit;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement("div",{className:X.a.loaderWrap},i.a.createElement(re.a,{style:{fontSize:40},spin:!0})):function(e){return i.a.createElement("form",{onSubmit:e,className:X.a.formAuth},f?i.a.createElement(Ze,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:X.a.title},"Edit article"),i.a.createElement("hr",{className:X.a.lineBottomTitle}),i.a.createElement("label",null,"title"),i.a.createElement(le,{name:"title",component:"input",placeholder:o}),i.a.createElement("label",null,"description"),i.a.createElement(le,{name:"description",component:"input",placeholder:m}),i.a.createElement("label",null,"body"),i.a.createElement(le,{name:"body",component:"input",placeholder:d}),i.a.createElement("label",null,"tagList"),i.a.createElement(le,{name:"tagList",component:"input",placeholder:p}),i.a.createElement("div",{className:X.a.btnsWrap},i.a.createElement(te.a,{type:"submit",value:"Edit",style:{width:"100px"}}))))}(a))})))})),mt=Object(p.b)((function(e){return{isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.component,a=e.isAuth,r=Object(ce.a)(e,["component","isAuth"]);return i.a.createElement(u.b,Object.assign({},r,{render:function(e){return a||localStorage.currentUser?i.a.createElement(t,e):i.a.createElement(u.a,{to:Y["sign-in"]})}}))})),dt=Object(p.b)((function(e){return{isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.component,a=e.isAuth,r=Object(ce.a)(e,["component","isAuth"]);return i.a.createElement(u.b,Object.assign({},r,{render:function(e){return a?i.a.createElement(u.a,{to:Y.home}):i.a.createElement(t,e)}}))})),pt=Object(p.b)((function(e){return{isAuth:e.reducerAuth.currentUser.isAuth,token:e.reducerAuth.currentUser.token}}))((function(e){var t=e.dispatch,a=e.token;return Object(c.useEffect)((function(){if(t(M()),localStorage.currentUser){var e=(a="currentUser",JSON.parse(localStorage[a]));t(K({currentUser:e,isFirstValidate:!0}))}else t(Q({isFirstValidate:!0}));var a}),[t,a]),i.a.createElement("div",{className:"app"},i.a.createElement(Z,null),i.a.createElement("div",{className:"content"},i.a.createElement(u.d,null,i.a.createElement(u.b,{path:Y.home,exact:!0,component:Qe}),i.a.createElement(dt,{path:Y["sign-in"],component:ue}),i.a.createElement(dt,{path:Y["sign-up"],component:oe}),i.a.createElement(mt,{path:Y.add,component:at}),i.a.createElement(mt,{path:Y["article-edit"],exact:!0,component:ot}),i.a.createElement(u.b,{path:Y["article-info"],exact:!0,component:ut}),i.a.createElement(u.a,{to:Y.home}))),i.a.createElement(Ye,null))})),bt=a(67),ht=a(196),ft=a(197),Et=a(6),At=a(301),gt=Object(At.a)((r={},Object(Et.a)(r,G,(function(e,t){var a=t.payload.isLoadingAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:Object(j.a)(Object(j.a)({},e.currentUser),{},{isLoadingAuth:a})})})),Object(Et.a)(r,H,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(Et.a)(r,P,(function(e,t){var a=t.payload,r=a.isLoadingAuth,n=a.isAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:Object(j.a)(Object(j.a)({},e.currentUser),{},{isLoadingAuth:r,isAuth:n})})})),Object(Et.a)(r,B,(function(e,t){var a=t.payload.isLoadingAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:Object(j.a)(Object(j.a)({},e.currentUser),{},{isLoadingAuth:a})})})),Object(Et.a)(r,q,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(Et.a)(r,z,(function(e,t){var a=t.payload,r=a.isLoadingAuth,n=a.isAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:Object(j.a)(Object(j.a)({},e.currentUser),{},{isLoadingAuth:r,isAuth:n})})})),Object(Et.a)(r,J,(function(e,t){var a=t.payload,r=a.isAuth,n=a.isLoadingAuth,c=a.token,i=a.name,s=a.isFirstValidate;return Object(j.a)(Object(j.a)({},e),{},{currentUser:{isAuth:r,username:i,token:c,isLoadingAuth:n,isFirstValidate:s}})})),Object(Et.a)(r,M,(function(e,t){t.payload;return Object(j.a)({},e)})),Object(Et.a)(r,K,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(j.a)(Object(j.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(Et.a)(r,Q,(function(e,t){var a=t.payload.isFirstValidate;return Object(j.a)(Object(j.a)({},e),{},{currentUser:Object(j.a)(Object(j.a)({},e.currentUser),{},{isFirstValidate:a})})})),r),{currentUser:{isAuth:!1,username:null,token:null,isLoadingAuth:!1,isFirstValidate:!1}}),Ot=Object(At.a)(Object(Et.a)({},C,(function(e,t){var a=t.payload.error;return Object(j.a)(Object(j.a)({},e),{},{errors:a.message})})),{errors:null}),jt=Object(At.a)((n={},Object(Et.a)(n,Re,(function(e,t){var a=t.payload.isLoadingArticles;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:a})})),Object(Et.a)(n,Fe,(function(e,t){var a=t.payload,r=a.isLoadingArticles,n=a.articles;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:r,articles:n})})),Object(Et.a)(n,We,(function(e,t){var a=t.payload.isLoadingArticles;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:a})})),Object(Et.a)(n,Ve,(function(e,t){t.payload;return Object(j.a)({},e)})),Object(Et.a)(n,De,(function(e,t){var a=t.payload,r=a.newArticle,n=a.slug,c=e.articles.map((function(e){return e.slug===n?Object(j.a)({id:e.id},r):e}));return Object(j.a)(Object(j.a)({},e),{},{articles:Object($e.a)(c)})})),Object(Et.a)(n,Ge,(function(e,t){t.payload;return Object(j.a)({},e)})),Object(Et.a)(n,He,(function(e,t){t.payload;return Object(j.a)({},e)})),Object(Et.a)(n,Pe,(function(e,t){var a=t.payload,r=a.newArticle,n=a.slug,c=e.articles.map((function(e){return e.slug===n?Object(j.a)({id:e.id},r):e}));return Object(j.a)(Object(j.a)({},e),{},{articles:Object($e.a)(c)})})),Object(Et.a)(n,Be,(function(e,t){t.payload;return Object(j.a)({},e)})),Object(Et.a)(n,qe,(function(e,t){var a=t.payload.isLoadingArticles;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:a})})),Object(Et.a)(n,ze,(function(e,t){var a=t.payload,r=a.isLoadingArticles,n=a.article;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:r,article:n})})),Object(Et.a)(n,Je,(function(e,t){var a=t.payload.isLoadingArticles;return Object(j.a)(Object(j.a)({},e),{},{isLoadingArticles:a})})),n),{articles:[],isLoadingArticles:!1,article:{title:"",createdAt:"",updatedAt:"",description:"",body:"",tagList:[],favorited:!1,favoritesCount:"",author:{username:"",bio:"",image:""}}}),vt=Object(bt.combineReducers)({reducerAuth:gt,reducerErrors:Ot,reducerArticles:jt}),_t=Object(bt.createStore)(vt,Object(ht.composeWithDevTools)(Object(bt.applyMiddleware)(ft.a)));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p.a,{store:_t},i.a.createElement(f.a,null,i.a.createElement(pt,null)))),document.getElementById("root"))},57:function(e,t,a){e.exports={articleLinkWrap:"Article_articleLinkWrap__2_I1y",article:"Article_article__3xUIu",date:"Article_date__2AFnp",title:"Article_title__30J-0",titleLink:"Article_titleLink__2nVax",autorWrap:"Article_autorWrap__JuHLG",author:"Article_author__q-TJr",likes:"Article_likes__17Ac7",tags:"Article_tags__3Zo83",tag:"Article_tag__15Y32"}},66:function(e,t,a){e.exports={home:"Home_home__TW--p",articlesWrap:"Home_articlesWrap__1eYM4",articlesCreateLink:"Home_articlesCreateLink__28exH",articlesCreateLinkText:"Home_articlesCreateLinkText__wJfmo",loaderWrap:"Home_loaderWrap__24y6Y",pagination:"Home_pagination__3S31Y"}}},[[201,1,2]]]);
//# sourceMappingURL=main.e7eb2c3a.chunk.js.map