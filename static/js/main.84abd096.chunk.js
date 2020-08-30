(this["webpackJsonpreact-template-app"]=this["webpackJsonpreact-template-app"]||[]).push([[0],{122:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(22),c=t.n(o),i=(t(66),t(67),t(68),t(7)),l=t(17),s=t(18);function m(){var e=Object(l.a)(["\n  padding: 2rem 1.8rem;\n  background-color: var(--color-background);\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n\n  .logo {\n    width: 40%;\n  }\n"]);return m=function(){return e},e}var u=s.a.nav(m()),d=t(55),p=t.n(d),f=t(124);var h=function(){return r.a.createElement(u,null,r.a.createElement(f.a,null,r.a.createElement("img",{src:p.a,alt:"Immunity Health",className:"logo"})))},g=t(29),b=t(8),v=t.n(b),y=t(12),E=t(6);function _(){var e=Object(l.a)(['\n  min-height: 100vh;\n  background-color: var(--color-background);\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  position: relative;\n\n  .loader-container {\n    position: absolute;\n    left: 50%;\n    top: 12%;\n    transform: translate(-50%, 0%);\n  }\n\n  .intro {\n    padding: 2rem 0;\n    &__text {\n      font-size: 1.8rem;\n      text-align: center;\n    }\n  }\n\n  form {\n    .input-field {\n      border-radius: 10rem;\n      font-size: 1.6rem;\n      padding: 1.4rem;\n      margin: 1rem 0;\n\n      &:focus {\n        border-color: var(--color-primary);\n        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset,\n          0px 0px 4px var(--color-shadow-primary);\n      }\n    }\n\n    .terms-container {\n      display: flex;\n      align-items: center;\n\n      p.toggle-terms {\n        padding: 0 1.4rem;\n        margin: 0;\n        font-size: 1.6rem;\n        text-decoration: underline;\n        text-align: center;\n\n        &:hover {\n          cursor: pointer;\n        }\n      }\n\n      .check-box {\n        font-size: 1.4rem;\n        padding: 1rem 0rem 1rem 2.5rem;\n        display: flex;\n        align-items: center;\n        label {\n          padding: 0 1rem;\n        }\n      }\n    }\n\n    button {\n      width: 100%;\n      font-size: 1.6rem;\n      padding: 1rem;\n      margin: 1rem 0;\n      font-weight: bold;\n    }\n\n    p.error {\n      color: red;\n      font-size: 1.6rem;\n      text-align: center;\n      margin: 0;\n      &::before {\n        content: "*";\n      }\n    }\n  }\n']);return _=function(){return e},e}var k=s.a.div(_()),O=t(126),j=t(127),w=t(13),x=t.n(w),N=t(125),S=t(56),C=t.n(S);function z(){var e=Object(l.a)(["\n  .modal-header {\n    color: var(--color-primary);\n  }\n\n  .modal-body {\n    padding: 1rem;\n    p {\n      font-size: 1.4rem;\n      text-align: justify;\n    }\n  }\n\n  .modal-footer {\n    button {\n      font-size: 1.4rem;\n    }\n  }\n"]);return z=function(){return e},e}var T=Object(s.a)(N.a)(z());var P=function(e){return r.a.createElement(T,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,{id:"contained-modal-title-vcenter"},"Terms & Conditions")),r.a.createElement(N.a.Body,null,C()(e.children)),r.a.createElement(N.a.Footer,null,r.a.createElement(j.a,{className:"primary",onClick:e.onHide,style:{width:"100%"}},"Close")))},I=t(24),A=t.n(I),D="https://uat.immunityhealth.me/api/terms-condition",R="https://uat.immunityhealth.me/api/terms-condition-save",B="https://uat.immunityhealth.me/api/login-mobile",F="https://uat.immunityhealth.me/api/login-mobile-verify",q="https://uat.immunityhealth.me/api/user-info";var W=Object(i.f)((function(e){var n=e.history,t=Object(a.useState)(!1),o=Object(E.a)(t,2),c=o[0],i=o[1],l=Object(a.useState)({number:!1,otp:!1}),s=Object(E.a)(l,2),m=s[0],u=s[1],d=Object(a.useState)(!1),p=Object(E.a)(d,2),h=p[0],b=p[1],_=Object(a.useState)("Get OTP"),w=Object(E.a)(_,2),N=w[0],S=w[1],C=Object(a.useState)(""),z=Object(E.a)(C,2),T=z[0],I=z[1],W=Object(a.useState)(!1),L=Object(E.a)(W,2),U=L[0],H=L[1],G=Object(a.useState)(""),J=Object(E.a)(G,2),K=J[0],M=J[1],V=Object(a.useState)(""),Y=Object(E.a)(V,2),$=Y[0],Q=Y[1],X=Object(a.useState)(""),Z=Object(E.a)(X,2),ee=Z[0],ne=Z[1],te=Object(a.useState)(""),ae=Object(E.a)(te,2),re=ae[0],oe=ae[1],ce=Object(a.useState)(""),ie=Object(E.a)(ce,2),le=ie[0],se=ie[1],me=Object(a.useState)(!1),ue=Object(E.a)(me,2),de=ue[0],pe=ue[1],fe=Object(a.useState)(""),he=Object(E.a)(fe,2),ge=he[0],be=he[1],ve=function(){var e=Object(y.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,x.a.post(D,{type:1});case 4:n=e.sent,b(!1),I(n.data.jsonData.content),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b(!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,x.a.post(R,{mobile_number:+K,device_id:123456,type:1,content_id:1});case 4:e.sent,b(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,x.a.post(B,{mobile:+K});case 4:e.sent,u((function(e){return Object(g.a)(Object(g.a)({},e),{},{otp:!0})})),S("Verify"),b(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),b(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(le.length<4)){e.next=3;break}return be("Please enter the 4-digit OTP"),e.abrupt("return");case 3:return b(!0),e.prev=4,e.next=7,x.a.post(F,{mobile:+K,otp:+le});case 7:if("false"!==(t=e.sent).data.status){e.next=12;break}return be("Incorrect OTP"),b(!1),e.abrupt("return");case 12:b(!1),t.data.jsonData?(localStorage.setItem("token",t.data.jsonData.token),n.push("/details")):(H(!0),S("Submit")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),b(!1);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee){e.next=3;break}return be("Name is mandatory"),e.abrupt("return");case 3:if($){e.next=6;break}return be("Email is mandatory"),e.abrupt("return");case 6:if($.includes("@")&&$.includes(".")&&!(!$.length>5)){e.next=9;break}return be("Please enter a valid email address"),e.abrupt("return");case 9:if(!(re.length<6)){e.next=12;break}return be("A six-digit Pin Code is mandatory"),e.abrupt("return");case 12:if(de){e.next=15;break}return be("Please accept terms and conditions"),e.abrupt("return");case 15:return ye(),b(!0),localStorage.setItem("pincode",re),e.prev=18,e.next=21,x.a.post(q,{mobile:+K,name:ee,email:$});case 21:t=e.sent,b(!1),t.data.jsonData.token&&(localStorage.setItem("token",t.data.jsonData.token),n.push("/details")),be("Invalid data"),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(18),b(!1);case 30:case"end":return e.stop()}}),e,null,[[18,27]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){isNaN(K)?be("Invalid mobile number"):be(""),10===K.length&&!ge&&u((function(e){return Object(g.a)(Object(g.a)({},e),{},{number:!0})}))}),[K]),Object(a.useEffect)((function(){"Name is mandatory"===ge&&ee.length>1&&be(""),"Email is mandatory"===ge&&$.length>1&&be(""),"Please enter a valid email address"===ge&&$.includes("@")&&$.includes(".")&&$.length>5&&be(""),"A six-digit Pin Code is mandatory"===ge&&6===re.length&&be(""),"Please accept terms and conditions"===ge&&de&&be(""),"Please enter the 4-digit OTP"===ge&&4===le.length&&be(""),"Incorrect OTP"===ge&&le.length<4&&be("")}),[ge,ee,$,re,de,le]),Object(a.useEffect)((function(){ve()}),[]),r.a.createElement(k,null,r.a.createElement(P,{show:c,onHide:function(){return i(!1)}},T),r.a.createElement("div",{className:"loader-container"},h&&r.a.createElement(A.a,{type:"Puff",color:"var(--color-primary)",height:80,width:80})),r.a.createElement(f.a,null,r.a.createElement("div",{className:"intro"},r.a.createElement("p",{className:"intro__text"},"Hello and Welcome! Log-in or Sign-up quickly using your mobile number.")),r.a.createElement(O.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(O.a.Control,{type:"text",placeholder:"Mobile Number",className:"input-field",onChange:function(e){return M(e.target.value)},maxLength:"10"}),m.otp&&r.a.createElement(O.a.Control,{type:"text",placeholder:"Enter OTP",className:"input-field",onChange:function(e){return se(e.target.value)},maxLength:"4"}),U&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a.Control,{type:"text",placeholder:"Your Name",className:"input-field",onChange:function(e){return ne(e.target.value)},required:!0}),r.a.createElement(O.a.Control,{type:"email",placeholder:"Your Email",className:"input-field",onChange:function(e){return Q(e.target.value)},required:!0}),r.a.createElement(O.a.Control,{type:"text",placeholder:"Pin Code",className:"input-field",onChange:function(e){return oe(e.target.value)},maxLength:"6",required:!0}),r.a.createElement(O.a.Group,{controlId:"formBasicCheckbox",className:"terms-container"},r.a.createElement(O.a.Check,{type:"checkbox",onChange:function(e){return pe(e.target.checked)},className:"check-box"}),r.a.createElement("p",{onClick:function(){return i(!0)},className:"toggle-terms"},"Terms and Conditions"))),ge&&r.a.createElement("p",{className:"error"},ge),!ge&&10===K.length&&r.a.createElement(j.a,{className:"primary",onClick:function(){"Get OTP"===N&&Ee(),"Verify"===N&&_e(),"Submit"===N&&ke()}},N))))}));function L(){var e=Object(l.a)(['\n  padding: 0 2rem;\n  padding-top: 6rem;\n  background-color: var(--color-background);\n  min-height: 120vh;\n\n  .header {\n    padding: 1rem 0rem 3rem 0rem;\n    display: flex;\n    align-items: center;\n\n    a {\n      display: flex;\n      align-items: center;\n\n      ion-icon[name="arrow-back"] {\n        color: var(--color-secondary);\n        font-size: 2.4rem;\n      }\n    }\n\n    &__title {\n      font-size: 2rem;\n      margin: 0;\n      padding: 0 0.5rem;\n    }\n  }\n\n  /* BANNER */\n  .banner {\n    height: 50vh;\n    background-color: red;\n\n    border-top-left-radius: 3rem;\n    border-top-right-radius: 3rem;\n  }\n\n  /* CONTENT */\n  .content {\n    &__heading {\n      font-size: 2rem;\n      font-weight: 700;\n      padding: 1rem 0;\n      margin: 0;\n    }\n  }\n\n  /* DATE PICKER */\n  .date-picker {\n    &__heading {\n      font-size: 1.6rem;\n      font-weight: 700;\n    }\n\n    &__container {\n      display: flex;\n      overflow-x: auto;\n      white-space: nowrap;\n\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    &__date {\n      display: block;\n      position: relative;\n      cursor: pointer;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      margin-right: 3rem;\n      text-align: center;\n\n      input {\n        position: absolute;\n        opacity: 0;\n        cursor: pointer;\n        height: 5rem;\n        width: 4.5rem;\n        top: 10%;\n        left: 0;\n      }\n      input[type="radio"]:checked + span p:last-child {\n        background-color: var(--color-primary);\n        color: var(--color-background);\n      }\n      input[type="radio"]:checked + span p:first-child {\n        color: var(--color-primary);\n      }\n\n      &--day {\n        font-weight: 600;\n        font-size: 1.4rem;\n      }\n      &--date {\n        font-size: 2rem;\n        padding: 0.5rem;\n        width: 4rem;\n        border-radius: 100%;\n      }\n    }\n  }\n\n  /* TIME PICKER */\n  .time-picker {\n    padding-bottom: 10rem;\n    &__heading {\n      font-size: 1.6rem;\n      font-weight: 700;\n      padding-top: 1.5rem;\n    }\n\n    &__container {\n      padding-bottom: 2rem;\n    }\n\n    &__time {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      &--time {\n        font-size: 1.8rem;\n        margin: 0;\n      }\n      input {\n        height: 5rem;\n        width: 2rem;\n        order: 2;\n      }\n      input[type="radio"]:checked ~ p {\n        color: red;\n      }\n    }\n  }\n\n  /* FOOTER */\n  .footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 2rem;\n\n    background-color: var(--color-background);\n    button {\n      font-size: 1.6rem;\n      padding: 1rem 2rem;\n      width: 100%;\n    }\n  }\n\n  /* LOADER */\n  .loader {\n    text-align: center;\n  }\n\n  /* ERROR */\n  .error {\n    text-align: center;\n    color: red;\n    font-size: 1.6rem;\n    font-weight: 700;\n    &::before {\n      content: "*";\n    }\n  }\n']);return L=function(){return e},e}var U=s.a.div(L()),H=t(19);var G=function(){var e=Object(a.useState)(null),n=Object(E.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)([]),i=Object(E.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)(0),u=Object(E.a)(m,2),d=u[0],p=u[1],f=Object(a.useState)(!1),h=Object(E.a)(f,2),g=h[0],b=h[1],_=Object(a.useState)(""),k=Object(E.a)(_,2),O=k[0],j=k[1],w=Object(a.useState)(""),N=Object(E.a)(w,2),S=N[0],C=N[1],z=Object(a.useState)(""),T=Object(E.a)(z,2),P=T[0],I=T[1],D=function(){var e=Object(y.a)(v.a.mark((function e(){var n,t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t={product_id:5,product_category_id:4,authtoken:"Bearer ".concat(localStorage.getItem("token"))},b(!0),e.prev=3,e.next=6,x.a.post("https://uat.immunityhealth.me/api/getItemDates",t,n);case 6:a=e.sent,o(a.data.jsonData),b(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),j("".concat(e.t0.message,". Please try again later.")),b(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(y.a)(v.a.mark((function e(){var n,t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t={product_id:5,product_category_id:4,date:S},b(!0),e.prev=3,e.next=6,x.a.post("https://uat.immunityhealth.me/api/getItemByDate",t,n);case 6:a=e.sent,s(a.data.jsonData),b(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),j("".concat(e.t0.message,". Please try again later.")),b(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(y.a)(v.a.mark((function e(){var n,t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S||P){e.next=2;break}return e.abrupt("return");case 2:return n=JSON.stringify({product_id:2,product_category_id:4,item_id:P,date:S,authtoken:"Bearer ".concat(localStorage.getItem("token"))}),b(!0),e.prev=4,e.next=7,x.a.post("https://sultry-tax.000webhostapp.com/varchas-saveCartItems.php",n);case 7:t=e.sent,console.log(t.data),"Save Successfull"===t.data.message&&(a="https://unlockyoga.immunityhealth.me/so.html?u=".concat(localStorage.getItem("token"),"&product_id=5&product_category_id=4&pincode=").concat(localStorage.getItem("pincode"),"&item_id=").concat(P),window.location.replace(a)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),j("".concat(e.t0.message,". Please try again later.")),b(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p(S&&P&&!g&&!O?1:0)}),[d,S,P,g,O]),Object(a.useEffect)((function(){S&&(I(""),R())}),[S]),Object(a.useEffect)((function(){D()}),[]),r.a.createElement(U,null,r.a.createElement("div",{className:"header"},r.a.createElement(H.b,{to:"/details"},r.a.createElement("ion-icon",{name:"arrow-back"})),r.a.createElement("p",{className:"header__title"},"Breathe")),r.a.createElement("div",{className:"banner",style:{background:'url("https://protect.immunityhealth.me/product-image/Breath-Free.png") no-repeat',backgroundSize:"cover"}}),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"content__heading"},"Select start date"),r.a.createElement("div",{className:"date-picker"},r.a.createElement("p",{className:"date-picker__heading"},"Select your slot"),r.a.createElement("div",{className:"date-picker__container"},t&&t.map((function(e,n){return"1"===e.status?r.a.createElement("div",{className:"date-picker__date",key:n},r.a.createElement("input",{type:"radio",name:"date",value:e.date,onChange:function(e){return C(e.target.value)}}),r.a.createElement("span",null,r.a.createElement("p",{className:"date-picker__date--day"},e.day),r.a.createElement("p",{className:"date-picker__date--date"},e.date.slice(8,10)))):r.a.createElement("div",{className:"date-picker__date",key:n},r.a.createElement("input",{type:"radio",name:"date",value:e.date,onChange:function(e){return C(e.target.value)},disabled:!0}),r.a.createElement("span",{style:{color:"darkgrey"}},r.a.createElement("p",{className:"date-picker__date--day"},e.day),r.a.createElement("p",{className:"date-picker__date--date",style:{textDecoration:"line-through"}},e.date.slice(8,10))))})))),l.length>0&&!g&&r.a.createElement("div",{className:"time-picker"},r.a.createElement("p",{className:"time-picker__heading"},"Select your time"),r.a.createElement("div",{className:"time-picker__container"},r.a.createElement("hr",null),l.map((function(e,n){return r.a.createElement("div",{className:"time-picker__time",key:n},r.a.createElement("input",{type:"radio",name:"time",value:e.id,onChange:function(e){return I(e.target.value)}}),r.a.createElement("p",{className:"time-picker__time--time"},e.time.replace("-"," to ")))})))),g&&r.a.createElement(A.a,{type:"ThreeDots",color:"var(--color-primary)",height:50,width:50,className:"loader"}),O&&r.a.createElement("div",{className:"error"},O)),r.a.createElement("div",{className:"footer"},d?r.a.createElement("button",{className:"primary",onClick:B},"Proceed"):r.a.createElement("button",{className:"disabled",disabled:!0},"Select Date & Time slot")))};function J(){var e=Object(l.a)(['\n  padding: 0 2rem;\n  padding-top: 6rem;\n  background-color: var(--color-background);\n\n  .header {\n    padding: 1rem 0rem 3rem 0rem;\n    display: flex;\n    align-items: center;\n    a {\n      display: flex;\n      align-items: center;\n\n      ion-icon[name="arrow-back"] {\n        color: var(--color-secondary);\n        font-size: 2.4rem;\n      }\n    }\n    &__title {\n      font-size: 2rem;\n      margin: 0;\n      padding: 0 0.5rem;\n    }\n  }\n\n  /* BANNER */\n  .banner {\n    height: 50vh;\n    background-color: red;\n    border-top-left-radius: 3rem;\n    border-top-right-radius: 3rem;\n  }\n\n  /* LOADER */\n  .loader {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  /* INTRO */\n  .intro {\n    &__heading {\n      font-size: 2rem;\n      font-weight: 700;\n      padding: 1rem 0;\n      margin: 0;\n    }\n\n    &__content {\n      font-size: 1.4rem;\n      line-height: 1.8rem;\n    }\n\n    &__list {\n      padding: 1rem 0rem 1rem 3rem;\n\n      &--item {\n        font-size: 1.4rem;\n        margin: 1rem 0;\n      }\n    }\n  }\n\n  /* FEATURE */\n  .feature {\n    &__subheading {\n      font-size: 1.6rem;\n      font-weight: 700;\n      span {\n        color: var(--color-primary);\n        a {\n          color: inherit;\n        }\n      }\n    }\n\n    &__heading {\n      margin: 0;\n      padding: 1rem 0;\n      font-size: 1.6rem;\n      font-weight: 700;\n    }\n\n    &__content {\n      display: flex;\n\n      &--item {\n        border: 1px solid black;\n        font-size: 1.4rem;\n        padding: 0.8rem 2rem;\n      }\n\n      &--list {\n        list-style: none;\n\n        li {\n          font-size: 1.4rem;\n\n          &::before {\n            content: "\u2022 ";\n            color: red; /* or whatever color you prefer */\n          }\n        }\n      }\n    }\n  }\n\n  /* OUTRO */\n  .outro {\n    padding-top: 1rem;\n    padding-bottom: 10rem;\n    &__text {\n      font-size: 1.4rem;\n      line-height: 1.8rem;\n    }\n  }\n\n  /* FOOTER */\n  .footer {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 2rem;\n\n    background-color: var(--color-background);\n    button {\n      font-size: 1.6rem;\n      padding: 1rem 2rem;\n      width: 100%;\n    }\n  }\n']);return J=function(){return e},e}var K=s.a.div(J()),M=function(e){var n=e.jsonData,t="",a=[],r=[],o="",c=[],i="",l="",s="";return n.forEach((function(e){"objective"===e.type&&a.push(e.value),"requirement"===e.type&&r.push(e.value),"location"===e.type&&(o=e.value),"type"===e.type&&c.push(e.value),"content"===e.type&&"1"===e.number&&(t=e.value),"content"===e.type&&"2"===e.number&&(i=e.value),"website"===e.type&&(l=e.value),"img_url"===e.type&&(s=e.value)})),{intro:t,objectives:a,partner:o,types:c,requirements:r,outro:i,website:l,img_url:s}};var V=Object(i.f)((function(e){var n=e.history,t=Object(a.useState)(!1),o=Object(E.a)(t,2),c=o[0],i=o[1],l=Object(a.useState)({}),s=Object(E.a)(l,2),m=s[0],u=s[1],d=function(){var e=Object(y.a)(v.a.mark((function e(t,a){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,x.a.post("https://uat.immunityhealth.me/api/dynamicScreenDetail",t,a);case 4:r=e.sent,u(M(r.data)),i(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),"Request failed with status code 401"===e.t0.message&&(i(!1),n.push("/"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}};d({product_category_id:4,screen_number:5},e)}),[]),r.a.createElement(K,null,r.a.createElement("div",{className:"header"},r.a.createElement("p",{className:"header__title"},"Breathe")),m.img_url&&r.a.createElement("div",{className:"banner",style:{background:"url(".concat(m.img_url,") no-repeat"),backgroundSize:"cover"}}),c&&r.a.createElement(A.a,{type:"ThreeDots",color:"var(--color-primary)",height:150,width:150,className:"loader"}),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"intro"},r.a.createElement("p",{className:"intro__heading"},"What's covered?"),r.a.createElement("p",{className:"intro__content"},m.intro),r.a.createElement("ul",{className:"intro__list"},m.objectives&&m.objectives.map((function(e,n){return r.a.createElement("li",{className:"intro__list--item",key:n},e)})))),r.a.createElement("div",{className:"features"},r.a.createElement("div",{className:"feature"},r.a.createElement("p",{className:"feature__subheading"},"Partner:"," ",r.a.createElement("span",null,r.a.createElement("a",{href:m.website},m.partner)))),r.a.createElement("div",{className:"feature"},r.a.createElement("p",{className:"feature__heading"},"Type"),r.a.createElement("div",{className:"feature__content"},m.types&&m.types.map((function(e,n){return r.a.createElement("p",{className:"feature__content--item",key:n},e)})))),r.a.createElement("div",{className:"feature"},r.a.createElement("p",{className:"feature__heading"},"Location"),r.a.createElement("div",{className:"feature__content"},r.a.createElement("p",{className:"feature__content--item"},"Home"))),r.a.createElement("div",{className:"feature"},r.a.createElement("p",{className:"feature__heading"},"Requirement:"),r.a.createElement("div",{className:"feature__content"},r.a.createElement("ul",{className:"feature__content--list"},m.requirements&&m.requirements.map((function(e,n){return r.a.createElement("li",{key:n},e)})))))),r.a.createElement("div",{className:"outro"},r.a.createElement("p",{className:"outro__text"},m.outro)),r.a.createElement("div",{className:"footer"},r.a.createElement(H.b,{to:"/appointment"},r.a.createElement("button",{className:"primary"},"Buy Now")))))}));var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/","/login"],component:W}),r.a.createElement(i.a,{path:"/details"},r.a.createElement(V,null)),r.a.createElement(i.a,{path:"/appointment"},r.a.createElement(G,null))))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(H.a,null,r.a.createElement(Y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");$?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(n,e)}))}}()},55:function(e,n,t){e.exports=t.p+"static/media/logo.8d1a884f.png"},61:function(e,n,t){e.exports=t(122)},67:function(e,n,t){},68:function(e,n,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.84abd096.chunk.js.map