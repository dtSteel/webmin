(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("haxe",function(S,W){var E=S.indentUnit;function aa(A){return{type:A,style:"keyword"}}var w=aa("keyword a"),u=aa("keyword b"),t=aa("keyword c");var ab=aa("operator"),c={type:"atom",style:"atom"},J={type:"attribute",style:"attribute"};var al=aa("typedef");var g={"if":w,"while":w,"else":u,"do":u,"try":u,"return":t,"break":t,"continue":t,"new":t,"throw":t,"var":aa("var"),inline:J,"static":J,using:aa("import"),"public":J,"private":J,cast:aa("cast"),"import":aa("import"),macro:aa("macro"),"function":aa("function"),"catch":aa("catch"),untyped:aa("untyped"),callback:aa("cb"),"for":aa("for"),"switch":aa("switch"),"case":aa("case"),"default":aa("default"),"in":ab,never:aa("property_access"),trace:aa("trace"),"class":al,"abstract":al,"enum":al,"interface":al,typedef:al,"extends":al,"implements":al,dynamic:al,"true":c,"false":c,"null":c};var X=/[+\-*&%=<>!?|]/;function ak(C,B,A){B.tokenize=A;return A(C,B)}function ae(am,A){var C=false,B;while((B=am.next())!=null){if(B==A&&!C){return true}C=!C&&B=="\\"}}var al,p;function M(C,B,A){al=C;p=A;return B}function I(an,C){var A=an.next();if(A=='"'||A=="'"){return ak(an,C,j(A))}else{if(/[\[\]{}\(\),;\:\.]/.test(A)){return M(A)}else{if(A=="0"&&an.eat(/x/i)){an.eatWhile(/[\da-f]/i);return M("number","number")}else{if(/\d/.test(A)||A=="-"&&an.eat(/\d/)){an.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/);return M("number","number")}else{if(C.reAllowed&&(A=="~"&&an.eat(/\//))){ae(an,"/");an.eatWhile(/[gimsu]/);return M("regexp","string-2")}else{if(A=="/"){if(an.eat("*")){return ak(an,C,V)}else{if(an.eat("/")){an.skipToEnd();return M("comment","comment")}else{an.eatWhile(X);return M("operator",null,an.current())}}}else{if(A=="#"){an.skipToEnd();return M("conditional","meta")}else{if(A=="@"){an.eat(/:/);an.eatWhile(/[\w_]/);return M("metadata","meta")}else{if(X.test(A)){an.eatWhile(X);return M("operator",null,an.current())}else{var am;if(/[A-Z]/.test(A)){an.eatWhile(/[\w_<>]/);am=an.current();return M("type","variable-3",am)}else{an.eatWhile(/[\w_]/);var am=an.current(),B=g.propertyIsEnumerable(am)&&g[am];return(B&&C.kwAllowed)?M(B.type,B.style,am):M("variable","variable",am)}}}}}}}}}}}function j(A){return function(C,B){if(ae(C,A)){B.tokenize=I}return M("string","string")}}function V(am,C){var A=false,B;while(B=am.next()){if(B=="/"&&A){C.tokenize=I;break}A=(B=="*")}return M("comment","comment")}var l={atom:true,number:true,variable:true,string:true,regexp:true};function aj(ao,B,A,an,C,am){this.indented=ao;this.column=B;this.type=A;this.prev=C;this.info=am;if(an!=null){this.align=an}}function G(C,B){for(var A=C.localVars;A;A=A.next){if(A.name==B){return true}}}function z(an,B,A,am,ao){var ap=an.cc;D.state=an;D.stream=ao;D.marked=null,D.cc=ap;if(!an.lexical.hasOwnProperty("align")){an.lexical.align=true}while(true){var C=ap.length?ap.pop():H;if(C(A,am)){while(ap.length&&ap[ap.length-1].lex){ap.pop()()}if(D.marked){return D.marked}if(A=="variable"&&G(an,am)){return"variable-2"}if(A=="variable"&&r(an,am)){return"variable-3"}return B}}}function r(am,C){if(/[a-z]/.test(C.charAt(0))){return false}var A=am.importedtypes.length;for(var B=0;B<A;B++){if(am.importedtypes[B]==C){return true}}}function ad(A){var C=D.state;for(var B=C.importedtypes;B;B=B.next){if(B.name==A){return}}C.importedtypes={name:A,next:C.importedtypes}}var D={state:null,column:null,marked:null,cc:null};function b(){for(var A=arguments.length-1;A>=0;A--){D.cc.push(arguments[A])}}function Q(){b.apply(null,arguments);return true}function x(B,C){for(var A=C;A;A=A.next){if(A.name==B){return true}}return false}function m(A){var B=D.state;if(B.context){D.marked="def";if(x(A,B.localVars)){return}B.localVars={name:A,next:B.localVars}}else{if(B.globalVars){if(x(A,B.globalVars)){return}B.globalVars={name:A,next:B.globalVars}}}}var O={name:"this",next:null};function v(){if(!D.state.context){D.state.localVars=O}D.state.context={prev:D.state.context,vars:D.state.localVars}}function s(){D.state.localVars=D.state.context.vars;D.state.context=D.state.context.prev}s.lex=true;function k(B,C){var A=function(){var am=D.state;am.lexical=new aj(am.indented,D.stream.column(),B,null,am.lexical,C)};A.lex=true;return A}function P(){var A=D.state;if(A.lexical.prev){if(A.lexical.type==")"){A.indented=A.lexical.indented}A.lexical=A.lexical.prev}}P.lex=true;function f(A){function B(C){if(C==A){return Q()}else{if(A==";"){return b()}else{return Q(B)}}}return B}function H(A){if(A=="@"){return Q(ac)}if(A=="var"){return Q(k("vardef"),T,f(";"),P)}if(A=="keyword a"){return Q(k("form"),F,H,P)}if(A=="keyword b"){return Q(k("form"),H,P)}if(A=="{"){return Q(k("}"),v,n,P,s)}if(A==";"){return Q()}if(A=="attribute"){return Q(e)}if(A=="function"){return Q(i)}if(A=="for"){return Q(k("form"),f("("),k(")"),h,f(")"),P,H,P)}if(A=="variable"){return Q(k("stat"),L)}if(A=="switch"){return Q(k("form"),F,k("}","switch"),f("{"),n,P,P)}if(A=="case"){return Q(F,f(":"))}if(A=="default"){return Q(f(":"))}if(A=="catch"){return Q(k("form"),v,f("("),q,f(")"),H,P,s)}if(A=="import"){return Q(N,f(";"))}if(A=="typedef"){return Q(ai)}return b(k("stat"),F,f(";"),P)}function F(A){if(l.hasOwnProperty(A)){return Q(U)}if(A=="type"){return Q(U)}if(A=="function"){return Q(i)}if(A=="keyword c"){return Q(K)}if(A=="("){return Q(k(")"),K,f(")"),P,U)}if(A=="operator"){return Q(F)}if(A=="["){return Q(k("]"),Y(K,"]"),P,U)}if(A=="{"){return Q(k("}"),Y(o,"}"),P,U)}return Q()}function K(A){if(A.match(/[;\}\)\],]/)){return b()}return b(F)}function U(A,B){if(A=="operator"&&/\+\+|--/.test(B)){return Q(U)}if(A=="operator"||A==":"){return Q(F)}if(A==";"){return}if(A=="("){return Q(k(")"),Y(F,")"),P,U)}if(A=="."){return Q(Z,U)}if(A=="["){return Q(k("]"),F,f("]"),P,U)}}function e(A){if(A=="attribute"){return Q(e)}if(A=="function"){return Q(i)}if(A=="var"){return Q(T)}}function ac(A){if(A==":"){return Q(ac)}if(A=="variable"){return Q(ac)}if(A=="("){return Q(k(")"),Y(af,")"),P,H)}}function af(A){if(A=="variable"){return Q()}}function N(A,B){if(A=="variable"&&/[A-Z]/.test(B.charAt(0))){ad(B);return Q()}else{if(A=="variable"||A=="property"||A=="."||B=="*"){return Q(N)}}}function ai(A,B){if(A=="variable"&&/[A-Z]/.test(B.charAt(0))){ad(B);return Q()}else{if(A=="type"&&/[A-Z]/.test(B.charAt(0))){return Q()}}}function L(A){if(A==":"){return Q(P,H)}return b(U,f(";"),P)}function Z(A){if(A=="variable"){D.marked="property";return Q()}}function o(A){if(A=="variable"){D.marked="property"}if(l.hasOwnProperty(A)){return Q(f(":"),F)}}function Y(C,A){function B(am){if(am==","){return Q(C,B)}if(am==A){return Q()}return Q(f(A))}return function(am){if(am==A){return Q()}else{return b(C,B)}}}function n(A){if(A=="}"){return Q()}return b(H,n)}function T(A,B){if(A=="variable"){m(B);return Q(y,R)}return Q()}function R(A,B){if(B=="="){return Q(F,R)}if(A==","){return Q(T)}}function h(A,B){if(A=="variable"){m(B);return Q(d,F)}else{return b()}}function d(A,B){if(B=="in"){return Q()}}function i(A,B){if(A=="variable"||A=="type"){m(B);return Q(i)}if(B=="new"){return Q(i)}if(A=="("){return Q(k(")"),v,Y(q,")"),P,y,H,s)}}function y(A){if(A==":"){return Q(ah)}}function ah(A){if(A=="type"){return Q()}if(A=="variable"){return Q()}if(A=="{"){return Q(k("}"),Y(ag,"}"),P)}}function ag(A){if(A=="variable"){return Q(y)}}function q(A,B){if(A=="variable"){m(B);return Q(y)}}return{startState:function(C){var A=["Int","Float","String","Void","Std","Bool","Dynamic","Array"];var B={tokenize:I,reAllowed:true,kwAllowed:true,cc:[],lexical:new aj((C||0)-E,0,"block",false),localVars:W.localVars,importedtypes:A,context:W.localVars&&{vars:W.localVars},indented:0};if(W.globalVars&&typeof W.globalVars=="object"){B.globalVars=W.globalVars}return B},token:function(C,B){if(C.sol()){if(!B.lexical.hasOwnProperty("align")){B.lexical.align=false}B.indented=C.indentation()}if(C.eatSpace()){return null}var A=B.tokenize(C,B);if(al=="comment"){return A}B.reAllowed=!!(al=="operator"||al=="keyword c"||al.match(/^[\[{}\(,;:]$/));B.kwAllowed=al!=".";return z(B,A,al,p,C)},indent:function(ao,A){if(ao.tokenize!=I){return 0}var an=A&&A.charAt(0),C=ao.lexical;if(C.type=="stat"&&an=="}"){C=C.prev}var am=C.type,B=an==am;if(am=="vardef"){return C.indented+4}else{if(am=="form"&&an=="{"){return C.indented}else{if(am=="stat"||am=="form"){return C.indented+E}else{if(C.info=="switch"&&!B){return C.indented+(/^(?:case|default)\b/.test(A)?E:2*E)}else{if(C.align){return C.column+(B?0:1)}else{return C.indented+(B?0:E)}}}}}},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});a.defineMIME("text/x-haxe","haxe");a.defineMode("hxml",function(){return{startState:function(){return{define:false,inString:false}},token:function(f,e){var d=f.peek();var c=f.sol();if(d=="#"){f.skipToEnd();return"comment"}if(c&&d=="-"){var b="variable-2";f.eat(/-/);if(f.peek()=="-"){f.eat(/-/);b="keyword a"}if(f.peek()=="D"){f.eat(/[D]/);b="keyword c";e.define=true}f.eatWhile(/[A-Z]/i);return b}var d=f.peek();if(e.inString==false&&d=="'"){e.inString=true;d=f.next()}if(e.inString==true){if(f.skipTo("'")){}else{f.skipToEnd()}if(f.peek()=="'"){f.next();e.inString=false}return"string"}f.next();return null},lineComment:"#"}});a.defineMIME("text/x-hxml","hxml")});