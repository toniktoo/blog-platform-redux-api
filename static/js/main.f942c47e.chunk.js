(this["webpackJsonpblog-auth-api-formik"]=this["webpackJsonpblog-auth-api-formik"]||[]).push([[0],{10:function(e,t,a){e.exports={article:"ArticleInfo_article__3Sw1G",articleProfile:"ArticleInfo_articleProfile__14mDO",articleTitle:"ArticleInfo_articleTitle__3QdsS",articleSubtitle:"ArticleInfo_articleSubtitle__lu1vk",bio:"ArticleInfo_bio__oFgge",articleText:"ArticleInfo_articleText__2Xn3g",textWrap:"ArticleInfo_textWrap__2Oc-1",articleDate:"ArticleInfo_articleDate__27mks",articleBody:"ArticleInfo_articleBody__2xoOU",articleContent:"ArticleInfo_articleContent__3TdDy",tagList:"ArticleInfo_tagList__3Y9-J",tag:"ArticleInfo_tag__aVJtH",footer:"ArticleInfo_footer__DgeRP",likes:"ArticleInfo_likes__27t1S",lineUpFooter:"ArticleInfo_lineUpFooter__3GP3_",footerLikes:"ArticleInfo_footerLikes__naLJr",btnsWrap:"ArticleInfo_btnsWrap__BbMn7",btnDelete:"ArticleInfo_btnDelete__QHjQZ"}},109:function(e,t,a){e.exports={header:"Header_header__3e_q3",info:"Header_info__1Ki_O",nameUser:"Header_nameUser__1XdXU",linkUser:"Header_linkUser__JD2sR",linkUserText:"Header_linkUserText__36Adx"}},201:function(e,t,a){e.exports=a(294)},207:function(e,t,a){},22:function(e,t,a){e.exports={formAuth:"Auth_formAuth__3D6aQ",title:"Auth_title__p2o4R",btnsWrap:"Auth_btnsWrap__15g6S",successModal:"Auth_successModal__3w7uv"}},294:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),i=a.n(c),s=(a(206),a(207),a(13)),l=a(109),u=a.n(l),o=a(296),m=a(8),d=a(307),p=a(308),b=a(18),f=a(5),h=a.n(f),E=a(9),A=a(306),g=a(2),O=a(30),v=a.n(O),j="https://conduit.productionready.io/api",_={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},json:!0},L=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()(Object(g.a)(Object(g.a)({},_),{},{data:JSON.stringify(t),url:"".concat(j,"/users")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()(Object(g.a)(Object(g.a)({},_),{},{data:JSON.stringify(t),url:"".concat(j,"/users/login")}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},N=Object(A.a)("ERROR_NETWORK"),w=function(e,t,a){"Network Error"===e.message&&(console.log(e),a(N({error:e}))),e.response.data.errors["email or password"]&&(t("email","email or password is invalid"),t("password","email or password is invalid"))},y=function(e,t,a){"Network Error"===e.message&&a(N({error:e}));var r=e.response.data.errors;for(var n in r)t(n.toString(),r[n][0])},U=Object(A.a)("USER_SIGNUP_REQUEST"),x=Object(A.a)("USER_SIGNUP_SUCCESS"),T=Object(A.a)("USER_SIGNUP_FAILURE"),I=Object(A.a)("USER_SIGNIN_REQUEST"),R=Object(A.a)("USER_SIGNIN_SUCCESS"),F=Object(A.a)("USER_SIGNIN_FAILURE"),C=Object(A.a)("LOG_OUT_PROFILE"),W=Object(A.a)("USER_FIRST_VALIDATE_REQUEST"),V=Object(A.a)("USER_FIRST_VALIDATE_SUCCESS"),D=Object(A.a)("USER_FIRST_VALIDATE_FAILURE"),G={home:"/",add:"/add","sign-in":"/sign-in","sign-up":"/sign-up","article-edit":"/articles/:slug/edit","article-info":"/articles/:slug"},P=Object(m.b)((function(e){return{username:e.reducerAuth.currentUser.username,isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.isAuth,a=e.dispatch,r=e.username,c=function(){var e;e="currentUser",localStorage.removeItem(e),a(C({isAuth:!1,isLoadingAuth:!1,name:null,token:null,isFirstValidate:!0}))};return n.a.createElement("div",{className:u.a.header},n.a.createElement(o.a,{orientation:"left",style:{minWidth:"0"}},"Blog"),n.a.createElement("div",{className:u.a.info},t||localStorage.currentUser?n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:u.a.nameUser},r),n.a.createElement(d.a,{style:{fontSize:"24px"},onClick:c})):n.a.createElement(b.b,{to:G["sign-in"],className:u.a.linkUser},n.a.createElement("span",{className:u.a.linkUserText},"Sign in"),n.a.createElement(p.a,null))))})),B=a(22),H=a.n(B),z=a(35),J=a(305),Q=a(15),q=a(309),M=a(310),K=a(84),X=function(e){return n.a.createElement("span",{style:{color:"red"}},e)},Z=function(e){var t=e.name,a=Object(K.a)(e,["name"]);return n.a.createElement("div",null,n.a.createElement(J.a.TextArea,Object.assign({name:t},a)),n.a.createElement(z.a,{name:t},(function(e){return X(e)})))},Y=function(e){var t=e.name,a=Object(K.a)(e,["name"]);return n.a.createElement("div",null,n.a.createElement(J.a,Object.assign({name:t},a)),n.a.createElement(z.a,{name:t},(function(e){return X(e)})))},$=Object(m.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth}}),{signInAuth:function(e){var t=e.username,a=e.email,r=e.password,n=e.setFieldError;return function(){var e=Object(E.a)(h.a.mark((function e(c){var i,s,l,u,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(I({isLoadingAuth:!0})),e.prev=1,i={user:{email:a,password:r,username:t}},e.next=5,k(i);case 5:return s=e.sent,e.next=8,s.data.user.token;case 8:return l=e.sent,e.next=11,s.data.user.username;case 11:u=e.sent,S("currentUser",o={isAuth:!0,name:u,token:l,isLoadingAuth:!1}),c(R({currentUser:o,isFirstValidate:!0})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),w(e.t0,n,c),c(F({isAuth:!1,isLoadingAuth:!1}));case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Q.a().shape({email:Q.b().email("Not correct email").required("Enter email"),password:Q.b().required("Enter password")});return n.a.createElement("div",null,n.a.createElement(z.d,{initialValues:{email:"toniktoo@gmail.com",password:"Swimm1998er"},validationSchema:function(){return t},onSubmit:function(t,a){var r=a.setFieldError,n=t.email,c=t.password;e.signInAuth({email:n,password:c,setFieldError:r})}},(function(t){return function(t){return e.isLoadingAuth?n.a.createElement("div",{className:H.a.loaderWrap},n.a.createElement(q.a,{style:{fontSize:40},spin:!0})):n.a.createElement("form",{onSubmit:t,className:H.a.formAuth},n.a.createElement("h1",{className:H.a.title},"Login"),n.a.createElement("hr",{className:H.a.lineBottomTitle}),n.a.createElement("label",null,"Email"),n.a.createElement(Y,{name:"email",component:"input",placeholder:"enter email..."}),n.a.createElement("label",null,"Password"),n.a.createElement(Y,{name:"password",type:"password",component:"input",placeholder:"enter password..."}),n.a.createElement("div",{className:H.a.btnsWrap},n.a.createElement(J.a,{type:"submit",value:"Sign in",style:{width:"100px"}}),n.a.createElement(b.b,{to:G["sign-up"],className:"linkWithImageRigth"},n.a.createElement("span",{className:"linkWithImageRigthText"},"Registration"),n.a.createElement(M.a,null))))}(t.handleSubmit)})))})),ee=Object(m.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth}}),{signUpAuth:function(e){var t=e.username,a=e.email,r=e.password,n=e.setFieldError;return function(){var e=Object(E.a)(h.a.mark((function e(c){var i,s,l,u,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(U({isLoadingAuth:!0})),e.prev=1,i={user:{email:a,password:r,username:t}},e.next=5,L(i);case 5:return s=e.sent,e.next=8,s.data.user.token;case 8:return l=e.sent,e.next=11,s.data.user.username;case 11:return u=e.sent,S("currentUser",o={isAuth:!0,name:u,token:l,isLoadingAuth:!1}),e.next=16,c(x({currentUser:o,isFirstValidate:!0}));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),y(e.t0,n,c),c(T({isAuth:!1,isLoadingAuth:!1}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Q.a().shape({username:Q.b().max(50,"no more than 50 characters").required("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f"),email:Q.b().email("Not correct email").required("Enter email"),password:Q.b().required("Enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password between 8 and 40 characters, at least one number and one capital letter")});return n.a.createElement("div",null,n.a.createElement(z.d,{initialValues:{email:"toniktoo@mail.ru",password:"Swimm1998er",username:"toniktoo"},validationSchema:function(){return t},onSubmit:function(t,a){var r=a.setFieldError,n=t.email,c=t.password,i=t.username;e.signUpAuth({email:n,password:c,username:i,setFieldError:r})}},(function(t){return function(t){return e.isLoadingAuth?n.a.createElement("div",{className:H.a.loaderWrap},n.a.createElement(q.a,{style:{fontSize:40},spin:!0})):n.a.createElement("form",{onSubmit:t,className:H.a.formAuth},n.a.createElement("h1",{className:H.a.title},"Registration"),n.a.createElement("hr",{className:H.a.lineBottomTitle}),n.a.createElement("label",null,"Username"),n.a.createElement(Y,{name:"username",component:"input",placeholder:"enter username..."}),n.a.createElement("label",null,"Email"),n.a.createElement(Y,{name:"email",component:"input",placeholder:"enter email..."}),n.a.createElement("label",null,"Password"),n.a.createElement(Y,{name:"password",type:"password",component:"input",placeholder:"enter password..."}),n.a.createElement("div",{className:H.a.btnsWrap},n.a.createElement(J.a,{type:"submit",value:"Sign in",style:{width:"100px"}}),n.a.createElement(b.b,{to:G["sign-in"],className:"linkWithImageRigth"},n.a.createElement("span",{className:"linkWithImageRigthText"},"Login"),n.a.createElement(M.a,null))))}(t.handleSubmit)})))})),te=a(82),ae=a(65),re=a.n(ae),ne=a(314),ce=a(300),ie=a(303),se=a(312),le=a(313),ue=a(183),oe=a(184),me=a(304),de=a(297),pe=a(298),be=a(311),fe=function(){function e(t,a){Object(ue.a)(this,e),this.timeNow=t,this.timeCreatedAt=a}return Object(oe.a)(e,[{key:"getDay",value:function(){return Object(me.a)(this.timeNow,this.timeCreatedAt)}},{key:"getHours",value:function(){var e=Object(de.a)(this.timeNow,this.timeCreatedAt);return e%=24}},{key:"getMinutes",value:function(){var e=Object(pe.a)(this.timeNow,this.timeCreatedAt);return e%=60}}]),e}(),he=function(e){var t=new fe(new Date,Object(be.a)(e)),a=t.getDay(),r=t.getHours(),n=t.getMinutes(),c=function(e,t){return 0!==e?"".concat(e," ").concat(t):""};return 0===a&&0===r&&0===n?"now":"".concat(c(a,"days")," ").concat(c(r,"hours")," ").concat(c(n,"minutes")," ago")},Ee=a(56),Ae=a.n(Ee);v.a.interceptors.request.use((function(e){return console.log("REQUEST SEND"),e.headers.post["Content-Type"]="application/json;charset=utf-8",localStorage.currentUser&&(e.headers.Authorization="Token ".concat(JSON.parse(localStorage.currentUser).token)),e})),v.a.interceptors.response.use(void 0,(function(e){"Network Error"!==e.message||e.response||console.log("\u041e\u0428\u0418\u0411\u041a\u0410")}));var ge,Oe,ve=function(){var e=Object(E.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:"".concat(j,"/articles?limit=").concat(a,"&offset=").concat(10*(t-1))});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),je=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:"".concat(j,"/articles/").concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"POST",url:"".concat(j,"/articles"),data:JSON.stringify(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Le=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"POST",url:"".concat(j,"/articles/").concat(t,"/favorite")});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"DELETE",url:"".concat(j,"/articles/").concat(t,"/favorite")});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:"".concat(j).concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"GET",url:"".concat(j).concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(E.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"PUT",url:"".concat(j).concat(t),data:JSON.stringify(a)});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ye=function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({method:"DELETE",url:"".concat(j).concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=a(134),xe=a.n(Ue),Te=Object(A.a)("GET_ARTICLES_ALL_REQUEST"),Ie=Object(A.a)("GET_ARTICLES_ALL_SUCCESS"),Re=Object(A.a)("GET_ARTICLES_ALL_FAILURE"),Fe=Object(A.a)("ARTICLE_LIKE_REQUEST"),Ce=Object(A.a)("ARTICLE_LIKE_SUCCESS"),We=Object(A.a)("ARTICLE_LIKE_FAILURE"),Ve=Object(A.a)("ARTICLE_DISLIKE_REQUEST"),De=Object(A.a)("ARTICLE_DISLIKE_SUCCESS"),Ge=Object(A.a)("ARTICLE_DISLIKE_FAILURE"),Pe=Object(A.a)("ARTICLE_REQUEST"),Be=Object(A.a)("ARTICLE_SUCCESS"),He=Object(A.a)("ARTICLE_FAILURE"),ze=function(e,t){return function(){var a=Object(E.a)(h.a.mark((function a(r){var n,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r(Pe({isLoadingArticles:!0})),a.prev=1,n=null,!t){a.next=9;break}return a.next=6,Se(e);case 6:n=a.sent,a.next=12;break;case 9:return a.next=11,Ne(e);case 11:n=a.sent;case 12:c=n.data.article,r(Be({isLoadingArticles:!1,article:c})),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(1),"Network Error"===a.t0.message&&r(N({error:a.t0})),r(He({isLoadingArticles:!1}));case 20:case"end":return a.stop()}}),a,null,[[1,16]])})));return function(e){return a.apply(this,arguments)}}()},Je=Object(m.b)(null,{toggleLikeArticle:function(e,t){return function(){var a=Object(E.a)(h.a.mark((function a(r){var n,c,i,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=16;break}return r(Ve({isLoadingLike:!0})),a.prev=2,a.next=5,ke(t);case 5:n=a.sent,c=n.data.article,r(De({newArticle:c,slug:t,isLoadingLike:!1})),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),"Network Error"===a.t0.message&&r(N({error:a.t0})),r(Ge({isLoadingLike:!1}));case 14:a.next=30;break;case 16:return r(Fe()),a.prev=17,a.next=20,Le(t);case 20:i=a.sent,s=i.data.article,r(Ce({newArticle:s,slug:t})),a.next=30;break;case 25:return a.prev=25,a.t1=a.catch(17),"Network Error"===a.t1.message&&r(N({error:a.t1})),a.next=30,r(We());case 30:case"end":return a.stop()}}),a,null,[[2,10],[17,25]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.title,a=e.author,r=e.createdAt,c=e.tagList,i=e.favoritesCount,s=e.slug,l=e.favorited,u=e.toggleLikeArticle,o=e.isAuth,m=function(){var e=Object(E.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,je(s);case 4:a=e.sent,r=a.data.article.favorited,u(r,s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error component article ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=n.a.createElement("div",{style:{width:"200px"}},n.a.createElement("p",null,o?"like or dislike this article":"sign in to like this article"));return n.a.createElement(b.b,{to:"/articles/".concat(s),className:Ae.a.articleLinkWrap},n.a.createElement("div",{className:Ae.a.article},n.a.createElement("div",{className:Ae.a.contentWrap},n.a.createElement("span",{className:Ae.a.date},he(r)),n.a.createElement("h3",{className:Ae.a.title},t),n.a.createElement("div",{className:Ae.a.autorWrap},"Autor",n.a.createElement("span",{className:Ae.a.author},a.username)),n.a.createElement("div",null,n.a.createElement("div",{className:Ae.a.tags},"Tags:",c.map((function(e){return n.a.createElement("p",{key:e,className:Ae.a.tag},e)}))),n.a.createElement(ie.a,{title:"Note",trigger:"hover",content:d,className:Ae.a.likes,onClick:m},l?n.a.createElement(se.a,null):n.a.createElement(le.a,null)," ".concat(i))))))})),Qe=Object(m.b)((function(e){return{isLoadingArticles:e.reducerArticles.isLoadingArticles,articles:e.reducerArticles.articles,countArticles:e.reducerArticles.countArticles,isAuth:e.reducerAuth.currentUser.isAuth,token:e.reducerAuth.currentUser.token,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate}}),{getAllArticles:function(e,t){return function(){var a=Object(E.a)(h.a.mark((function a(r){var n,c;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(Te({isLoadingArticles:!0})),n=null,a.prev=2,a.next=5,ve(e,t);case 5:n=a.sent,c=n.data.articles.map((function(e,t){return Object(g.a)({id:Object(Ue.uniqueId)()},e)})),r(Ie({isLoadingArticles:!1,articles:c,countArticles:n.data.articlesCount})),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0),"Network Error"===a.t0.message&&r(N({error:a.t0})),r(Re({isLoadingArticles:!1}));case 15:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.isLoadingArticles,a=e.countArticles,c=e.articles,i=e.getAllArticles,s=e.isAuth,l=e.token,u=e.isFirstValidate,o=Object(r.useState)(1),m=Object(te.a)(o,2),d=m[0],p=m[1],f=Object(r.useState)(10),A=Object(te.a)(f,1)[0];Object(r.useEffect)((function(){u&&function(){var e=Object(E.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(d,10);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,d,i,l,u]);return n.a.createElement("div",{className:re.a.home},n.a.createElement("div",{className:re.a.articlesHeader},n.a.createElement("h2",{className:re.a.articlesTitle},"Articles List:"),n.a.createElement(b.b,{to:G.add,className:re.a.articlesCreateLink},n.a.createElement("h3",{className:re.a.articlesCreateLinkText},"Create article"),n.a.createElement(ne.a,null))),n.a.createElement("div",{className:re.a.articlesWrap},t?n.a.createElement("div",{className:re.a.loaderWrap},n.a.createElement(q.a,{style:{fontSize:40}})):c.map((function(e){return n.a.createElement(Je,Object.assign({key:e.id},e,{token:l,isAuth:s}))}))),n.a.createElement("div",{className:re.a.pagination},n.a.createElement(ce.a,{defaultCurrent:1,currentPage:d,total:a||10,pageSize:A,showSizeChanger:!1,onChange:function(e){return p(e)}})))})),qe=function(){var e=Object(m.d)((function(e){return e.reducerErrors.errors}));return e?n.a.createElement("div",{className:"errorModalWrap"},n.a.createElement("div",{className:"errorModal"},n.a.createElement("h3",null,e))):null},Me=function(){return n.a.createElement("div",{className:"successModal"},"Success!")},Ke=a(83),Xe=a(302),Ze=Q.a().shape({title:Q.b().required(),description:Q.b().required(),body:Q.b().required(),tagList:Q.b()}),Ye=function(){var e=Object(E.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={article:Object(g.a)(Object(g.a)({},t),{},{tagList:Object(Ke.a)(new Set(t.tagList.split(" ")))})},e.prev=1,e.next=4,_e(r);case 4:setTimeout((function(){a(!1)}),1e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),$e=Object(m.b)((function(e){return{}}))((function(){var e=Object(r.useState)(!1),t=Object(te.a)(e,2),a=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(z.d,{initialValues:{title:"",description:"",body:"",tagList:""},validationSchema:function(){return Ze},onSubmit:function(e,t){var a=t.resetForm;Ye(e,c),a(),c(!0)}},(function(e){return function(e){return n.a.createElement("form",{onSubmit:e},n.a.createElement("div",{className:"form"},a?n.a.createElement(Me,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"title"},"Create article"),n.a.createElement("hr",{className:"lineTitle"}),n.a.createElement("span",null,"Title"),n.a.createElement(Y,{name:"title",placeholder:"enter title..."}),n.a.createElement("span",null,"Description:"),n.a.createElement(Y,{name:"description",placeholder:"enter description..."}),n.a.createElement("span",null,"Body:"),n.a.createElement(Z,{name:"body",placeholder:"enter body..."}),n.a.createElement("span",null,"Tags:"),n.a.createElement(Y,{name:"tagList",placeholder:"write tags with a space..."}),n.a.createElement(Xe.a,{type:"submit",value:"Create",style:{marginTop:"8px"}}))))}(e.handleSubmit)})))})),et=a(10),tt=a.n(et),at=a(299),rt=a(155),nt=a(315),ct=a(316),it=Object(m.b)((function(e){return{article:e.reducerArticles.article,author:e.reducerArticles.article.author,isLoadingArticles:e.reducerArticles.isLoadingArticles,isAuth:e.reducerAuth.currentUser.isAuth,username:e.reducerAuth.currentUser.username,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate}}),{getArticle:ze})((function(e){var t=e.username,a=e.isAuth,c=e.isFirstValidate,i=e.location,s=e.article,l=e.author,u=e.getArticle,o=e.isLoadingArticles,m=e.history,d=s.title,p=s.createdAt,f=s.updatedAt,h=s.description,E=s.body,A=s.tagList;Object(r.useEffect)((function(){var e=i.pathname;c&&u(e,a)}),[i,u,a,c]);var g=function(){var e=i.pathname;ye(e),m.goBack()};return n.a.createElement(n.a.Fragment,null,o?n.a.createElement("div",{className:tt.a.loaderWrap},n.a.createElement(q.a,{style:{fontSize:40},spin:!0})):n.a.createElement("div",{className:tt.a.article},n.a.createElement("div",{className:tt.a.articleProfile},n.a.createElement(at.a,{src:l.image,size:120}),n.a.createElement("h1",{className:tt.a.articleTitle},"name: ",n.a.createElement("span",{className:tt.a.textWrap},l.username)),n.a.createElement("span",{className:tt.a.articleTitle},"bio: ",n.a.createElement("span",{className:tt.a.textWrap},l.bio))),n.a.createElement("div",{className:tt.a.articleContent},n.a.createElement("h1",{className:tt.a.articleTitle},"title: ",n.a.createElement("span",{className:tt.a.textWrap},d)),n.a.createElement("h2",{className:tt.a.articleSubtitle},"description:"," ",n.a.createElement("span",{className:tt.a.articleText},h)),n.a.createElement("span",{className:tt.a.articleDate},"createdAt:"," ",n.a.createElement("span",{className:tt.a.articleText},he(p))),n.a.createElement("span",{className:tt.a.articleDate},"updatedAt:"," ",n.a.createElement("span",{className:tt.a.articleText},he(f))),n.a.createElement("span",{className:tt.a.articleBody},"body: ",n.a.createElement("span",{className:tt.a.articleText},E)),n.a.createElement("span",{className:tt.a.tagList},"tags:"," ",A.map((function(e){return n.a.createElement("p",{key:e,className:tt.a.tag},e)}))),n.a.createElement("div",{className:tt.a.lineUpFooter}),n.a.createElement("div",{className:tt.a.footer},n.a.createElement("div",{className:tt.a.btnsWrap},n.a.createElement(b.b,{to:"".concat(i.pathname,"/edit"),disabled:t!==l.username,className:"linkWithImgRigth"},n.a.createElement("span",{className:"linkWithImageRigthText"},"Edit"),n.a.createElement(nt.a,null)),n.a.createElement(rt.a,{type:"link",disabled:t!==l.username,className:tt.a.btnDelete,onClick:g},n.a.createElement("span",null,"Delete"),n.a.createElement(ct.a,null)))))))})),st=Object(m.b)((function(e){return{isLoadingAuth:e.reducerAuth.currentUser.isLoadingAuth,isFirstValidate:e.reducerAuth.currentUser.isFirstValidate,token:e.reducerAuth.currentUser.token,isAuth:e.reducerAuth.currentUser.isAuth,isLoadingArticles:e.reducerArticles.isLoadingArticles,article:e.reducerArticles.article}}),{getArticle:ze})((function(e){var t=e.isLoadingArticles,a=e.article,c=e.token,i=e.isAuth,l=e.getArticle,u=e.isFirstValidate,o=a.title,m=a.description,d=a.body,p=a.tagList,b=Object(r.useState)(!1),f=Object(te.a)(b,2),h=f[0],E=f[1],A=Object(s.g)(),O=Object(s.h)("/articles/:slug");Object(r.useEffect)((function(){if(u){var e=O.url;l(e,i)}}),[i,l,u]);var v=Q.a().shape({title:Q.b(),description:Q.b(),body:Q.b(),tagList:Q.b()});return n.a.createElement("div",null,n.a.createElement(z.d,{initialValues:{title:"",description:"",body:"",tagList:""},validationSchema:function(){return v},onSubmit:function(e){!function(e){var t=xe.a.omitBy(e,(function(e,t){return""===e})),a={article:Object(g.a)(Object(g.a)({},t),{},{tagList:Object(Ke.a)(new Set(e.tagList.split(" ")))})},r=window.location.pathname;r=O.url,we(r,c,a),setTimeout((function(){E(!1),A.goBack()}),1e3)}(e),E(!0)}},(function(e){var a=e.handleSubmit;return n.a.createElement(n.a.Fragment,null,t?n.a.createElement("div",{className:H.a.loaderWrap},n.a.createElement(q.a,{style:{fontSize:40},spin:!0})):function(e){return n.a.createElement("form",{onSubmit:e,className:H.a.formAuth},h?n.a.createElement(Me,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:H.a.title},"Edit article"),n.a.createElement("hr",{className:H.a.lineBottomTitle}),n.a.createElement("label",null,"title"),n.a.createElement(Y,{name:"title",component:"input",placeholder:o}),n.a.createElement("label",null,"description"),n.a.createElement(Y,{name:"description",component:"input",placeholder:m}),n.a.createElement("label",null,"body"),n.a.createElement(Y,{name:"body",component:"input",placeholder:d}),n.a.createElement("label",null,"tagList"),n.a.createElement(Y,{name:"tagList",component:"input",placeholder:p}),n.a.createElement("div",{className:H.a.btnsWrap},n.a.createElement(J.a,{type:"submit",value:"Edit",style:{width:"100px"}}))))}(a))})))})),lt=Object(m.b)((function(e){return{isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.component,a=e.isAuth,r=Object(K.a)(e,["component","isAuth"]);return n.a.createElement(s.b,Object.assign({},r,{render:function(e){return a||localStorage.currentUser?n.a.createElement(t,e):n.a.createElement(s.a,{to:G["sign-in"]})}}))})),ut=Object(m.b)((function(e){return{isAuth:e.reducerAuth.currentUser.isAuth}}))((function(e){var t=e.component,a=e.isAuth,r=Object(K.a)(e,["component","isAuth"]);return n.a.createElement(s.b,Object.assign({},r,{render:function(e){return a?n.a.createElement(s.a,{to:G.home}):n.a.createElement(t,e)}}))})),ot=function(){var e=Object(m.c)();return Object(r.useEffect)((function(){if(e(W()),localStorage.currentUser){var t=(a="currentUser",JSON.parse(localStorage[a]));e(V({currentUser:t,isFirstValidate:!0}))}else e(D({isFirstValidate:!0}));var a}),[e]),n.a.createElement("div",{className:"app"},n.a.createElement(P,null),n.a.createElement("div",{className:"content"},n.a.createElement(s.d,null,n.a.createElement(s.b,{path:G.home,exact:!0,component:Qe}),n.a.createElement(ut,{path:G["sign-in"],component:$}),n.a.createElement(ut,{path:G["sign-up"],component:ee}),n.a.createElement(lt,{path:G.add,component:$e}),n.a.createElement(lt,{path:G["article-edit"],exact:!0,component:st}),n.a.createElement(s.b,{path:G["article-info"],exact:!0,component:it}),n.a.createElement(s.a,{to:G.home}))),n.a.createElement(qe,null))},mt=a(66),dt=a(196),pt=a(197),bt=a(6),ft=a(301),ht=Object(ft.a)((ge={},Object(bt.a)(ge,U,(function(e,t){var a=t.payload.isLoadingAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:Object(g.a)(Object(g.a)({},e.currentUser),{},{isLoadingAuth:a})})})),Object(bt.a)(ge,x,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(bt.a)(ge,T,(function(e,t){var a=t.payload,r=a.isLoadingAuth,n=a.isAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:Object(g.a)(Object(g.a)({},e.currentUser),{},{isLoadingAuth:r,isAuth:n})})})),Object(bt.a)(ge,I,(function(e,t){var a=t.payload.isLoadingAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:Object(g.a)(Object(g.a)({},e.currentUser),{},{isLoadingAuth:a})})})),Object(bt.a)(ge,R,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(bt.a)(ge,F,(function(e,t){var a=t.payload,r=a.isLoadingAuth,n=a.isAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:Object(g.a)(Object(g.a)({},e.currentUser),{},{isLoadingAuth:r,isAuth:n})})})),Object(bt.a)(ge,C,(function(e,t){var a=t.payload,r=a.isAuth,n=a.isLoadingAuth,c=a.token,i=a.name,s=a.isFirstValidate;return Object(g.a)(Object(g.a)({},e),{},{currentUser:{isAuth:r,username:i,token:c,isLoadingAuth:n,isFirstValidate:s}})})),Object(bt.a)(ge,W,(function(e,t){t.payload;return Object(g.a)({},e)})),Object(bt.a)(ge,V,(function(e,t){var a=t.payload,r=a.currentUser,n=a.isFirstValidate,c=r.isAuth,i=r.token,s=r.name,l=r.isLoadingAuth;return Object(g.a)(Object(g.a)({},e),{},{currentUser:{isAuth:c,username:s,token:i,isLoadingAuth:l,isFirstValidate:n}})})),Object(bt.a)(ge,D,(function(e,t){var a=t.payload.isFirstValidate;return Object(g.a)(Object(g.a)({},e),{},{currentUser:Object(g.a)(Object(g.a)({},e.currentUser),{},{isFirstValidate:a})})})),ge),{currentUser:{isAuth:!1,username:null,token:null,isLoadingAuth:!1,isFirstValidate:!1}}),Et=Object(ft.a)(Object(bt.a)({},N,(function(e,t){var a=t.payload.error;return Object(g.a)(Object(g.a)({},e),{},{errors:a.message})})),{errors:null}),At=Object(ft.a)((Oe={},Object(bt.a)(Oe,Te,(function(e,t){var a=t.payload.isLoadingArticles;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:a})})),Object(bt.a)(Oe,Ie,(function(e,t){var a=t.payload,r=a.isLoadingArticles,n=a.articles,c=a.countArticles;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:r,articles:n,countArticles:c})})),Object(bt.a)(Oe,Re,(function(e,t){var a=t.payload.isLoadingArticles;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:a})})),Object(bt.a)(Oe,Fe,(function(e,t){t.payload;return Object(g.a)({},e)})),Object(bt.a)(Oe,Ce,(function(e,t){var a=t.payload,r=a.newArticle,n=a.slug,c=e.articles.map((function(e){return e.slug===n?Object(g.a)({id:e.id},r):e}));return Object(g.a)(Object(g.a)({},e),{},{articles:Object(Ke.a)(c)})})),Object(bt.a)(Oe,We,(function(e,t){t.payload;return Object(g.a)({},e)})),Object(bt.a)(Oe,Ve,(function(e,t){t.payload;return Object(g.a)({},e)})),Object(bt.a)(Oe,De,(function(e,t){var a=t.payload,r=a.newArticle,n=a.slug,c=e.articles.map((function(e){return e.slug===n?Object(g.a)({id:e.id},r):e}));return Object(g.a)(Object(g.a)({},e),{},{articles:Object(Ke.a)(c)})})),Object(bt.a)(Oe,Ge,(function(e,t){t.payload;return Object(g.a)({},e)})),Object(bt.a)(Oe,Pe,(function(e,t){var a=t.payload.isLoadingArticles;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:a})})),Object(bt.a)(Oe,Be,(function(e,t){var a=t.payload,r=a.isLoadingArticles,n=a.article;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:r,article:n})})),Object(bt.a)(Oe,He,(function(e,t){var a=t.payload.isLoadingArticles;return Object(g.a)(Object(g.a)({},e),{},{isLoadingArticles:a})})),Oe),{articles:[],isLoadingArticles:!1,countArticles:null,article:{title:"",createdAt:"",updatedAt:"",description:"",body:"",tagList:[],favorited:!1,favoritesCount:"",author:{username:"",bio:"",image:""}}}),gt=Object(mt.combineReducers)({reducerAuth:ht,reducerErrors:Et,reducerArticles:At}),Ot=Object(mt.createStore)(gt,Object(dt.composeWithDevTools)(Object(mt.applyMiddleware)(pt.a)));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,{store:Ot},n.a.createElement(b.a,null,n.a.createElement(ot,null)))),document.getElementById("root"))},56:function(e,t,a){e.exports={articleLinkWrap:"Article_articleLinkWrap__2GJ-N",article:"Article_article__1tXBk",date:"Article_date__3ekyh",title:"Article_title__2_35e",titleLink:"Article_titleLink__eU5eB",autorWrap:"Article_autorWrap__GX8bl",author:"Article_author__3-LyQ",likes:"Article_likes__zIVzl",tags:"Article_tags__1PR-V",tag:"Article_tag__3WFtX"}},65:function(e,t,a){e.exports={home:"Home_home__1KQ3A",articlesWrap:"Home_articlesWrap__5W7Gz",articlesCreateLink:"Home_articlesCreateLink__2jVhB",articlesCreateLinkText:"Home_articlesCreateLinkText__XoFe4",loaderWrap:"Home_loaderWrap__2U7ph",pagination:"Home_pagination__3Fl62"}}},[[201,1,2]]]);
//# sourceMappingURL=main.f942c47e.chunk.js.map