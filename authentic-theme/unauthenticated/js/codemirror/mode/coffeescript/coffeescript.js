(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("coffeescript",function(k,u){var b="error";function o(y){return new RegExp("^(("+y.join(")|(")+"))\\b")}var q=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;var g=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/;var h=/^[_A-Za-z$][_A-Za-z$0-9]*/;var t=/^@[_A-Za-z$][_A-Za-z$0-9]*/;var d=o(["and","or","not","is","isnt","in","instanceof","typeof"]);var c=["for","while","loop","if","unless","else","switch","try","catch","finally","class"];var r=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"];var j=o(c.concat(r));c=o(c);var l=/^('{3}|\"{3}|['\"])/;var i=/^(\/{3}|\/)/;var m=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"];var w=o(m);function x(E,D){if(E.sol()){if(D.scope.align===null){D.scope.align=false}var z=D.scope.offset;if(E.eatSpace()){var B=E.indentation();if(B>z&&D.scope.type=="coffee"){return"indent"}else{if(B<z){return"dedent"}}return null}else{if(z>0){e(E,D)}}}if(E.eatSpace()){return null}var C=E.peek();if(E.match("####")){E.skipToEnd();return"comment"}if(E.match("###")){D.tokenize=p;return D.tokenize(E,D)}if(C==="#"){E.skipToEnd();return"comment"}if(E.match(/^-?[0-9\.]/,false)){var A=false;if(E.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)){A=true}if(E.match(/^-?\d+\.\d*/)){A=true}if(E.match(/^-?\.\d+/)){A=true}if(A){if(E.peek()=="."){E.backUp(1)}return"number"}var y=false;if(E.match(/^-?0x[0-9a-f]+/i)){y=true}if(E.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)){y=true}if(E.match(/^-?0(?![\dx])/i)){y=true}if(y){return"number"}}if(E.match(l)){D.tokenize=s(E.current(),false,"string");return D.tokenize(E,D)}if(E.match(i)){if(E.current()!="/"||E.match(/^.*\//,false)){D.tokenize=s(E.current(),true,"string-2");return D.tokenize(E,D)}else{E.backUp(1)}}if(E.match(q)||E.match(d)){return"operator"}if(E.match(g)){return"punctuation"}if(E.match(w)){return"atom"}if(E.match(t)||D.prop&&E.match(h)){return"property"}if(E.match(j)){return"keyword"}if(E.match(h)){return"variable"}E.next();return b}function s(y,z,A){return function(C,B){while(!C.eol()){C.eatWhile(/[^'"\/\\]/);if(C.eat("\\")){C.next();if(z&&C.eol()){return A}}else{if(C.match(y)){B.tokenize=x;return A}else{C.eat(/['"\/]/)}}}if(z){if(u.singleLineStringErrors){A=b}else{B.tokenize=x}}return A}}function p(z,y){while(!z.eol()){z.eatWhile(/[^#]/);if(z.match("###")){y.tokenize=x;break}z.eatWhile("#")}return"comment"}function n(D,B,A){A=A||"coffee";var C=0,E=false,y=null;for(var z=B.scope;z;z=z.prev){if(z.type==="coffee"||z.type=="}"){C=z.offset+k.indentUnit;break}}if(A!=="coffee"){E=null;y=D.column()+D.current().length}else{if(B.scope.align){B.scope.align=false}}B.scope={offset:C,type:A,prev:B.scope,align:E,alignOffset:y}}function e(C,B){if(!B.scope.prev){return}if(B.scope.type==="coffee"){var z=C.indentation();var y=false;for(var A=B.scope;A;A=A.prev){if(z===A.offset){y=true;break}}if(!y){return true}while(B.scope.prev&&B.scope.offset!==z){B.scope=B.scope.prev}return false}else{B.scope=B.scope.prev;return false}}function v(C,A){var z=A.tokenize(C,A);var B=C.current();if(B==="return"){A.dedent=true}if(((B==="->"||B==="=>")&&C.eol())||z==="indent"){n(C,A)}var y="[({".indexOf(B);if(y!==-1){n(C,A,"])}".slice(y,y+1))}if(c.exec(B)){n(C,A)}if(B=="then"){e(C,A)}if(z==="dedent"){if(e(C,A)){return b}}y="])}".indexOf(B);if(y!==-1){while(A.scope.type=="coffee"&&A.scope.prev){A.scope=A.scope.prev}if(A.scope.type==B){A.scope=A.scope.prev}}if(A.dedent&&C.eol()){if(A.scope.type=="coffee"&&A.scope.prev){A.scope=A.scope.prev}A.dedent=false}return z}var f={startState:function(y){return{tokenize:x,scope:{offset:y||0,type:"coffee",prev:null,align:false},prop:false,dedent:0}},token:function(B,A){var z=A.scope.align===null&&A.scope;if(z&&B.sol()){z.align=false}var y=v(B,A);if(y&&y!="comment"){if(z){z.align=true}A.prop=y=="punctuation"&&B.current()=="."}return y},indent:function(z,B){if(z.tokenize!=x){return 0}var y=z.scope;var C=B&&"])}".indexOf(B.charAt(0))>-1;if(C){while(y.type=="coffee"&&y.prev){y=y.prev}}var A=C&&y.type===B.charAt(0);if(y.align){return y.alignOffset-(A?1:0)}else{return(A?y.prev:y).offset}},lineComment:"#",fold:"indent"};return f});a.defineMIME("text/x-coffeescript","coffeescript");a.defineMIME("text/coffeescript","coffeescript")});