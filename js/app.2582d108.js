(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-notes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},7068:function(t,e,n){},"85ec":function(t,e,n){},"8b6e":function(t,e,n){},9741:function(t,e,n){},"9fa1":function(t,e,n){"use strict";n("c8eb")},b8bb:function(t,e,n){"use strict";n("8b6e")},bb39:function(t,e,n){"use strict";n("7068")},c8eb:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",[t.loading?n("Spinner"):n("div",{staticClass:"content"},[n("Sidebar"),n("router-view")],1)],1)],1)},i=[],a=n("1da1"),s=n("d4ec"),u=n("bee2"),c=n("262e"),l=n("2caf"),p=(n("96cf"),n("7db0"),n("d3b7"),n("25f0"),n("9ab4")),d=n("1b40"),f=n("4bb5"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("h1",{staticClass:"title"},[t._v("Мои заметки")])]),n("button",{staticClass:"add-note-btn",on:{click:function(e){return t.setIsPopupOpened(!0)}}},[t._v(" добавить заметку ")])],1),t.isPopupOpened?n("div",{staticClass:"popup",on:{click:function(e){return t.setIsPopupOpened(!1)}}}):t._e(),t.isPopupOpened?n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.addNewNote.apply(null,arguments)}}},[n("label",{staticClass:"label",attrs:{for:"add-note-title"}},[n("h3",[t._v("Заголовок заметки")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newNoteTitle,expression:"newNoteTitle"}],staticClass:"add-note-title",attrs:{id:"add-note-title",name:"add-note-title",required:"",minlength:"1",type:"text"},domProps:{value:t.newNoteTitle},on:{input:function(e){e.target.composing||(t.newNoteTitle=e.target.value)}}}),t.invaligNewNoteTitle?n("span",{staticClass:"error-msg"},[t._v(" Введите заголовок новой заметки ")]):t._e()]),n("label",{staticClass:"label",attrs:{for:"add-note-text"}},[n("h3",[t._v("Текст заметки")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNoteText,expression:"newNoteText"}],staticClass:"add-note-text",attrs:{id:"add-note-text",name:"add-note-text",required:"",minlength:"1"},domProps:{value:t.newNoteText},on:{input:function(e){e.target.composing||(t.newNoteText=e.target.value)}}}),t.invaligNewNoteText?n("span",{staticClass:"error-msg"},[t._v(" Введите текст новой заметки ")]):t._e()]),n("button",{staticClass:"add-note-btn",attrs:{type:"submit",disabled:t.formIsInvalid||t.loading}},[t._v(" "+t._s(t.loading?"Создаём...":"Создать новую заметку")+" ")])]):t._e()])},h=[],v=function(t){Object(c["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.isPopupOpened=!1,t.newNoteText="",t.newNoteTitle="",t.invaligNewNoteText=!0,t.invaligNewNoteTitle=!0,t.loading=!1,t}return Object(u["a"])(n,[{key:"setIsPopupOpened",value:function(t){this.isPopupOpened=t}},{key:"addNewNote",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.addNote({id:+new Date,title:this.newNoteTitle,text:this.newNoteText});case 3:this.newNoteText="",this.newNoteTitle="",this.loading=!1,this.setIsPopupOpened(!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"formIsInvalid",get:function(){return this.invaligNewNoteTitle||this.invaligNewNoteText}},{key:"onChangeNewNoteText",value:function(t){this.invaligNewNoteText=0===t.length}},{key:"onChangeNewNoteTitle",value:function(t){this.invaligNewNoteTitle=0===t.length}}]),n}(d["b"]);Object(p["a"])([Object(f["a"])("addNote")],v.prototype,"addNote",void 0),Object(p["a"])([Object(d["c"])("newNoteText")],v.prototype,"onChangeNewNoteText",null),Object(p["a"])([Object(d["c"])("newNoteTitle")],v.prototype,"onChangeNewNoteTitle",null),v=Object(p["a"])([d["a"]],v);var N=v,m=N,O=(n("9fa1"),n("2877")),g=Object(O["a"])(m,b,h,!1,null,"4d005c91",null),j=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t.notes&&t.currentNote?n("ul",{staticClass:"list"},t._l(t.notes,(function(e){return n("li",{key:e.id,staticClass:"note",class:{"note-is-active":e.id===t.currentNote.id},on:{click:function(n){return t.handleClick(e)}}},[n("p",[t._v(t._s(e.title))]),n("button",{staticClass:"remove-btn",attrs:{disabled:e.id===t.noteIdThatRemoving},on:{click:function(n){return n.stopPropagation(),t.handleRemoveBtnClick(e.id)}}},[t._v(" "+t._s(e.id===t.noteIdThatRemoving?"удаляем...":"удалить")+" ")])])})),0):t._e()])},C=[],x=function(t){Object(c["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.noteIdThatRemoving=NaN,t}return Object(u["a"])(n,[{key:"handleClick",value:function(t){this.setCurrentNote(t),this.goToTheNoteContent(t.id)}},{key:"handleRemoveBtnClick",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.noteIdThatRemoving=e,t.next=3,this.removeNote(e);case 3:this.noteIdThatRemoving=NaN,this.currentNote.id===e&&(this.$router.push("/"),this.setCurrentNote({id:NaN,title:"",text:""}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"goToTheNoteContent",value:function(t){this.$router.push({path:"/notes",name:"NoteContent",params:{noteId:t.toString()}})}}]),n}(d["b"]);Object(p["a"])([f["b"]],x.prototype,"notes",void 0),Object(p["a"])([f["b"]],x.prototype,"currentNote",void 0),Object(p["a"])([Object(f["a"])("setCurrentNote")],x.prototype,"setCurrentNote",void 0),Object(p["a"])([Object(f["a"])("removeNote")],x.prototype,"removeNote",void 0),x=Object(p["a"])([d["a"]],x);var T,y=x,_=y,E=(n("f203"),Object(O["a"])(_,w,C,!1,null,null,null)),k=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"})},P=[],S=Object(d["a"])(T=function(t){Object(c["a"])(n,t);var e=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(u["a"])(n)}(d["b"]))||T,I=S,D=(n("b8bb"),Object(O["a"])(I,R,P,!1,null,"50128a9d",null)),M=D.exports,$=function(t){Object(c["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.loading=!1,t}return Object(u["a"])(n,[{key:"created",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.getNotes();case 3:this.$route.params.noteId&&this.setCurrentNote(this.notes.find((function(t){return t.id.toString()===e.$route.params.noteId}))),this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(d["b"]);Object(p["a"])([Object(f["a"])("getNotes")],$.prototype,"getNotes",void 0),Object(p["a"])([Object(f["a"])("setCurrentNote")],$.prototype,"setCurrentNote",void 0),Object(p["a"])([Object(f["b"])("notes")],$.prototype,"notes",void 0),$=Object(p["a"])([Object(d["a"])({components:{Header:j,Sidebar:k,Spinner:M}})],$);var U=$,A=U,q=(n("034f"),Object(O["a"])(A,o,i,!1,null,null,null)),J=q.exports,V=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentNote?n("div",{staticClass:"note-content"},[t.isEditMode?n("form",{staticClass:"edit-form",on:{submit:function(e){return e.preventDefault(),t.updateCurrentNote.apply(null,arguments)}}},[n("div",{staticClass:"btns"},[n("button",{staticClass:"save-note-btn",attrs:{disabled:0===t.innerCurrentNote.title.length||0===t.innerCurrentNote.text.length||t.loading,type:"submit",name:"save-note-btn"}},[t._v(" "+t._s(t.loading?"Сохраняем...":"Сохранить")+" ")]),n("button",{staticClass:"cancel-btn",on:{click:function(e){return t.toggleEditMode(!1)}}},[t._v(" отмена ")])]),n("label",{staticClass:"note-title-label",attrs:{for:"note-title-input"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.innerCurrentNote.title,expression:"innerCurrentNote.title"}],staticClass:"note-title-input",attrs:{id:"note-title-input",name:"note-title-input",type:"text",required:"",minlength:"1"},domProps:{value:t.innerCurrentNote.title},on:{input:function(e){e.target.composing||t.$set(t.innerCurrentNote,"title",e.target.value)}}}),0===t.innerCurrentNote.title.length?n("span",{staticClass:"error-msg"},[t._v("Введите заголовок заметки")]):t._e()]),n("label",{staticClass:"note-text-label",attrs:{for:"note-text-textarea"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.innerCurrentNote.text,expression:"innerCurrentNote.text"}],staticClass:"note-text-textarea",attrs:{id:"note-text-textarea",name:"note-text-textarea",required:"",minlength:"1"},domProps:{value:t.innerCurrentNote.text},on:{input:function(e){e.target.composing||t.$set(t.innerCurrentNote,"text",e.target.value)}}}),0===t.innerCurrentNote.text.length?n("span",{staticClass:"error-msg"},[t._v("Введите текст заметки")]):t._e()])]):n("div",[n("button",{staticClass:"edit-note-btn",attrs:{name:"edit-note-btn"},on:{click:function(e){return t.toggleEditMode(!0)}}},[t._v(" редактировать заметку ")]),n("h2",{staticClass:"note-title"},[t._v(t._s(t.currentNote.title))]),n("p",{staticClass:"note-text"},[t._v(t._s(t.currentNote.text))])])]):t._e()},B=[],H=n("5530"),W=(n("b0c0"),function(t){Object(c["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.isEditMode=!1,t.innerCurrentNote={id:NaN,title:"",text:""},t.loading=!1,t}return Object(u["a"])(n,[{key:"created",value:function(){this.innerCurrentNote=Object(H["a"])({},this.currentNote)}},{key:"isIgnoredElementOnWindowClick",value:function(t){return"save-note-btn"===t||"note-title-input"===t||"note-text-textarea"===t||"edit-note-btn"===t}},{key:"toggleEditMode",value:function(t){var e=this;if(this.isEditMode=t,!0===t){var n=function t(n){e.isIgnoredElementOnWindowClick(n.target.name)||(e.toggleEditMode(!1),window.removeEventListener("click",t))};window.addEventListener("click",n)}else this.innerCurrentNote=Object(H["a"])({},this.currentNote)}},{key:"updateCurrentNote",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.updateNote(Object(H["a"])(Object(H["a"])({},this.currentNote),{},{text:this.innerCurrentNote.text,title:this.innerCurrentNote.title}));case 3:this.loading=!1,this.setCurrentNote(Object(H["a"])(Object(H["a"])({},this.currentNote),{},{text:this.innerCurrentNote.text,title:this.innerCurrentNote.title})),this.toggleEditMode(!1);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"setInnerCurrent",value:function(){this.innerCurrentNote=Object(H["a"])({},this.currentNote)}}]),n}(d["b"]));Object(p["a"])([Object(f["b"])("currentNote")],W.prototype,"currentNote",void 0),Object(p["a"])([Object(f["a"])("updateNote")],W.prototype,"updateNote",void 0),Object(p["a"])([Object(f["a"])("setCurrentNote")],W.prototype,"setCurrentNote",void 0),Object(p["a"])([Object(d["c"])("currentNote")],W.prototype,"setInnerCurrent",null),W=Object(p["a"])([d["a"]],W);var z=W,F=z,G=(n("bb39"),Object(O["a"])(F,L,B,!1,null,"37585cab",null)),K=G.exports;r["a"].use(V["a"]);var Q,X=[{path:"/notes/:noteId",name:"NoteContent",component:K}],Y=new V["a"]({mode:"history",base:"/vue-notes/",routes:X}),Z=Y,tt=n("2f62");(function(t){t["SET_NOTES"]="SET_NOTES",t["ADD_NOTE"]="ADD_NOTE",t["SET_CURRENT_NOTE"]="SET_CURRENT_NOTE",t["REMOVE_NOTE"]="REMOVE_NOTE",t["UPDATE_NOTE"]="UPDATE_NOTE"})(Q||(Q={}));n("e9c4");var et,nt="https://polar-dusk-81472.herokuapp.com/notes",rt=function(t){return t.ok?t.json():Promise.reject(t)},ot=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(nt).then(rt).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),it=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(nt,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(rt).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),at=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(nt,"/").concat(e),{method:"DELETE"}).then(rt).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),st=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.abrupt("return",fetch("".concat(nt,"/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(rt).then((function(t){return t})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ut={getNotes:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,ot();case 3:r=e.sent,n(Q.SET_NOTES,r);case 5:case"end":return e.stop()}}),e)})))()},addNote:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,it(e);case 3:o=n.sent,r(Q.ADD_NOTE,o);case 5:case"end":return n.stop()}}),n)})))()},removeNote:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,at(e);case 3:o=n.sent,r(Q.REMOVE_NOTE,o.id);case 5:case"end":return n.stop()}}),n)})))()},updateNote:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,st(e);case 3:o=n.sent,r(Q.UPDATE_NOTE,o);case 5:case"end":return n.stop()}}),n)})))()},setCurrentNote:function(t,e){var n=t.commit;n(Q.SET_CURRENT_NOTE,e)}},ct=n("ade3"),lt=(n("4de4"),et={},Object(ct["a"])(et,Q.SET_NOTES,(function(t,e){t.notes=e})),Object(ct["a"])(et,Q.ADD_NOTE,(function(t,e){t.notes.push(e)})),Object(ct["a"])(et,Q.SET_CURRENT_NOTE,(function(t,e){t.currentNote=e})),Object(ct["a"])(et,Q.REMOVE_NOTE,(function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e}))})),Object(ct["a"])(et,Q.UPDATE_NOTE,(function(t,e){t.notes=e})),et),pt={notes:[],currentNote:{id:NaN,title:"",text:""}};r["a"].use(tt["a"]);var dt=new tt["a"].Store({state:pt,mutations:lt,actions:ut,modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:Z,store:dt,render:function(t){return t(J)}}).$mount("#app")},f203:function(t,e,n){"use strict";n("9741")}});
//# sourceMappingURL=app.2582d108.js.map