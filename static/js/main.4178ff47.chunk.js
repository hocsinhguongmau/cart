(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{32:function(t,c,e){},55:function(t,c,e){},56:function(t,c,e){},58:function(t,c,e){},59:function(t,c,e){},60:function(t,c,e){},61:function(t,c,e){},62:function(t,c,e){},63:function(t,c,e){},64:function(t,c,e){},66:function(t,c,e){"use strict";e.r(c);var n=e(1),r=e.n(n),a=e(26),i=e.n(a),d=(e(32),e(9)),s=e.n(d),u=e(14),o=e(16),l=e(27),j=e(7),b=e(4),h=e(5),O=e(6),p=e(15),f=e.n(p),x=(e(55),r.a.createContext(void 0)),m=r.a.createContext({carts:void 0,handleSubtractQuantity:function(){},handleAddQuantity:function(){},handleRemoveProduct:function(){},handleRemoveCart:function(){},handleApprovedCart:function(){}}),v=(e(56),e(0)),_=function(t){var c=t.children,e=t.onClickHandler;return Object(v.jsx)("button",{onClick:e,className:"button",children:c})},y=(e(58),function(t){var c=t.cartProduct,e=t.cartIndex,r=t.withButtons,a=Object(n.useContext)(x),i=Object(n.useContext)(m);return void 0!==a?null===a||void 0===a?void 0:a.map((function(t){return t.id===c.productId?Object(v.jsxs)("tr",{className:"product",children:[Object(v.jsx)("td",{"data-testid":"product-image",className:"product__img",children:Object(v.jsx)("img",{alt:t.title,src:t.image})}),Object(v.jsx)("td",{"data-testid":"product-title",className:"product__title",children:t.title}),Object(v.jsxs)("td",{"data-testid":"product-price",className:"product__price",children:[t.price," "]}),Object(v.jsxs)("td",{"data-testid":"product-quantity",className:"product__quantity",children:[r?Object(v.jsx)(_,{onClickHandler:function(){return i.handleSubtractQuantity(e,t.id)},children:Object(v.jsx)(h.a,{icon:O.b})}):null,c.quantity,r?Object(v.jsx)(_,{onClickHandler:function(){return i.handleAddQuantity(e,t.id)},children:Object(v.jsx)(h.a,{icon:O.c})}):null]}),r?Object(v.jsx)("td",{children:Object(v.jsx)(_,{onClickHandler:function(){return i.handleRemoveProduct(e,t.id)},children:Object(v.jsx)(h.a,{icon:O.e})})}):null]},"product_".concat(t.id)):null})):null}),N=function(t){var c=t.cart,e=t.cartIndex,r=t.withButtons,a=Object(n.useContext)(m);return Object(v.jsxs)("div",{className:"cartItem","data-testid":"cart-item",children:[Object(v.jsxs)("p",{className:"cartItem__title",children:["Order number: ",c.id,r?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(_,{onClickHandler:function(){return a.handleRemoveCart(c.id)},children:Object(v.jsx)(h.a,{icon:O.e})}),Object(v.jsx)(_,{onClickHandler:function(){return a.handleApprovedCart(c.id)},children:Object(v.jsx)(h.a,{icon:O.a})})]}):null]}),Object(v.jsxs)("table",{cellPadding:0,cellSpacing:0,"data-testid":"cart-table",className:"cartItem__table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Image"}),Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Quantity"}),r?Object(v.jsx)("th",{children:"Remove"}):null]})}),Object(v.jsx)("tbody",{children:c.products.map((function(t){return Object(v.jsx)(y,{cartId:c.id,cartIndex:e,cartProduct:t,withButtons:r},"product_".concat(t.productId))}))})]})]})},g=(e(59),function(t){var c=t.cartProduct,e=(t.cartIndex,Object(n.useContext)(x)),r=function(t,c){var e=0;return c>1?(2===c?e=.2:3===c?e=.3:c>=4&&(e=.4),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("del",{children:["$",(t*c).toFixed(2)]}),Object(v.jsx)("br",{}),"-",100*e,"%",Object(v.jsx)("br",{}),Object(v.jsxs)("span",{className:"price",children:["$",(t*c-t*c*e).toFixed(2)]})]})):"$".concat((t*c).toFixed(2))};return void 0!==e?e.map((function(t){return t.id===c.productId?Object(v.jsxs)("tr",{className:"product",children:[Object(v.jsx)("td",{className:"product__img",children:Object(v.jsx)("img",{alt:t.title,src:t.image})}),Object(v.jsx)("td",{className:"product__title",children:t.title}),Object(v.jsxs)("td",{className:"product__price",children:[t.price," "]}),Object(v.jsx)("td",{className:"product__quantity",children:c.quantity}),Object(v.jsx)("td",{children:r(t.price,c.quantity)})]},"product_".concat(t.id)):null})):null}),I=(e(60),function(t){var c=t.cartProduct,e=Object(n.useContext)(x),r=Object(n.useState)(0),a=Object(b.a)(r,2),i=a[0],d=a[1];return Object(n.useEffect)((function(){!function(){var t=0;c.forEach((function(c,n){var r=Number(null===e||void 0===e?void 0:e.filter((function(t){return t.id===c.productId})).map((function(t){return t.price})));2===c.quantity?r-=.2*r:3===c.quantity?r-=.3*r:c.quantity>=4&&(r-=.4*r),t+=c.quantity*r})),d(Number(t.toFixed(2)))}()}),[]),Object(v.jsx)("div",{className:"summaryItem","data-testid":"summary-item",children:Object(v.jsxs)("table",{cellPadding:0,cellSpacing:0,"data-testid":"summary-table",className:"summaryItem__table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Image"}),Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Quantity"}),Object(v.jsx)("th",{children:"Total"})]})}),Object(v.jsxs)("tbody",{children:[c.map((function(t){return Object(v.jsx)(g,{cartProduct:t},"product_".concat(t.productId))})),Object(v.jsxs)("tr",{className:"total-price",children:[Object(v.jsx)("td",{colSpan:4,children:"Total"}),Object(v.jsxs)("td",{"data-testid":"total",colSpan:1,children:["$",i]})]})]})]})})}),C=(e(61),e(62),function(t){var c=t.discards;return Object(v.jsxs)("div",{className:"discards",children:[Object(v.jsx)("h2",{className:"discards__title",children:"Your discard list"}),c.map((function(t,c){return Object(v.jsx)("div",{children:Object(v.jsx)(N,{cart:t,cartIndex:c},"cart_".concat(t.id))},"discard_".concat(t.id))}))]})}),S=(e(63),function(t){var c=t.approved;return Object(v.jsxs)("div",{className:"approved",children:[Object(v.jsx)("h2",{className:"approved__title",children:"Your approved list"}),c.map((function(t,c){return Object(v.jsx)("div",{children:Object(v.jsx)(N,{cart:t,cartIndex:c},"cart_".concat(t.id))},"approved_".concat(t.id))}))]})}),q="https://fakestoreapi.com",P=function(){var t=Object(n.useState)(!0),c=Object(b.a)(t,2),e=c[0],r=c[1],a=Object(n.useState)(null),i=Object(b.a)(a,2),d=i[0],p=i[1],_=Object(n.useState)(null),y=Object(b.a)(_,2),g=y[0],P=y[1],E=Object(n.useState)([]),F=Object(b.a)(E,2),k=F[0],w=F[1],B=Object(n.useState)([]),Q=Object(b.a)(B,2),A=Q[0],R=Q[1],T=Object(n.useState)([]),H=Object(b.a)(T,2),L=H[0],Y=H[1],$=Object(n.useState)([]),D=Object(b.a)($,2),J=D[0],M=D[1],z=Object(n.useState)(!1),G=Object(b.a)(z,2),K=G[0],U=G[1],V=Object(n.useState)([]),W=Object(b.a)(V,2),X=W[0],Z=W[1],tt=Object(n.useState)(0),ct=Object(b.a)(tt,2),et=ct[0],nt=ct[1],rt=function(t){var c=[];t.forEach((function(t){return t.products.forEach((function(t){c.push(t)}))}));var e=c.reduce((function(t,c){var e=c.productId,n=c.quantity;return t[e]=t[e]||{productId:e,quantity:0},t[e].quantity+=n,t}),{});Z(Object.values(e)),U(!0)};return Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(q,"/carts?limit=").concat(5)).then((function(t){w(t.data),nt(t.data.length)})).catch((function(t){p(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();(function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.next=3,f.a.get("".concat(q,"/products")).then((function(t){R(t.data)})).catch((function(t){P(t)})).then((function(){return r(!1)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),t()}),[]),Object(v.jsxs)("div",{className:"cart","data-testid":"cart",children:[Object(v.jsx)("h1",{className:"cart__title",children:"Your cart"}),Object(v.jsxs)(x.Provider,{value:A,children:[!K&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(m.Provider,{value:{carts:k,handleSubtractQuantity:function(t,c){var e=Object(j.a)(k),n=e[t].products.map((function(t){return t.productId===c?t.quantity<1?t:{productId:t.productId,quantity:t.quantity-1}:t}));e[t].products=n,w(e)},handleAddQuantity:function(t,c){var e=Object(j.a)(k),n=e[t].products.map((function(t){return t.productId===c?{productId:t.productId,quantity:t.quantity+1}:t}));e[t].products=n,w(e)},handleRemoveProduct:function(t,c){var e=Object(j.a)(k),n=e[t].products,r=n.filter((function(t){return t.productId===c})),a=Object(j.a)(L);if(void 0===a.find((function(c){return c.id===e[t].id}))){var i=e[t],d=(i.products,Object(l.a)(i,["products"])),s=Object(o.a)(Object(o.a)({},d),{},{products:r});a.push(s)}else a.forEach((function(c){c.id===e[t].id&&c.products.push(r[0])}));if(n.length>1){var u=n.filter((function(t){return t.productId!==c}));e[t].products=u,w(e)}else{var b=e.filter((function(c,e){return e!==t}));w(b)}fetch("".concat(q,"/products/").concat(c),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return console.log(t)})),Y(a)},handleRemoveCart:function(t){var c=k.filter((function(c){return c.id!==t})),e=Object(j.a)(L),n=Object(j.a)(J);k.forEach((function(c){c.id===t&&e.push(c)})),w(c),Y(e),fetch("".concat(q,"/carts/").concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return console.log(t)})),c.length<1&&rt(n)},handleApprovedCart:function(t){var c=k.filter((function(c){return c.id!==t})),e=Object(j.a)(J);k.forEach((function(c){c.id===t&&(e.push(c),fetch("".concat(q,"/carts"),{method:"POST",body:JSON.stringify(c)}).then((function(t){return t.json()})).then((function(t){return console.log(t)})))})),w(c),M(e),nt(et-1),c.length<1&&rt(e)}},children:[d?"Failed to load cart":null,g?"Failed to load products":null,e?Object(v.jsx)("p",{className:"loading",children:Object(v.jsx)(h.a,{className:"fa-spin",icon:O.d})}):void 0!==k?k.map((function(t,c){return Object(v.jsx)(N,{cart:t,cartIndex:c,withButtons:!0},"cart_".concat(t.id))})):null]})}),K&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(I,{cartProduct:X}),Object(v.jsxs)("div",{className:"choice-lists",children:[Object(v.jsx)(S,{approved:J,withButtons:!1}),L.length?Object(v.jsx)(C,{discards:L,withButtons:!1}):Object(v.jsx)("div",{className:"discards",children:Object(v.jsx)("h2",{className:"discards__title",children:"You have no discard item"})})]})]})]})]})},E=(e(64),function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(P,{})})})}),F=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,67)).then((function(c){var e=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,i=c.getTTFB;e(t),n(t),r(t),a(t),i(t)}))};e(65),i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.4178ff47.chunk.js.map