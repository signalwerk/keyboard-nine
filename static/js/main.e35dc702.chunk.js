(this["webpackJsonpkeyboard-nine"]=this["webpackJsonpkeyboard-nine"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),l=(n(16),n(17),n(18),function(e){return e.replace(/[ ]/g,"\xa0\u200b")});var i=function(e){var t=e.context,n=t.text.split("\n"),r=n.length;return o.a.createElement("div",{className:"Text Text--".concat(t.lastBlock?"lastBlock":"noLastBlock")},n.map((function(e,t){return t===r-1?o.a.createElement("p",{className:"Text__line",key:t},function(e){var t=e.substr(-1),n=e.substring(0,e.length-1);return o.a.createElement(a.Fragment,null,l(n),o.a.createElement("span",{className:"Text__lastChar"},l(t)),o.a.createElement("span",{className:"Text__cursor"}))}(e)):o.a.createElement("p",{className:"Text__line",key:t},l(e),"\xa0")})))},u=(n(19),n(20),n(1)),s=n(5),d=n(6),m=n(9),b=n(7),p=n(10),f=n(2),h="normal",B="cap",E="punct",k="nine",y="classic",T="r",v="l",g="0123456789.:;?!/(){}&%+-$\xa7".split(""),N="qzdpjgwbycnlustmxfoaeihrvk".split("").reduce((function(e,t,n){var a=t.toUpperCase();return Object(u.a)({},e,Object(f.a)({},"key".concat(a),{label:{normal:t,cap:a,punct:g[n]},value:{normal:t,cap:a,punct:g[n]}}))}),{}),w={block01:{label:{normal:"abcd",cap:"ABCD"},value:{normal:["a","b","c","d"],cap:["A","B","C","D"]}},block02:{label:{normal:"efghi",cap:"EFGHI"},value:{normal:["e","f","g","h","i"],cap:["E","F","G","H","I"]}},block03:{label:{normal:"jklm",cap:"JKLM"},value:{normal:["j","k","l","m"],cap:["J","K","L","M"]}},block04:{label:{normal:"nopq",cap:"NOPQ"},value:{normal:["n","o","p","q"],cap:["N","O","P","Q"]}},block05:{label:{normal:"rstuv",cap:"RSTUV"},value:{normal:["r","s","t","u","v"],cap:["R","S","T","U","V"]}},block06:{label:{normal:"wxyz",cap:"WXYZ"},value:{normal:["w","x","y","z"],cap:["W","X","Y","Z"]}},block07:{label:{normal:"\xe4\xf6\xfc_",cap:"\xc4\xd6\xdc_"},value:{normal:["\xe4","\xf6","\xfc","_"],cap:["\xc4","\xd6","\xdc","_"]}}},M=o.a.createContext(),L=M.Consumer,S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).timedCallback=null,n.state={text:"Hello world!\nPlease type ...",keyboardStyle:k,orientation:T,typeMode:h,lastBlock:null,lastBlockTypeMode:null,blockCharIndex:0},n.clearTimeout=function(){clearTimeout(n.timedCallback)},n.startKeyPress=function(e){n.clearTimeout();var t=n.state.text+N[e].value[n.state.typeMode];n.setState(Object(u.a)({},n.state,{typeMode:n.state.typeMode===B?h:n.state.typeMode,text:t,lastBlock:null}))},n.startBlockPress=function(e){n.clearTimeout();var t=0,a=n.state.typeMode,o=n.state.text;n.state.lastBlock===e&&(t=n.state.blockCharIndex+1,o=o.substring(0,o.length-1),a=n.state.lastBlockTypeMode),o+=w[e].value[a][t%w[e].value[a].length],n.setState(Object(u.a)({},n.state,{text:o,typeMode:h,lastBlockTypeMode:a,blockCharIndex:t,lastBlock:e})),n.timedCallback=setTimeout((function(){n.startBlockPress(e)}),300)},n.endBlockPress=function(e){n.clearTimeout(),n.timedCallback=setTimeout((function(){n.setState(Object(u.a)({},n.state,{lastBlock:null}))}),400)},n.startBackspace=function(){n.clearTimeout();var e=n.state.text.substring(0,n.state.text.length-1);n.setState(Object(u.a)({},n.state,{text:e,lastBlock:null})),n.timedCallback=setTimeout((function(){n.startBackspace()}),300)},n.endBackspace=function(){n.clearTimeout()},n.append=function(e){n.clearTimeout();var t=n.state.text+e;n.setState(Object(u.a)({},n.state,{text:t,lastBlock:null}))},n.setTypeMode=function(e){n.clearTimeout(),n.setState(Object(u.a)({},n.state,{typeMode:e}))},n.orientation=function(e){n.clearTimeout(),n.setState(Object(u.a)({},n.state,{orientation:e}))},n.setKeyboardStyle=function(e){n.clearTimeout(),n.setState(Object(u.a)({},n.state,{typeMode:h,keyboardStyle:e}))},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(M.Provider,{value:Object(u.a)({},this.state,{action:{startBlockPress:this.startBlockPress,endBlockPress:this.endBlockPress,startKeyPress:this.startKeyPress,startBackspace:this.startBackspace,endBackspace:this.endBackspace,append:this.append,setTypeMode:this.setTypeMode,orientation:this.orientation,setKeyboardStyle:this.setKeyboardStyle}})},this.props.children)}}]),t}(a.Component),x=n(8),j=function(){var e=Object(a.useRef)(!1);return Object(a.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),e};n(21);var O=function(e){var t=e.label,n=e.onStart,r=e.onEnd,c=e.active,l=e.width,i=e.heigh,u=e.className,s=Object(a.useState)(!1),d=Object(x.a)(s,2),m=d[0],b=d[1],p=j();return o.a.createElement("button",{className:"".concat(u?"".concat(u," "):"","Button Button--").concat(c?"active":"normal"," Button--width-").concat(l||"normal"," Button--heigh-").concat(i||"normal"," Button--clicked-").concat(m?"yes":"no"),onMouseDown:function(e){n&&n(e),b(!0)},onMouseUp:function(e){r&&r(e),setTimeout((function(){p.current&&b(!1)}),100)},onTouchStart:function(e){n&&n(e),b(!0),e.preventDefault()},onTouchEnd:function(e){r&&r(e),setTimeout((function(){p.current&&b(!1)}),100),e.preventDefault()}},t)};var _=function(e){var t=e.id,n=e.className;return o.a.createElement(L,null,(function(e){return o.a.createElement(O,{className:"".concat(n?"".concat(n," "):"","Button--block"),onStart:function(n){return e.action.startBlockPress(t)},onEnd:function(n){return e.action.endBlockPress(t)},label:w[t].label[e.typeMode],width:"1-3"})}))};var C=function(){return o.a.createElement(L,null,(function(e){return o.a.createElement("div",{className:"KeyboardNine"},o.a.createElement("div",{className:"KeyboardNine__main"},o.a.createElement(_,{className:"Button--borderTopBlack ",id:"block01"}),o.a.createElement(_,{className:"Button--borderTopBlack Button--borderLeft",id:"block02",width:"large"}),o.a.createElement(_,{className:"Button--borderTopBlack Button--borderLeft",id:"block03",width:"large"}),o.a.createElement(_,{className:"Button--borderTop",id:"block04",width:"large"}),o.a.createElement(_,{className:"Button--borderTop Button--borderLeft",id:"block05",width:"large"}),o.a.createElement(_,{className:"Button--borderTop Button--borderLeft",id:"block06",width:"large"}),e.orientation===v?o.a.createElement(a.Fragment,null,o.a.createElement(O,{className:"Button--borderTop",onStart:function(t){return e.action.startBackspace()},onEnd:function(t){return e.action.endBackspace()},label:"\u232b",width:"1-3"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append(" ")},label:"Space",width:"1-3"}),o.a.createElement(_,{className:"Button--borderTop Button--borderLeft",id:"block07",width:"large"}),o.a.createElement(O,{className:"Button--borderTop Button--negative",onEnd:function(t){return e.action.orientation(v)},label:"L",active:!0,width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append("\n")},label:"\u200e\u23ce",heigh:"med",width:"1-3"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.setTypeMode(e.typeMode===B?h:B)},label:"\u21ea",active:e.typeMode===B,width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",label:"\ud83c\udf10",width:"1-6",heigh:"med",onEnd:function(t){return e.action.setKeyboardStyle(y)}}),o.a.createElement(O,{className:"Button--negative Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.orientation(T)},label:"R",width:"1-6",heigh:"med"})):o.a.createElement(a.Fragment,null,o.a.createElement(_,{className:"Button--borderTop",id:"block07",width:"large"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append(" ")},label:"Space",width:"1-3"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onStart:function(t){return e.action.startBackspace()},onEnd:function(t){return e.action.endBackspace()},label:"\u232b",width:"1-3"}),o.a.createElement(O,{className:"Button--borderTop Button--negative",onEnd:function(t){return e.action.orientation(v)},label:"L",width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",label:"\ud83c\udf10",width:"1-6",heigh:"med",onEnd:function(t){return e.action.setKeyboardStyle(y)}}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.setTypeMode(e.typeMode===B?h:B)},label:"\u21ea",active:e.typeMode===B,width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append("\n")},label:" \u23ce",heigh:"med",width:"1-3"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft Button--negative",onEnd:function(t){return e.action.orientation(T)},label:"R",active:!0,width:"1-6",heigh:"med"}))))}))};n(22),n(23);var P=function(e){var t=e.id,n=e.className;return o.a.createElement(L,null,(function(e){return o.a.createElement(O,{className:"".concat(n?"".concat(n," "):"","Button--font-big Button--key"),onStart:function(n){return e.action.startKeyPress(t)},label:N[t].label[e.typeMode],width:"1-8",heigh:"med"})}))};var K=function(){return o.a.createElement(L,null,(function(e){return o.a.createElement("div",{className:"KeyboardClassic"},o.a.createElement("div",{className:"KeyboardClassic__main"},"QZDPJGWB".split("").map((function(e){return o.a.createElement(P,{key:"key".concat(e),className:"Button--borderTopBlack",id:"key".concat(e)})})),"YCNLUSTM".split("").map((function(e){return o.a.createElement(P,{key:"key".concat(e),className:"Button--borderTop",id:"key".concat(e)})})),"XFOAEIHR".split("").map((function(e){return o.a.createElement(P,{key:"key".concat(e),className:"Button--borderTop",id:"key".concat(e)})})),"VK".split("").map((function(e){return o.a.createElement(P,{key:"key".concat(e),className:"Button--borderTop",id:"key".concat(e)})})),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append(" ")},label:"Space",width:"9-16",heigh:"med"}),o.a.createElement(a.Fragment,null,o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onStart:function(t){return e.action.startBackspace()},onEnd:function(t){return e.action.endBackspace()},label:"\u232b",width:"3-16",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--negative",onEnd:function(t){return e.action.orientation(v)},label:"L",active:e.orientation===v,width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",label:"\ud83c\udf10",onEnd:function(t){return e.action.setKeyboardStyle(k)},width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.setTypeMode(e.typeMode===E?h:E)},label:"012?!",active:e.typeMode===E,width:"1-6",heigh:"med"}),e.orientation===T?o.a.createElement(a.Fragment,null,o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append("\n")},label:" \u200e\u23ce",heigh:"med",width:"1-6"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.setTypeMode(e.typeMode===B?h:B)},label:"\u21ea",active:e.typeMode===B,width:"1-6",heigh:"med"})):o.a.createElement(a.Fragment,null,o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.setTypeMode(e.typeMode===B?h:B)},label:"\u21ea",active:e.typeMode===B,width:"1-6",heigh:"med"}),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft",onEnd:function(t){return e.action.append("\n")},label:" \u200e\u23ce",heigh:"med",width:"1-6"})),o.a.createElement(O,{className:"Button--borderTop Button--borderLeft Button--negative",onEnd:function(t){return e.action.orientation(T)},label:"R",active:e.orientation===T,width:"1-6",heigh:"med"}))))}))};var F=function(){return o.a.createElement(S,null,o.a.createElement(L,null,(function(e){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App__text"},o.a.createElement(i,{context:e})),o.a.createElement("div",{className:"App__keyboard"},e.keyboardStyle===k?o.a.createElement(C,null):null,e.keyboardStyle===y?o.a.createElement(K,null):null))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.e35dc702.chunk.js.map