webpackJsonp([1],{BFMS:function(t,e,r){t.exports=r.p+"static/img/ps4.80f7782.jpg"},F3da:function(t,e){},FrxT:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")({name:"App"},o,!1,function(t){r("kgpO")},"data-v-7a5418f2",null).exports,a=r("/ocq"),s=r("kxiW"),c=r.n(s),u=c.a.initializeApp({apiKey:"AIzaSyANvRU-DLcb0AEhSDVBuCLl53UTQdntXnI",authDomain:"galastore-76c30.firebaseapp.com",databaseURL:"https://galastore-76c30.firebaseio.com",projectId:"galastore-76c30",storageBucket:"galastore-76c30.appspot.com",messagingSenderId:"197394710467"}),d=u.database(),l=(d.ref("names"),d.ref("type"),d.ref("description"),d.ref("price"),d.ref("stock"),u),p=r("M4fF"),m=r.n(p),_={data:function(){return{cart_count:this.$store.getters.getItemsInCart.count,items:this.$store.getters.getItemsInCart,Cart:[],item:{item_name:"",item_quantity:"",item_price:"",item_id:""}}},computed:{total:function(){return m.a.sumBy(this.items,function(t){return Number(t.item_price)*Number(t.item_quantity)})},getProductsInCart:function(){return this.$store.getters.getItemsInCart}},methods:{clear:function(t){this.$store.dispatch("removeFromCart",t)},increaseProduct:function(t){this.$store.dispatch("incrementItemQuantity",t)},decreaseProduct:function(t){this.$store.dispatch("decrementItemQuantity",t)},cart:function(){var t=this;return this.$store.getters.getItemsInCart.map(function(e){return t.$store.getters.getProducts.find(function(t){return e===t.invId})})},checkout:function(){this.$store.dispatch("clearCart"),this.open()},open:function(){this.$message({type:"success",message:"Checkout; Till next time"})}},mounted:{}},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cart"},[r("p",{staticClass:"cart-title"},[t._v("Shopping Cart")]),t._v(" "),t.cart_count<=0?r("p",{staticClass:"cart-empty"},[t._v("Your Shopping Cart is Empty!")]):r("div",{staticClass:"items"},t._l(t.getProductsInCart,function(e){return r("div",{staticClass:"item clearfix"},[r("span",{staticClass:"btn",staticStyle:{cursor:"pointer",color:"red"},on:{click:function(r){t.clear(e.item_id)}}},[t._v("x")]),t._v("  \n\n            "),r("span",{staticClass:"btn",staticStyle:{cursor:"pointer"},on:{click:function(r){t.increaseProduct(e.item_id)}}},[t._v("+")]),t._v("  \n\n            "),r("span",{staticClass:"btn",staticStyle:{cursor:"pointer"},on:{click:function(r){t.decreaseProduct(e.item_id)}}},[t._v("-")]),t._v("  \n\n            "),r("span",{staticClass:"item-title"},[t._v(t._s(e.item_name))]),t._v(" "),r("span",{staticStyle:{"margin-left":"40px"}},[t._v("x "+t._s(e.item_quantity))]),t._v(" \n                "),r("span",{staticClass:"right"},[t._v("$ "+t._s(Number(e.item_quantity)*Number(e.item_price)))])])})),t._v(" "),r("div",{staticClass:"cart-total"},[r("span",[t._v("Total")]),t._v(" "),r("span",{staticClass:"right"},[t._v("$ "+t._s(t.total))])]),t._v(" "),r("div",{staticClass:"cart-total"},[r("a",{staticClass:"checkout",on:{click:t.checkout}},[t._v("CHECKOUT")])])])},staticRenderFns:[]};var v=r("VU/8")(_,f,!1,function(t){r("NSP1")},null,null).exports,h=r("yviF"),g=r.n(h),C=(r("dih4"),{name:"Navbar",methods:{logout:function(){var t=this;g.a.auth().signOut().then(function(){t.$router.replace("login")})}}}),b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"1"}},[e("router-link",{attrs:{to:"/customer"}},[this._v("Galatec Store")])],1),this._v(" "),e("el-menu-item",{attrs:{index:"4"}},[e("button",{on:{click:this.logout}},[this._v("Logout")])])],1)},staticRenderFns:[]};var y=r("VU/8")(C,b,!1,function(t){r("zKnz")},"data-v-87764414",null).exports,k={name:"customer",data:function(){return{msg:"User View",product_id:null,form:{item_name:"",item_quantity:"",item_price:"",item_id:""},Cart:[],errors:[]}},firebase:{product:d.ref("product")},methods:{logout:function(){var t=this;g.a.auth().signOut().then(function(){t.$router.replace("login")})},addCart:function(t){console.log(t),this.$store.dispatch("AddToCart",t)},open:function(){this.$message({type:"success",message:"Cart added"})}},components:{shoppingCart:v,navbar:y},computed:{getProducts:function(){return this.$store.getters.getProducts}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("navbar",[t._t("default")],2),t._v(" "),n("div",{staticClass:"error"},[n("ul",t._l(t.errors,function(e){return n("li",[t._v(t._s(e))])}))]),t._v(" "),n("el-row",[n("el-col",{attrs:{span:18}},[n("ul",t._l(t.getProducts,function(e){return n("li",{key:e.id},[n("el-col",[n("div",{staticClass:"grid-content",staticStyle:{"text-align":"left"}},[n("div",[n("img",{staticClass:"my_images disabled",attrs:{src:r("BFMS"),alt:"image"},on:{click:function(e){t.productDialog()}}}),t._v(" "),n("p",[t._v("Name: "+t._s(e.product_name)+" ")]),t._v(" "),n("p",[t._v("Type: "+t._s(e.product_type)+" ")]),t._v(" "),n("p",[t._v("Ksh: "+t._s(e.product_price)+" ")]),t._v(" "),n("p",[t._v("Stock: "+t._s(e.product_stock))]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(r){t.addCart(e.product_id)}}},[n("i",{staticClass:"el-icon-check"}),t._v(" Add to Cart")])],1)])])],1)}))]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"shopping-cart"},[n("shoppingCart")],1)])],1)],1)},staticRenderFns:[]};var x=r("VU/8")(k,P,!1,function(t){r("xQh0")},"data-v-7c1bf38e",null).exports,E={data:function(){return{productDialog:!1,form:{product_name:"",product_type:"",product_desc:"",product_price:0,product_stock:0},products:[],errors:[]}},firebase:{product:d.ref("product")},methods:{addProduct:function(){var t=this;if(this.errors=[],this.form.product_name||this.errors.push("Product Name required."),this.form.product_type||this.errors.push("Product Type required."),this.form.product_desc||this.errors.push("Description required."),this.form.product_price||this.errors.push("Price required."),this.form.product_stock||this.errors.push("Stock required."),this.form.product_stock&&this.form.product_price&&this.form.product_type&&this.form.product_desc&&this.form.product_name)return this.$firebaseRefs.product.push({name:this.form.product_name,type:this.form.product_type,desc:this.form.product_desc,price:this.form.product_price,stock:this.form.product_stock,edit:!1}),this.$store.dispatch("AddProducts",this.form).then(function(){t.form={},t.open(),t.goHome()}),!0},open:function(){this.$message({type:"success",message:"Product added to shop."})},goHome:function(){this.$router.push({name:"admin"})}}},A={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-container",[r("el-card",{staticClass:"box-card-outer"},[t.errors.length?r("p"):t._e(),r("div",{staticClass:"error"},[r("ul",t._l(t.errors,function(e){return r("li",[t._v(t._s(e))])}))]),t._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"Product Name: "}},[r("el-input",{staticClass:"inpt",model:{value:t.form.product_name,callback:function(e){t.$set(t.form,"product_name",e)},expression:"form.product_name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Product Type: "}},[r("el-input",{staticClass:"inpt",model:{value:t.form.product_type,callback:function(e){t.$set(t.form,"product_type",e)},expression:"form.product_type"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Description: "}},[r("el-input",{staticClass:"inpt",model:{value:t.form.product_desc,callback:function(e){t.$set(t.form,"product_desc",e)},expression:"form.product_desc"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Product Price: "}},[r("el-input",{staticClass:"inpt",model:{value:t.form.product_price,callback:function(e){t.$set(t.form,"product_price",e)},expression:"form.product_price"}})],1),t._v(" "),r("el-input",{attrs:{type:"hidden",value:"1"},model:{value:t.form.product_id,callback:function(e){t.$set(t.form,"product_id",e)},expression:"form.product_id"}}),t._v(" "),r("el-form-item",{attrs:{label:"Product Stock: "}},[r("el-input",{staticClass:"inpt",model:{value:t.form.product_stock,callback:function(e){t.$set(t.form,"product_stock",e)},expression:"form.product_stock"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"success"},on:{click:function(e){t.addProduct()}}},[r("i",{staticClass:"el-icon-check"}),t._v(" Product\n                            ")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var $=r("VU/8")(E,A,!1,function(t){r("F3da")},"data-v-ddfde04a",null).exports,D={name:"Navbar",methods:{logout:function(){var t=this;g.a.auth().signOut().then(function(){t.$router.replace("login")})}}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[r("el-menu-item",{attrs:{index:"1"}},[r("router-link",{attrs:{to:"/admin/"}},[t._v("Galatec Store Admin")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2"}},[r("router-link",{attrs:{to:"/admin/create"}},[t._v("Create Product")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3"}},[r("router-link",{attrs:{to:"/admin/orders"}},[t._v("View Orders")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4"}},[r("button",{on:{click:t.logout}},[t._v("Logout")])])],1)},staticRenderFns:[]};var S=r("VU/8")(D,R,!1,function(t){r("gg0P")},"data-v-4f3c47e5",null).exports,T={name:"AdminIndex",props:["key"],components:{product_form:$,navbar:S},data:function(){return{input:"",product:null,prod_id:null,productVisibleDialog:!1,innerVisibleDialog:!1,options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"5"},{value:"6",label:"6"}],value4:"",products:[]}},firebase:{product:d.ref("product")},computed:{},methods:{removeProduct:function(t){this.open2(t)},setEditProduct:function(t){this.$firebaseRefs.product.child(t).update({edit:!0})},saveEdit:function(t){var e=t[".key"];this.$firebaseRefs.product.child(e).set({product:t,edit:!1})},cancelEdit:function(t){this.$firebaseRefs.product.child(t).update({edit:!1})},open2:function(t){var e=this;this.$confirm("This will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(function(){e.$firebaseRefs.product.child(t).remove(),e.$message({type:"success",message:"Delete completed"}),e.productDialog=!1}).catch(function(){e.$message({type:"info",message:"Delete canceled"})})},productDialog:function(){this.productVisibleDialog=!0},innerVisible:function(){this.innerVisibleDialog=!0}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar",[t._t("default")],2),t._v(" "),n("el-card",{staticClass:"box-card-outer"},[n("hr",{staticStyle:{width:"100px"}}),t._v(" "),n("br"),t._v(" "),n("el-row",[n("ul",t._l(t.product,function(e){return n("li",{key:e[".key"]},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"grid-content",staticStyle:{"text-align":"left"}},[e.edit?n("div",[e.edit?n("div",[n("img",{staticClass:"my_images disabled",attrs:{src:r("BFMS"),alt:"image"},on:{click:function(e){t.productDialog()}}}),t._v(" "),n("p",[t._v("Name: "+t._s(e.name)+" ")]),t._v(" "),n("p",[t._v("Type: "+t._s(e.type)+" ")]),t._v(" "),n("p",[t._v("Desc: "+t._s(e.desc))]),t._v(" "),n("p",[t._v("KSH: "+t._s(e.price)+" ")]),t._v(" "),n("p",[t._v("Stock: "+t._s(e.stock))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(r){t.setEditProduct(e[".key"])}}},[t._v("EDIT")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(r){t.removeProduct(e[".key"])}}},[t._v("REMOVE")])],1):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"prod.name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(r){r.target.composing||t.$set(e,"name",r.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"prod.price"}],attrs:{type:"text"},domProps:{value:e.price},on:{input:function(r){r.target.composing||t.$set(e,"price",r.target.value)}}}),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(r){t.saveEdit(e)}}},[t._v("SAVE")]),t._v(" "),n("el-button",{attrs:{type:""},on:{click:function(r){t.cancelEdit(e[".key"])}}},[t._v("CANCEL")])],1):n("div",[n("img",{staticClass:"my_images disabled",attrs:{src:r("BFMS"),alt:"image"},on:{click:function(e){t.productDialog()}}}),t._v(" "),n("p",[t._v("Name: "+t._s(e.name)+" ")]),t._v(" "),n("p",[t._v("Type: "+t._s(e.type)+" ")]),t._v(" "),n("p",[t._v("Desc: "+t._s(e.desc))]),t._v(" "),n("p",[t._v("KSH: "+t._s(e.price)+" ")]),t._v(" "),n("p",[t._v("Stock: "+t._s(e.stock))]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(r){t.setEditProduct(e[".key"])}}},[t._v("EDIT")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(r){t.removeProduct(e[".key"])}}},[t._v("REMOVE")])],1)])])],1)}))]),t._v(" "),n("hr",{staticStyle:{width:"100px"}})],1)],1)},staticRenderFns:[]};var I=r("VU/8")(T,w,!1,function(t){r("aIsf")},"data-v-2d89fd40",null).exports,U={name:"CreateProduct",components:{product_form:$,navbar:S},methods:{logout:function(){var t=this;c.a.auth().signOut().then(function(){t.$router.replace("login")})}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar",[this._t("default")],2),this._v(" "),e("product_form",[this._t("default")],2)],1)},staticRenderFns:[]};var N=r("VU/8")(U,O,!1,function(t){r("FrxT")},"data-v-c289c018",null).exports,F={name:"ViewOrders",methods:{logout:function(){var t=this;g.a.auth().signOut().then(function(){t.$router.replace("login")})}},components:{navbar:S}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("navbar",[this._t("default")],2),this._v(" "),e("h1",[this._v("Orders listed")])],1)},staticRenderFns:[]};var q=r("VU/8")(F,V,!1,function(t){r("nCGT")},"data-v-e5d21eb0",null).exports,M={name:"Login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;g.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){"michaelolukaka@gmail.com"===t.email?t.$router.replace("admin"):t.$router.replace("customer")},function(t){alert("Ooops. "+t.message)})}}},L={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("h3",[t._v("Sign In")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("br"),t._v(" "),r("button",{on:{click:t.login}},[t._v("Sign In")]),t._v(" "),r("p",[t._v("No account; "),r("router-link",{attrs:{to:"/signup"}},[t._v("Create one")])],1)])},staticRenderFns:[]};var B=r("VU/8")(M,L,!1,function(t){r("p+0R")},"data-v-6bc3f216",null).exports,H={name:"Signup",data:function(){return{email:"",password:""}},methods:{signUp:function(){var t=this;g.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){t.$router.push("customer")},function(t){alert("Ooops. "+t.message)})}}},z={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"signUp"},[r("h3",[t._v("Sign Up")]),t._v(" "),r("p",[t._v("Create Account Up Here")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),r("br"),t._v(" "),r("button",{on:{click:t.signUp}},[t._v("Sign Up")]),t._v(" "),r("span",[t._v("or go back to "),r("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)])},staticRenderFns:[]};var K=r("VU/8")(H,z,!1,function(t){r("WknD")},"data-v-75dab6bf",null).exports;n.default.use(a.a);var G=new a.a({routes:[{path:"*",redirect:"/login"},{path:"/",component:B},{path:"/login",name:"Login",component:B},{path:"/signup",name:"Signup",component:K},{path:"/customer",name:"customer",component:x,meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:I,meta:{requiresAuth:!0}},{path:"/admin/create",name:"admin-create",component:N,meta:{requiresAuth:!0}},{path:"/admin/orders",name:"admin-orders",component:q,meta:{requiresAuth:!0}}]});G.beforeEach(function(t,e,r){var n=c.a.auth().currentUser,o=t.matched.some(function(t){return t.meta.requiresAuth});o&&!n?r("login"):!o&&n?r("customer"):r()});var W=G,Q=r("NYxO"),j=r("mtWM"),Y=r.n(j);n.default.use(Q.a);var J=new Q.a.Store({state:{username:"",useremail:"",userphone:"",password:"",users:[{username:"admin",useremail:"admin@admin.com",userphone:"123456789",password:"admin"}],products:[{product_name:"PLAYSTATION",product_type:"PS2",product_desc:"2ND HAND, CHIPPED",product_price:"9000",product_stock:20,product_id:1},{product_name:"GAMES",product_type:"NBA 2K19",product_desc:"SEALED",product_price:"6500",product_stock:10,product_id:2},{product_name:"GAME PADS",product_type:"PS2",product_desc:"Original",product_price:"500",product_stock:10,product_id:3}],Cart:[{item_name:"PS4",item_quantity:12,item_price:200,item_id:1},{item_name:"PS3",item_quantity:10,item_price:2e3,item_id:2}]},mutations:{ADD_USER:function(t,e){t.users.push(e)},ADD_PRODUCT:function(t,e){t.products.push(e)},ADD_CART:function(t,e){t.Cart.push(e)},DEL_PRODUCT:function(t,e){var r=t.products.indexOf(e);r>-1&&t.products.splice(r,1)},REMOVE_FROM_CART:function(t,e){var r=t.Cart.indexOf(e);r>-1&&t.Cart.splice(r,1)},INC_ITEM_CART:function(t,e){var r=t.Cart.find(function(t){return t.item_id===e}),n=t.products.find(function(t){return t.product_id===e});r.item_quantity<n.product_stock&&r.item_quantity++},DEC_ITEM_CART:function(t,e){var r=t.Cart.find(function(t){return t.item_id===e});t.products.find(function(t){return t.product_id===e});r.item_quantity>0&&r.item_quantity--},GET_PRODUCT:function(t,e){t.products.find(function(t){return t.product_id===e})},CLEAR_CART:function(t){t.Cart=[]}},actions:{AddUser:function(t,e){t.commit("ADD_USER",e)},AddProducts:function(t,e){t.commit("ADD_PRODUCT",e)},deleteProduct:function(t,e){t.commit("DEL_PRODUCT",newProduct)},AddToCart:function(t,e){t.commit("ADD_CART",e)},incrementItemQuantity:function(t,e){t.commit("INC_ITEM_CART",e)},decrementItemQuantity:function(t,e){t.commit("DEC_ITEM_CART",e)},getProduct:function(t,e){t.commit("GET_PRODUCT",e)},removeFromCart:function(t,e){t.commit("REMOVE_FROM_CART",e)},clearCart:function(t){t.commit("CLEAR_CART")}},getters:{getUsers:function(t){return t.users},getProducts:function(t){return t.products},getItemsInCart:function(t){return t.Cart},forSale:function(t){return t.forSale}}}),X=r("Rf8U"),Z=r.n(X),tt=r("zL8q"),et=r.n(tt),rt=r("1mcD"),nt=r.n(rt),ot=r("wUZ8"),it=r.n(ot);r("tvR6");n.default.use(et.a,{locale:it.a}),n.default.use(Q.a),n.default.use(nt.a),n.default.config.productionTip=!1;var at=void 0;l.auth().onAuthStateChanged(function(t){at||(at=new n.default({el:"#app",router:W,Axios:Y.a,vuexaxi:Z.a,store:J,components:{App:i},template:"<App/>"}))})},NSP1:function(t,e){},WknD:function(t,e){},aIsf:function(t,e){},gg0P:function(t,e){},kgpO:function(t,e){},nCGT:function(t,e){},"p+0R":function(t,e){},tvR6:function(t,e){},xQh0:function(t,e){},zKnz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6f2ca3de70e3a069c0b3.js.map