webpackJsonp([0xf7ba4fa2ba4c],{338:function(e,t,n){var r,i,s;!function(n,a){i=[],r=a,s="function"==typeof r?r.apply(t,i):r,!(void 0!==s&&(e.exports=s))}(this,function(){"use strict";function e(e,t){t=t||{};var n=t.dynamicTyping||!1;if(m(n)&&(t.dynamicTypingFunction=n,n={}),t.dynamicTyping=n,t.worker&&R.WORKERS_SUPPORTED){var o=f();return o.userStep=t.step,o.userChunk=t.chunk,o.userComplete=t.complete,o.userError=t.error,t.step=m(t.step),t.chunk=m(t.chunk),t.complete=m(t.complete),t.error=m(t.error),delete t.worker,void o.postMessage({input:e,config:t,workerId:o.id})}var u=null;return"string"==typeof e?u=t.download?new r(t):new s(t):e.readable===!0&&m(e.read)&&m(e.on)?u=new a(t):(k.File&&e instanceof File||e instanceof Object)&&(u=new i(t)),u.stream(e)}function t(e,t){function n(){"object"==typeof t&&("string"==typeof t.delimiter&&1===t.delimiter.length&&R.BAD_DELIMITERS.indexOf(t.delimiter)===-1&&(h=t.delimiter),("boolean"==typeof t.quotes||t.quotes instanceof Array)&&(o=t.quotes),"string"==typeof t.newline&&(f=t.newline),"string"==typeof t.quoteChar&&(l=t.quoteChar),"boolean"==typeof t.header&&(u=t.header))}function r(e){if("object"!=typeof e)return[];var t=[];for(var n in e)t.push(n);return t}function i(e,t){var n="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var r=e instanceof Array&&e.length>0,i=!(t[0]instanceof Array);if(r&&u){for(var a=0;a<e.length;a++)a>0&&(n+=h),n+=s(e[a],a);t.length>0&&(n+=f)}for(var o=0;o<t.length;o++){for(var l=r?e.length:t[o].length,d=0;d<l;d++){d>0&&(n+=h);var c=r&&i?e[d]:d;n+=s(t[o][c],d)}o<t.length-1&&(n+=f)}return n}function s(e,t){if("undefined"==typeof e||null===e)return"";e=e.toString().replace(d,l+l);var n="boolean"==typeof o&&o||o instanceof Array&&o[t]||a(e,R.BAD_DELIMITERS)||e.indexOf(h)>-1||" "===e.charAt(0)||" "===e.charAt(e.length-1);return n?l+e+l:e}function a(e,t){for(var n=0;n<t.length;n++)if(e.indexOf(t[n])>-1)return!0;return!1}var o=!1,u=!0,h=",",f="\r\n",l='"';n();var d=new RegExp(l,"g");if("string"==typeof e&&(e=JSON.parse(e)),e instanceof Array){if(!e.length||e[0]instanceof Array)return i(null,e);if("object"==typeof e[0])return i(r(e[0]),e)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e.data instanceof Array&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=e.data[0]instanceof Array?e.fields:r(e.data[0])),e.data[0]instanceof Array||"object"==typeof e.data[0]||(e.data=[e.data])),i(e.fields||[],e.data||[]);throw"exception: Unable to serialize unrecognized input"}function n(e){function t(e){var t=g(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new o(t),this._handle.streamer=this,this._config=t}this._handle=null,this._paused=!1,this._finished=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},t.call(this,e),this.parseChunk=function(e){if(this.isFirstChunk&&m(this._config.beforeFirstChunk)){var t=this._config.beforeFirstChunk(e);void 0!==t&&(e=t)}this.isFirstChunk=!1;var n=this._partialLine+e;this._partialLine="";var r=this._handle.parse(n,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var i=r.meta.cursor;this._finished||(this._partialLine=n.substring(i-this._baseIndex),this._baseIndex=i),r&&r.data&&(this._rowCount+=r.data.length);var s=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(b)k.postMessage({results:r,workerId:R.WORKER_ID,finished:s});else if(m(this._config.chunk)){if(this._config.chunk(r,this._handle),this._paused)return;r=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(r.data),this._completeResults.errors=this._completeResults.errors.concat(r.errors),this._completeResults.meta=r.meta),!s||!m(this._config.complete)||r&&r.meta.aborted||this._config.complete(this._completeResults,this._input),s||r&&r.meta.paused||this._nextChunk(),r}},this._sendError=function(e){m(this._config.error)?this._config.error(e):b&&this._config.error&&k.postMessage({workerId:R.WORKER_ID,error:e,finished:!1})}}function r(e){function t(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substr(t.lastIndexOf("/")+1))}e=e||{},e.chunkSize||(e.chunkSize=R.RemoteChunkSize),n.call(this,e);var r;y?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)return void this._chunkLoaded();if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),y||(r.onload=_(this._chunkLoaded,this),r.onerror=_(this._chunkError,this)),r.open("GET",this._input,!y),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+n),r.setRequestHeader("If-None-Match","webkit-no-cache")}try{r.send()}catch(e){this._chunkError(e.message)}y&&0===r.status?this._chunkError():this._start+=this._config.chunkSize},this._chunkLoaded=function(){if(4==r.readyState){if(r.status<200||r.status>=400)return void this._chunkError();this._finished=!this._config.chunkSize||this._start>t(r),this.parseChunk(r.responseText)}},this._chunkError=function(e){var t=r.statusText||e;this._sendError(t)}}function i(e){e=e||{},e.chunkSize||(e.chunkSize=R.LocalChunkSize),n.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?(t=new FileReader,t.onload=_(this._chunkLoaded,this),t.onerror=_(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error.message)}}function s(e){e=e||{},n.call(this,e);var t,r;this.stream=function(e){return t=e,r=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?r.substr(0,e):r;return r=e?r.substr(e):"",this._finished=!r,this.parseChunk(t)}}}function a(e){e=e||{},n.call(this,e);var t=[],r=!0;this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._nextChunk=function(){t.length?this.parseChunk(t.shift()):r=!0},this._streamData=_(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=_(function(e){this._streamCleanUp(),this._sendError(e.message)},this),this._streamEnd=_(function(){this._streamCleanUp(),this._finished=!0,this._streamData("")},this),this._streamCleanUp=_(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function o(e){function t(){if(w&&p&&(l("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+R.DefaultDelimiter+"'"),p=!1),e.skipEmptyLines)for(var t=0;t<w.data.length;t++)1===w.data[t].length&&""===w.data[t][0]&&w.data.splice(t--,1);return n()&&r(),a()}function n(){return e.header&&0===C.length}function r(){if(w){for(var e=0;n()&&e<w.data.length;e++)for(var t=0;t<w.data[e].length;t++)C.push(w.data[e][t]);w.data.splice(0,1)}}function i(t){return e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),(e.dynamicTyping[t]||e.dynamicTyping)===!0}function s(e,t){return i(e)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&f(t):t}function a(){if(!w||!e.header&&!e.dynamicTyping)return w;for(var t=0;t<w.data.length;t++){for(var n=e.header?{}:[],r=0;r<w.data[t].length;r++){var i=r,a=w.data[t][r];e.header&&(i=r>=C.length?"__parsed_extra":C[r]),a=s(i,a),"__parsed_extra"===i?(n[i]=n[i]||[],n[i].push(a)):n[i]=a}w.data[t]=n,e.header&&(r>C.length?l("FieldMismatch","TooManyFields","Too many fields: expected "+C.length+" fields but parsed "+r,t):r<C.length&&l("FieldMismatch","TooFewFields","Too few fields: expected "+C.length+" fields but parsed "+r,t))}return e.header&&w.meta&&(w.meta.fields=C),w}function o(t,n,r){for(var i,s,a,o=[",","\t","|",";",R.RECORD_SEP,R.UNIT_SEP],h=0;h<o.length;h++){var f=o[h],l=0,d=0,c=0;a=void 0;for(var p=new u({delimiter:f,newline:n,preview:10}).parse(t),g=0;g<p.data.length;g++)if(r&&1===p.data[g].length&&0===p.data[g][0].length)c++;else{var _=p.data[g].length;d+=_,"undefined"!=typeof a?_>1&&(l+=Math.abs(_-a),a=_):a=_}p.data.length>0&&(d/=p.data.length-c),("undefined"==typeof s||l<s)&&d>1.99&&(s=l,i=f)}return e.delimiter=i,{successful:!!i,bestDelimiter:i}}function h(e){e=e.substr(0,1048576);var t=e.split("\r"),n=e.split("\n"),r=n.length>1&&n[0].length<t[0].length;if(1===t.length||r)return"\n";for(var i=0,s=0;s<t.length;s++)"\n"===t[s][0]&&i++;return i>=t.length/2?"\r\n":"\r"}function f(e){var t=_.test(e);return t?parseFloat(e):e}function l(e,t,n,r){w.errors.push({type:e,code:t,message:n,row:r})}var d,c,p,_=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,v=this,k=0,y=!1,b=!1,C=[],w={data:[],errors:[],meta:{}};if(m(e.step)){var E=e.step;e.step=function(r){if(w=r,n())t();else{if(t(),0===w.data.length)return;k+=r.data.length,e.preview&&k>e.preview?c.abort():E(w,v)}}}this.parse=function(n,r,i){if(e.newline||(e.newline=h(n)),p=!1,e.delimiter)m(e.delimiter)&&(e.delimiter=e.delimiter(n),w.meta.delimiter=e.delimiter);else{var s=o(n,e.newline,e.skipEmptyLines);s.successful?e.delimiter=s.bestDelimiter:(p=!0,e.delimiter=R.DefaultDelimiter),w.meta.delimiter=e.delimiter}var a=g(e);return e.preview&&e.header&&a.preview++,d=n,c=new u(a),w=c.parse(d,r,i),t(),y?{meta:{paused:!0}}:w||{meta:{paused:!1}}},this.paused=function(){return y},this.pause=function(){y=!0,c.abort(),d=d.substr(c.getCharIndex())},this.resume=function(){y=!1,v.streamer.parseChunk(d)},this.aborted=function(){return b},this.abort=function(){b=!0,c.abort(),w.meta.aborted=!0,m(e.complete)&&e.complete(w),d=""}}function u(e){e=e||{};var t=e.delimiter,n=e.newline,r=e.comments,i=e.step,s=e.preview,a=e.fastMode;if(void 0===e.quoteChar)var o='"';else var o=e.quoteChar;if(("string"!=typeof t||R.BAD_DELIMITERS.indexOf(t)>-1)&&(t=","),r===t)throw"Comment character same as delimiter";r===!0?r="#":("string"!=typeof r||R.BAD_DELIMITERS.indexOf(r)>-1)&&(r=!1),"\n"!=n&&"\r"!=n&&"\r\n"!=n&&(n="\n");var u=0,h=!1;this.parse=function(e,f,l){function d(e){w.push(e),S=u}function c(t){return l?g():("undefined"==typeof t&&(t=e.substr(u)),R.push(t),u=v,d(R),C&&_(),g())}function p(t){u=t,d(R),R=[],T=e.indexOf(n,u)}function g(e){return{data:w,errors:E,meta:{delimiter:t,linebreak:n,aborted:h,truncated:!!e,cursor:S+(f||0)}}}function _(){i(g()),w=[],E=[]}if("string"!=typeof e)throw"Input must be a string";var v=e.length,k=t.length,y=n.length,b=r.length,C=m(i);u=0;var w=[],E=[],R=[],S=0;if(!e)return g();if(a||a!==!1&&e.indexOf(o)===-1){for(var x=e.split(n),O=0;O<x.length;O++){var R=x[O];if(u+=R.length,O!==x.length-1)u+=n.length;else if(l)return g();if(!r||R.substr(0,b)!==r){if(C){if(w=[],d(R.split(t)),_(),h)return g()}else d(R.split(t));if(s&&O>=s)return w=w.slice(0,s),g(!0)}}return g()}for(var I=e.indexOf(t,u),T=e.indexOf(n,u),D=new RegExp(o+o,"g");;)if(e[u]!==o)if(r&&0===R.length&&e.substr(u,b)===r){if(T===-1)return g();u=T+y,T=e.indexOf(n,u),I=e.indexOf(t,u)}else if(I!==-1&&(I<T||T===-1))R.push(e.substring(u,I)),u=I+k,I=e.indexOf(t,u);else{if(T===-1)break;if(R.push(e.substring(u,T)),p(T+y),C&&(_(),h))return g();if(s&&w.length>=s)return g(!0)}else{var L=u;for(u++;;){var L=e.indexOf(o,L+1);if(L===-1)return l||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:w.length,index:u}),c();if(L===v-1){var P=e.substring(u,L).replace(D,o);return c(P)}if(e[L+1]!==o){if(e[L+1]===t){R.push(e.substring(u,L).replace(D,o)),u=L+1+k,I=e.indexOf(t,u),T=e.indexOf(n,u);break}if(e.substr(L+1,y)===n){if(R.push(e.substring(u,L).replace(D,o)),p(L+1+y),I=e.indexOf(t,u),C&&(_(),h))return g();if(s&&w.length>=s)return g(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:w.length,index:u}),L++}else L++}}return c()},this.abort=function(){h=!0},this.getCharIndex=function(){return u}}function h(){var e=document.getElementsByTagName("script");return e.length?e[e.length-1].src:""}function f(){if(!R.WORKERS_SUPPORTED)return!1;if(!C&&null===R.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=R.SCRIPT_PATH||v;e+=(e.indexOf("?")!==-1?"&":"?")+"papaworker";var t=new k.Worker(e);return t.onmessage=l,t.id=E++,w[t.id]=t,t}function l(e){var t=e.data,n=w[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i=function(){r=!0,d(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},s={abort:i,pause:c,resume:c};if(m(n.userStep)){for(var a=0;a<t.results.data.length&&(n.userStep({data:[t.results.data[a]],errors:t.results.errors,meta:t.results.meta},s),!r);a++);delete t.results}else m(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&d(t.workerId,t.results)}function d(e,t){var n=w[e];m(n.userComplete)&&n.userComplete(t),n.terminate(),delete w[e]}function c(){throw"Not implemented."}function p(e){var t=e.data;if("undefined"==typeof R.WORKER_ID&&t&&(R.WORKER_ID=t.workerId),"string"==typeof t.input)k.postMessage({workerId:R.WORKER_ID,results:R.parse(t.input,t.config),finished:!0});else if(k.File&&t.input instanceof File||t.input instanceof Object){var n=R.parse(t.input,t.config);n&&k.postMessage({workerId:R.WORKER_ID,results:n,finished:!0})}}function g(e){if("object"!=typeof e)return e;var t=e instanceof Array?[]:{};for(var n in e)t[n]=g(e[n]);return t}function _(e,t){return function(){e.apply(t,arguments)}}function m(e){return"function"==typeof e}var v,k=function(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof k?k:{}}(),y=!k.document&&!!k.postMessage,b=y&&/(\?|&)papaworker(=|&|$)/.test(k.location.search),C=!1,w={},E=0,R={};if(R.parse=e,R.unparse=t,R.RECORD_SEP=String.fromCharCode(30),R.UNIT_SEP=String.fromCharCode(31),R.BYTE_ORDER_MARK="\ufeff",R.BAD_DELIMITERS=["\r","\n",'"',R.BYTE_ORDER_MARK],R.WORKERS_SUPPORTED=!y&&!!k.Worker,R.SCRIPT_PATH=null,R.LocalChunkSize=10485760,R.RemoteChunkSize=5242880,R.DefaultDelimiter=",",R.Parser=u,R.ParserHandle=o,R.NetworkStreamer=r,R.FileStreamer=i,R.StringStreamer=s,R.ReadableStreamStreamer=a,k.jQuery){var S=k.jQuery;S.fn.parse=function(e){function t(){if(0===s.length)return void(m(e.complete)&&e.complete());var t=s[0];if(m(e.before)){var i=e.before(t.file,t.inputElem);if("object"==typeof i){if("abort"===i.action)return void n("AbortError",t.file,t.inputElem,i.reason);if("skip"===i.action)return void r();"object"==typeof i.config&&(t.instanceConfig=S.extend(t.instanceConfig,i.config))}else if("skip"===i)return void r()}var a=t.instanceConfig.complete;t.instanceConfig.complete=function(e){m(a)&&a(e,t.file,t.inputElem),r()},R.parse(t.file,t.instanceConfig)}function n(t,n,r,i){m(e.error)&&e.error({name:t},n,r,i)}function r(){s.splice(0,1),t()}var i=e.config||{},s=[];return this.each(function(e){var t="INPUT"===S(this).prop("tagName").toUpperCase()&&"file"===S(this).attr("type").toLowerCase()&&k.FileReader;if(!t||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)s.push({file:this.files[n],inputElem:this,instanceConfig:S.extend({},i)})}),t(),this}}return b?k.onmessage=p:R.WORKERS_SUPPORTED&&(v=h(),document.body?document.addEventListener("DOMContentLoaded",function(){C=!0},!0):C=!0),r.prototype=Object.create(n.prototype),r.prototype.constructor=r,i.prototype=Object.create(n.prototype),i.prototype.constructor=i,s.prototype=Object.create(s.prototype),s.prototype.constructor=s,a.prototype=Object.create(n.prototype),a.prototype.constructor=a,R})},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.booksQuery=void 0;var i=n(3),s=r(i),a=n(46),o=(r(a),n(26)),u=(r(o),n(338)),h=(r(u),n(41));t.default=function(e){var t=e.data,n=t.allBooksCsv.edges;n.map(function(e){var t=e.node;return{author:t.author,book:t.book,cover:t.cover,favorite:"true"===t.favorite.toLowerCase(),genre:t.genre.split(","),isbn:parseInt(t.isbn,10),pages:parseInt(t.pages,10)}});return s.default.createElement(h.Container,null,s.default.createElement(h.TitleWrapper,null,s.default.createElement(h.Title,null,"Playground"),s.default.createElement("div",{id:"chart"})),s.default.createElement(h.Content,null))};t.booksQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-playground-js-b0f4bc38391e6fc3cd31.js.map