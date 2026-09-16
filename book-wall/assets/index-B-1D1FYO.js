(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var xd={exports:{}},Ho={};var o_;function Py(){if(o_)return Ho;o_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var l_;function Iy(){return l_||(l_=1,xd.exports=Py()),xd.exports}var it=Iy(),Sd={exports:{}},ut={};var u_;function By(){if(u_)return ut;u_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(D,J,me){this.props=D,this.context=J,this.refs=y,this.updater=me||b}S.prototype.isReactComponent={},S.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function O(){}O.prototype=S.prototype;function F(D,J,me){this.props=D,this.context=J,this.refs=y,this.updater=me||b}var w=F.prototype=new O;w.constructor=F,C(w,S.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function N(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(D,J,me){var be=me.ref;return{$$typeof:r,type:D,key:J,ref:be!==void 0?be:null,props:me}}function q(D,J){return P(D.type,J,D.props)}function X(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function j(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(me){return J[me]})}var se=/\/+/g;function Y(D,J){return typeof D=="object"&&D!==null&&D.key!=null?j(""+D.key):J.toString(36)}function Q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function B(D,J,me,be,De){var He=typeof D;(He==="undefined"||He==="boolean")&&(D=null);var te=!1;if(D===null)te=!0;else switch(He){case"bigint":case"string":case"number":te=!0;break;case"object":switch(D.$$typeof){case r:case e:te=!0;break;case _:return te=D._init,B(te(D._payload),J,me,be,De)}}if(te)return De=De(D),te=be===""?"."+Y(D,0):be,U(De)?(me="",te!=null&&(me=te.replace(se,"$&/")+"/"),B(De,J,me,"",function(tt){return tt})):De!=null&&(X(De)&&(De=q(De,me+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(se,"$&/")+"/")+te)),J.push(De)),1;te=0;var de=be===""?".":be+":";if(U(D))for(var Te=0;Te<D.length;Te++)be=D[Te],He=de+Y(be,Te),te+=B(be,J,me,He,De);else if(Te=M(D),typeof Te=="function")for(D=Te.call(D),Te=0;!(be=D.next()).done;)be=be.value,He=de+Y(be,Te++),te+=B(be,J,me,He,De);else if(He==="object"){if(typeof D.then=="function")return B(Q(D),J,me,be,De);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return te}function H(D,J,me){if(D==null)return D;var be=[],De=0;return B(D,be,"","",function(He){return J.call(me,He,De++)}),be}function le(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(me){(D._status===0||D._status===-1)&&(D._status=1,D._result=me)},function(me){(D._status===0||D._status===-1)&&(D._status=2,D._result=me)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var ne=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ce={map:H,forEach:function(D,J,me){H(D,function(){J.apply(this,arguments)},me)},count:function(D){var J=0;return H(D,function(){J++}),J},toArray:function(D){return H(D,function(J){return J})||[]},only:function(D){if(!X(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ut.Activity=v,ut.Children=ce,ut.Component=S,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=F,ut.StrictMode=s,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ut.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},ut.cache=function(D){return function(){return D.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(D,J,me){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var be=C({},D.props),De=D.key;if(J!=null)for(He in J.key!==void 0&&(De=""+J.key),J)!T.call(J,He)||He==="key"||He==="__self"||He==="__source"||He==="ref"&&J.ref===void 0||(be[He]=J[He]);var He=arguments.length-2;if(He===1)be.children=me;else if(1<He){for(var te=Array(He),de=0;de<He;de++)te[de]=arguments[de+2];be.children=te}return P(D.type,De,be)},ut.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ut.createElement=function(D,J,me){var be,De={},He=null;if(J!=null)for(be in J.key!==void 0&&(He=""+J.key),J)T.call(J,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(De[be]=J[be]);var te=arguments.length-2;if(te===1)De.children=me;else if(1<te){for(var de=Array(te),Te=0;Te<te;Te++)de[Te]=arguments[Te+2];De.children=de}if(D&&D.defaultProps)for(be in te=D.defaultProps,te)De[be]===void 0&&(De[be]=te[be]);return P(D,He,De)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(D){return{$$typeof:h,render:D}},ut.isValidElement=X,ut.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:le}},ut.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},ut.startTransition=function(D){var J=I.T,me={};I.T=me;try{var be=D(),De=I.S;De!==null&&De(me,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(N,ne)}catch(He){ne(He)}finally{J!==null&&me.types!==null&&(J.types=me.types),I.T=J}},ut.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ut.use=function(D){return I.H.use(D)},ut.useActionState=function(D,J,me){return I.H.useActionState(D,J,me)},ut.useCallback=function(D,J){return I.H.useCallback(D,J)},ut.useContext=function(D){return I.H.useContext(D)},ut.useDebugValue=function(){},ut.useDeferredValue=function(D,J){return I.H.useDeferredValue(D,J)},ut.useEffect=function(D,J){return I.H.useEffect(D,J)},ut.useEffectEvent=function(D){return I.H.useEffectEvent(D)},ut.useId=function(){return I.H.useId()},ut.useImperativeHandle=function(D,J,me){return I.H.useImperativeHandle(D,J,me)},ut.useInsertionEffect=function(D,J){return I.H.useInsertionEffect(D,J)},ut.useLayoutEffect=function(D,J){return I.H.useLayoutEffect(D,J)},ut.useMemo=function(D,J){return I.H.useMemo(D,J)},ut.useOptimistic=function(D,J){return I.H.useOptimistic(D,J)},ut.useReducer=function(D,J,me){return I.H.useReducer(D,J,me)},ut.useRef=function(D){return I.H.useRef(D)},ut.useState=function(D){return I.H.useState(D)},ut.useSyncExternalStore=function(D,J,me){return I.H.useSyncExternalStore(D,J,me)},ut.useTransition=function(){return I.H.useTransition()},ut.version="19.2.3",ut}var c_;function jh(){return c_||(c_=1,Sd.exports=By()),Sd.exports}var Se=jh(),yd={exports:{}},Go={},Md={exports:{}},Ed={};var f_;function Fy(){return f_||(f_=1,(function(r){function e(B,H){var le=B.length;B.push(H);e:for(;0<le;){var ne=le-1>>>1,ce=B[ne];if(0<l(ce,H))B[ne]=H,B[le]=ce,le=ne;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],le=B.pop();if(le!==H){B[0]=le;e:for(var ne=0,ce=B.length,D=ce>>>1;ne<D;){var J=2*(ne+1)-1,me=B[J],be=J+1,De=B[be];if(0>l(me,le))be<ce&&0>l(De,me)?(B[ne]=De,B[be]=le,ne=be):(B[ne]=me,B[J]=le,ne=J);else if(be<ce&&0>l(De,le))B[ne]=De,B[be]=le,ne=be;else break e}}return H}function l(B,H){var le=B.sortIndex-H.sortIndex;return le!==0?le:B.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,v=null,g=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=B)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function U(B){if(C=!1,w(B),!b)if(i(m)!==null)b=!0,N||(N=!0,j());else{var H=i(p);H!==null&&Q(U,H.startTime-B)}}var N=!1,I=-1,T=5,P=-1;function q(){return y?!0:!(r.unstable_now()-P<T)}function X(){if(y=!1,N){var B=r.unstable_now();P=B;var H=!0;try{e:{b=!1,C&&(C=!1,O(I),I=-1),M=!0;var le=g;try{t:{for(w(B),v=i(m);v!==null&&!(v.expirationTime>B&&q());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,g=v.priorityLevel;var ce=ne(v.expirationTime<=B);if(B=r.unstable_now(),typeof ce=="function"){v.callback=ce,w(B),H=!0;break t}v===i(m)&&s(m),w(B)}else s(m);v=i(m)}if(v!==null)H=!0;else{var D=i(p);D!==null&&Q(U,D.startTime-B),H=!1}}break e}finally{v=null,g=le,M=!1}H=void 0}}finally{H?j():N=!1}}}var j;if(typeof F=="function")j=function(){F(X)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Y=se.port2;se.port1.onmessage=X,j=function(){Y.postMessage(null)}}else j=function(){S(X,0)};function Q(B,H){I=S(function(){B(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var le=g;g=H;try{return B()}finally{g=le}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=g;g=B;try{return H()}finally{g=le}},r.unstable_scheduleCallback=function(B,H,le){var ne=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ne+le:ne):le=ne,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=le+ce,B={id:_++,callback:H,priorityLevel:B,startTime:le,expirationTime:ce,sortIndex:-1},le>ne?(B.sortIndex=le,e(p,B),i(m)===null&&B===i(p)&&(C?(O(I),I=-1):C=!0,Q(U,le-ne))):(B.sortIndex=ce,e(m,B),b||M||(b=!0,N||(N=!0,j()))),B},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(B){var H=g;return function(){var le=g;g=H;try{return B.apply(this,arguments)}finally{g=le}}}})(Ed)),Ed}var d_;function zy(){return d_||(d_=1,Md.exports=Fy()),Md.exports}var bd={exports:{}},Ln={};var h_;function Hy(){if(h_)return Ln;h_=1;var r=jh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Ln.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.2.3",Ln}var p_;function Gy(){if(p_)return bd.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=Hy(),bd.exports}var m_;function Vy(){if(m_)return Go;m_=1;var r=zy(),e=jh(),i=Gy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),t;if(d===o)return m(c),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=d;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,o=d;break}if(R===o){x=!0,o=c,a=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===a){x=!0,a=d,o=c;break}if(R===o){x=!0,o=d,a=c;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),F=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case U:return"Suspense";case N:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case F:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ne=[],ce=-1;function D(t){return{current:t}}function J(t){0>ce||(t.current=ne[ce],ne[ce]=null,ce--)}function me(t,n){ce++,ne[ce]=t.current,t.current=n}var be=D(null),De=D(null),He=D(null),te=D(null);function de(t,n){switch(me(He,n),me(De,t),me(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=D0(n),t=U0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(be),me(be,t)}function Te(){J(be),J(De),J(He)}function tt(t){t.memoizedState!==null&&me(te,t);var n=be.current,a=U0(n,t.type);n!==a&&(me(De,t),me(be,a))}function Fe(t){De.current===t&&(J(be),J(De)),te.current===t&&(J(te),Io._currentValue=le)}var ot,jt;function at(t){if(ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ot=n&&n[1]||"",jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+t+jt}var Pe=!1;function et(t,n){if(!t||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(he){var oe=he}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(he){oe=he}t.call(Me.prototype)}}else{try{throw Error()}catch(he){oe=he}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(he){if(he&&oe&&typeof he.stack=="string")return[he.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var z=x.split(`
`),re=R.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<re.length&&!re[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===re.length)for(o=z.length-1,c=re.length-1;1<=o&&0<=c&&z[o]!==re[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==re[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==re[c]){var ve=`
`+z[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=c);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function lt(t,n){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return t.child!==n&&n!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return at("Activity");default:return""}}function Lt(t){try{var n="",a=null;do n+=lt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var vt=Object.prototype.hasOwnProperty,Ft=r.unstable_scheduleCallback,Rt=r.unstable_cancelCallback,xt=r.unstable_shouldYield,k=r.unstable_requestPaint,Mt=r.unstable_now,Et=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Z=r.unstable_NormalPriority,ae=r.unstable_LowPriority,pe=r.unstable_IdlePriority,Ae=r.log,Ue=r.unstable_setDisableYieldValue,ge=null,_e=null;function Re(t){if(typeof Ae=="function"&&Ue(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ge,t)}catch{}}var ke=Math.clz32?Math.clz32:je,Oe=Math.log,Le=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Oe(t)/Le|0)|0}var Je=256,st=262144,W=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?c=Ce(o):(x&=R,x!==0?c=Ce(x):a||(a=R&~t,a!==0&&(c=Ce(a))))):(R=o&~d,R!==0?c=Ce(R):x!==0?c=Ce(x):a||(a=o&~t,a!==0&&(c=Ce(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xt(t,n,a,o,c,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,re=t.hiddenUpdates;for(a=x&~a;0<a;){var ve=31-ke(a),Me=1<<ve;R[ve]=0,z[ve]=-1;var oe=re[ve];if(oe!==null)for(re[ve]=null,ve=0;ve<oe.length;ve++){var he=oe[ve];he!==null&&(he.lane&=-536870913)}a&=~Me}o!==0&&Nt(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:Zs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Zs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ks(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:e_(t.type))}function kr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Oi=Math.random().toString(36).slice(2),cn="__reactFiber$"+Oi,Tn="__reactProps$"+Oi,Xn="__reactContainer$"+Oi,hr="__reactEvents$"+Oi,dl="__reactListeners$"+Oi,hl="__reactHandles$"+Oi,pr="__reactResources$"+Oi,Ua="__reactMarker$"+Oi;function La(t){delete t[cn],delete t[Tn],delete t[hr],delete t[dl],delete t[hl]}function ji(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F0(t);t!==null;){if(a=t[cn])return a;t=F0(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[cn]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Na(t){var n=t[pr];return n||(n=t[pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ua]=!0}var pl=new Set,js={};function A(t,n){G(t,n),G(t+"Capture",n)}function G(t,n){for(js[t]=n,t=0;t<n.length;t++)pl.add(n[t])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},ee={};function Ie(t){return vt.call(ee,t)?!0:vt.call($,t)?!1:fe.test(t)?ee[t]=!0:($[t]=!0,!1)}function Xe(t,n,a){if(Ie(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ne(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _t(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ye(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=_t(t,n,""+t[n])}}function Ot(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Kt=/[\n"\\]/g;function pt(t){return t.replace(Kt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function dn(t,n,a,o,c,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ve(n)):t.value!==""+Ve(n)&&(t.value=""+Ve(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?vn(t,x,Ve(n)):a!=null?vn(t,x,Ve(a)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ve(R):t.removeAttribute("name")}function We(t,n,a,o,c,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ye(t);return}a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ye(t)}function vn(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mt(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Fn(t,n,a){if(n!=null&&(n=""+Ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ve(a):""}function $n(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ve(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ye(t)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Oa.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function tn(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&zt(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&zt(t,d,n[d])}function ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(t){return Pi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function fi(){}var mc=null;function gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,Wr=null;function wp(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Tn]||null;if(!c)throw Error(s(90));dn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Ot(o)}break e;case"textarea":Fn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mt(t,!!a.multiple,n,!1)}}}var _c=!1;function Dp(t,n,a){if(_c)return t(n,a);_c=!0;try{var o=t(n);return o}finally{if(_c=!1,(Xr!==null||Wr!==null)&&(tu(),Xr&&(n=Xr,t=Wr,Wr=Xr=null,wp(n),t)))for(n=0;n<t.length;n++)wp(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if($i)try{var $s={};Object.defineProperty($s,"passive",{get:function(){vc=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{vc=!1}var Pa=null,xc=null,ml=null;function Up(){if(ml)return ml;var t,n=xc,a=n.length,o,c="value"in Pa?Pa.value:Pa.textContent,d=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[d-o];o++);return ml=c.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Lp(){return!1}function Wn(t){function n(a,o,c,d,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:Lp,this.isPropagationStopped=Lp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Wn(gr),eo=v({},gr,{view:0,detail:0}),Nx=Wn(eo),Sc,yc,to,xl=v({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Sc=t.screenX-to.screenX,yc=t.screenY-to.screenY):yc=Sc=0,to=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Np=Wn(xl),Ox=v({},xl,{dataTransfer:0}),Px=Wn(Ox),Ix=v({},eo,{relatedTarget:0}),Mc=Wn(Ix),Bx=v({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=Wn(Bx),zx=v({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=Wn(zx),Gx=v({},gr,{data:0}),Op=Wn(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Xx[t])?!!n[t]:!1}function Ec(){return Wx}var qx=v({},eo,{key:function(t){if(t.key){var n=Vx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yx=Wn(qx),Zx=v({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Wn(Zx),Kx=v({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Qx=Wn(Kx),jx=v({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=Wn(jx),$x=v({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Wn($x),tS=v({},gr,{newState:0,oldState:0}),nS=Wn(tS),iS=[9,13,27,32],bc=$i&&"CompositionEvent"in window,no=null;$i&&"documentMode"in document&&(no=document.documentMode);var aS=$i&&"TextEvent"in window&&!no,Ip=$i&&(!bc||no&&8<no&&11>=no),Bp=" ",Fp=!1;function zp(t,n){switch(t){case"keyup":return iS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function rS(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Fp=!0,Bp);case"textInput":return t=n.data,t===Bp&&Fp?null:t;default:return null}}function sS(t,n){if(qr)return t==="compositionend"||!bc&&zp(t,n)?(t=Up(),ml=xc=Pa=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!oS[t.type]:n==="textarea"}function Vp(t,n,a,o){Xr?Wr?Wr.push(o):Wr=[o]:Xr=o,n=lu(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var io=null,ao=null;function lS(t){b0(t,0)}function Sl(t){var n=mr(t);if(Ot(n))return t}function kp(t,n){if(t==="change")return n}var Xp=!1;if($i){var Tc;if($i){var Ac="oninput"in document;if(!Ac){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Ac=typeof Wp.oninput=="function"}Tc=Ac}else Tc=!1;Xp=Tc&&(!document.documentMode||9<document.documentMode)}function qp(){io&&(io.detachEvent("onpropertychange",Yp),ao=io=null)}function Yp(t){if(t.propertyName==="value"&&Sl(ao)){var n=[];Vp(n,ao,t,gc(t)),Dp(lS,n)}}function uS(t,n,a){t==="focusin"?(qp(),io=n,ao=a,io.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function cS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ao)}function fS(t,n){if(t==="click")return Sl(n)}function dS(t,n){if(t==="input"||t==="change")return Sl(n)}function hS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:hS;function ro(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!vt.call(n,c)||!ei(t[c],n[c]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Rc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var pS=$i&&"documentMode"in document&&11>=document.documentMode,Yr=null,Cc=null,so=null,wc=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Yr==null||Yr!==Jt(o)||(o=Yr,"selectionStart"in o&&Rc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=lu(Cc,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Yr)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Zr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Dc={},$p={};$i&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function vr(t){if(Dc[t])return Dc[t];if(!Zr[t])return t;var n=Zr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Dc[t]=n[a];return t}var em=vr("animationend"),tm=vr("animationiteration"),nm=vr("animationstart"),mS=vr("transitionrun"),gS=vr("transitionstart"),_S=vr("transitioncancel"),im=vr("transitionend"),am=new Map,Uc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uc.push("scrollEnd");function bi(t,n){am.set(t,n),A(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Kr=0,Lc=0;function Ml(){for(var t=Kr,n=Lc=Kr=0;n<t;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var c=di[n];di[n++]=null;var d=di[n];if(di[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}d!==0&&rm(a,c,d)}}function El(t,n,a,o){di[Kr++]=t,di[Kr++]=n,di[Kr++]=a,di[Kr++]=o,Lc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nc(t,n,a,o){return El(t,n,a,o),bl(t)}function xr(t,n){return El(t,null,null,n),bl(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-ke(a),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(t){if(50<wo)throw wo=0,kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qr={};function vS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new vS(t,n,a,o)}function Oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,c,d){var x=0;if(o=t,typeof t=="function")Oc(t)&&(x=1);else if(typeof t=="string")x=Ey(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=ti(31,a,n,c),t.elementType=P,t.lanes=d,t;case C:return Sr(a.children,c,d,n);case y:x=8,c|=24;break;case S:return t=ti(12,a,n,c|2),t.elementType=S,t.lanes=d,t;case U:return t=ti(13,a,n,c),t.elementType=U,t.lanes=d,t;case N:return t=ti(19,a,n,c),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case O:x=9;break e;case w:x=11;break e;case I:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ti(x,a,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function Sr(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function Pc(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function om(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Ic(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Lt(n)},lm.set(t,n),n)}return{value:t,source:n,stack:Lt(n)}}var jr=[],Jr=0,Al=null,oo=0,pi=[],mi=0,Ia=null,Ii=1,Bi="";function ta(t,n){jr[Jr++]=oo,jr[Jr++]=Al,Al=t,oo=n}function um(t,n,a){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Ia,Ia=t;var o=Ii;t=Bi;var c=32-ke(o)-1;o&=~(1<<c),a+=1;var d=32-ke(n)+c;if(30<d){var x=c-c%5;d=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ii=1<<32-ke(n)+c|a<<c|o,Bi=d+t}else Ii=1<<d|a<<c|o,Bi=t}function Bc(t){t.return!==null&&(ta(t,1),um(t,1,0))}function Fc(t){for(;t===Al;)Al=jr[--Jr],jr[Jr]=null,oo=jr[--Jr],jr[Jr]=null;for(;t===Ia;)Ia=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null}function cm(t,n){pi[mi++]=Ii,pi[mi++]=Bi,pi[mi++]=Ia,Ii=n.id,Bi=n.overflow,Ia=t}var An=null,$t=null,Ct=!1,Ba=null,gi=!1,zc=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(hi(n,t)),zc}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Tn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)yt(Uo[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),We(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),$n(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C0(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=fi),n=!0):n=!1,n||Fa(t,!0)}function dm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:An=An.return}}function $r(t){if(t!==An)return!1;if(!Ct)return dm(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&$t&&Fa(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=B0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=B0(t)}else n===27?(n=$t,Ja(t.type)?(t=ud,ud=null,$t=t):$t=n):$t=An?vi(t.stateNode.nextSibling):null;return!0}function yr(){$t=An=null,Ct=!1}function Hc(){var t=Ba;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ba=null),t}function lo(t){Ba===null?Ba=[t]:Ba.push(t)}var Gc=D(null),Mr=null,na=null;function za(t,n,a){me(Gc,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Gc.current,J(Gc)}function Vc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function kc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var x=c.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=c;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Vc(d.return,a,t),o||(x=null);break e}d=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Vc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function es(t,n,a,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=c.type;ei(c.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(c===te.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}c=c.return}t!==null&&kc(n,t,a,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){Mr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return hm(Mr,t)}function Cl(t,n){return Mr===null&&Er(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var xS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},SS=r.unstable_scheduleCallback,yS=r.unstable_NormalPriority,hn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new xS,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&SS(yS,function(){t.controller.abort()})}var co=null,Wc=0,ts=0,ns=null;function MS(t,n){if(co===null){var a=co=[];Wc=0,ts=Kf(),ns={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wc++,n.then(pm,pm),n}function pm(){if(--Wc===0&&co!==null){ns!==null&&(ns.status="fulfilled");var t=co;co=null,ts=0,ns=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ES(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var mm=B.S;B.S=function(t,n){Jg=Mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&MS(t,n),mm!==null&&mm(t,n)};var br=D(null);function qc(){var t=br.current;return t!==null?t:Qt.pooledCache}function wl(t,n){n===null?me(br,br.current):me(br,n.pool)}function gm(){var t=qc();return t===null?null:{parent:hn._currentValue,pool:t}}var is=Error(s(460)),Yc=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(fi,fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t;default:if(typeof n.status=="string")n.then(fi,fi);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Sm(t),t}throw Ar=n,is}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,is):a}}var Ar=null;function xm(){if(Ar===null)throw Error(s(459));var t=Ar;return Ar=null,t}function Sm(t){if(t===is||t===Dl)throw Error(s(483))}var as=null,fo=0;function Ll(t){var n=fo;return fo+=1,as===null&&(as=[]),vm(as,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ym(t){function n(K,V){if(t){var ie=K.deletions;ie===null?(K.deletions=[V],K.flags|=16):ie.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=ea(K,V),K.index=0,K.sibling=null,K}function d(K,V,ie){return K.index=ie,t?(ie=K.alternate,ie!==null?(ie=ie.index,ie<V?(K.flags|=67108866,V):ie):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,ie,ye){return V===null||V.tag!==6?(V=Pc(ie,K.mode,ye),V.return=K,V):(V=c(V,ie),V.return=K,V)}function z(K,V,ie,ye){var $e=ie.type;return $e===C?ve(K,V,ie.props.children,ye,ie.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&Tr($e)===V.type)?(V=c(V,ie.props),ho(V,ie),V.return=K,V):(V=Tl(ie.type,ie.key,ie.props,null,K.mode,ye),ho(V,ie),V.return=K,V)}function re(K,V,ie,ye){return V===null||V.tag!==4||V.stateNode.containerInfo!==ie.containerInfo||V.stateNode.implementation!==ie.implementation?(V=Ic(ie,K.mode,ye),V.return=K,V):(V=c(V,ie.children||[]),V.return=K,V)}function ve(K,V,ie,ye,$e){return V===null||V.tag!==7?(V=Sr(ie,K.mode,ye,$e),V.return=K,V):(V=c(V,ie),V.return=K,V)}function Me(K,V,ie){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Pc(""+V,K.mode,ie),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ie=Tl(V.type,V.key,V.props,null,K.mode,ie),ho(ie,V),ie.return=K,ie;case b:return V=Ic(V,K.mode,ie),V.return=K,V;case T:return V=Tr(V),Me(K,V,ie)}if(Q(V)||j(V))return V=Sr(V,K.mode,ie,null),V.return=K,V;if(typeof V.then=="function")return Me(K,Ll(V),ie);if(V.$$typeof===F)return Me(K,Cl(K,V),ie);Nl(K,V)}return null}function oe(K,V,ie,ye){var $e=V!==null?V.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return $e!==null?null:R(K,V,""+ie,ye);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===$e?z(K,V,ie,ye):null;case b:return ie.key===$e?re(K,V,ie,ye):null;case T:return ie=Tr(ie),oe(K,V,ie,ye)}if(Q(ie)||j(ie))return $e!==null?null:ve(K,V,ie,ye,null);if(typeof ie.then=="function")return oe(K,V,Ll(ie),ye);if(ie.$$typeof===F)return oe(K,V,Cl(K,ie),ye);Nl(K,ie)}return null}function he(K,V,ie,ye,$e){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return K=K.get(ie)||null,R(V,K,""+ye,$e);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case M:return K=K.get(ye.key===null?ie:ye.key)||null,z(V,K,ye,$e);case b:return K=K.get(ye.key===null?ie:ye.key)||null,re(V,K,ye,$e);case T:return ye=Tr(ye),he(K,V,ie,ye,$e)}if(Q(ye)||j(ye))return K=K.get(ie)||null,ve(V,K,ye,$e,null);if(typeof ye.then=="function")return he(K,V,ie,Ll(ye),$e);if(ye.$$typeof===F)return he(K,V,ie,Cl(V,ye),$e);Nl(V,ye)}return null}function Ze(K,V,ie,ye){for(var $e=null,It=null,Ke=V,ht=V=0,Tt=null;Ke!==null&&ht<ie.length;ht++){Ke.index>ht?(Tt=Ke,Ke=null):Tt=Ke.sibling;var Bt=oe(K,Ke,ie[ht],ye);if(Bt===null){Ke===null&&(Ke=Tt);break}t&&Ke&&Bt.alternate===null&&n(K,Ke),V=d(Bt,V,ht),It===null?$e=Bt:It.sibling=Bt,It=Bt,Ke=Tt}if(ht===ie.length)return a(K,Ke),Ct&&ta(K,ht),$e;if(Ke===null){for(;ht<ie.length;ht++)Ke=Me(K,ie[ht],ye),Ke!==null&&(V=d(Ke,V,ht),It===null?$e=Ke:It.sibling=Ke,It=Ke);return Ct&&ta(K,ht),$e}for(Ke=o(Ke);ht<ie.length;ht++)Tt=he(Ke,K,ht,ie[ht],ye),Tt!==null&&(t&&Tt.alternate!==null&&Ke.delete(Tt.key===null?ht:Tt.key),V=d(Tt,V,ht),It===null?$e=Tt:It.sibling=Tt,It=Tt);return t&&Ke.forEach(function(ir){return n(K,ir)}),Ct&&ta(K,ht),$e}function nt(K,V,ie,ye){if(ie==null)throw Error(s(151));for(var $e=null,It=null,Ke=V,ht=V=0,Tt=null,Bt=ie.next();Ke!==null&&!Bt.done;ht++,Bt=ie.next()){Ke.index>ht?(Tt=Ke,Ke=null):Tt=Ke.sibling;var ir=oe(K,Ke,Bt.value,ye);if(ir===null){Ke===null&&(Ke=Tt);break}t&&Ke&&ir.alternate===null&&n(K,Ke),V=d(ir,V,ht),It===null?$e=ir:It.sibling=ir,It=ir,Ke=Tt}if(Bt.done)return a(K,Ke),Ct&&ta(K,ht),$e;if(Ke===null){for(;!Bt.done;ht++,Bt=ie.next())Bt=Me(K,Bt.value,ye),Bt!==null&&(V=d(Bt,V,ht),It===null?$e=Bt:It.sibling=Bt,It=Bt);return Ct&&ta(K,ht),$e}for(Ke=o(Ke);!Bt.done;ht++,Bt=ie.next())Bt=he(Ke,K,ht,Bt.value,ye),Bt!==null&&(t&&Bt.alternate!==null&&Ke.delete(Bt.key===null?ht:Bt.key),V=d(Bt,V,ht),It===null?$e=Bt:It.sibling=Bt,It=Bt);return t&&Ke.forEach(function(Oy){return n(K,Oy)}),Ct&&ta(K,ht),$e}function Zt(K,V,ie,ye){if(typeof ie=="object"&&ie!==null&&ie.type===C&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var $e=ie.key;V!==null;){if(V.key===$e){if($e=ie.type,$e===C){if(V.tag===7){a(K,V.sibling),ye=c(V,ie.props.children),ye.return=K,K=ye;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&Tr($e)===V.type){a(K,V.sibling),ye=c(V,ie.props),ho(ye,ie),ye.return=K,K=ye;break e}a(K,V);break}else n(K,V);V=V.sibling}ie.type===C?(ye=Sr(ie.props.children,K.mode,ye,ie.key),ye.return=K,K=ye):(ye=Tl(ie.type,ie.key,ie.props,null,K.mode,ye),ho(ye,ie),ye.return=K,K=ye)}return x(K);case b:e:{for($e=ie.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===ie.containerInfo&&V.stateNode.implementation===ie.implementation){a(K,V.sibling),ye=c(V,ie.children||[]),ye.return=K,K=ye;break e}else{a(K,V);break}else n(K,V);V=V.sibling}ye=Ic(ie,K.mode,ye),ye.return=K,K=ye}return x(K);case T:return ie=Tr(ie),Zt(K,V,ie,ye)}if(Q(ie))return Ze(K,V,ie,ye);if(j(ie)){if($e=j(ie),typeof $e!="function")throw Error(s(150));return ie=$e.call(ie),nt(K,V,ie,ye)}if(typeof ie.then=="function")return Zt(K,V,Ll(ie),ye);if(ie.$$typeof===F)return Zt(K,V,Cl(K,ie),ye);Nl(K,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,V!==null&&V.tag===6?(a(K,V.sibling),ye=c(V,ie),ye.return=K,K=ye):(a(K,V),ye=Pc(ie,K.mode,ye),ye.return=K,K=ye),x(K)):a(K,V)}return function(K,V,ie,ye){try{fo=0;var $e=Zt(K,V,ie,ye);return as=null,$e}catch(Ke){if(Ke===is||Ke===Dl)throw Ke;var It=ti(29,Ke,null,K.mode);return It.lanes=ye,It.return=K,It}}}var Rr=ym(!0),Mm=ym(!1),Ha=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=bl(t),rm(t,null,a),n}return El(t,o,n,a),bl(t)}function po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kn(t,a)}}function Qc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var jc=!1;function mo(){if(jc){var t=ns;if(t!==null)throw t}}function go(t,n,a,o){jc=!1;var c=t.updateQueue;Ha=!1;var d=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var z=R,re=z.next;z.next=null,x===null?d=re:x.next=re,x=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==x&&(R===null?ve.firstBaseUpdate=re:R.next=re,ve.lastBaseUpdate=z))}if(d!==null){var Me=c.baseState;x=0,ve=re=z=null,R=d;do{var oe=R.lane&-536870913,he=oe!==R.lane;if(he?(bt&oe)===oe:(o&oe)===oe){oe!==0&&oe===ts&&(jc=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,nt=R;oe=n;var Zt=a;switch(nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Me=Ze.call(Zt,Me,oe);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,oe=typeof Ze=="function"?Ze.call(Zt,Me,oe):Ze,oe==null)break e;Me=v({},Me,oe);break e;case 2:Ha=!0}}oe=R.callback,oe!==null&&(t.flags|=64,he&&(t.flags|=8192),he=c.callbacks,he===null?c.callbacks=[oe]:he.push(oe))}else he={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(re=ve=he,z=Me):ve=ve.next=he,x|=oe;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;he=R,R=he.next,he.next=null,c.lastBaseUpdate=he,c.shared.pending=null}}while(!0);ve===null&&(z=Me),c.baseState=z,c.firstBaseUpdate=re,c.lastBaseUpdate=ve,d===null&&(c.shared.lanes=0),Ya|=x,t.lanes=x,t.memoizedState=Me}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var rs=D(null),Ol=D(0);function Tm(t,n){t=da,me(Ol,t),me(rs,n),da=t|n.baseLanes}function Jc(){me(Ol,da),me(rs,rs.current)}function $c(){da=Ol.current,J(rs),J(Ol)}var ni=D(null),_i=null;function ka(t){var n=t.alternate;me(ln,ln.current&1),me(ni,t),_i===null&&(n===null||rs.current!==null||n.memoizedState!==null)&&(_i=t)}function ef(t){me(ln,ln.current),me(ni,t),_i===null&&(_i=t)}function Am(t){t.tag===22?(me(ln,ln.current),me(ni,t),_i===null&&(_i=t)):Xa()}function Xa(){me(ln,ln.current),me(ni,ni.current)}function ii(t){J(ni),_i===t&&(_i=null),J(ln)}var ln=D(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,dt=null,qt=null,pn=null,Il=!1,ss=!1,Cr=!1,Bl=0,_o=0,os=null,bS=0;function sn(){throw Error(s(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,c,d){return aa=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?ug:vf,Cr=!1,d=a(o,c),Cr=!1,ss&&(d=Cm(n,a,o,c)),Rm(t),d}function Rm(t){B.H=So;var n=qt!==null&&qt.next!==null;if(aa=0,pn=qt=dt=null,Il=!1,_o=0,os=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Rl(t)&&(mn=!0))}function Cm(t,n,a,o){dt=t;var c=0;do{if(ss&&(os=null),_o=0,ss=!1,25<=c)throw Error(s(301));if(c+=1,pn=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=cg,d=n(a,o)}while(ss);return d}function TS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(dt.flags|=1024),n}function af(){var t=Bl!==0;return Bl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}aa=0,pn=qt=dt=null,ss=!1,_o=Bl=0,os=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?dt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(qt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=pn===null?dt.memoizedState:pn.next;if(n!==null)pn=n,qt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},pn===null?dt.memoizedState=pn=t:pn=pn.next=t}return pn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,os===null&&(os=[]),t=vm(os,t,n),n=dt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ug:vf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===F)return Rn(t)}throw Error(s(438,String(t)))}function of(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Hl(t){var n=un();return lf(n,qt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var x=c.next;c.next=d.next,d.next=x}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var R=x=null,z=null,re=n,ve=!1;do{var Me=re.lane&-536870913;if(Me!==re.lane?(bt&Me)===Me:(aa&Me)===Me){var oe=re.revertLane;if(oe===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Me===ts&&(ve=!0);else if((aa&oe)===oe){re=re.next,oe===ts&&(ve=!0);continue}else Me={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},z===null?(R=z=Me,x=d):z=z.next=Me,dt.lanes|=oe,Ya|=oe;Me=re.action,Cr&&a(d,Me),d=re.hasEagerState?re.eagerState:a(d,Me)}else oe={lane:Me,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},z===null?(R=z=oe,x=d):z=z.next=oe,dt.lanes|=Me,Ya|=Me;re=re.next}while(re!==null&&re!==n);if(z===null?x=d:z.next=R,!ei(d,t.memoizedState)&&(mn=!0,ve&&(a=ns,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=z,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do d=t(d,x.action),x=x.next;while(x!==c);ei(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function wm(t,n,a){var o=dt,c=un(),d=Ct;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ei((qt||c).memoizedState,a);if(x&&(c.memoizedState=a,mn=!0),c=c.queue,df(Lm.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,ls(9,{destroy:void 0},Um.bind(null,o,c,a,n),null),Qt===null)throw Error(s(349));d||(aa&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Fl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Um(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Om(t)}function Lm(t,n,a){return a(function(){Nm(n)&&Om(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function Om(t){var n=xr(t,2);n!==null&&Qn(n,t,2)}function cf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Cr){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,lf(t,qt,typeof o=="function"?o:ra)}function AS(t,n,a,o,c){if(kl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=B.T,x={};B.T=x;try{var R=a(c,o),z=B.S;z!==null&&z(x,R),Bm(t,n,R)}catch(re){ff(t,n,re)}finally{d!==null&&x.types!==null&&(d.types=x.types),B.T=d}}else try{d=a(c,o),Bm(t,n,d)}catch(re){ff(t,n,re)}}function Bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return ff(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,zm(n),n=n.next;while(n!==o)}t.action=null}function zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(Ct){var a=Qt.formState;if(a!==null){e:{var o=dt;if(Ct){if($t){t:{for(var c=$t,d=gi;c.nodeType!==8;){if(!d){c=null;break t}if(c=vi(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){$t=vi(c.nextSibling),o=c.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=sg.bind(null,dt,o),o.dispatch=a,o=cf(!1),d=_f.bind(null,dt,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=AS.bind(null,dt,c,d,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=un();return km(n,qt,t)}function km(t,n,a){if(n=lf(t,n,Hm)[0],t=Hl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(x){throw x===is?Dl:x}else o=n;n=un();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ls(9,{destroy:void 0},RS.bind(null,c,a),null)),[o,d,t]}function RS(t,n){t.action=n}function Xm(t){var n=un(),a=qt;if(a!==null)return km(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ls(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Fl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return un().memoizedState}function Gl(t,n,a,o){var c=Hn();dt.flags|=t,c.memoizedState=ls(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var c=un();o=o===void 0?null:o;var d=c.memoizedState.inst;qt!==null&&o!==null&&tf(o,qt.memoizedState.deps)?c.memoizedState=ls(n,d,a,o):(dt.flags|=t,c.memoizedState=ls(1|n,d,a,o))}function qm(t,n){Gl(8390656,8,t,n)}function df(t,n){Vl(2048,8,t,n)}function CS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Fl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=un().memoizedState;return CS({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return Vl(4,2,t,n)}function Km(t,n){return Vl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jm(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Qm.bind(null,n,t),a)}function hf(){}function Jm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),Cr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=e0(),dt.lanes|=t,Ya|=t,a)}function eg(t,n,a,o){return ei(a,n)?a:rs.current!==null?(t=pf(t,a,o),ei(t,n)||(mn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(bt&261930)===0?(mn=!0,t.memoizedState=a):(t=e0(),dt.lanes|=t,Ya|=t,n)}function tg(t,n,a,o,c){var d=H.p;H.p=d!==0&&8>d?d:8;var x=B.T,R={};B.T=R,_f(t,!1,n,a);try{var z=c(),re=B.S;if(re!==null&&re(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ve=ES(z,o);xo(t,n,ve,si(t))}else xo(t,n,o,si(t))}catch(Me){xo(t,n,{then:function(){},status:"rejected",reason:Me},si())}finally{H.p=d,x!==null&&R.types!==null&&(x.types=R.types),B.T=x}}function wS(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=ng(t).queue;tg(t,c,n,le,a===null?wS:function(){return ig(t),a(o)})}function ng(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ig(t){var n=ng(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},si())}function gf(){return Rn(Io)}function ag(){return un().memoizedState}function rg(){return un().memoizedState}function DS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Ga(a);var o=Va(n,t,a);o!==null&&(Qn(o,n,a),po(o,n,a)),n={cache:Xc()},t.payload=n;return}n=n.return}}function US(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?og(n,a):(a=Nc(t,n,a,o),a!==null&&(Qn(a,t,o),lg(a,n,o)))}function sg(t,n,a){var o=si();xo(t,n,a,o)}function xo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))og(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,a);if(c.hasEagerState=!0,c.eagerState=R,ei(R,x))return El(t,n,c,0),Qt===null&&Ml(),!1}catch{}if(a=Nc(t,n,c,o),a!==null)return Qn(a,t,o),lg(a,n,o),!0}return!1}function _f(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(s(479))}else n=Nc(t,a,o,2),n!==null&&Qn(n,t,2)}function kl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function og(t,n){ss=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function lg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kn(t,a)}}var So={readContext:Rn,use:zl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};So.useEffectEvent=sn;var ug={readContext:Rn,use:zl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Gl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Gl(4194308,4,t,n)},useInsertionEffect:function(t,n){Gl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(Cr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(Cr){Re(!0);try{a(n)}finally{Re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=US.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=cf(t);var n=t.queue,a=sg.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Hn();return pf(a,t,n)},useTransition:function(){var t=cf(!1);return t=tg.bind(null,dt,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,c=Hn();if(Ct){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(bt&127)!==0||Dm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,ls(9,{destroy:void 0},Um.bind(null,o,d,a,n),null),a},useId:function(){var t=Hn(),n=Qt.identifierPrefix;if(Ct){var a=Bi,o=Ii;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=bS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Hn().memoizedState=DS.bind(null,dt)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Rn,use:zl,useCallback:Jm,useContext:Rn,useEffect:df,useImperativeHandle:jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:$m,useReducer:Hl,useRef:Wm,useState:function(){return Hl(ra)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return eg(a,qt.memoizedState,t,n)},useTransition:function(){var t=Hl(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:gf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=un();return Pm(a,qt,t,n)},useMemoCache:of,useCacheRefresh:rg};vf.useEffectEvent=Ym;var cg={readContext:Rn,use:zl,useCallback:Jm,useContext:Rn,useEffect:df,useImperativeHandle:jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:$m,useReducer:uf,useRef:Wm,useState:function(){return uf(ra)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return qt===null?pf(a,t,n):eg(a,qt.memoizedState,t,n)},useTransition:function(){var t=uf(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:gf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var a=un();return qt!==null?Pm(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:rg};cg.useEffectEvent=Ym;function xf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),c=Ga(o);c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,o),n!==null&&(Qn(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),c=Ga(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,o),n!==null&&(Qn(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Ga(a);o.tag=2,n!=null&&(o.callback=n),n=Va(t,o,a),n!==null&&(Qn(n,t,a),po(n,t,a))}};function fg(t,n,a,o,c,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(c,d):!0}function dg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function hg(t){yl(t)}function pg(t){console.error(t)}function mg(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function yf(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function _g(t){return t=Ga(t),t.tag=3,t}function vg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){gg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){gg(n,a,o),typeof c!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function LS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&es(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?nu():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(t,o,c)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(t,o,c)),!1}throw Error(s(435,a.tag))}return qf(t,o,c),nu(),!1}if(Ct)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==zc&&(t=Error(s(422),{cause:o}),lo(hi(t,a)))):(o!==zc&&(n=Error(s(423),{cause:o}),lo(hi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=hi(o,a),c=yf(t.stateNode,o,c),Qc(t,c),on!==4&&(on=2)),!1;var d=Error(s(520),{cause:o});if(d=hi(d,a),Co===null?Co=[d]:Co.push(d),on!==4&&(on=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=yf(a.stateNode,o,t),Qc(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Za===null||!Za.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=_g(c),vg(c,t,a,o),Qc(a,c),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),mn=!1;function Cn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):Rr(n,t.child,a,o)}function xg(t,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Er(n),o=nf(t,n,a,x,d,c),R=af(),t!==null&&!mn?(rf(t,n,c),sa(t,n,c)):(Ct&&R&&Bc(n),n.flags|=1,Cn(t,n,o,c),n.child)}function Sg(t,n,a,o,c){if(t===null){var d=a.type;return typeof d=="function"&&!Oc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,yg(t,n,d,o,c)):(t=Tl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Df(t,c)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(x,o)&&t.ref===n.ref)return sa(t,n,c)}return n.flags|=1,t=ea(d,o),t.ref=n.ref,t.return=n,n.child=t}function yg(t,n,a,o,c){if(t!==null){var d=t.memoizedProps;if(ro(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,Df(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,sa(t,n,c)}return Ef(t,n,a,o,c)}function Mg(t,n,a,o){var c=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return Eg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,d!==null?d.cachePool:null),d!==null?Tm(n,d):Jc(),Am(n);else return o=n.lanes=536870912,Eg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(wl(n,d.cachePool),Tm(n,d),Xa(),n.memoizedState=null):(t!==null&&wl(n,null),Jc(),Xa());return Cn(t,n,c,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(t,n,a,o,c){var d=qc();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&wl(n,null),Jc(),Am(n),t!==null&&es(t,n,o,!0),n.childLanes=c,null}function Wl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function bg(t,n,a){return Rr(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function NS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,yo(null,t);if(ef(n),(t=$t)?(t=I0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,An=n,$t=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Wl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(ef(n),c)if(n.flags&256)n.flags&=-257,n=bg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||es(t,n,a,!1),c=(a&t.childLanes)!==0,mn||c){if(o=Qt,o!==null&&(x=Jn(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,xr(t,x),Qn(o,t,x),Mf;nu(),n=bg(t,n,a)}else t=d.treeContext,$t=vi(x.nextSibling),An=n,Ct=!0,Ba=null,gi=!1,t!==null&&cm(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ef(t,n,a,o,c){return Er(n),a=nf(t,n,a,o,void 0,c),o=af(),t!==null&&!mn?(rf(t,n,c),sa(t,n,c)):(Ct&&o&&Bc(n),n.flags|=1,Cn(t,n,a,c),n.child)}function Tg(t,n,a,o,c,d){return Er(n),n.updateQueue=null,a=Cm(n,o,a,c),Rm(t),o=af(),t!==null&&!mn?(rf(t,n,d),sa(t,n,d)):(Ct&&o&&Bc(n),n.flags|=1,Cn(t,n,a,d),n.child)}function Ag(t,n,a,o,c){if(Er(n),n.stateNode===null){var d=Qr,x=a.contextType;typeof x=="object"&&x!==null&&(d=Rn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Zc(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Rn(x):Qr,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(xf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Sf.enqueueReplaceState(d,d.state,null),go(n,o,d,c),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=wr(a,R);d.props=z;var re=d.context,ve=a.contextType;x=Qr,typeof ve=="object"&&ve!==null&&(x=Rn(ve));var Me=a.getDerivedStateFromProps;ve=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||re!==x)&&dg(n,d,o,x),Ha=!1;var oe=n.memoizedState;d.state=oe,go(n,o,d,c),mo(),re=n.memoizedState,R||oe!==re||Ha?(typeof Me=="function"&&(xf(n,a,Me,o),re=n.memoizedState),(z=Ha||fg(n,a,z,o,oe,re,x))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),d.props=o,d.state=re,d.context=x,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Kc(t,n),x=n.memoizedProps,ve=wr(a,x),d.props=ve,Me=n.pendingProps,oe=d.context,re=a.contextType,z=Qr,typeof re=="object"&&re!==null&&(z=Rn(re)),R=a.getDerivedStateFromProps,(re=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Me||oe!==z)&&dg(n,d,o,z),Ha=!1,oe=n.memoizedState,d.state=oe,go(n,o,d,c),mo();var he=n.memoizedState;x!==Me||oe!==he||Ha||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof R=="function"&&(xf(n,a,R,o),he=n.memoizedState),(ve=Ha||fg(n,a,ve,o,oe,he,z)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(re||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,he,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,he,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=z,o=ve):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Rr(n,t.child,null,c),n.child=Rr(n,null,a,c)):Cn(t,n,a,c),n.memoizedState=d.state,t=n.child):t=sa(t,n,c),t}function Rg(t,n,a,o){return yr(),n.flags|=256,Cn(t,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:gm()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function Cg(t,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(c?ka(n):Xa(),(t=$t)?(t=I0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,An=n,$t=null)):t=null,t===null)throw Fa(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Xa(),c=n.mode,R=Yl({mode:"hidden",children:R},c),o=Sr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=bf,yo(null,o)):(ka(n),Rf(n,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(ka(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),R=o.fallback,c=n.mode,o=Yl({mode:"visible",children:o.children},c),R=Sr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Rr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,x,a),n.memoizedState=bf,n=yo(null,o));else if(ka(n),ld(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var re=x.dgst;x=re,o=Error(s(419)),o.stack="",o.digest=x,lo({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(mn||es(t,n,a,!1),x=(a&t.childLanes)!==0,mn||x){if(x=Qt,x!==null&&(o=Jn(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,xr(t,o),Qn(x,t,o),Mf;od(R)||nu(),n=Cf(t,n,a)}else od(R)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,$t=vi(R.nextSibling),An=n,Ct=!0,Ba=null,gi=!1,t!==null&&cm(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return c?(Xa(),R=o.fallback,c=n.mode,z=t.child,re=z.sibling,o=ea(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,re!==null?R=ea(re,R):(R=Sr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,yo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Tf(a):(c=R.cachePool,c!==null?(z=hn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=gm(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=Af(t,x,a),n.memoizedState=bf,yo(t.child,o)):(ka(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Rr(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function wg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vc(t.return,n,a)}function wf(t,n,a,o,c,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=d)}function Dg(t,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var x=ln.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,me(ln,x),Cn(t,n,o,a),o=Ct?oo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,a,n);else if(t.tag===19)wg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),wf(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}wf(n,!0,a,null,d,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(es(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function OS(t,n,a){switch(n.tag){case 3:de(n,n.stateNode.containerInfo),za(n,hn,t.memoizedState.cache),yr();break;case 27:case 5:tt(n);break;case 4:de(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(t,n,a):(ka(n),t=sa(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(es(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Dg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),me(ln,ln.current),o)break;return null;case 22:return n.lanes=0,Mg(t,n,a,n.pendingProps);case 24:za(n,hn,t.memoizedState.cache)}return sa(t,n,a)}function Ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return mn=!1,OS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Ct&&(n.flags&1048576)!==0&&um(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")Oc(t)?(o=wr(t,o),n.tag=1,n=Ag(null,n,t,o,a)):(n.tag=0,n=Ef(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===w){n.tag=11,n=xg(null,n,t,o,a);break e}else if(c===I){n.tag=14,n=Sg(null,n,t,o,a);break e}}throw n=Y(t)||t,Error(s(306,n,""))}}return n;case 0:return Ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=wr(o,n.pendingProps),Ag(t,n,o,c,a);case 3:e:{if(de(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Kc(t,n),go(n,o,null,a);var x=n.memoizedState;if(o=x.cache,za(n,hn,o),o!==d.cache&&kc(n,[hn],a,!0),mo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Rg(t,n,o,a);break e}else if(o!==c){c=hi(Error(s(424)),n),lo(c),n=Rg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=vi(t.firstChild),An=n,Ct=!0,Ba=null,gi=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yr(),o===c){n=sa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=V0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=uu(He.current).createElement(a),o[cn]=n,o[Tn]=t,wn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=V0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Ct&&(o=n.stateNode=z0(n.type,n.pendingProps,He.current),An=n,gi=!0,c=$t,Ja(n.type)?(ud=c,$t=vi(o.firstChild)):$t=c),Cn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((c=o=$t)&&(o=cy(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,An=n,$t=vi(o.firstChild),gi=!1,c=!0):c=!1),c||Fa(n)),tt(n),c=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,ad(c,d)?o=null:x!==null&&ad(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=nf(t,n,TS,null,null,a),Io._currentValue=c),ql(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=$t)&&(a=fy(a,n.pendingProps,gi),a!==null?(n.stateNode=a,An=n,$t=null,t=!0):t=!1),t||Fa(n)),null;case 13:return Cg(t,n,a);case 4:return de(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return xg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Er(n),c=Rn(c),o=o(c),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return Sg(t,n,n.type,n.pendingProps,a);case 15:return yg(t,n,n.type,n.pendingProps,a);case 19:return Dg(t,n,a);case 31:return NS(t,n,a);case 22:return Mg(t,n,a,n.pendingProps);case 24:return Er(n),o=Rn(hn),t===null?(c=qc(),c===null&&(c=Qt,d=Xc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Zc(n),za(n,hn,c)):((t.lanes&a)!==0&&(Kc(t,n),go(n,null,null,a),mo()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),za(n,hn,o)):(o=d.cache,za(n,hn,o),o!==c.cache&&kc(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(t){t.flags|=4}function Uf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw Ar=Ul,Yc}else t.flags&=-16777217}function Lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(a0())t.flags|=8192;else throw Ar=Ul,Yc}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,ds|=n)}function Mo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function PS(t,n,a){var o=n.pendingProps;switch(Fc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(hn),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&($r(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hc())),en(n),null;case 26:var c=n.type,d=n.memoizedState;return t===null?(oa(n),d!==null?(en(n),Lg(n,d)):(en(n),Uf(n,c,null,o,a))):d?d!==t.memoizedState?(oa(n),en(n),Lg(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),en(n),Uf(n,c,t,o,a)),null;case 27:if(Fe(n),a=He.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=be.current,$r(n)?fm(n):(t=z0(c,o,a),n.stateNode=t,oa(n))}return en(n),null;case 5:if(Fe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(d=be.current,$r(n))fm(n);else{var x=uu(He.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}d[cn]=n,d[Tn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(wn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return en(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=He.current,$r(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=An,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C0(t.nodeValue,a)),t||Fa(n,!0)}else t=uu(t).createTextNode(o),t[cn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=$r(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=$r(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[cn]=n}else yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),en(n),null);case 4:return Te(),t===null&&$f(n.stateNode.containerInfo),en(n),null;case 10:return ia(n.type),en(n),null;case 19:if(J(ln),o=n.memoizedState,o===null)return en(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)Mo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Pl(t),d!==null){for(n.flags|=128,Mo(o,!1),t=d.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)sm(a,t),a=a.sibling;return me(ln,ln.current&1|2),Ct&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Mt()>$l&&(n.flags|=128,c=!0,Mo(o,!1),n.lanes=4194304)}else{if(!c)if(t=Pl(d),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ct)return en(n),null}else 2*Mt()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,c=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Mt(),t.sibling=null,a=ln.current,me(ln,c?a&1|2:a&1),Ct&&ta(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ii(n),$c(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(hn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function IS(t,n){switch(Fc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(hn),Te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(ln),null;case 4:return Te(),null;case 10:return ia(n.type),null;case 22:case 23:return ii(n),$c(),t!==null&&J(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(hn),null;case 25:return null;default:return null}}function Ng(t,n){switch(Fc(n),n.tag){case 3:ia(hn),Te();break;case 26:case 27:case 5:Fe(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:J(ln);break;case 10:ia(n.type);break;case 22:case 23:ii(n),$c(),t!==null&&J(br);break;case 24:ia(hn)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==c)}}catch(R){Vt(n,n.return,R)}}function Wa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var z=a,re=R;try{re()}catch(ve){Vt(c,z,ve)}}}o=o.next}while(o!==d)}}catch(ve){Vt(n,n.return,ve)}}function Og(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){Vt(t,t.return,o)}}}function Pg(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Vt(t,n,c)}}function Fi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Vt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Vt(t,n,c)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Vt(t,t.return,c)}}function Lf(t,n,a){try{var o=t.stateNode;ay(o,t.type,a,n),o[Tn]=n}catch(c){Vt(t,t.return,c)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fi));else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,a),n[cn]=t,n[Tn]=a}catch(d){Vt(t,t.return,d)}}var la=!1,gn=!1,Pf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,En=null;function BS(t,n){if(t=t.containerInfo,nd=gu,t=jp(t),Rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,R=-1,z=-1,re=0,ve=0,Me=t,oe=null;t:for(;;){for(var he;Me!==a||c!==0&&Me.nodeType!==3||(R=x+c),Me!==d||o!==0&&Me.nodeType!==3||(z=x+o),Me.nodeType===3&&(x+=Me.nodeValue.length),(he=Me.firstChild)!==null;)oe=Me,Me=he;for(;;){if(Me===t)break t;if(oe===a&&++re===c&&(R=x),oe===d&&++ve===o&&(z=x),(he=Me.nextSibling)!==null)break;Me=oe,oe=Me.parentNode}Me=he}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},gu=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ze=wr(a.type,c);t=o.getSnapshotBeforeUpdate(Ze,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Vt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function Hg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&Eo(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Vt(a,a.return,x)}else{var c=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(a,a.return,x)}}o&64&&Og(a),o&512&&bo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(x){Vt(a,a.return,x)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:ca(t,a),n===null&&o&4&&Ig(a),o&512&&bo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&kg(t,a);break;case 13:ca(t,a),o&4&&Xg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qS.bind(null,a),dy(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||gn,c=la;var d=gn;la=o,(gn=n)&&!d?fa(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),la=c,gn=d}break;case 30:break;default:ca(t,a)}}function Gg(t){var n=t.alternate;n!==null&&(t.alternate=null,Gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&La(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,qn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Vg(t,n,a),a=a.sibling}function Vg(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:gn||Fi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Fi(a,n);var o=nn,c=qn;Ja(a.type)&&(nn=a.stateNode,qn=!1),ua(t,n,a),No(a.stateNode),nn=o,qn=c;break;case 5:gn||Fi(a,n);case 6:if(o=nn,c=qn,nn=null,ua(t,n,a),nn=o,qn=c,nn!==null)if(qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:nn!==null&&(qn?(t=nn,O0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ss(t)):O0(nn,a.stateNode));break;case 4:o=nn,c=qn,nn=a.stateNode.containerInfo,qn=!0,ua(t,n,a),nn=o,qn=c;break;case 0:case 11:case 14:case 15:Wa(2,a,n),gn||Wa(4,a,n),ua(t,n,a);break;case 1:gn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pg(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ua(t,n,a),gn=o;break;default:ua(t,n,a)}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ss(t)}catch(a){Vt(n,n.return,a)}}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ss(t)}catch(a){Vt(n,n.return,a)}}function FS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new zg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new zg),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=FS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=YS.bind(null,t,o);o.then(c,c)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){nn=R.stateNode,qn=!1;break e}break;case 5:nn=R.stateNode,qn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,qn=!0;break e}R=R.return}if(nn===null)throw Error(s(160));Vg(d,x,c),nn=null,qn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t),n=n.sibling}var Ti=null;function Wg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(Wa(3,t,t.return),Eo(3,t),Wa(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(gn||a===null||Fi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ti;if(Yn(n,t),Zn(t),o&512&&(gn||a===null||Fi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ua]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),wn(d,o,a),d[cn]=t,fn(d),o=d;break e;case"link":var x=W0("link","href",c).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}d=c.createElement(o),wn(d,o,a),c.head.appendChild(d);break;case"meta":if(x=W0("meta","content",c).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}d=c.createElement(o),wn(d,o,a),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=t,fn(d),o=d}t.stateNode=o}else q0(c,t.type,t.stateNode);else t.stateNode=X0(c,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?q0(c,t.type,t.stateNode):X0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(gn||a===null||Fi(a,a.return)),a!==null&&o&4&&Lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(gn||a===null||Fi(a,a.return)),t.flags&32){c=t.stateNode;try{zn(c,"")}catch(Ze){Vt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Lf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Pf=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){Vt(t,t.return,Ze)}}break;case 3:if(du=null,c=Ti,Ti=cu(n.containerInfo),Yn(n,t),Ti=c,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(Ze){Vt(t,t.return,Ze)}Pf&&(Pf=!1,qg(t));break;case 4:o=Ti,Ti=cu(t.stateNode.containerInfo),Yn(n,t),Zn(t),Ti=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=Mt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,re=la,ve=gn;if(la=re||c,gn=ve||z,Yn(n,t),gn=ve,la=re,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||la||gn||Dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,c)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=z.stateNode;var Me=z.memoizedProps.style,oe=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ze){Vt(z,z.return,Ze)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ze){Vt(z,z.return,Ze)}}}else if(n.tag===18){if(a===null){z=n;try{var he=z.stateNode;c?P0(he,!0):P0(z.stateNode,!1)}catch(Ze){Vt(z,z.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Bg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,d=Nf(t);Kl(t,d,c);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var R=Nf(t);Kl(t,R,x);break;case 3:case 4:var z=a.stateNode.containerInfo,re=Nf(t);Of(t,re,z);break;default:throw Error(s(161))}}catch(ve){Vt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(t,n.alternate,n),n=n.sibling}function Dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Dr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pg(n,n.return,a),Dr(n);break;case 27:No(n.stateNode);case 26:case 5:Fi(n,n.return),Dr(n);break;case 22:n.memoizedState===null&&Dr(n);break;case 30:Dr(n);break;default:Dr(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:fa(c,d,a),Eo(4,d);break;case 1:if(fa(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(re){Vt(o,o.return,re)}if(o=d,c=o.updateQueue,c!==null){var R=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Em(z[c],R)}catch(re){Vt(o,o.return,re)}}a&&x&64&&Og(d),bo(d,d.return);break;case 27:Fg(d);case 26:case 5:fa(c,d,a),a&&o===null&&x&4&&Ig(d),bo(d,d.return);break;case 12:fa(c,d,a);break;case 31:fa(c,d,a),a&&x&4&&kg(c,d);break;case 13:fa(c,d,a),a&&x&4&&Xg(c,d);break;case 22:d.memoizedState===null&&fa(c,d,a),bo(d,d.return);break;case 30:break;default:fa(c,d,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(t,n,a,o),n=n.sibling}function Yg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&Eo(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Vt(n,n.return,z)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ai(t,n,a,o):To(t,n):d._visibility&2?Ai(t,n,a,o):(d._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&If(x,n);break;case 24:Ai(t,n,a,o),c&2048&&Bf(n.alternate,n);break;default:Ai(t,n,a,o)}}function us(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=a,z=o,re=x.flags;switch(x.tag){case 0:case 11:case 15:us(d,x,R,z,c),Eo(8,x);break;case 23:break;case 22:var ve=x.stateNode;x.memoizedState!==null?ve._visibility&2?us(d,x,R,z,c):To(d,x):(ve._visibility|=2,us(d,x,R,z,c)),c&&re&2048&&If(x.alternate,x);break;case 24:us(d,x,R,z,c),c&&re&2048&&Bf(x.alternate,x);break;default:us(d,x,R,z,c)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:To(a,o),c&2048&&If(o.alternate,o);break;case 24:To(a,o),c&2048&&Bf(o.alternate,o);break;default:To(a,o)}n=n.sibling}}var Ao=8192;function cs(t,n,a){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Zg(t,n,a),t=t.sibling}function Zg(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&Ao&&t.memoizedState!==null&&by(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ti;Ti=cu(t.stateNode.containerInfo),cs(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,cs(t,n,a),Ao=o):cs(t,n,a));break;default:cs(t,n,a)}}function Kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,jg(o,t)}Kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):Ro(t);break;default:Ro(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,jg(o,t)}Kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function jg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var c=o.sibling,d=o.return;if(Gg(o),o===a){En=null;break e}if(c!==null){c.return=d,En=c;break e}En=d}}}var zS={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},HS=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Qt=null,St=null,bt=0,Gt=0,ai=null,qa=!1,fs=!1,Ff=!1,da=0,on=0,Ya=0,Ur=0,zf=0,ri=0,ds=0,Co=null,Kn=null,Hf=!1,Jl=0,Jg=0,$l=1/0,eu=null,Za=null,xn=0,Ka=null,hs=null,ha=0,Gf=0,Vf=null,$g=null,wo=0,kf=null;function si(){return(Ht&2)!==0&&bt!==0?bt&-bt:B.T!==null?Kf():Qs()}function e0(){if(ri===0)if((bt&536870912)===0||Ct){var t=st;st<<=1,(st&3932160)===0&&(st=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Qn(t,n,a){(t===Qt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ps(t,0),Qa(t,bt,ri,!1)),qe(t,a),((Ht&2)===0||t!==Qt)&&(t===Qt&&((Ht&2)===0&&(Ur|=a),on===4&&Qa(t,bt,ri,!1)),zi(t))}function t0(t,n,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),c=o?kS(t,n):Wf(t,n,!0),d=o;do{if(c===0){fs&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!GS(a)){c=Wf(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;c=Co;var z=R.current.memoizedState.isDehydrated;if(z&&(ps(R,x).flags|=256),x=Wf(R,x,!1),x!==2){if(Ff&&!z){R.errorRecoveryDisabledLanes|=d,Ur|=d,c=4;break e}d=Kn,Kn=c,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}c=x}if(d=!1,c!==2)continue}}if(c===1){ps(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ri,!qa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Jl+300-Mt(),10<c)){if(Qa(o,n,ri,!qa),xe(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=L0(n0.bind(null,o,a,Kn,eu,Hf,n,ri,Ur,ds,qa,d,"Throttled",-0,0),c);break e}n0(o,a,Kn,eu,Hf,n,ri,Ur,ds,qa,d,null,-0,0)}}break}while(!0);zi(t)}function n0(t,n,a,o,c,d,x,R,z,re,ve,Me,oe,he){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fi},Zg(n,d,Me);var Ze=(d&62914560)===d?Jl-Mt():(d&4194048)===d?Jg-Mt():0;if(Ze=Ty(Me,Ze),Ze!==null){ha=d,t.cancelPendingCommit=Ze(c0.bind(null,t,n,d,a,o,c,x,R,z,ve,Me,null,oe,he)),Qa(t,d,x,!re);return}}c0(t,n,d,a,o,c,x,R,z)}function GS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!ei(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~zf,n&=~Ur,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-ke(c),x=1<<d;o[d]=-1,c&=~x}a!==0&&Nt(t,a,n)}function tu(){return(Ht&6)===0?(Do(0),!1):!0}function Xf(){if(St!==null){if(Gt===0)var t=St.return;else t=St,na=Mr=null,sf(t),as=null,fo=0,t=St;for(;t!==null;)Ng(t.alternate,t),t=t.return;St=null}}function ps(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,oy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,Xf(),Qt=t,St=a=ea(t.current,null),bt=n,Gt=0,ai=null,qa=!1,fs=we(t,n),Ff=!1,ds=ri=zf=Ur=Ya=on=0,Kn=Co=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-ke(o),d=1<<c;n|=t[c],o&=~d}return da=n,Ml(),a}function i0(t,n){dt=null,B.H=So,n===is||n===Dl?(n=xm(),Gt=3):n===Yc?(n=xm(),Gt=4):Gt=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,St===null&&(on=1,Xl(t,hi(n,t.current)))}function a0(){var t=ni.current;return t===null?!0:(bt&4194048)===bt?_i===null:(bt&62914560)===bt||(bt&536870912)!==0?t===_i:!1}function r0(){var t=B.H;return B.H=So,t===null?So:t}function s0(){var t=B.A;return B.A=zS,t}function nu(){on=4,qa||(bt&4194048)!==bt&&ni.current!==null||(fs=!0),(Ya&134217727)===0&&(Ur&134217727)===0||Qt===null||Qa(Qt,bt,ri,!1)}function Wf(t,n,a){var o=Ht;Ht|=2;var c=r0(),d=s0();(Qt!==t||bt!==n)&&(eu=null,ps(t,n)),n=!1;var x=on;e:do try{if(Gt!==0&&St!==null){var R=St,z=ai;switch(Gt){case 8:Xf(),x=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var re=Gt;if(Gt=0,ai=null,ms(t,R,z,re),a&&fs){x=0;break e}break;default:re=Gt,Gt=0,ai=null,ms(t,R,z,re)}}VS(),x=on;break}catch(ve){i0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,na=Mr=null,Ht=o,B.H=c,B.A=d,St===null&&(Qt=null,bt=0,Ml()),x}function VS(){for(;St!==null;)o0(St)}function kS(t,n){var a=Ht;Ht|=2;var o=r0(),c=s0();Qt!==t||bt!==n?(eu=null,$l=Mt()+500,ps(t,n)):fs=we(t,n);e:do try{if(Gt!==0&&St!==null){n=St;var d=ai;t:switch(Gt){case 1:Gt=0,ai=null,ms(t,n,d,1);break;case 2:case 9:if(_m(d)){Gt=0,ai=null,l0(n);break}n=function(){Gt!==2&&Gt!==9||Qt!==t||(Gt=7),zi(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:_m(d)?(Gt=0,ai=null,l0(n)):(Gt=0,ai=null,ms(t,n,d,7));break;case 5:var x=null;switch(St.tag){case 26:x=St.memoizedState;case 5:case 27:var R=St;if(x?Y0(x):R.stateNode.complete){Gt=0,ai=null;var z=R.sibling;if(z!==null)St=z;else{var re=R.return;re!==null?(St=re,iu(re)):St=null}break t}}Gt=0,ai=null,ms(t,n,d,5);break;case 6:Gt=0,ai=null,ms(t,n,d,6);break;case 8:Xf(),on=6;break e;default:throw Error(s(462))}}XS();break}catch(ve){i0(t,ve)}while(!0);return na=Mr=null,B.H=o,B.A=c,Ht=a,St!==null?0:(Qt=null,bt=0,Ml(),on)}function XS(){for(;St!==null&&!xt();)o0(St)}function o0(t){var n=Ug(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?iu(t):St=n}function l0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Tg(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=Tg(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:sf(n);default:Ng(a,n),n=St=sm(n,da),n=Ug(a,n,da)}t.memoizedProps=t.pendingProps,n===null?iu(t):St=n}function ms(t,n,a,o){na=Mr=null,sf(n),as=null,fo=0;var c=n.return;try{if(LS(t,c,n,a,bt)){on=1,Xl(t,hi(a,t.current)),St=null;return}}catch(d){if(c!==null)throw St=c,d;on=1,Xl(t,hi(a,t.current)),St=null;return}n.flags&32768?(Ct||o===1?t=!0:fs||(bt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),u0(n,t)):iu(n)}function iu(t){var n=t;do{if((n.flags&32768)!==0){u0(n,qa);return}t=n.return;var a=PS(n.alternate,n,da);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);on===0&&(on=5)}function u0(t,n){do{var a=IS(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);on=6,St=null}function c0(t,n,a,o,c,d,x,R,z){t.cancelPendingCommit=null;do au();while(xn!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Lc,Xt(t,a,d,x,R,z),t===Qt&&(St=Qt=null,bt=0),hs=n,Ka=t,ha=a,Gf=d,Vf=c,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ZS(Z,function(){return m0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=H.p,H.p=2,x=Ht,Ht|=4;try{BS(t,n,a)}finally{Ht=x,H.p=c,B.T=o}}xn=1,f0(),d0(),h0()}}function f0(){if(xn===1){xn=0;var t=Ka,n=hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var c=Ht;Ht|=4;try{Wg(n,t);var d=id,x=jp(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&Qp(R.ownerDocument.documentElement,R)){if(z!==null&&Rc(R)){var re=z.start,ve=z.end;if(ve===void 0&&(ve=re),"selectionStart"in R)R.selectionStart=re,R.selectionEnd=Math.min(ve,R.value.length);else{var Me=R.ownerDocument||document,oe=Me&&Me.defaultView||window;if(oe.getSelection){var he=oe.getSelection(),Ze=R.textContent.length,nt=Math.min(z.start,Ze),Zt=z.end===void 0?nt:Math.min(z.end,Ze);!he.extend&&nt>Zt&&(x=Zt,Zt=nt,nt=x);var K=Kp(R,nt),V=Kp(R,Zt);if(K&&V&&(he.rangeCount!==1||he.anchorNode!==K.node||he.anchorOffset!==K.offset||he.focusNode!==V.node||he.focusOffset!==V.offset)){var ie=Me.createRange();ie.setStart(K.node,K.offset),he.removeAllRanges(),nt>Zt?(he.addRange(ie),he.extend(V.node,V.offset)):(ie.setEnd(V.node,V.offset),he.addRange(ie))}}}}for(Me=[],he=R;he=he.parentNode;)he.nodeType===1&&Me.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var ye=Me[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}gu=!!nd,id=nd=null}finally{Ht=c,H.p=o,B.T=a}}t.current=n,xn=2}}function d0(){if(xn===2){xn=0;var t=Ka,n=hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var c=Ht;Ht|=4;try{Hg(t,n.alternate,n)}finally{Ht=c,H.p=o,B.T=a}}xn=3}}function h0(){if(xn===4||xn===3){xn=0,k();var t=Ka,n=hs,a=ha,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,hs=Ka=null,p0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Za=null),Ks(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=H.p,H.p=2,B.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{B.T=n,H.p=c}}(ha&3)!==0&&au(),zi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===kf?wo++:(wo=0,kf=t):wo=0,Do(0)}}function p0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function au(){return f0(),d0(),h0(),m0()}function m0(){if(xn!==5)return!1;var t=Ka,n=Gf;Gf=0;var a=Ks(ha),o=B.T,c=H.p;try{H.p=32>a?32:a,B.T=null,a=Vf,Vf=null;var d=Ka,x=ha;if(xn=0,hs=Ka=null,ha=0,(Ht&6)!==0)throw Error(s(331));var R=Ht;if(Ht|=4,Qg(d.current),Yg(d,d.current,x,a),Ht=R,Do(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ge,d)}catch{}return!0}finally{H.p=c,B.T=o,p0(t,n)}}function g0(t,n,a){n=hi(a,n),n=yf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(qe(t,2),zi(t))}function Vt(t,n,a){if(t.tag===3)g0(t,t,a);else for(;n!==null;){if(n.tag===3){g0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=hi(a,t),a=_g(2),o=Va(n,a,2),o!==null&&(vg(a,o,n,t),qe(o,2),zi(o));break}}n=n.return}}function qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new HS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ff=!0,c.add(a),t=WS.bind(null,t,n,a),n.then(t,t))}function WS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(bt&a)===a&&(on===4||on===3&&(bt&62914560)===bt&&300>Mt()-Jl?(Ht&2)===0&&ps(t,0):zf|=a,ds===bt&&(ds=0)),zi(t)}function _0(t,n){n===0&&(n=Ee()),t=xr(t,n),t!==null&&(qe(t,n),zi(t))}function qS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(t,a)}function YS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),_0(t,a)}function ZS(t,n){return Ft(t,n)}var ru=null,gs=null,Yf=!1,su=!1,Zf=!1,ja=0;function zi(t){t!==gs&&t.next===null&&(gs===null?ru=gs=t:gs=gs.next=t),su=!0,Yf||(Yf=!0,QS())}function Do(t,n){if(!Zf&&su){Zf=!0;do for(var a=!1,o=ru;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=c&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,y0(o,d))}else d=bt,d=xe(o,o===Qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,y0(o,d));o=o.next}while(a);Zf=!1}}function KS(){v0()}function v0(){su=Yf=!1;var t=0;ja!==0&&sy()&&(t=ja);for(var n=Mt(),a=null,o=ru;o!==null;){var c=o.next,d=x0(o,n);d===0?(o.next=null,a===null?ru=c:a.next=c,c===null&&(gs=a)):(a=o,(t!==0||(d&3)!==0)&&(su=!0)),o=c}xn!==0&&xn!==5||Do(t),ja!==0&&(ja=0)}function x0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-ke(d),R=1<<x,z=c[x];z===-1?((R&a)===0||(R&o)!==0)&&(c[x]=ze(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Qt,a=bt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Rt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Rt(o),Ks(a)){case 2:case 8:a=E;break;case 32:a=Z;break;case 268435456:a=pe;break;default:a=Z}return o=S0.bind(null,t),a=Ft(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Rt(o),t.callbackPriority=2,t.callbackNode=null,2}function S0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(au()&&t.callbackNode!==a)return null;var o=bt;return o=xe(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(t0(t,o,n),x0(t,Mt()),t.callbackNode!=null&&t.callbackNode===a?S0.bind(null,t):null)}function y0(t,n){if(au())return null;t0(t,n,!0)}function QS(){ly(function(){(Ht&6)!==0?Ft(L,KS):v0()})}function Kf(){if(ja===0){var t=ts;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),ja=t}return ja}function M0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ei(""+t)}function E0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function jS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=M0((c[Tn]||null).action),x=o.submitter;x&&(n=(n=x[Tn]||null)?M0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new vl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var z=x?E0(c,x):new FormData(c);mf(a,{pending:!0,data:z,method:c.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=x?E0(c,x):new FormData(c),mf(a,{pending:!0,data:z,method:c.method,action:d},d,z))},currentTarget:c}]})}}for(var Qf=0;Qf<Uc.length;Qf++){var jf=Uc[Qf],JS=jf.toLowerCase(),$S=jf[0].toUpperCase()+jf.slice(1);bi(JS,"on"+$S)}bi(em,"onAnimationEnd"),bi(tm,"onAnimationIteration"),bi(nm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(mS,"onTransitionRun"),bi(gS,"onTransitionStart"),bi(_S,"onTransitionCancel"),bi(im,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ey=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function b0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],z=R.instance,re=R.currentTarget;if(R=R.listener,z!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=re;try{d(c)}catch(ve){yl(ve)}c.currentTarget=null,d=z}else for(x=0;x<o.length;x++){if(R=o[x],z=R.instance,re=R.currentTarget,R=R.listener,z!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=re;try{d(c)}catch(ve){yl(ve)}c.currentTarget=null,d=z}}}}function yt(t,n){var a=n[hr];a===void 0&&(a=n[hr]=new Set);var o=t+"__bubble";a.has(o)||(T0(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),T0(a,t,o,n)}var ou="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[ou]){t[ou]=!0,pl.forEach(function(a){a!=="selectionchange"&&(ey.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ou]||(n[ou]=!0,Jf("selectionchange",!1,n))}}function T0(t,n,a,o){switch(e_(n)){case 2:var c=Cy;break;case 8:c=wy;break;default:c=pd}a=c.bind(null,n,a,t),c=void 0,!vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=ji(R),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=d=x;continue e}R=R.parentNode}}o=o.return}Dp(function(){var re=d,ve=gc(a),Me=[];e:{var oe=am.get(t);if(oe!==void 0){var he=vl,Ze=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":he=Yx;break;case"focusin":Ze="focus",he=Mc;break;case"focusout":Ze="blur",he=Mc;break;case"beforeblur":case"afterblur":he=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Qx;break;case em:case tm:case nm:he=Fx;break;case im:he=Jx;break;case"scroll":case"scrollend":he=Nx;break;case"wheel":he=eS;break;case"copy":case"cut":case"paste":he=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Pp;break;case"toggle":case"beforetoggle":he=nS}var nt=(n&4)!==0,Zt=!nt&&(t==="scroll"||t==="scrollend"),K=nt?oe!==null?oe+"Capture":null:oe;nt=[];for(var V=re,ie;V!==null;){var ye=V;if(ie=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ie===null||K===null||(ye=Js(V,K),ye!=null&&nt.push(Lo(V,ye,ie))),Zt)break;V=V.return}0<nt.length&&(oe=new he(oe,Ze,null,a,ve),Me.push({event:oe,listeners:nt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",oe&&a!==mc&&(Ze=a.relatedTarget||a.fromElement)&&(ji(Ze)||Ze[Xn]))break e;if((he||oe)&&(oe=ve.window===ve?ve:(oe=ve.ownerDocument)?oe.defaultView||oe.parentWindow:window,he?(Ze=a.relatedTarget||a.toElement,he=re,Ze=Ze?ji(Ze):null,Ze!==null&&(Zt=u(Ze),nt=Ze.tag,Ze!==Zt||nt!==5&&nt!==27&&nt!==6)&&(Ze=null)):(he=null,Ze=re),he!==Ze)){if(nt=Np,ye="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Pp,ye="onPointerLeave",K="onPointerEnter",V="pointer"),Zt=he==null?oe:mr(he),ie=Ze==null?oe:mr(Ze),oe=new nt(ye,V+"leave",he,a,ve),oe.target=Zt,oe.relatedTarget=ie,ye=null,ji(ve)===re&&(nt=new nt(K,V+"enter",Ze,a,ve),nt.target=ie,nt.relatedTarget=Zt,ye=nt),Zt=ye,he&&Ze)t:{for(nt=ty,K=he,V=Ze,ie=0,ye=K;ye;ye=nt(ye))ie++;ye=0;for(var $e=V;$e;$e=nt($e))ye++;for(;0<ie-ye;)K=nt(K),ie--;for(;0<ye-ie;)V=nt(V),ye--;for(;ie--;){if(K===V||V!==null&&K===V.alternate){nt=K;break t}K=nt(K),V=nt(V)}nt=null}else nt=null;he!==null&&A0(Me,oe,he,nt,!1),Ze!==null&&Zt!==null&&A0(Me,Zt,Ze,nt,!0)}}e:{if(oe=re?mr(re):window,he=oe.nodeName&&oe.nodeName.toLowerCase(),he==="select"||he==="input"&&oe.type==="file")var It=kp;else if(Gp(oe))if(Xp)It=dS;else{It=cS;var Ke=uS}else he=oe.nodeName,!he||he.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?re&&ci(re.elementType)&&(It=kp):It=fS;if(It&&(It=It(t,re))){Vp(Me,It,a,ve);break e}Ke&&Ke(t,oe,re),t==="focusout"&&re&&oe.type==="number"&&re.memoizedProps.value!=null&&vn(oe,"number",oe.value)}switch(Ke=re?mr(re):window,t){case"focusin":(Gp(Ke)||Ke.contentEditable==="true")&&(Yr=Ke,Cc=re,so=null);break;case"focusout":so=Cc=Yr=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,Jp(Me,a,ve);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Jp(Me,a,ve)}var ht;if(bc)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else qr?zp(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Ip&&a.locale!=="ko"&&(qr||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&qr&&(ht=Up()):(Pa=ve,xc="value"in Pa?Pa.value:Pa.textContent,qr=!0)),Ke=lu(re,Tt),0<Ke.length&&(Tt=new Op(Tt,t,null,a,ve),Me.push({event:Tt,listeners:Ke}),ht?Tt.data=ht:(ht=Hp(a),ht!==null&&(Tt.data=ht)))),(ht=aS?rS(t,a):sS(t,a))&&(Tt=lu(re,"onBeforeInput"),0<Tt.length&&(Ke=new Op("onBeforeInput","beforeinput",null,a,ve),Me.push({event:Ke,listeners:Tt}),Ke.data=ht)),jS(Me,t,re,a,ve)}b0(Me,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lu(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Js(t,a),c!=null&&o.unshift(Lo(t,c,d)),c=Js(t,n),c!=null&&o.push(Lo(t,c,d))),t.tag===3)return o;t=t.return}return[]}function ty(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function A0(t,n,a,o,c){for(var d=n._reactName,x=[];a!==null&&a!==o;){var R=a,z=R.alternate,re=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||re===null||(z=re,c?(re=Js(a,d),re!=null&&x.unshift(Lo(a,re,z))):c||(re=Js(a,d),re!=null&&x.push(Lo(a,re,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function C0(t,n){return n=R0(n),R0(t)===n}function Yt(t,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(t,""+o);break;case"className":Ne(t,"class",o);break;case"tabIndex":Ne(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,a,o);break;case"style":tn(t,o,d);break;case"data":if(n!=="object"){Ne(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ei(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",c.name,c,null),Yt(t,n,"formEncType",c.formEncType,c,null),Yt(t,n,"formMethod",c.formMethod,c,null),Yt(t,n,"formTarget",c.formTarget,c,null)):(Yt(t,n,"encType",c.encType,c,null),Yt(t,n,"method",c.method,c,null),Yt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ei(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=fi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ei(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Xe(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wt.get(a)||a,Xe(t,a,o))}}function td(t,n,a,o,c,d){switch(a){case"style":tn(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zn(t,o):(typeof o=="number"||typeof o=="bigint")&&zn(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!js.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=t[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Xe(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,d,x,a,null)}}c&&Yt(t,n,"srcSet",a.srcSet,a,null),o&&Yt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=d=x=c=null,z=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":c=ve;break;case"type":x=ve;break;case"checked":z=ve;break;case"defaultChecked":re=ve;break;case"value":d=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Yt(t,n,o,ve,a,null)}}We(t,d,R,z,re,x,c,!1);return;case"select":yt("invalid",t),o=x=d=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Yt(t,n,c,R,a,null)}n=d,a=x,t.multiple=!!o,n!=null?mt(t,!!o,n,!1):a!=null&&mt(t,!!o,a,!0);return;case"textarea":yt("invalid",t),d=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":c=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Yt(t,n,x,R,a,null)}$n(t,o,c,d);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Yt(t,n,z,o,a,null));return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)yt(Uo[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,re,o,a,null)}return;default:if(ci(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&td(t,n,ve,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Yt(t,n,R,o,a,null))}function ay(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,x=null,R=null,z=null,re=null,ve=null;for(he in a){var Me=a[he];if(a.hasOwnProperty(he)&&Me!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":z=Me;default:o.hasOwnProperty(he)||Yt(t,n,he,null,o,Me)}}for(var oe in o){var he=o[oe];if(Me=a[oe],o.hasOwnProperty(oe)&&(he!=null||Me!=null))switch(oe){case"type":d=he;break;case"name":c=he;break;case"checked":re=he;break;case"defaultChecked":ve=he;break;case"value":x=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Me&&Yt(t,n,oe,he,o,Me)}}dn(t,x,R,z,re,ve,d,c);return;case"select":he=x=R=oe=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":he=z;default:o.hasOwnProperty(d)||Yt(t,n,d,null,o,z)}for(c in o)if(d=o[c],z=a[c],o.hasOwnProperty(c)&&(d!=null||z!=null))switch(c){case"value":oe=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==z&&Yt(t,n,c,d,o,z)}n=R,a=x,o=he,oe!=null?mt(t,!!a,oe,!1):!!o!=!!a&&(n!=null?mt(t,!!a,n,!0):mt(t,!!a,a?[]:"",!1));return;case"textarea":he=oe=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(t,n,R,null,o,c)}for(x in o)if(c=o[x],d=a[x],o.hasOwnProperty(x)&&(c!=null||d!=null))switch(x){case"value":oe=c;break;case"defaultValue":he=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Yt(t,n,x,c,o,d)}Fn(t,oe,he);return;case"option":for(var Ze in a)oe=a[Ze],a.hasOwnProperty(Ze)&&oe!=null&&!o.hasOwnProperty(Ze)&&(Ze==="selected"?t.selected=!1:Yt(t,n,Ze,null,o,oe));for(z in o)oe=o[z],he=a[z],o.hasOwnProperty(z)&&oe!==he&&(oe!=null||he!=null)&&(z==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Yt(t,n,z,oe,o,he));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)oe=a[nt],a.hasOwnProperty(nt)&&oe!=null&&!o.hasOwnProperty(nt)&&Yt(t,n,nt,null,o,oe);for(re in o)if(oe=o[re],he=a[re],o.hasOwnProperty(re)&&oe!==he&&(oe!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Yt(t,n,re,oe,o,he)}return;default:if(ci(n)){for(var Zt in a)oe=a[Zt],a.hasOwnProperty(Zt)&&oe!==void 0&&!o.hasOwnProperty(Zt)&&td(t,n,Zt,void 0,o,oe);for(ve in o)oe=o[ve],he=a[ve],!o.hasOwnProperty(ve)||oe===he||oe===void 0&&he===void 0||td(t,n,ve,oe,o,he);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!o.hasOwnProperty(K)&&Yt(t,n,K,null,o,oe);for(Me in o)oe=o[Me],he=a[Me],!o.hasOwnProperty(Me)||oe===he||oe==null&&he==null||Yt(t,n,Me,oe,o,he)}function w0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ry(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,x=c.initiatorType,R=c.duration;if(d&&R&&w0(x)){for(x=0,R=c.responseEnd,o+=1;o<a.length;o++){var z=a[o],re=z.startTime;if(re>R)break;var ve=z.transferSize,Me=z.initiatorType;ve&&w0(Me)&&(z=z.responseEnd,x+=ve*(z<R?1:(R-re)/(z-re)))}if(--o,n+=8*(d+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function sy(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(t){return N0.resolve(null).then(t).catch(uy)}:L0;function uy(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function O0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")No(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,No(a);for(var d=a.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Ua]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&No(t.ownerDocument.body);a=c}while(a);Ss(n)}function P0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cy(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function fy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function dy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ud=null;function B0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function z0(t,n,a){switch(n=uu(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function No(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);La(t)}var xi=new Map,H0=new Set;function cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=H.d;H.d={f:hy,r:py,D:my,C:gy,L:_y,m:vy,X:Sy,S:xy,M:yy};function hy(){var t=pa.f(),n=tu();return t||n}function py(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?ig(n):pa.r(t)}var _s=typeof document>"u"?null:document;function G0(t,n,a){var o=_s;if(o&&typeof n=="string"&&n){var c=pt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),H0.has(c)||(H0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function my(t){pa.D(t),G0("dns-prefetch",t,null)}function gy(t,n){pa.C(t,n),G0("preconnect",t,n)}function _y(t,n,a){pa.L(t,n,a);var o=_s;if(o&&t&&n){var c='link[rel="preload"][as="'+pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+pt(a.imageSizes)+'"]')):c+='[href="'+pt(t)+'"]';var d=c;switch(n){case"style":d=vs(t);break;case"script":d=xs(t)}xi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Oo(d))||n==="script"&&o.querySelector(Po(d))||(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function vy(t,n){pa.m(t,n);var a=_s;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+pt(o)+'"][href="'+pt(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xs(t)}if(!xi.has(d)&&(t=v({rel:"modulepreload",href:t},n),xi.set(d,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(d)))return}o=a.createElement("link"),wn(o,"link",t),fn(o),a.head.appendChild(o)}}}function xy(t,n,a){pa.S(t,n,a);var o=_s;if(o&&t){var c=Na(o).hoistableStyles,d=vs(t);n=n||"default";var x=c.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Oo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(d))&&cd(t,a);var z=x=o.createElement("link");fn(z),wn(z,"link",t),z._p=new Promise(function(re,ve){z.onload=re,z.onerror=ve}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fu(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(d,x)}}}function Sy(t,n){pa.X(t,n);var a=_s;if(a&&t){var o=Na(a).hoistableScripts,c=xs(t),d=o.get(c);d||(d=a.querySelector(Po(c)),d||(t=v({src:t,async:!0},n),(n=xi.get(c))&&fd(t,n),d=a.createElement("script"),fn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function yy(t,n){pa.M(t,n);var a=_s;if(a&&t){var o=Na(a).hoistableScripts,c=xs(t),d=o.get(c);d||(d=a.querySelector(Po(c)),d||(t=v({src:t,async:!0,type:"module"},n),(n=xi.get(c))&&fd(t,n),d=a.createElement("script"),fn(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function V0(t,n,a,o){var c=(c=He.current)?cu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vs(a.href),a=Na(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=vs(a.href);var d=Na(c).hoistableStyles,x=d.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=c.querySelector(Oo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),d||My(c,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(a),a=Na(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function vs(t){return'href="'+pt(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function My(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),fn(n),t.head.appendChild(n))}function xs(t){return'[src="'+pt(t)+'"]'}function Po(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pt(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),wn(o,"style",c),fu(o,a.precedence,t),n.instance=o;case"stylesheet":c=vs(a.href);var d=t.querySelector(Oo(c));if(d)return n.state.loading|=4,n.instance=d,fn(d),d;o=k0(a),(c=xi.get(c))&&cd(o,c),d=(t.ownerDocument||t).createElement("link"),fn(d);var x=d;return x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),wn(d,"link",o),n.state.loading|=4,fu(d,a.precedence,t),n.instance=d;case"script":return d=xs(a.src),(c=t.querySelector(Po(d)))?(n.instance=c,fn(c),c):(o=a,(c=xi.get(d))&&(o=v({},a),fd(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),fn(c),wn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fu(o,a.precedence,t));return n.instance}function fu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var du=null;function W0(t,n,a){if(du===null){var o=new Map,c=du=new Map;c.set(a,o)}else c=du,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[Ua]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function q0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ey(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function by(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=vs(o.href),d=n.querySelector(Oo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,fn(d);return}d=n.ownerDocument||n,o=k0(o),(c=xi.get(c))&&cd(o,c),d=d.createElement("link"),fn(d);var x=d;x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function Ty(t,n){return t.stylesheets&&t.count===0&&mu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*ry());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pu=null;function mu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pu=new Map,n.forEach(Ay,t),pu=null,hu.call(t))}function Ay(t,n){if(!(n.state.loading&4)){var a=pu.get(t);if(a)var o=a.get(null);else{a=new Map,pu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var x=c[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,c),a.set(x,c),this.count++,o=hu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:F,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Ry(t,n,a,o,c,d,x,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Z0(t,n,a,o,c,d,x,R,z,re,ve,Me){return t=new Ry(t,n,a,x,z,re,ve,Me,R),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),t.current=d,d.stateNode=t,n=Xc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Zc(d),t}function K0(t){return t?(t=Qr,t):Qr}function Q0(t,n,a,o,c,d){c=K0(c),o.context===null?o.context=c:o.pendingContext=c,o=Ga(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Va(t,o,n),a!==null&&(Qn(a,t,n),po(a,t,n))}function j0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){j0(t,n),(t=t.alternate)&&j0(t,n)}function J0(t){if(t.tag===13||t.tag===31){var n=xr(t,67108864);n!==null&&Qn(n,t,67108864),hd(t,67108864)}}function $0(t){if(t.tag===13||t.tag===31){var n=si();n=Zs(n);var a=xr(t,n);a!==null&&Qn(a,t,n),hd(t,n)}}var gu=!0;function Cy(t,n,a,o){var c=B.T;B.T=null;var d=H.p;try{H.p=2,pd(t,n,a,o)}finally{H.p=d,B.T=c}}function wy(t,n,a,o){var c=B.T;B.T=null;var d=H.p;try{H.p=8,pd(t,n,a,o)}finally{H.p=d,B.T=c}}function pd(t,n,a,o){if(gu){var c=md(o);if(c===null)ed(t,n,o,_u,a),t_(t,o);else if(Uy(c,t,n,a,o))o.stopPropagation();else if(t_(t,o),n&4&&-1<Dy.indexOf(t)){for(;c!==null;){var d=Ji(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ce(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var z=1<<31-ke(x);R.entanglements[1]|=z,x&=~z}zi(d),(Ht&6)===0&&($l=Mt()+500,Do(0))}}break;case 31:case 13:R=xr(d,2),R!==null&&Qn(R,d,2),tu(),hd(d,2)}if(d=md(o),d===null&&ed(t,n,o,_u,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=gc(t),gd(t)}var _u=null;function gd(t){if(_u=null,t=ji(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _u=t,null}function e_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case L:return 2;case E:return 8;case Z:case ae:return 32;case pe:return 268435456;default:return 32}default:return 32}}var _d=!1,$a=null,er=null,tr=null,Bo=new Map,Fo=new Map,nr=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(t,n,a,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=Ji(n),n!==null&&J0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Uy(t,n,a,o,c){switch(n){case"focusin":return $a=zo($a,t,n,a,o,c),!0;case"dragenter":return er=zo(er,t,n,a,o,c),!0;case"mouseover":return tr=zo(tr,t,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Bo.set(d,zo(Bo.get(d)||null,t,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Fo.set(d,zo(Fo.get(d)||null,t,n,a,o,c)),!0}return!1}function n_(t){var n=ji(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,kr(t.priority,function(){$0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,kr(t.priority,function(){$0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mc=o,a.target.dispatchEvent(o),mc=null}else return n=Ji(a),n!==null&&J0(n),t.blockedOn=a,!1;n.shift()}return!0}function i_(t,n,a){vu(t)&&a.delete(n)}function Ly(){_d=!1,$a!==null&&vu($a)&&($a=null),er!==null&&vu(er)&&(er=null),tr!==null&&vu(tr)&&(tr=null),Bo.forEach(i_),Fo.forEach(i_)}function xu(t,n){t.blockedOn===n&&(t.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ly)))}var Su=null;function a_(t){Su!==t&&(Su=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=Ji(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ss(t){function n(z){return xu(z,t)}$a!==null&&xu($a,t),er!==null&&xu(er,t),tr!==null&&xu(tr,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<nr.length;a++){var o=nr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&nr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],x=c[Tn]||null;if(typeof d=="function")x||a_(a);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(c=d,x=d[Tn]||null)R=x.formAction;else if(gd(c)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),a_(a)}}}function r_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function vd(t){this._internalRoot=t}yu.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Q0(a,o,t,n,null,null)},yu.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q0(t.current,2,null,t,null,null),tu(),n[Xn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Qs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<nr.length&&n!==0&&n<nr[a].priority;a++);nr.splice(a,0,t),a===0&&n_(t)}};var s_=e.version;if(s_!=="19.2.3")throw Error(s(527,s_,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Ny={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{ge=Mu.inject(Ny),_e=Mu}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=hg,d=pg,x=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Z0(t,1,!1,null,null,a,o,null,c,d,x,r_),t[Xn]=n.current,$f(t),new vd(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",d=hg,x=pg,R=mg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Z0(t,1,!0,n,a??null,o,c,z,d,x,R,r_),n.context=K0(null),a=n.current,o=si(),o=Zs(o),c=Ga(o),c.callback=null,Va(a,c,o),a=o,n.current.lanes=a,qe(n,a),zi(n),t[Xn]=n.current,$f(t),new yu(n)},Go.version="19.2.3",Go}var g_;function ky(){if(g_)return yd.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yd.exports=Vy(),yd.exports}var Xy=ky();var Jh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Rv=/^[\\/]{2}/;function Wy(r,e){return e+r.replace(/\\/g,"/")}var __="popstate";function v_(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function qy(r={}){function e(s,l){let u=l.state?.masked,{pathname:f,search:h,hash:m}=u||s.location;return oh("",{pathname:f,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function i(s,l){return typeof l=="string"?l:zs(l)}return Zy(e,i,null,r)}function Sn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yy(){return Math.random().toString(36).substring(2,10)}function x_(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function oh(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ol(e):e,state:i,key:e&&e.key||s||Yy(),mask:l}}function zs({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function ol(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Zy(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,h="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=_(),S=y==null?null:y-p;p=y,m&&m({action:h,location:C.location,delta:S})}function g(y,S){h="PUSH";let O=v_(y)?y:oh(C.location,y,S);p=_()+1;let F=x_(O,p),w=C.createHref(O.mask||O);try{f.pushState(F,"",w)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;l.location.assign(w)}u&&m&&m({action:h,location:C.location,delta:1})}function M(y,S){h="REPLACE";let O=v_(y)?y:oh(C.location,y,S);p=_();let F=x_(O,p),w=C.createHref(O.mask||O);f.replaceState(F,"",w),u&&m&&m({action:h,location:C.location,delta:0})}function b(y){return Ky(l,y)}let C={get action(){return h},get location(){return r(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(__,v),m=y,()=>{l.removeEventListener(__,v),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let S=b(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:M,go(y){return f.go(y)}};return C}function Ky(r,e,i=!1){let s="http://localhost";r&&(s=r.location.origin!=="null"?r.location.origin:r.location.href),Sn(s,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:zs(e);return l=l.replace(/ $/,"%20"),!i&&Rv.test(l)&&(l=s+l),new URL(l,s)}function Cv(r,e,i="/"){return Qy(r,e,i,!1)}function Qy(r,e,i,s,l){let u=typeof e=="string"?ol(e):e,f=Aa(u.pathname||"/",i);if(f==null)return null;let h=jy(r),m=null,p=lM(f);for(let _=0;m==null&&_<h.length;++_)m=oM(h[_],p,s);return m}function jy(r){let e=wv(r);return Jy(e),e}function wv(r,e=[],i=[],s="",l=!1){let u=(f,h,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;Sn(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let v=Li([s,_.relativePath]),g=i.concat(_);f.children&&f.children.length>0&&(Sn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),wv(f.children,e,g,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:rM(v,f.index),routesMeta:g.map((M,b)=>{let[C,y]=Lv(M.relativePath,M.caseSensitive,b===g.length-1);return{...M,matcher:C,compiledParams:y}})})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of Dv(f.path))u(f,h,!0,m)}),e}function Dv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=Dv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function Jy(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:sM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var $y=/^:[\w-]+$/,eM=3,tM=2,nM=1,iM=10,aM=-2,S_=r=>r==="*";function rM(r,e){let i=r.split("/"),s=i.length;return i.some(S_)&&(s+=aM),e&&(s+=tM),i.filter(l=>!S_(l)).reduce((l,u)=>l+($y.test(u)?eM:u===""?nM:iM),s)}function sM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function oM(r,e,i=!1){let{routesMeta:s}=r,l={},u="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g=m.matcher&&m.compiledParams?Uv(v,_,m.matcher,m.compiledParams):ec(v,_),M=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=ec({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Li([u,g.pathname]),pathnameBase:fM(Li([u,g.pathnameBase])),route:M}),g.pathnameBase!=="/"&&(u=Li([u,g.pathnameBase]))}return f}function ec(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=Lv(r.path,r.caseSensitive,r.end);return Uv(r,e,i,s)}function Uv(r,e,i,s){let l=e.match(i);if(!l)return null;let u=l[0],f=Hs(u,1),h=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:v},g)=>{if(_==="*"){let b=h[g]||"";f=Hs(u.slice(0,u.length-b.length),1)}const M=h[g];return v&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:r}}function Lv(r,e=!1,i=!0){qi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,_)=>{if(s.push({paramName:h,isOptional:m!=null}),m){let v=_.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function lM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Aa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function uM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?ol(r):r,u;return i?(i=Ov(i),i.startsWith("/")||i.startsWith("\\")?u=y_(i.substring(1),"/"):u=y_(i,e)):u=e,{pathname:u,search:dM(s),hash:hM(l)}}function y_(r,e){let i=Hs(e).split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Td(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Nv(r){let e=cM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function $h(r,e,i,s=!1){let l;typeof r=="string"?l=ol(r):(l={...r},Sn(!l.pathname||!l.pathname.includes("?"),Td("?","pathname","search",l)),Sn(!l.pathname||!l.pathname.includes("#"),Td("#","pathname","hash",l)),Sn(!l.search||!l.search.includes("#"),Td("#","search","hash",l)));let u=r===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),v-=1;l.pathname=g.join("/")}h=v>=0?e[v]:"/"}let m=uM(l,h),p=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var Ov=r=>r.replace(/[\\/]{2,}/g,"/"),Li=r=>Ov(r.join("/"));function Hs(r,e=0){let i=r.length;for(;i>e&&r.charCodeAt(i-1)===47;)i--;return i===r.length?r:r.slice(0,i)}var fM=r=>Hs(r).replace(/^\/*/,"/"),dM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,hM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,pM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function mM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function gM(r){let e=r.map(i=>i.route.path).filter(Boolean);return Li(e)||"/"}var Pv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Iv(r,e){let i=r;if(typeof i!="string"||!Jh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Pv)try{let u=new URL(window.location.href),f=Rv.test(i)?new URL(Wy(i,u.protocol)):new URL(i),h=Aa(f.pathname,e);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{qi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var M_=new URL("http://localhost");function Bv(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),M_)}catch{return M_}}function Ad(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function _M(r,e){if(r.startsWith("//"))return!0;let i=e.protocol.toLowerCase();return r.toLowerCase().startsWith(i)?e.host===""||r.slice(i.length).startsWith("//"):!1}function Fv(r,e,i,s){let l=null;try{l=r==null?null:new URL(r,i)}catch{}let u=new URL(e,i),f=l!=null&&!Ad(l,i),h=!Ad(u,i);if(s==="reject"){if(f||h)throw new Error("External navigation is not allowed")}else if(h&&(l==null||!_M(r,l)||!Ad(l,u)))throw new Error("External navigation is not allowed")}var zv=["POST","PUT","PATCH","DELETE"];new Set(zv);var vM=["GET",...zv];new Set(vM);var xM=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function SM(r){try{return xM.includes(new URL(r).protocol)}catch{return!1}}var ks=Se.createContext(null);ks.displayName="DataRouter";var oc=Se.createContext(null);oc.displayName="DataRouterState";var Hv=Se.createContext(!1);function yM(){return Se.useContext(Hv)}var Gv=Se.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var MM=Se.createContext(new Map);MM.displayName="Fetchers";var EM=Se.createContext(null);EM.displayName="Await";var Mi=Se.createContext(null);Mi.displayName="Navigation";var lc=Se.createContext(null);lc.displayName="Location";var Ca=Se.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var ep=Se.createContext(null);ep.displayName="RouteError";var Vv="REACT_ROUTER_ERROR",bM="REDIRECT",TM="ROUTE_ERROR_RESPONSE";function AM(r){if(r.startsWith(`${Vv}:${bM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function RM(r){if(r.startsWith(`${Vv}:${TM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new pM(e.status,e.statusText,e.data)}catch{}}function CM(r,{relative:e}={}){Sn(ll(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Se.useContext(Mi),{hash:l,pathname:u,search:f}=ul(r,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:Li([i,u])),s.createHref({pathname:h,search:f,hash:l})}function ll(){return Se.useContext(lc)!=null}function wa(){return Sn(ll(),"useLocation() may be used only in the context of a <Router> component."),Se.useContext(lc).location}var kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xv(r){Se.useContext(Mi).static||Se.useLayoutEffect(r)}function wM(){let{isDataRoute:r}=Se.useContext(Ca);return r?VM():DM()}function DM(){Sn(ll(),"useNavigate() may be used only in the context of a <Router> component.");let r=Se.useContext(ks),{basename:e,navigator:i}=Se.useContext(Mi),{matches:s}=Se.useContext(Ca),{pathname:l}=wa(),u=JSON.stringify(Nv(s)),f=Se.useRef(!1);return Xv(()=>{f.current=!0}),Se.useCallback((m,p={})=>{if(qi(f.current,kv),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=$h(m,JSON.parse(u),l,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Li([e,_.pathname])),Fv(typeof m=="string"?m:zs(m),i.createHref(_),Bv(i),"reject"),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,r])}Se.createContext(null);function ul(r,{relative:e}={}){let{matches:i}=Se.useContext(Ca),{pathname:s}=wa(),l=JSON.stringify(Nv(i));return Se.useMemo(()=>$h(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function UM(r,e,i){Sn(ll(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=Se.useContext(Mi),{matches:l}=Se.useContext(Ca),u=l[l.length-1],f=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",p=u&&u.route;{let y=p&&p.path||"";qv(h,!p||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let _=wa(),v;v=_;let g=v.pathname||"/",M=g;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=i&&i.state.matches.length?i.state.matches.map(y=>Object.assign(y,{route:i.manifest[y.route.id]||y.route})):Cv(r,{pathname:M});return qi(p||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),qi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),IM(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},f,y.params),pathname:Li([m,s.encodeLocation?s.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Li([m,s.encodeLocation?s.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),l,i)}function LM(){let r=GM(),e=mM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=Se.createElement(Se.Fragment,null,Se.createElement("p",null,"💿 Hey developer 👋"),Se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Se.createElement("code",{style:u},"ErrorBoundary")," or"," ",Se.createElement("code",{style:u},"errorElement")," prop on your route.")),Se.createElement(Se.Fragment,null,Se.createElement("h2",null,"Unexpected Application Error!"),Se.createElement("h3",{style:{fontStyle:"italic"}},e),i?Se.createElement("pre",{style:l},i):null,f)}var NM=Se.createElement(LM,null),Wv=class extends Se.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=RM(r.digest);i&&(r=i)}let e=r!==void 0?Se.createElement(Ca.Provider,{value:this.props.routeContext},Se.createElement(ep.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?Se.createElement(OM,{error:r},e):e}};Wv.contextType=Hv;var Rd=new WeakMap;function OM({children:r,error:e}){let{basename:i,navigator:s}=Se.useContext(Mi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let l=AM(e.digest);if(l){let u=Rd.get(e);if(u)throw u;let f=Iv(l.location,i),h=f.absoluteURL||f.to;if(Fv(l.location,h,Bv(s),"allow-explicit"),SM(h))throw new Error("Invalid redirect location");if(Pv&&!Rd.get(e))if(f.isExternal||l.reloadDocument)window.location.href=h;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:l.replace}));throw Rd.set(e,m),m}return Se.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return r}function PM({routeContext:r,match:e,children:i}){let s=Se.useContext(ks);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Se.createElement(Ca.Provider,{value:r},i)}function IM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,u=s?.errors;if(u!=null){let _=l.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);Sn(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,h=-1;if(i&&s){f=s.renderFallback;for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=_),v.route.id){let{loaderData:g,errors:M}=s,b=v.route.loader&&!g.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||b){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=s&&m?(_,v)=>{m(_,{location:s.location,params:s.matches?.[0]?.params??{},pattern:gM(s.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,g)=>{let M,b=!1,C=null,y=null;s&&(M=u&&v.route.id?u[v.route.id]:void 0,C=v.route.errorElement||NM,f&&(h<0&&g===0?(qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):h===g&&(b=!0,y=v.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,g+1)),O=()=>{let F;return M?F=C:b?F=y:v.route.Component?F=Se.createElement(v.route.Component,null):v.route.element?F=v.route.element:F=_,Se.createElement(PM,{match:v,routeContext:{outlet:_,matches:S,isDataRoute:s!=null},children:F})};return s&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?Se.createElement(Wv,{location:s.location,revalidation:s.revalidation,component:C,error:M,children:O(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):O()},null)}function tp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BM(r){let e=Se.useContext(ks);return Sn(e,tp(r)),e}function FM(r){let e=Se.useContext(oc);return Sn(e,tp(r)),e}function zM(r){let e=Se.useContext(Ca);return Sn(e,tp(r)),e}function np(r){let e=zM(r),i=e.matches[e.matches.length-1];return Sn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function HM(){return np("useRouteId")}function GM(){let r=Se.useContext(ep),e=FM("useRouteError"),i=np("useRouteError");return r!==void 0?r:e.errors?.[i]}function VM(){let{router:r}=BM("useNavigate"),e=np("useNavigate"),i=Se.useRef(!1);return Xv(()=>{i.current=!0}),Se.useCallback(async(l,u={})=>{qi(i.current,kv),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...u}))},[r,e])}var E_={};function qv(r,e,i){!e&&!E_[r]&&(E_[r]=!0,qi(!1,i))}Se.memo(kM);function kM({routes:r,manifest:e,future:i,state:s,isStatic:l,onError:u}){return UM(r,void 0,{manifest:e,state:s,isStatic:l,onError:u})}function XM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1,useTransitions:f}){Sn(!ll(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=Se.useMemo(()=>({basename:h,navigator:l,static:u,useTransitions:f,future:{}}),[h,l,u,f]);typeof i=="string"&&(i=ol(i));let{pathname:p="/",search:_="",hash:v="",state:g=null,key:M="default",mask:b}=i,C=Se.useMemo(()=>{let y=Aa(p,h);return y==null?null:{location:{pathname:y,search:_,hash:v,state:g,key:M,mask:b},navigationType:s}},[h,p,_,v,g,M,s,b]);return qi(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:Se.createElement(Mi.Provider,{value:m},Se.createElement(lc.Provider,{children:e,value:C}))}var qu="get",Yu="application/x-www-form-urlencoded";function uc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function WM(r){return uc(r)&&r.tagName.toLowerCase()==="button"}function qM(r){return uc(r)&&r.tagName.toLowerCase()==="form"}function YM(r){return uc(r)&&r.tagName.toLowerCase()==="input"}function ZM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function KM(r,e){return r.button===0&&(!e||e==="_self")&&!ZM(r)}var Eu=null;function QM(){if(Eu===null)try{new FormData(document.createElement("form"),0),Eu=!1}catch{Eu=!0}return Eu}var jM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(r){return r!=null&&!jM.has(r)?(qi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`),null):r}function JM(r,e){let i,s,l,u,f;if(qM(r)){let h=r.getAttribute("action");s=h?Aa(h,e):null,i=r.getAttribute("method")||qu,l=Cd(r.getAttribute("enctype"))||Yu,u=new FormData(r)}else if(WM(r)||YM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?Aa(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||qu,l=Cd(r.getAttribute("formenctype"))||Cd(h.getAttribute("enctype"))||Yu,u=new FormData(h,r),!QM()){let{name:p,type:_,value:v}=r;if(_==="image"){let g=p?`${p}.`:"";u.append(`${g}x`,"0"),u.append(`${g}y`,"0")}else p&&u.append(p,v)}}else{if(uc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=qu,s=null,l=Yu,f=r}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ip(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Yv(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Aa(l.pathname,e)==="/"?l.pathname=`${Hs(e)}/_root.${s}`:l.pathname=`${Hs(l.pathname)}.${s}`,l}async function $M(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function tE(r,e,i){let s=await Promise.all(r.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await $M(u,i);return f.links?f.links():[]}return[]}));return rE(s.flat(1).filter(eE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function b_(r,e,i,s,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function nE(r,e,{includeHydrateFallback:i}={}){return iE(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function iE(r){return[...new Set(r)]}function aE(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function rE(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let u=JSON.stringify(aE(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function ap(){let r=Se.useContext(ks);return ip(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function sE(){let r=Se.useContext(oc);return ip(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rp=Se.createContext(void 0);rp.displayName="FrameworkContext";function cc(){let r=Se.useContext(rp);return ip(r,"You must render this element inside a <HydratedRouter> element"),r}function oE(r,e){let i=Se.useContext(rp),[s,l]=Se.useState(!1),[u,f]=Se.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:v}=e,g=Se.useRef(null);Se.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=S=>{S.forEach(O=>{f(O.isIntersecting)})},y=new IntersectionObserver(C,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[r]),Se.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[u,g,{}]:[u,g,{onFocus:Vo(h,M),onBlur:Vo(m,b),onMouseEnter:Vo(p,M),onMouseLeave:Vo(_,b),onTouchStart:Vo(v,M)}]:[!1,g,{}]}function Vo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function lE({page:r,...e}){let i=yM(),{nonce:s}=cc(),{router:l}=ap(),u=Se.useMemo(()=>Cv(l.routes,r,l.basename),[l.routes,r,l.basename]);return u?(e.nonce==null&&s&&(e={...e,nonce:s}),i?Se.createElement(cE,{page:r,matches:u,...e}):Se.createElement(fE,{page:r,matches:u,...e})):null}function uE(r){let{manifest:e,routeModules:i}=cc(),[s,l]=Se.useState([]);return Se.useEffect(()=>{let u=!1;return tE(r,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[r,e,i]),s}function cE({page:r,matches:e,...i}){let s=wa(),{future:l}=cc(),{basename:u}=ap(),f=Se.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let h=Yv(r,u,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let _ of e)typeof _.route.shouldRevalidate=="function"?m=!0:p.push(_.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[u,l.v8_trailingSlashAwareDataRequests,r,s,e]);return Se.createElement(Se.Fragment,null,f.map(h=>Se.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function fE({page:r,matches:e,...i}){let s=wa(),{future:l,manifest:u,routeModules:f}=cc(),{basename:h}=ap(),{loaderData:m,matches:p}=sE(),_=Se.useMemo(()=>b_(r,e,p,u,s,"data"),[r,e,p,u,s]),v=Se.useMemo(()=>b_(r,e,p,u,s,"assets"),[r,e,p,u,s]),g=Se.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,y=!1;if(e.forEach(O=>{let F=u.routes[O.route.id];!F||!F.hasLoader||(!_.some(w=>w.route.id===O.route.id)&&O.route.id in m&&f[O.route.id]?.shouldRevalidate||F.hasClientLoader?y=!0:C.add(O.route.id))}),C.size===0)return[];let S=Yv(r,h,l.v8_trailingSlashAwareDataRequests,"data");return y&&C.size>0&&S.searchParams.set("_routes",e.filter(O=>C.has(O.route.id)).map(O=>O.route.id).join(",")),[S.pathname+S.search]},[h,l.v8_trailingSlashAwareDataRequests,m,s,u,_,e,r,f]),M=Se.useMemo(()=>nE(v,u),[v,u]),b=uE(v);return Se.createElement(Se.Fragment,null,g.map(C=>Se.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>Se.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),b.map(({key:C,link:y})=>Se.createElement("link",{key:C,nonce:i.nonce,...y,crossOrigin:y.crossOrigin??i.crossOrigin})))}function dE(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var hE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hE&&(window.__reactRouterVersion="7.18.4")}catch{}function pE({basename:r,children:e,useTransitions:i,window:s}){let l=Se.useRef();l.current==null&&(l.current=qy({window:s,v5Compat:!0}));let u=l.current,[f,h]=Se.useState({action:u.action,location:u.location}),m=Se.useCallback(p=>{i===!1?h(p):Se.startTransition(()=>h(p))},[i]);return Se.useLayoutEffect(()=>u.listen(m),[u,m]),Se.createElement(XM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:u,useTransitions:i})}var Zv=Se.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,mask:h,state:m,target:p,to:_,preventScrollReset:v,viewTransition:g,defaultShouldRevalidate:M,...b},C){let{basename:y,navigator:S,useTransitions:O}=Se.useContext(Mi),F=typeof _=="string"&&Jh.test(_),w=Iv(_,y);_=w.to;let U=CM(_,{relative:l}),N=wa(),I=null;if(h){let Q=$h(h,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(Q.pathname=Q.pathname==="/"?y:Li([y,Q.pathname])),I=S.createHref(Q)}let[T,P,q]=oE(s,b),X=vE(_,{replace:f,mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:g,defaultShouldRevalidate:M,useTransitions:O});function j(Q){e&&e(Q),Q.defaultPrevented||X(Q)}let se=!(w.isExternal||u),Y=Se.createElement("a",{...b,...q,href:(se?I:void 0)||w.absoluteURL||U,onClick:se?j:e,ref:dE(C,P),target:p,"data-discover":!F&&i==="render"?"true":void 0});return T&&!F?Se.createElement(Se.Fragment,null,Y,Se.createElement(lE,{page:U})):Y});Zv.displayName="Link";var mE=Se.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},_){let v=ul(f,{relative:p.relative}),g=wa(),M=Se.useContext(oc),{navigator:b,basename:C}=Se.useContext(Mi),y=M!=null&&EE(v)&&h===!0,S=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,O=g.pathname,F=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(O=O.toLowerCase(),F=F?F.toLowerCase():null,S=S.toLowerCase()),F&&C&&(F=Aa(F,C)||F);const w=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let U=O===S||!l&&O.startsWith(S)&&O.charAt(w)==="/",N=F!=null&&(F===S||!l&&F.startsWith(S)&&F.charAt(S.length)==="/"),I={isActive:U,isPending:N,isTransitioning:y},T=U?e:void 0,P;typeof s=="function"?P=s(I):P=[s,U?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let q=typeof u=="function"?u(I):u;return Se.createElement(Zv,{...p,"aria-current":T,className:P,ref:_,style:q,to:f,viewTransition:h},typeof m=="function"?m(I):m)});mE.displayName="NavLink";var gE=Se.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=qu,action:h,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:g,...M},b)=>{let{useTransitions:C}=Se.useContext(Mi),y=yE(),S=ME(h,{relative:p}),O=f.toLowerCase()==="get"?"get":"post",F=typeof h=="string"&&Jh.test(h),w=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let N=U.nativeEvent.submitter,I=N?.getAttribute("formmethod")||f,T=()=>y(N||U.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:v,defaultShouldRevalidate:g});C&&i!==!1?Se.startTransition(()=>T()):T()};return Se.createElement("form",{ref:b,method:O,action:S,onSubmit:s?m:w,...M,"data-discover":!F&&r==="render"?"true":void 0})});gE.displayName="Form";function _E(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(r){let e=Se.useContext(ks);return Sn(e,_E(r)),e}function vE(r,{target:e,replace:i,mask:s,state:l,preventScrollReset:u,relative:f,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let _=wM(),v=wa(),g=ul(r,{relative:f});return Se.useCallback(M=>{if(KM(M,e)){M.preventDefault();let b=i!==void 0?i:zs(v)===zs(g),C=()=>_(r,{replace:b,mask:s,state:l,preventScrollReset:u,relative:f,viewTransition:h,defaultShouldRevalidate:m});p?Se.startTransition(()=>C()):C()}},[v,_,g,i,s,l,e,r,u,f,h,m,p])}var xE=0,SE=()=>`__${String(++xE)}__`;function yE(){let{router:r}=Kv("useSubmit"),{basename:e}=Se.useContext(Mi),i=HM(),s=r.fetch,l=r.navigate;return Se.useCallback(async(u,f={})=>{let{action:h,method:m,encType:p,formData:_,body:v}=JM(u,e);if(f.navigate===!1){let g=f.fetcherKey||SE();await s(g,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function ME(r,{relative:e}={}){let{basename:i}=Se.useContext(Mi),s=Se.useContext(Ca);Sn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...ul(r||".",{relative:e})},f=wa();if(r==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(_=>_==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Li([i,u.pathname])),zs(u)}function EE(r,{relative:e}={}){let i=Se.useContext(Gv);Sn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Kv("useViewTransitionState"),l=ul(r,{relative:e});if(!i.isTransitioning)return!1;let u=Aa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Aa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return ec(l.pathname,f)!=null||ec(l.pathname,u)!=null}const sp="186",bE=0,T_=1,TE=2,Zu=1,AE=2,Ko=3,zr=0,jn=1,Sa=2,Ma=0,Jo=1,A_=2,R_=3,C_=4,RE=5,Os=100,CE=101,wE=102,DE=103,UE=104,LE=200,NE=201,OE=202,PE=203,Qv=204,jv=205,IE=206,BE=207,FE=208,zE=209,HE=210,GE=211,VE=212,kE=213,XE=214,lh=0,uh=1,ch=2,tl=3,fh=4,dh=5,hh=6,ph=7,Jv=0,WE=1,qE=2,Wi=0,$v=1,ex=2,tx=3,nx=4,ix=5,ax=6,rx=7,sx=300,Hr=301,Gs=302,wd=303,Dd=304,fc=306,mh=1e3,ya=1001,gh=1002,Dn=1003,YE=1004,bu=1005,In=1006,Ud=1007,Br=1008,ui=1009,ox=1010,lx=1011,nl=1012,op=1013,Yi=1014,ki=1015,Zi=1016,lp=1017,up=1018,il=1020,ux=35902,cx=35899,fx=1021,dx=1022,Ui=1023,Ra=1026,Fr=1027,hx=1028,cp=1029,Gr=1030,fp=1031,dp=1033,Ku=33776,Qu=33777,ju=33778,Ju=33779,_h=35840,vh=35841,xh=35842,Sh=35843,yh=36196,Mh=37492,Eh=37496,bh=37488,Th=37489,tc=37490,Ah=37491,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,Ih=37817,Bh=37818,Fh=37819,zh=37820,Hh=37821,Gh=36492,Vh=36494,kh=36495,Xh=36283,Wh=36284,nc=36285,qh=36286,ZE=3200,Yh=0,KE=1,cr="",Pn="srgb",ic="srgb-linear",ac="linear",kt="srgb",Ld=7680,QE=519,jE=512,JE=513,$E=514,hp=515,eb=516,tb=517,pp=518,nb=519,ib=35044,w_="300 es",Xi=2e3,al=2001;function ab(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function rb(){const r=rc("canvas");return r.style.display="block",r}const D_={};function U_(...r){const e="THREE."+r.shift();console.log(e,...r)}function px(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=px(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Pt(...r){r=px(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Bs(...r){const e=r.join(" ");e in D_||(D_[e]=!0,rt(...r))}function sb(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const ob={[lh]:uh,[ch]:hh,[fh]:ph,[tl]:dh,[uh]:lh,[hh]:ch,[ph]:fh,[dh]:tl};class Vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L_=1234567;const $o=Math.PI/180,rl=180/Math.PI;function Xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function At(r,e,i){return Math.max(e,Math.min(i,r))}function mp(r,e){return(r%e+e)%e}function lb(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function ub(r,e,i){return r!==e?(i-r)/(e-r):0}function el(r,e,i){return(1-i)*r+i*e}function cb(r,e,i,s){return el(r,e,1-Math.exp(-i*s))}function fb(r,e=1){return e-Math.abs(mp(r,e*2)-e)}function db(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function hb(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function pb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function mb(r,e){return r+Math.random()*(e-r)}function gb(r){return r*(.5-Math.random())}function _b(r){r!==void 0&&(L_=r);let e=L_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vb(r){return r*$o}function xb(r){return r*rl}function Sb(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function yb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Eb(r,e,i,s,l){const u=Math.cos,f=Math.sin,h=u(i/2),m=f(i/2),p=u((e+s)/2),_=f((e+s)/2),v=u((e-s)/2),g=f((e-s)/2),M=u((s-e)/2),b=f((s-e)/2);switch(l){case"XYX":r.set(h*_,m*v,m*g,h*p);break;case"YZY":r.set(m*g,h*_,m*v,h*p);break;case"ZXZ":r.set(m*v,m*g,h*_,h*p);break;case"XZX":r.set(h*_,m*b,m*M,h*p);break;case"YXY":r.set(m*M,h*_,m*b,h*p);break;case"ZYZ":r.set(m*b,m*M,h*_,h*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const N_={DEG2RAD:$o,RAD2DEG:rl,generateUUID:Xs,clamp:At,euclideanModulo:mp,mapLinear:lb,inverseLerp:ub,lerp:el,damp:cb,pingpong:fb,smoothstep:db,smootherstep:hb,randInt:pb,randFloat:mb,randFloatSpread:gb,seededRandom:_b,degToRad:vb,radToDeg:xb,isPowerOfTwo:Sb,ceilPowerOfTwo:yb,floorPowerOfTwo:Mb,setQuaternionFromProperEuler:Eb,normalize:Gn,denormalize:Ps},bp=class bp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Ut=bp;class Ws{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=u[f+0],M=u[f+1],b=u[f+2],C=u[f+3];if(v!==C||m!==g||p!==M||_!==b){let y=m*g+p*M+_*b+v*C;y<0&&(g=-g,M=-M,b=-b,C=-C,y=-y);let S=1-h;if(y<.9995){const O=Math.acos(y),F=Math.sin(O);S=Math.sin(S*O)/F,h=Math.sin(h*O)/F,m=m*S+g*h,p=p*S+M*h,_=_*S+b*h,v=v*S+C*h}else{m=m*S+g*h,p=p*S+M*h,_=_*S+b*h,v=v*S+C*h;const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=u[f],g=u[f+1],M=u[f+2],b=u[f+3];return e[i]=h*b+_*v+m*M-p*g,e[i+1]=m*b+_*g+p*v-h*M,e[i+2]=p*b+_*M+h*g-m*v,e[i+3]=_*b-h*v-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),v=h(u/2),g=m(s/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=g*_*v+p*M*b,this._y=p*M*v-g*_*b,this._z=p*_*b+g*M*v,this._w=p*_*v-g*M*b;break;case"YXZ":this._x=g*_*v+p*M*b,this._y=p*M*v-g*_*b,this._z=p*_*b-g*M*v,this._w=p*_*v+g*M*b;break;case"ZXY":this._x=g*_*v-p*M*b,this._y=p*M*v+g*_*b,this._z=p*_*b+g*M*v,this._w=p*_*v-g*M*b;break;case"ZYX":this._x=g*_*v-p*M*b,this._y=p*M*v+g*_*b,this._z=p*_*b-g*M*v,this._w=p*_*v+g*M*b;break;case"YZX":this._x=g*_*v+p*M*b,this._y=p*M*v+g*_*b,this._z=p*_*b-g*M*v,this._w=p*_*v-g*M*b;break;case"XZY":this._x=g*_*v-p*M*b,this._y=p*M*v-g*_*b,this._z=p*_*b+g*M*v,this._w=p*_*v+g*M*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(s>h&&s>v){const M=2*Math.sqrt(1+s-h-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-s-v);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-h);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-u*m,this._y=l*_+f*m+u*h-s*p,this._z=u*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,u=-u,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),_=2*(h*i-u*l),v=2*(u*s-f*i);return this.x=i+m*p+f*v-h*_,this.y=s+m*_+h*p-u*v,this.z=l+m*v+u*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let ue=Tp;const Nd=new ue,O_=new Ws,Ap=class Ap{constructor(e,i,s,l,u,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,h,m,p)}set(e,i,s,l,u,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],M=s[5],b=s[8],C=l[0],y=l[3],S=l[6],O=l[1],F=l[4],w=l[7],U=l[2],N=l[5],I=l[8];return u[0]=f*C+h*O+m*U,u[3]=f*y+h*F+m*N,u[6]=f*S+h*w+m*I,u[1]=p*C+_*O+v*U,u[4]=p*y+_*F+v*N,u[7]=p*S+_*w+v*I,u[2]=g*C+M*O+b*U,u[5]=g*y+M*F+b*N,u[8]=g*S+M*w+b*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-s*u*_+s*h*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*f-h*p,g=h*m-_*u,M=p*u-f*m,b=i*v+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(h*s-l*f)*C,e[3]=g*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(f*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(e,i)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ap.prototype.isMatrix3=!0;let ct=Ap;const Od=new ct,P_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bb(){const r={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===kt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ic]:{primaries:e,whitePoint:s,transfer:ac,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:P_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),r}const wt=bb();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ys;class Tb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ys===void 0&&(ys=rc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ys}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=rc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Ea(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class gp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Pd(l[f].image)):u.push(Pd(l[f]))}else u=Pd(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Rb=0;const Id=new ue;class Un extends Vr{constructor(e=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,s=ya,l=ya,u=In,f=Br,h=Ui,m=ui,p=Un.DEFAULT_ANISOTROPY,_=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Xs(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=sx;Un.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],M=m[5],b=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,w=(M+1)/2,U=(S+1)/2,N=(_+g)/4,I=(v+C)/4,T=(b+y)/4;return F>w&&F>U?F<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(F),l=N/s,u=I/s):w>U?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=N/l,u=T/l):U<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(U),s=I/u,l=T/u),this.set(s,l,u,i),this}let O=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(y-b)/O,this.y=(v-C)/O,this.z=(g-_)/O,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let an=Rp;class Cb extends Vr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Un(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Cb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class mx extends Un{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wb extends Un{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,i,s,l,u,f,h,m,p,_,v,g,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,h,m,p,_,v,g,M,b,C,y)}set(e,i,s,l,u,f,h,m,p,_,v,g,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),u=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const g=f*_,M=f*v,b=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*_,M=m*v,b=p*_,C=p*v;i[0]=g+C*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=M*h-b,i[6]=C+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*_,M=m*v,b=p*_,C=p*v;i[0]=g-C*h,i[4]=-f*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*_,i[9]=C-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*_,M=f*v,b=h*_,C=h*v;i[0]=m*_,i[4]=b*p-M,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,b=h*m,C=h*p;i[0]=m*_,i[4]=C-g*v,i[8]=b*v+M,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*v+b,i[10]=g-C*v}else if(e.order==="XZY"){const g=f*m,M=f*p,b=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=f*_,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Db,e,Ub)}lookAt(e,i,s){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ar.crossVectors(s,oi),ar.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ar.crossVectors(s,oi)),ar.normalize(),Tu.crossVectors(oi,ar),l[0]=ar.x,l[4]=Tu.x,l[8]=oi.x,l[1]=ar.y,l[5]=Tu.y,l[9]=oi.y,l[2]=ar.z,l[6]=Tu.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],M=s[13],b=s[2],C=s[6],y=s[10],S=s[14],O=s[3],F=s[7],w=s[11],U=s[15],N=l[0],I=l[4],T=l[8],P=l[12],q=l[1],X=l[5],j=l[9],se=l[13],Y=l[2],Q=l[6],B=l[10],H=l[14],le=l[3],ne=l[7],ce=l[11],D=l[15];return u[0]=f*N+h*q+m*Y+p*le,u[4]=f*I+h*X+m*Q+p*ne,u[8]=f*T+h*j+m*B+p*ce,u[12]=f*P+h*se+m*H+p*D,u[1]=_*N+v*q+g*Y+M*le,u[5]=_*I+v*X+g*Q+M*ne,u[9]=_*T+v*j+g*B+M*ce,u[13]=_*P+v*se+g*H+M*D,u[2]=b*N+C*q+y*Y+S*le,u[6]=b*I+C*X+y*Q+S*ne,u[10]=b*T+C*j+y*B+S*ce,u[14]=b*P+C*se+y*H+S*D,u[3]=O*N+F*q+w*Y+U*le,u[7]=O*I+F*X+w*Q+U*ne,u[11]=O*T+F*j+w*B+U*ce,u[15]=O*P+F*se+w*H+U*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15],O=m*M-p*g,F=h*M-p*v,w=h*g-m*v,U=f*M-p*_,N=f*g-m*_,I=f*v-h*_;return i*(C*O-y*F+S*w)-s*(b*O-y*U+S*N)+l*(b*F-C*U+S*I)-u*(b*w-C*N+y*I)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[1],f=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-h*p)-s*(u*_-h*m)+l*(u*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],O=i*h-s*f,F=i*m-l*f,w=i*p-u*f,U=s*m-l*h,N=s*p-u*h,I=l*p-u*m,T=_*C-v*b,P=_*y-g*b,q=_*S-M*b,X=v*y-g*C,j=v*S-M*C,se=g*S-M*y,Y=O*se-F*j+w*X+U*q-N*P+I*T;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/Y;return e[0]=(h*se-m*j+p*X)*Q,e[1]=(l*j-s*se-u*X)*Q,e[2]=(C*I-y*N+S*U)*Q,e[3]=(g*N-v*I-M*U)*Q,e[4]=(m*q-f*se-p*P)*Q,e[5]=(i*se-l*q+u*P)*Q,e[6]=(y*w-b*I-S*F)*Q,e[7]=(_*I-g*w+M*F)*Q,e[8]=(f*j-h*q+p*T)*Q,e[9]=(s*q-i*j-u*T)*Q,e[10]=(b*N-C*w+S*O)*Q,e[11]=(v*w-_*N-M*O)*Q,e[12]=(h*P-f*X-m*T)*Q,e[13]=(i*X-s*P+l*T)*Q,e[14]=(C*F-b*U-y*O)*Q,e[15]=(_*U-v*F+g*O)*Q,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,h=e.y,m=e.z,p=u*f,_=u*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,_=f+f,v=h+h,g=u*p,M=u*_,b=u*v,C=f*_,y=f*v,S=h*v,O=m*p,F=m*_,w=m*v,U=s.x,N=s.y,I=s.z;return l[0]=(1-(C+S))*U,l[1]=(M+w)*U,l[2]=(b-F)*U,l[3]=0,l[4]=(M-w)*N,l[5]=(1-(g+S))*N,l[6]=(y+O)*N,l[7]=0,l[8]=(b+F)*I,l[9]=(y-O)*I,l[10]=(1-(g+C))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let f=Ms.set(l[0],l[1],l[2]).length();const h=Ms.set(l[4],l[5],l[6]).length(),m=Ms.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Ri.copy(this);const p=1/f,_=1/h,v=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,u,f,h=Xi,m=!1){const p=this.elements,_=2*u/(i-e),v=2*u/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let b,C;if(m)b=u/(f-u),C=f*u/(f-u);else if(h===Xi)b=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(h===al)b=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,h=Xi,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,C;if(m)b=1/(f-u),C=f/(f-u);else if(h===Xi)b=-2/(f-u),C=-(f+u)/(f-u);else if(h===al)b=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};sc.prototype.isMatrix4=!0;let rn=sc;const Ms=new ue,Ri=new rn,Db=new ue(0,0,0),Ub=new ue(1,1,1),ar=new ue,Tu=new ue,oi=new ue,B_=new rn,F_=new Ws;class dr{constructor(e=0,i=0,s=0,l=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return B_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F_.setFromEuler(this),this.setFromQuaternion(F_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lb=0;const z_=new ue,Es=new Ws,ma=new rn,Au=new ue,ko=new ue,Nb=new ue,Ob=new Ws,H_=new ue(1,0,0),G_=new ue(0,1,0),V_=new ue(0,0,1),k_={type:"added"},Pb={type:"removed"},bs={type:"childadded",child:null},Bd={type:"childremoved",child:null};class Bn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ue,i=new dr,s=new Ws,l=new ue(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ct}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(H_,e)}rotateY(e){return this.rotateOnAxis(G_,e)}rotateZ(e){return this.rotateOnAxis(V_,e)}translateOnAxis(e,i){return z_.copy(e).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H_,e)}translateY(e){return this.translateOnAxis(G_,e)}translateZ(e){return this.translateOnAxis(V_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Au.copy(e):Au.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(ko,Au,this.up):ma.lookAt(Au,ko,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(ma),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Pb),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bn.DEFAULT_UP=new ue(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qo extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ib={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(p,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&g>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ib)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qo;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function zd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Dt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=mp(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=zd(f,u,e+1/3),this.g=zd(f,u,e),this.b=zd(f,u,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=Pn){function s(u){u!==void 0&&parseFloat(u)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pn){const s=gx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return wt.workingToColorSpace(On.copy(this),e),Math.round(At(On.r*255,0,255))*65536+Math.round(At(On.g*255,0,255))*256+Math.round(At(On.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,f=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=_<=.5?v/(f+h):v/(2-f-h),f){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Pn){wt.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==Pn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+i,rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rr),e.getHSL(Ru);const s=el(rr.h,Ru.h,i),l=el(rr.s,Ru.s,i),u=el(rr.l,Ru.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Dt;Dt.NAMES=gx;class vp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Dt(e),this.near=i,this.far=s}clone(){return new vp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bb extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new ue,ga=new ue,Hd=new ue,_a=new ue,Ts=new ue,As=new ue,X_=new ue,Gd=new ue,Vd=new ue,kd=new ue,Xd=new an,Wd=new an,qd=new an;class Di{constructor(e=new ue,i=new ue,s=new ue){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ci.subVectors(l,i),ga.subVectors(s,i),Hd.subVectors(e,i);const f=Ci.dot(Ci),h=Ci.dot(ga),m=Ci.dot(Hd),p=ga.dot(ga),_=ga.dot(Hd),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const g=1/v,M=(p*m-h*_)*g,b=(f*_-h*m)*g;return u.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,u,f,h,m){return this.getBarycoord(e,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(e,i,s,l,u,f){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,u.x),f.addScaledVector(Wd,u.y),f.addScaledVector(qd,u.z),f}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),ga.subVectors(e,i),Ci.cross(ga).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,h;Ts.subVectors(l,s),As.subVectors(u,s),Gd.subVectors(e,s);const m=Ts.dot(Gd),p=As.dot(Gd);if(m<=0&&p<=0)return i.copy(s);Vd.subVectors(e,l);const _=Ts.dot(Vd),v=As.dot(Vd);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Ts,f);kd.subVectors(e,u);const M=Ts.dot(kd),b=As.dot(kd);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(As,h);const y=_*b-M*v;if(y<=0&&v-_>=0&&M-b>=0)return X_.subVectors(u,l),h=(v-_)/(v-_+(M-b)),i.copy(l).addScaledVector(X_,h);const S=1/(y+C+g);return f=C*S,h=g*S,i.copy(s).addScaledVector(Ts,f).addScaledVector(As,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cl{constructor(e=new ue(1/0,1/0,1/0),i=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,wi):wi.fromBufferAttribute(u,f),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cu.copy(s.boundingBox)),Cu.applyMatrix4(e.matrixWorld),this.union(Cu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),wu.subVectors(this.max,Xo),Rs.subVectors(e.a,Xo),Cs.subVectors(e.b,Xo),ws.subVectors(e.c,Xo),sr.subVectors(Cs,Rs),or.subVectors(ws,Cs),Lr.subVectors(Rs,ws);let i=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Lr.z,Lr.y,sr.z,0,-sr.x,or.z,0,-or.x,Lr.z,0,-Lr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Lr.y,Lr.x,0];return!Yd(i,Rs,Cs,ws,wu)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Rs,Cs,ws,wu))?!1:(Du.crossVectors(sr,or),i=[Du.x,Du.y,Du.z],Yd(i,Rs,Cs,ws,wu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],wi=new ue,Cu=new cl,Rs=new ue,Cs=new ue,ws=new ue,sr=new ue,or=new ue,Lr=new ue,Xo=new ue,wu=new ue,Du=new ue,Nr=new ue;function Yd(r,e,i,s,l){for(let u=0,f=r.length-3;u<=f;u+=3){Nr.fromArray(r,u);const h=l.x*Math.abs(Nr.x)+l.y*Math.abs(Nr.y)+l.z*Math.abs(Nr.z),m=e.dot(Nr),p=i.dot(Nr),_=s.dot(Nr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const _n=new ue,Uu=new Ut;let Fb=0;class ba extends Vr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ib,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uu.fromBufferAttribute(this,i),Uu.applyMatrix3(e),this.setXY(i,Uu.x,Uu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ps(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ps(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ps(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ps(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ps(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class _x extends ba{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class vx extends ba{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ta extends ba{constructor(e,i,s){super(new Float32Array(e),i,s)}}const zb=new cl,Wo=new ue,Zd=new ue;class xp{constructor(e=new ue,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):zb.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Zd)),this.expandByPoint(Wo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hb=0;const Si=new rn,Kd=new Bn,Ds=new ue,li=new cl,qo=new cl,bn=new ue;class Da extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ab(e)?vx:_x)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ct().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ta(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];li.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(li.min,qo.min),li.expandByPoint(bn),bn.addVectors(li.max,qo.max),li.expandByPoint(bn)):(li.expandByPoint(qo.min),li.expandByPoint(qo.max))}li.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)bn.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),bn.add(Ds)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new ba(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new ue,m[T]=new ue;const p=new ue,_=new ue,v=new ue,g=new Ut,M=new Ut,b=new Ut,C=new ue,y=new ue;function S(T,P,q){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),v.fromBufferAttribute(s,q),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,P),b.fromBufferAttribute(u,q),_.sub(p),v.sub(p),M.sub(g),b.sub(g);const X=1/(M.x*b.y-b.x*M.y);isFinite(X)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(X),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(X),h[T].add(C),h[P].add(C),h[q].add(C),m[T].add(y),m[P].add(y),m[q].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,P=O.length;T<P;++T){const q=O[T],X=q.start,j=q.count;for(let se=X,Y=X+j;se<Y;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const F=new ue,w=new ue,U=new ue,N=new ue;function I(T){U.fromBufferAttribute(l,T),N.copy(U);const P=h[T];F.copy(P),F.sub(U.multiplyScalar(U.dot(P))).normalize(),w.crossVectors(N,P);const X=w.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,X)}for(let T=0,P=O.length;T<P;++T){const q=O[T],X=q.start,j=q.count;for(let se=X,Y=X+j;se<Y;se+=3)I(e.getX(se+0)),I(e.getX(se+1)),I(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ba(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new ue,u=new ue,f=new ue,h=new ue,m=new ue,p=new ue,_=new ue,v=new ue;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,u),v.subVectors(l,u),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let S=0;S<_;S++)g[b++]=p[M++]}return new ba(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Da,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],v=u[p];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new ue,Gb=new ue,Vb=new ct;class ur{constructor(e=new ue(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qd.subVectors(s,i).cross(Gb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Qd),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Vb.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kb=0;class fl extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Jo,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qv,this.blendDst=jv,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ld,this.stencilZFail=Ld,this.stencilZPass=Ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new ur().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ut().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new ue,jd=new ue,Lu=new ue,Nu=new ue;class xx{constructor(e=new ue,i=new ue(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){jd.copy(e).add(i).multiplyScalar(.5),Lu.copy(i).sub(e).normalize(),Nu.copy(this.origin).sub(jd);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Lu),h=Nu.dot(this.direction),m=-Nu.dot(Lu),p=Nu.lengthSq(),_=Math.abs(1-f*f);let v,g,M,b;if(_>0)if(v=f*m-h,g=f*h-m,b=u*_,v>=0)if(g>=-b)if(g<=b){const C=1/_;v*=C,g*=C,M=v*(v+f*g+2*h)+g*(f*v+g+2*m)+p}else g=u,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;else g=-u,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;else g<=-b?(v=Math.max(0,-(-f*u+h)),g=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+p):g<=b?(v=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+p):(v=Math.max(0,-(f*u+h)),g=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+p);else g=f>0?-u:u,v=Math.max(0,-(f*g+h)),M=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(jd).addScaledVector(Lu,g),M}intersectSphere(e,i){if(e.radius<0)return null;xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),_>=0?(u=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(u=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,u){const f=this.origin,h=this.direction,m=h.x,p=h.y,_=h.z,v=e.x-f.x,g=e.y-f.y,M=e.z-f.z,b=i.x-f.x,C=i.y-f.y,y=i.z-f.z,S=s.x-f.x,O=s.y-f.y,F=s.z-f.z,w=Math.abs(m),U=Math.abs(p),N=Math.abs(_);let I,T,P,q,X,j,se,Y,Q,B,H,le;if(w>=U&&w>=N?(P=m,j=v,Q=b,le=S,m>=0?(I=p,T=_,q=g,X=M,se=C,Y=y,B=O,H=F):(I=_,T=p,q=M,X=g,se=y,Y=C,B=F,H=O)):U>=N?(P=p,j=g,Q=C,le=O,p>=0?(I=_,T=m,q=M,X=v,se=y,Y=b,B=F,H=S):(I=m,T=_,q=v,X=M,se=b,Y=y,B=S,H=F)):(P=_,j=M,Q=y,le=F,_>=0?(I=m,T=p,q=v,X=g,se=b,Y=C,B=S,H=O):(I=p,T=m,q=g,X=v,se=C,Y=b,B=O,H=S)),P===0)return null;const ne=I/P,ce=T/P,D=1/P,J=q-ne*j,me=X-ce*j,be=se-ne*Q,De=Y-ce*Q,He=B-ne*le,te=H-ce*le,de=He*De-te*be,Te=J*te-me*He,tt=be*me-De*J;if(l){if(de<0||Te<0||tt<0)return null}else if((de<0||Te<0||tt<0)&&(de>0||Te>0||tt>0))return null;const Fe=de+Te+tt;if(Fe===0)return null;const ot=D*(de*j+Te*Q+tt*le);return(Fe>0?ot<0:ot>0)?null:this.at(ot/Fe,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sp extends fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const W_=new rn,Or=new xx,Ou=new xp,q_=new ue,Pu=new ue,Iu=new ue,Bu=new ue,Jd=new ue,Fu=new ue,Y_=new ue,zu=new ue;class Ki extends Bn{constructor(e=new Da,i=new Sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Fu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],v=u[m];_!==0&&(Jd.fromBufferAttribute(v,e),f?Fu.addScaledVector(Jd,_):Fu.addScaledVector(Jd.sub(i),_))}i.add(Fu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ou.copy(s.boundingSphere),Ou.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(Ou.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Ou,q_)===null||Or.origin.distanceToSquared(q_)>(e.far-e.near)**2))&&(W_.copy(u).invert(),Or.copy(e.ray).applyMatrix4(W_),!(s.boundingBox!==null&&Or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Or)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,g=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=f[y.materialIndex],O=Math.max(y.start,M.start),F=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,U=F;w<U;w+=3){const N=h.getX(w),I=h.getX(w+1),T=h.getX(w+2);l=Hu(this,S,e,s,p,_,v,N,I,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const O=h.getX(y),F=h.getX(y+1),w=h.getX(y+2);l=Hu(this,f,e,s,p,_,v,O,F,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const y=g[b],S=f[y.materialIndex],O=Math.max(y.start,M.start),F=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=O,U=F;w<U;w+=3){const N=w,I=w+1,T=w+2;l=Hu(this,S,e,s,p,_,v,N,I,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const O=y,F=y+1,w=y+2;l=Hu(this,f,e,s,p,_,v,O,F,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Xb(r,e,i,s,l,u,f,h){let m;if(e.side===jn?m=s.intersectTriangle(f,u,l,!0,h):m=s.intersectTriangle(l,u,f,e.side===zr,h),m===null)return null;zu.copy(h),zu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zu);return p<i.near||p>i.far?null:{distance:p,point:zu.clone(),object:r}}function Hu(r,e,i,s,l,u,f,h,m,p){r.getVertexPosition(h,Pu),r.getVertexPosition(m,Iu),r.getVertexPosition(p,Bu);const _=Xb(r,e,i,s,Pu,Iu,Bu,Y_);if(_){const v=new ue;Di.getBarycoord(Y_,Pu,Iu,Bu,v),l&&(_.uv=Di.getInterpolatedAttribute(l,h,m,p,v,new Ut)),u&&(_.uv1=Di.getInterpolatedAttribute(u,h,m,p,v,new Ut)),f&&(_.normal=Di.getInterpolatedAttribute(f,h,m,p,v,new ue),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ue,materialIndex:0};Di.getNormal(Pu,Iu,Bu,g.normal),_.face=g,_.barycoord=v}return _}class Wb extends Un{constructor(e=null,i=1,s=1,l,u,f,h,m,p=Dn,_=Dn,v,g){super(null,f,h,m,p,_,l,u,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pr=new xp,qb=new Ut(.5,.5),Gu=new ue;class yp{constructor(e=new ur,i=new ur,s=new ur,l=new ur,u=new ur,f=new ur){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi,s=!1){const l=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],p=u[3],_=u[4],v=u[5],g=u[6],M=u[7],b=u[8],C=u[9],y=u[10],S=u[11],O=u[12],F=u[13],w=u[14],U=u[15];if(l[0].setComponents(p-f,M-_,S-b,U-O).normalize(),l[1].setComponents(p+f,M+_,S+b,U+O).normalize(),l[2].setComponents(p+h,M+v,S+C,U+F).normalize(),l[3].setComponents(p-h,M-v,S-C,U-F).normalize(),s)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(p-m,M-g,S-y,U-w).normalize();else if(l[4].setComponents(p-m,M-g,S-y,U-w).normalize(),i===Xi)l[5].setComponents(p+m,M+g,S+y,U+w).normalize();else if(i===al)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const i=qb.distanceTo(e.center);return Pr.radius=.7071067811865476+i,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gu.x=l.normal.x>0?e.max.x:e.min.x,Gu.y=l.normal.y>0?e.max.y:e.min.y,Gu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sx extends Un{constructor(e=[],i=Hr,s,l,u,f,h,m,p,_){super(e,i,s,l,u,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Un{constructor(e,i,s,l,u,f,h,m,p){super(e,i,s,l,u,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Un{constructor(e,i,s=Yi,l,u,f,h=Dn,m=Dn,p,_=Ra,v=1){if(_!==Ra&&_!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,u,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class Yb extends sl{constructor(e,i=Yi,s=Hr,l,u,f=Dn,h=Dn,m,p=Ra){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,u,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yx extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends Da{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,e,f,u,0),b("z","y","x",1,-1,s,i,-e,f,u,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ta(p,3)),this.setAttribute("normal",new Ta(_,3)),this.setAttribute("uv",new Ta(v,2));function b(C,y,S,O,F,w,U,N,I,T,P){const q=w/I,X=U/T,j=w/2,se=U/2,Y=N/2,Q=I+1,B=T+1;let H=0,le=0;const ne=new ue;for(let ce=0;ce<B;ce++){const D=ce*X-se;for(let J=0;J<Q;J++){const me=J*q-j;ne[C]=me*O,ne[y]=D*F,ne[S]=Y,p.push(ne.x,ne.y,ne.z),ne[C]=0,ne[y]=0,ne[S]=N>0?1:-1,_.push(ne.x,ne.y,ne.z),v.push(J/I),v.push(1-ce/T),H+=1}}for(let ce=0;ce<T;ce++)for(let D=0;D<I;D++){const J=g+D+Q*ce,me=g+D+Q*(ce+1),be=g+(D+1)+Q*(ce+1),De=g+(D+1)+Q*ce;m.push(J,me,De),m.push(me,be,De),le+=6}h.addGroup(M,le,P),M+=le,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dc extends Da{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,v=e/h,g=i/m,M=[],b=[],C=[],y=[];for(let S=0;S<_;S++){const O=S*g-f;for(let F=0;F<p;F++){const w=F*v-u;b.push(w,-O,0),C.push(0,0,1),y.push(F/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<h;O++){const F=O+p*S,w=O+p*(S+1),U=O+1+p*(S+1),N=O+1+p*S;M.push(F,w,N),M.push(w,U,N)}this.setIndex(M),this.setAttribute("position",new Ta(b,3)),this.setAttribute("normal",new Ta(C,3)),this.setAttribute("uv",new Ta(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vs(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Z_(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Z_(l[0])){const u=[];for(let f=0,h=l.length;f<h;f++)u[f]=l[f].clone();e[i][s]=u}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Vn(r){const e={};for(let i=0;i<r.length;i++){const s=Vs(r[i]);for(const l in s)e[l]=s[l]}return e}function Z_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Zb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Mx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Kb={clone:Vs,merge:Vn};var Qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qb,this.fragmentShader=jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Dt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ut().fromArray(l.value);break;case"v3":this.uniforms[s].value=new ue().fromArray(l.value);break;case"v4":this.uniforms[s].value=new an().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ct().fromArray(l.value);break;case"m4":this.uniforms[s].value=new rn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jb extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class K_ extends fl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $b extends fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ex extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const $d=new rn,Q_=new ue,j_=new ue;class tT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Q_.setFromMatrixPosition(e.matrixWorld),i.position.copy(Q_),j_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(j_),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,l){$d.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix($d,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,f=l?l.z/u.x:1,h=l?l.w/u.y:1,m=l?l.x/u.x:0,p=l?l.y/u.y:0;e.coordinateSystem===al||e.reversedDepth?i.set(.5*f,0,0,.5*f+m,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):i.set(.5*f,0,0,.5*f+m,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),i.multiply($d)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vu=new ue,ku=new Ws,Hi=new ue;class bx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vu,ku,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,ku,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Vu,ku,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vu,ku,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new ue,J_=new Ut,$_=new Ut;class yi extends bx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,i){return this.getViewBounds(e,J_,$_),i.subVectors($_,J_)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($o*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Ep extends bx{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nT extends tT{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ev extends Ex{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new nT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class iT extends Ex{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Ls=1;class aT extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Us,Ls,e,i);l.layers=this.layers,this.add(l);const u=new yi(Us,Ls,e,i);u.layers=this.layers,this.add(u);const f=new yi(Us,Ls,e,i);f.layers=this.layers,this.add(f);const h=new yi(Us,Ls,e,i);h.layers=this.layers,this.add(h);const m=new yi(Us,Ls,e,i);m.layers=this.layers,this.add(m);const p=new yi(Us,Ls,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class rT extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const tv=new rn;class sT{constructor(e,i,s=0,l=1/0){this.ray=new xx(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Pt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return tv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tv),this}intersectObject(e,i=!0,s=[]){return Zh(e,this,s,i),s.sort(nv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,u=e.length;l<u;l++)Zh(e[l],this,s,i);return s.sort(nv),s}}function nv(r,e){return r.distance-e.distance}function Zh(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const u=r.children;for(let f=0,h=u.length;f<h;f++)Zh(u[f],e,i,!0)}}class oT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Cp=class Cp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=s,u[3]=l,this}};Cp.prototype.isMatrix2=!0;let iv=Cp;function av(r,e,i,s){const l=lT(s);switch(i){case fx:return r*e;case hx:return r*e/l.components*l.byteLength;case cp:return r*e/l.components*l.byteLength;case Gr:return r*e*2/l.components*l.byteLength;case fp:return r*e*2/l.components*l.byteLength;case dx:return r*e*3/l.components*l.byteLength;case Ui:return r*e*4/l.components*l.byteLength;case dp:return r*e*4/l.components*l.byteLength;case Ku:case Qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ju:case Ju:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(r,16)*Math.max(e,8)/4;case _h:case xh:return Math.max(r,8)*Math.max(e,8)/2;case yh:case Mh:case bh:case Th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Eh:case tc:case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Vh:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nc:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lT(r){switch(r){case ui:case ox:return{byteLength:1,components:1};case nl:case lx:case Zi:return{byteLength:2,components:1};case lp:case up:return{byteLength:2,components:4};case Yi:case op:case ki:return{byteLength:4,components:1};case ux:case cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function Tx(){let r=null,e=!1,i=null,s=null;function l(u,f){s=r.requestAnimationFrame(l),i(u,f)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function uT(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,h),v.length===0)r.bufferSubData(p,0,_);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,v[g]=C)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ST=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ET=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,NT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,n1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:cT,alphahash_pars_fragment:fT,alphamap_fragment:dT,alphamap_pars_fragment:hT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:_T,batching_pars_vertex:vT,batching_vertex:xT,begin_vertex:ST,beginnormal_vertex:yT,bsdfs:MT,iridescence_fragment:ET,bumpmap_pars_fragment:bT,clipping_planes_fragment:TT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:wT,color_pars_fragment:DT,color_pars_vertex:UT,color_vertex:LT,common:NT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:PT,displacementmap_pars_vertex:IT,displacementmap_vertex:BT,emissivemap_fragment:FT,emissivemap_pars_fragment:zT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:kT,envmap_pars_fragment:XT,envmap_pars_vertex:WT,envmap_physical_pars_fragment:n1,envmap_vertex:qT,fog_vertex:YT,fog_pars_vertex:ZT,fog_fragment:KT,fog_pars_fragment:QT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:a1,lights_phong_fragment:r1,lights_phong_pars_fragment:s1,lights_physical_fragment:o1,lights_physical_pars_fragment:l1,lights_fragment_begin:u1,lights_fragment_maps:c1,lights_fragment_end:f1,lightprobes_pars_fragment:d1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:_1,map_pars_fragment:v1,map_particle_fragment:x1,map_particle_pars_fragment:S1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:b1,morphnormal_vertex:T1,morphtarget_pars_vertex:A1,morphtarget_vertex:R1,normal_fragment_begin:C1,normal_fragment_maps:w1,normal_pars_fragment:D1,normal_pars_vertex:U1,normal_vertex:L1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:P1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:B1,opaque_fragment:F1,packing:z1,premultiplied_alpha_fragment:H1,project_vertex:G1,dithering_fragment:V1,dithering_pars_fragment:k1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:Y1,shadowmap_vertex:Z1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:j1,skinning_vertex:J1,skinnormal_vertex:$1,specularmap_fragment:eA,specularmap_pars_fragment:tA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:uA,background_vert:cA,background_frag:fA,backgroundCube_vert:dA,backgroundCube_frag:hA,cube_vert:pA,cube_frag:mA,depth_vert:gA,depth_frag:_A,distance_vert:vA,distance_frag:xA,equirect_vert:SA,equirect_frag:yA,linedashed_vert:MA,linedashed_frag:EA,meshbasic_vert:bA,meshbasic_frag:TA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:wA,meshnormal_vert:DA,meshnormal_frag:UA,meshphong_vert:LA,meshphong_frag:NA,meshphysical_vert:OA,meshphysical_frag:PA,meshtoon_vert:IA,meshtoon_frag:BA,points_vert:FA,points_frag:zA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:kA},Be={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ue},probesMax:{value:new ue},probesResolution:{value:new ue}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Vi={basic:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Vn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Vn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Vn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Vn([Be.common,Be.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Vn([Be.lights,Be.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Vi.physical={uniforms:Vn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Xu={r:0,b:0,g:0},XA=new rn,Ax=new ct;Ax.set(-1,0,0,0,1,0,0,0,1);function WA(r,e,i,s,l,u){const f=new Dt(0);let h=l===!0?0:1,m,p,_=null,v=0,g=null;function M(O){let F=O.isScene===!0?O.background:null;if(F&&F.isTexture){const w=O.backgroundBlurriness>0;F=e.get(F,w)}return F}function b(O){let F=!1;const w=M(O);w===null?y(f,h):w&&w.isColor&&(y(w,1),F=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(O,F){const w=M(F);w&&(w.isCubeTexture||w.mapping===fc)?(p===void 0&&(p=new Ki(new qs(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Vs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ax),p.material.toneMapped=wt.getTransfer(w.colorSpace)!==kt,(_!==w||v!==w.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ki(new dc(2,2),new Qi({name:"BackgroundMaterial",uniforms:Vs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=wt.getTransfer(w.colorSpace)!==kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,F){O.getRGB(Xu,Mx(r)),i.buffers.color.setClear(Xu.r,Xu.g,Xu.b,F,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,F=1){f.set(O),h=F,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,y(f,h)},render:b,addToRenderList:C,dispose:S}}function qA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let u=l,f=!1;function h(X,j,se,Y,Q){let B=!1;const H=v(X,Y,se,j);u!==H&&(u=H,p(u.object)),B=M(X,Y,se,Q),B&&b(X,Y,se,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,w(X,j,se,Y),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return r.createVertexArray()}function p(X){return r.bindVertexArray(X)}function _(X){return r.deleteVertexArray(X)}function v(X,j,se,Y){const Q=Y.wireframe===!0;let B=s[j.id];B===void 0&&(B={},s[j.id]=B);const H=X.isInstancedMesh===!0?X.id:0;let le=B[H];le===void 0&&(le={},B[H]=le);let ne=le[se.id];ne===void 0&&(ne={},le[se.id]=ne);let ce=ne[Q];return ce===void 0&&(ce=g(m()),ne[Q]=ce),ce}function g(X){const j=[],se=[],Y=[];for(let Q=0;Q<i;Q++)j[Q]=0,se[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:se,attributeDivisors:Y,object:X,attributes:{},index:null}}function M(X,j,se,Y){const Q=u.attributes,B=j.attributes;let H=0;const le=se.getAttributes();for(const ne in le)if(le[ne].location>=0){const D=Q[ne];let J=B[ne];if(J===void 0&&(ne==="instanceMatrix"&&X.instanceMatrix&&(J=X.instanceMatrix),ne==="instanceColor"&&X.instanceColor&&(J=X.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;H++}return u.attributesNum!==H||u.index!==Y}function b(X,j,se,Y){const Q={},B=j.attributes;let H=0;const le=se.getAttributes();for(const ne in le)if(le[ne].location>=0){let D=B[ne];D===void 0&&(ne==="instanceMatrix"&&X.instanceMatrix&&(D=X.instanceMatrix),ne==="instanceColor"&&X.instanceColor&&(D=X.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),Q[ne]=J,H++}u.attributes=Q,u.attributesNum=H,u.index=Y}function C(){const X=u.newAttributes;for(let j=0,se=X.length;j<se;j++)X[j]=0}function y(X){S(X,0)}function S(X,j){const se=u.newAttributes,Y=u.enabledAttributes,Q=u.attributeDivisors;se[X]=1,Y[X]===0&&(r.enableVertexAttribArray(X),Y[X]=1),Q[X]!==j&&(r.vertexAttribDivisor(X,j),Q[X]=j)}function O(){const X=u.newAttributes,j=u.enabledAttributes;for(let se=0,Y=j.length;se<Y;se++)j[se]!==X[se]&&(r.disableVertexAttribArray(se),j[se]=0)}function F(X,j,se,Y,Q,B,H){H===!0?r.vertexAttribIPointer(X,j,se,Q,B):r.vertexAttribPointer(X,j,se,Y,Q,B)}function w(X,j,se,Y){C();const Q=Y.attributes,B=se.getAttributes(),H=j.defaultAttributeValues;for(const le in B){const ne=B[le];if(ne.location>=0){let ce=Q[le];if(ce===void 0&&(le==="instanceMatrix"&&X.instanceMatrix&&(ce=X.instanceMatrix),le==="instanceColor"&&X.instanceColor&&(ce=X.instanceColor)),ce!==void 0){const D=ce.normalized,J=ce.itemSize,me=e.get(ce);if(me===void 0)continue;const be=me.buffer,De=me.type,He=me.bytesPerElement,te=De===r.INT||De===r.UNSIGNED_INT||ce.gpuType===op;if(ce.isInterleavedBufferAttribute){const de=ce.data,Te=de.stride,tt=ce.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ne.locationSize;Fe++)S(ne.location+Fe,de.meshPerAttribute);X.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<ne.locationSize;Fe++)y(ne.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let Fe=0;Fe<ne.locationSize;Fe++)F(ne.location+Fe,J/ne.locationSize,De,D,Te*He,(tt+J/ne.locationSize*Fe)*He,te)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<ne.locationSize;de++)S(ne.location+de,ce.meshPerAttribute);X.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<ne.locationSize;de++)y(ne.location+de);r.bindBuffer(r.ARRAY_BUFFER,be);for(let de=0;de<ne.locationSize;de++)F(ne.location+de,J/ne.locationSize,De,D,J*He,J/ne.locationSize*de*He,te)}}else if(H!==void 0){const D=H[le];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(ne.location,D);break;case 3:r.vertexAttrib3fv(ne.location,D);break;case 4:r.vertexAttrib4fv(ne.location,D);break;default:r.vertexAttrib1fv(ne.location,D)}}}}O()}function U(){P();for(const X in s){const j=s[X];for(const se in j){const Y=j[se];for(const Q in Y){const B=Y[Q];for(const H in B)_(B[H].object),delete B[H];delete Y[Q]}}delete s[X]}}function N(X){if(s[X.id]===void 0)return;const j=s[X.id];for(const se in j){const Y=j[se];for(const Q in Y){const B=Y[Q];for(const H in B)_(B[H].object),delete B[H];delete Y[Q]}}delete s[X.id]}function I(X){for(const j in s){const se=s[j];for(const Y in se){const Q=se[Y];if(Q[X.id]===void 0)continue;const B=Q[X.id];for(const H in B)_(B[H].object),delete B[H];delete Q[X.id]}}}function T(X){for(const j in s){const se=s[j],Y=X.isInstancedMesh===!0?X.id:0,Q=se[Y];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const le in H)_(H[le].object),delete H[le];delete Q[B]}delete se[Y],Object.keys(se).length===0&&delete s[j]}}}function P(){q(),f=!0,u!==l&&(u=l,p(u.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:q,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:O}}function YA(r,e,i){let s;function l(m){s=m}function u(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function ZA(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ui&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const T=I===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ui&&I!==ki&&!T&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(rt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:O,maxVaryings:F,maxFragmentUniforms:w,maxSamples:U,samples:N}}function KA(r){const e=this;let i=null,s=0,l=!1,u=!1;const f=new ur,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const O=u?0:s,F=O*4;let w=S.clippingState||null;m.value=w,w=_(b,g,F,M);for(let U=0;U!==F;++U)w[U]=i[U];S.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,g,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const S=M+C*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,w=M;F!==C;++F,w+=4)f.copy(v[F]).applyMatrix4(O,h),f.normal.toArray(y,w),y[w+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Is=4,QA=6,jA=20,JA=256,Yo=new Ep,rv=new Dt;let eh=null,th=0,nh=0,ih=!1;const $A=new ue,Ir=new ue;class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:h=$A}=u;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Zi,format:Ui,colorSpace:ic,depthBuffer:!1},l=ov(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eR(u)),this._blurMaterial=nR(u,e,i),this._ggxMaterial=tR(u,e,i)}return l}_compileMaterial(e){const i=new Ki(new Da,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,u){const m=new yi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(rv),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new qs,new Sp({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,S=!0):(y.color.copy(rv),S=!0);for(let F=0;F<6;F++){const w=F%3;w===0?(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[F],u.y,u.z)):w===1?(m.up.set(0,0,p[F]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[F],u.z)):(m.up.set(0,p[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[F]));const U=this._cubeSize;Ns(l,w*U,F>2?U:0,U,U),v.setRenderTarget(l),S&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=O}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Hr||e.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=p*1.25,M=v*g,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-Is?s-b+Is:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ns(u,y,S,3*C,2*C),l.setRenderTarget(u),l.render(h,Yo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Ns(e,y,S,3*C,2*C),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l){const u=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,s,f),this._blurPass(u,e,s,s,f)}_blurPass(e,i,s,l,u){const f=this._renderer,h=this._blurMaterial,m=this._lodMeshes[l];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=u,p.mipInt.value=this._lodMax-s;const _=this._sizeLods[l],v=3*_*(l>this._lodMax-Is?l-this._lodMax+Is:0),g=4*(this._cubeSize-_);Ns(i,v,g,3*_,2*_),f.setRenderTarget(i),f.render(m,Yo)}}function eR(r){const e=[],i=[];let s=r;const l=r-Is+1+QA;for(let u=0;u<l;u++){const f=Math.pow(2,s);e.push(f);const h=1/(f-2),m=-h,p=1+h,_=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,g=6,M=3,b=new Float32Array(M*g*v),C=new Float32Array(M*g*v);for(let S=0;S<v;S++){const O=S%3*2/3-1,F=S>2?0:-1,w=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];b.set(w,M*g*S);for(let U=0;U<g;U++){const N=_[U*2]*2-1,I=_[U*2+1]*2-1;S===0?Ir.set(1,I,N):S===1?Ir.set(-N,1,-I):S===2?Ir.set(-N,I,1):S===3?Ir.set(-1,I,-N):S===4?Ir.set(-N,-1,I):Ir.set(N,I,-1),Ir.toArray(C,(S*g+U)*M)}}const y=new Da;y.setAttribute("position",new ba(b,M)),y.setAttribute("outputDirection",new ba(C,M)),i.push(new Ki(y,null)),s>Is&&s--}return{lodMeshes:i,sizeLods:e}}function ov(r,e,i){const s=new Ni(r,e,i);return s.texture.mapping=fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ns(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function tR(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function nR(r,e,i){return new Qi({name:"SphericalGaussianBlur",defines:{SAMPLES:jA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function lv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function uv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rx extends Ni{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qs(5,5,5),u=new Qi({name:"CubemapFromEquirect",uniforms:Vs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:Ma});u.uniforms.tEquirect.value=i;const f=new Ki(l,u),h=i.minFilter;return i.minFilter===Br&&(i.minFilter=In),new aT(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}function iR(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===wd||M===Dd)if(e.has(g)){const b=e.get(g).texture;return h(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new Rx(b.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,b=M===wd||M===Dd,C=M===Hr||M===Gs;if(b||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new sv(r)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const O=g.image;return b&&O&&O.height>0||C&&O&&m(O)?(s===null&&(s=new sv(r)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,M){return M===wd?g.mapping=Hr:M===Dd&&(g.mapping=Gs),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function p(g){const M=g.target;M.removeEventListener("dispose",p);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function aR(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bs("WebGLRenderer: "+s+" extension not supported."),l}}}function rR(r,e,i,s){const l={},u=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(v){const g=[],M=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const O=M.array;C=M.version;for(let F=0,w=O.length;F<w;F+=3){const U=O[F+0],N=O[F+1],I=O[F+2];g.push(U,N,N,I,I,U)}}else{const O=b.array;C=b.version;for(let F=0,w=O.length/3-1;F<w;F+=3){const U=F+0,N=F+1,I=F+2;g.push(U,N,N,I,I,U)}}const y=new(b.count>=65535?vx:_x)(g,1);y.version=C;const S=u.get(v);S&&e.remove(S),u.set(v,y)}function _(v){const g=u.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function sR(r,e,i){let s;function l(v){s=v}let u,f;function h(v){u=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,u,v*f),i.update(g,s,1)}function p(v,g,M){M!==0&&(r.drawElementsInstanced(s,g,u,v*f,M),i.update(g,s,M))}function _(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,u,v,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function oR(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(u/3);break;case r.LINES:i.lines+=h*(u/2);break;case r.LINE_STRIP:i.lines+=h*(u-1);break;case r.LINE_LOOP:i.lines+=h*u;break;case r.POINTS:i.points+=h*u;break;default:Pt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function lR(r,e,i){const s=new WeakMap,l=new an;function u(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let q=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var M=q;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let w=0;b===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let U=h.attributes.position.count*w,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*N*4*v),T=new mx(I,U,N,v);T.type=ki,T.needsUpdate=!0;const P=w*4;for(let X=0;X<v;X++){const j=S[X],se=O[X],Y=F[X],Q=U*N*4*X;for(let B=0;B<j.count;B++){const H=B*P;b===!0&&(l.fromBufferAttribute(j,B),I[Q+H+0]=l.x,I[Q+H+1]=l.y,I[Q+H+2]=l.z,I[Q+H+3]=0),C===!0&&(l.fromBufferAttribute(se,B),I[Q+H+4]=l.x,I[Q+H+5]=l.y,I[Q+H+6]=l.z,I[Q+H+7]=0),y===!0&&(l.fromBufferAttribute(Y,B),I[Q+H+8]=l.x,I[Q+H+9]=l.y,I[Q+H+10]=l.z,I[Q+H+11]=Y.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ut(U,N)},s.set(h,g),h.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function uR(r,e,i,s,l){let u=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=e.get(p,v);if(u.get(g)!==_&&(e.update(g),u.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),u.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==_&&(M.update(),u.set(M,_))}return g}function h(){u=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const cR={[$v]:"LINEAR_TONE_MAPPING",[ex]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[nx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[ix]:"CUSTOM_TONE_MAPPING"};function fR(r,e,i,s,l,u){const f=new Ni(e,i,{type:r,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new Da;p.setAttribute("position",new Ta([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ta([0,2,0,0,2,0],2));const _=new Jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Ki(p,_),g=new Ep(-1,1,1,-1,0,1);let M=null,b=null,C=!1,y,S=null,O=[],F=!1;this.setSize=function(w,U){f.setSize(w,U),h!==null&&h.setSize(w,U),m!==null&&m.setSize(w,U);for(let N=0;N<O.length;N++){const I=O[N];I.setSize&&I.setSize(w,U)}},this.setEffects=function(w){O=w,F=O.length>0&&O[0].isRenderPass===!0;const U=f.width,N=f.height;O.length>0&&h===null&&(h=new Ni(U,N,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),m=new Ni(U,N,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<O.length;I++){const T=O[I];T.setSize&&T.setSize(U,N)}},this.begin=function(w,U){if(C||w.toneMapping===Wi&&O.length===0)return!1;if(S=U,U!==null){const N=U.width,I=U.height;(f.width!==N||f.height!==I)&&this.setSize(N,I)}return F===!1&&w.setRenderTarget(f),y=w.toneMapping,w.toneMapping=Wi,!0},this.hasRenderPass=function(){return F},this.end=function(w,U){w.toneMapping=y,C=!0;let N=f,I=h;for(let T=0;T<O.length;T++){const P=O[T];P.enabled!==!1&&(P.render(w,I,N,U),P.needsSwap!==!1&&(N=I,I=I===h?m:h))}if(M!==w.outputColorSpace||b!==w.toneMapping){M=w.outputColorSpace,b=w.toneMapping,_.defines={},wt.getTransfer(M)===kt&&(_.defines.SRGB_TRANSFER="");const T=cR[b];T&&(_.defines[T]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(S),w.render(v,g),S=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){f.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),_.dispose()}}const Cx=new Un,Kh=new sl(1,1),wx=new mx,Dx=new wb,Ux=new Sx,cv=[],fv=[],dv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function Ys(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=cv[l];if(u===void 0&&(u=new Float32Array(l),cv[l]=u),e!==0){s.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(u,h)}return u}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function pc(r,e){let i=fv[e];i===void 0&&(i=new Int32Array(e),fv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function dR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function hR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function pR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function mR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function gR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;pv.set(s),r.uniformMatrix2fv(this.addr,!1,pv),Mn(i,s)}}function _R(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;hv.set(s),r.uniformMatrix3fv(this.addr,!1,hv),Mn(i,s)}}function vR(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;dv.set(s),r.uniformMatrix4fv(this.addr,!1,dv),Mn(i,s)}}function xR(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function SR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function yR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function MR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function ER(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function bR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function TR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function AR(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function RR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Kh.compareFunction=i.isReversedDepthBuffer()?pp:hp,u=Kh):u=Cx,i.setTexture2D(e||u,l)}function CR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Dx,l)}function wR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Ux,l)}function DR(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||wx,l)}function UR(r){switch(r){case 5126:return dR;case 35664:return hR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return _R;case 35676:return vR;case 5124:case 35670:return xR;case 35667:case 35671:return SR;case 35668:case 35672:return yR;case 35669:case 35673:return MR;case 5125:return ER;case 36294:return bR;case 36295:return TR;case 36296:return AR;case 35678:case 36198:case 36298:case 36306:case 35682:return RR;case 35679:case 36299:case 36307:return CR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return DR}}function LR(r,e){r.uniform1fv(this.addr,e)}function NR(r,e){const i=Ys(e,this.size,2);r.uniform2fv(this.addr,i)}function OR(r,e){const i=Ys(e,this.size,3);r.uniform3fv(this.addr,i)}function PR(r,e){const i=Ys(e,this.size,4);r.uniform4fv(this.addr,i)}function IR(r,e){const i=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function BR(r,e){const i=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function FR(r,e){const i=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zR(r,e){r.uniform1iv(this.addr,e)}function HR(r,e){r.uniform2iv(this.addr,e)}function GR(r,e){r.uniform3iv(this.addr,e)}function VR(r,e){r.uniform4iv(this.addr,e)}function kR(r,e){r.uniform1uiv(this.addr,e)}function XR(r,e){r.uniform2uiv(this.addr,e)}function WR(r,e){r.uniform3uiv(this.addr,e)}function qR(r,e){r.uniform4uiv(this.addr,e)}function YR(r,e,i){const s=this.cache,l=e.length,u=pc(i,l);yn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));let f;this.type===r.SAMPLER_2D_SHADOW?f=Kh:f=Cx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,u[h])}function ZR(r,e,i){const s=this.cache,l=e.length,u=pc(i,l);yn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Dx,u[f])}function KR(r,e,i){const s=this.cache,l=e.length,u=pc(i,l);yn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Ux,u[f])}function QR(r,e,i){const s=this.cache,l=e.length,u=pc(i,l);yn(s,u)||(r.uniform1iv(this.addr,u),Mn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||wx,u[f])}function jR(r){switch(r){case 5126:return LR;case 35664:return NR;case 35665:return OR;case 35666:return PR;case 35674:return IR;case 35675:return BR;case 35676:return FR;case 5124:case 35670:return zR;case 35667:case 35671:return HR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return kR;case 36294:return XR;case 36295:return WR;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return YR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return QR}}class JR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UR(i.type)}}class $R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jR(i.type)}}class eC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function mv(r,e){r.seq.push(e),r.map[e.id]=e}function tC(r,e,i){const s=r.name,l=s.length;for(ah.lastIndex=0;;){const u=ah.exec(s),f=ah.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){mv(i,p===void 0?new JR(h,r,e):new $R(h,r,e));break}else{let v=i.map[h];v===void 0&&(v=new eC(h),mv(i,v)),i=v}}}class $u{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);tC(h,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function gv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const nC=37297;let iC=0;function aC(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const _v=new ct;function rC(r){wt._getMatrix(_v,wt.workingColorSpace,r);const e=`mat3( ${_v.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(r)){case ac:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+aC(r.getShaderSource(e),h)}else return u}function sC(r,e){const i=rC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const oC={[$v]:"Linear",[ex]:"Reinhard",[tx]:"Cineon",[nx]:"ACESFilmic",[ax]:"AgX",[rx]:"Neutral",[ix]:"Custom"};function lC(r,e){const i=oC[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wu=new ue;function uC(){wt.getLuminanceCoefficients(Wu);const r=Wu.x.toFixed(4),e=Wu.y.toFixed(4),i=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function fC(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function dC(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),f=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function jo(r){return r!==""}function xv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(hC,mC)}const pC=new Map;function mC(r,e){let i=gt[e];if(i===void 0){const s=pC.get(e);if(s!==void 0)i=gt[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qh(i)}const gC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yv(r){return r.replace(gC,_C)}function _C(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Mv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vC={[Zu]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function xC(r){return vC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SC={[Hr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[fc]:"ENVMAP_TYPE_CUBE_UV"};function yC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const MC={[Gs]:"ENVMAP_MODE_REFRACTION"};function EC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":MC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bC={[Jv]:"ENVMAP_BLENDING_MULTIPLY",[WE]:"ENVMAP_BLENDING_MIX",[qE]:"ENVMAP_BLENDING_ADD"};function TC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bC[r.combine]||"ENVMAP_BLENDING_NONE"}function AC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function RC(r,e,i,s){const l=r.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=xC(i),p=yC(i),_=EC(i),v=TC(i),g=AC(i),M=cC(i),b=fC(u),C=l.createProgram();let y,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),S.length>0&&(S+=`
`)):(y=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),S=[Mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Wi?lC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,sC("linearToOutputTexel",i.outputColorSpace),uC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),f=Qh(f),f=xv(f,i),f=Sv(f,i),h=Qh(h),h=xv(h,i),h=Sv(h,i),f=yv(f),h=yv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=O+y+f,w=O+S+h,U=gv(l,l.VERTEX_SHADER,F),N=gv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,U),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(X){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(C)||"",se=l.getShaderInfoLog(U)||"",Y=l.getShaderInfoLog(N)||"",Q=j.trim(),B=se.trim(),H=Y.trim();let le=!0,ne=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,U,N);else{const ce=vv(l,U,"vertex"),D=vv(l,N,"fragment");Pt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Q+`
`+ce+`
`+D)}else Q!==""?rt("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(ne=!1);ne&&(X.diagnostics={runnable:le,programLog:Q,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(U),l.deleteShader(N),T=new $u(l,C),P=dC(l,C)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(C,nC)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=N,this}let CC=0;class wC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new DC(e),i.set(e,s)),s}}class DC{constructor(e){this.id=CC++,this.code=e,this.usedTimes=0}}function UC(r){return r===Gr||r===tc||r===nc}function LC(r,e,i,s,l,u){const f=new _p,h=new wC,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,q,X,j,se){const Y=X.fog,Q=j.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,le=e.get(T.envMap||B,H),ne=le&&le.mapping===fc?le.image.height:null,ce=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,J=D!==void 0?D.length:0;let me=0;Q.morphAttributes.position!==void 0&&(me=1),Q.morphAttributes.normal!==void 0&&(me=2),Q.morphAttributes.color!==void 0&&(me=3);let be,De,He,te;if(ce){const Xt=Vi[ce];be=Xt.vertexShader,De=Xt.fragmentShader}else{be=T.vertexShader,De=T.fragmentShader;const Xt=h.getVertexShaderStage(T),Nt=h.getFragmentShaderStage(T);h.update(T,Xt,Nt),He=Xt.id,te=Nt.id}const de=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),tt=j.isInstancedMesh===!0,Fe=j.isBatchedMesh===!0,ot=!!T.map,jt=!!T.matcap,at=!!le,Pe=!!T.aoMap,et=!!T.lightMap,lt=!!T.bumpMap&&T.wireframe===!1,Lt=!!T.normalMap,vt=!!T.displacementMap,Ft=!!T.emissiveMap,Rt=!!T.metalnessMap,xt=!!T.roughnessMap,k=T.anisotropy>0,Mt=T.clearcoat>0,Et=T.dispersion>0,L=T.retroreflectivity>0,E=T.iridescence>0,Z=T.sheen>0,ae=T.transmission>0,pe=k&&!!T.anisotropyMap,Ae=Mt&&!!T.clearcoatMap,Ue=Mt&&!!T.clearcoatNormalMap,ge=Mt&&!!T.clearcoatRoughnessMap,_e=E&&!!T.iridescenceMap,Re=E&&!!T.iridescenceThicknessMap,ke=Z&&!!T.sheenColorMap,Oe=Z&&!!T.sheenRoughnessMap,Le=!!T.specularMap,je=!!T.specularColorMap,Je=!!T.specularIntensityMap,st=ae&&!!T.transmissionMap,W=ae&&!!T.thicknessMap,Ce=!!T.gradientMap,xe=!!T.alphaMap,we=T.alphaTest>0,ze=!!T.alphaHash,Ee=!!T.extensions;let Qe=Wi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Qe=r.toneMapping);const qe={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:be,fragmentShader:De,defines:T.defines,customVertexShaderID:He,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&j._colorsTexture!==null,instancing:tt,instancingColor:tt&&j.instanceColor!==null,instancingMorph:tt&&j.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ot,matcap:jt,envMap:at,envMapMode:at&&le.mapping,envMapCubeUVHeight:ne,aoMap:Pe,lightMap:et,bumpMap:lt,normalMap:Lt,displacementMap:vt,emissiveMap:Ft,normalMapObjectSpace:Lt&&T.normalMapType===KE,normalMapTangentSpace:Lt&&T.normalMapType===Yh,packedNormalMap:Lt&&T.normalMapType===Yh&&UC(T.normalMap.format),metalnessMap:Rt,roughnessMap:xt,anisotropy:k,anisotropyMap:pe,clearcoat:Mt,clearcoatMap:Ae,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ge,dispersion:Et,retroreflection:L,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:je,specularIntensityMap:Je,transmission:ae,transmissionMap:st,thicknessMap:W,gradientMap:Ce,opaque:T.transparent===!1&&T.blending===Jo&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:we,alphaHash:ze,combine:T.combine,mapUv:ot&&b(T.map.channel),aoMapUv:Pe&&b(T.aoMap.channel),lightMapUv:et&&b(T.lightMap.channel),bumpMapUv:lt&&b(T.bumpMap.channel),normalMapUv:Lt&&b(T.normalMap.channel),displacementMapUv:vt&&b(T.displacementMap.channel),emissiveMapUv:Ft&&b(T.emissiveMap.channel),metalnessMapUv:Rt&&b(T.metalnessMap.channel),roughnessMapUv:xt&&b(T.roughnessMap.channel),anisotropyMapUv:pe&&b(T.anisotropyMap.channel),clearcoatMapUv:Ae&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&b(T.sheenRoughnessMap.channel),specularMapUv:Le&&b(T.specularMap.channel),specularColorMapUv:je&&b(T.specularColorMap.channel),specularIntensityMapUv:Je&&b(T.specularIntensityMap.channel),transmissionMapUv:st&&b(T.transmissionMap.channel),thicknessMapUv:W&&b(T.thicknessMap.channel),alphaMapUv:xe&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Lt||k),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Q.attributes.uv&&(ot||xe),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Lt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:me,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ot&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:Ft&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&T.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function y(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)P.push(q),P.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(S(P,T),O(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numSunLights),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numSunLightShadows),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function O(T,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.retroreflection&&f.enable(24),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),P.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const P=M[T.type];let q;if(P){const X=Vi[P];q=Kb.clone(X.uniforms)}else q=T.uniforms;return q}function w(T,P){let q=_.get(P);return q!==void 0?++q.usedTimes:(q=new RC(r,P,T,l),p.push(q),_.set(P,q)),q}function U(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function I(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:F,acquireProgram:w,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:I}}function NC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function OC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bv(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,b,C,y,S){let O=r[e];return O===void 0?(O={id:g.id,object:g,geometry:M,material:b,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[e]=O):(O.id=g.id,O.object=g,O.geometry=M,O.material=b,O.materialVariant=f(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=y,O.group=S),e++,O}function m(g,M,b,C,y,S,O){O.reversedDepth===!0&&(y=-y);const F=h(g,M,b,C,y,S);b.transmission>0?s.push(F):b.transparent===!0?l.push(F):i.push(F)}function p(g,M,b,C,y,S){const O=h(g,M,b,C,y,S);b.transmission>0?s.unshift(O):b.transparent===!0?l.unshift(O):i.unshift(O)}function _(g,M){i.length>1&&i.sort(g||OC),s.length>1&&s.sort(M||Ev),l.length>1&&l.sort(M||Ev)}function v(){for(let g=e,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:v,sort:_}}function PC(){let r=new WeakMap;function e(s,l){const u=r.get(s);let f;return u===void 0?(f=new bv,r.set(s,[f])):l>=u.length?(f=new bv,u.push(f)):f=u[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function IC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new ue,color:new Dt};break;case"SpotLight":i={position:new ue,direction:new ue,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ue,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ue,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return r[e.id]=i,i}}}function BC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let FC=0;function zC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function HC(r){const e=new IC,i=BC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ue);const l=new ue,u=new rn,f=new rn;function h(p){let _=0,v=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,O=0,F=0,w=0,U=0,N=0,I=0,T=0,P=0,q=0;p.sort(zC);for(let j=0,se=p.length;j<se;j++){const Y=p[j],Q=Y.color,B=Y.intensity,H=Y.distance;let le=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Gr?le=Y.shadow.map.texture:le=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)_+=Q.r*B,v+=Q.g*B,g+=Q.b*B;else if(Y.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(Y.sh.coefficients[ne],B);q++}else if(Y.isSunLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ce=Y.shadow,D=i.get(Y);D.shadowIntensity=ce.intensity,D.shadowBias=ce.bias,D.shadowNormalBias=ce.normalBias,D.shadowRadius=ce.radius,D.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),s.sunShadow[b]=D,s.sunShadowMap[b]=le;const J=ce.getViewportCount();for(let me=0;me<J;me++)s.sunShadowMatrix[C+me]=ce.getMatrix(me),s.sunShadowCascade[C+me]=ce._cascadeData[me];C+=J,b++}s.sun[M]=ne,M++}else if(Y.isDirectionalLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ce=Y.shadow,D=i.get(Y);D.shadowIntensity=ce.intensity,D.shadowBias=ce.bias,D.shadowNormalBias=ce.normalBias,D.shadowRadius=ce.radius,D.shadowMapSize=ce.mapSize,s.directionalShadow[y]=D,s.directionalShadowMap[y]=le,s.directionalShadowMatrix[y]=Y.shadow.matrix,U++}s.directional[y]=ne,y++}else if(Y.isSpotLight){const ne=e.get(Y);ne.position.setFromMatrixPosition(Y.matrixWorld),ne.color.copy(Q).multiplyScalar(B),ne.distance=H,ne.coneCos=Math.cos(Y.angle),ne.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ne.decay=Y.decay,s.spot[O]=ne;const ce=Y.shadow;if(Y.map&&(s.spotLightMap[T]=Y.map,T++,ce.updateMatrices(Y),Y.castShadow&&P++),s.spotLightMatrix[O]=ce.matrix,Y.castShadow){const D=i.get(Y);D.shadowIntensity=ce.intensity,D.shadowBias=ce.bias,D.shadowNormalBias=ce.normalBias,D.shadowRadius=ce.radius,D.shadowMapSize=ce.mapSize,s.spotShadow[O]=D,s.spotShadowMap[O]=le,I++}O++}else if(Y.isRectAreaLight){const ne=e.get(Y);ne.color.copy(Q).multiplyScalar(B),ne.halfWidth.set(Y.width*.5,0,0),ne.halfHeight.set(0,Y.height*.5,0),s.rectArea[F]=ne,F++}else if(Y.isPointLight){const ne=e.get(Y);if(ne.color.copy(Y.color).multiplyScalar(Y.intensity),ne.distance=Y.distance,ne.decay=Y.decay,Y.castShadow){const ce=Y.shadow,D=i.get(Y);D.shadowIntensity=ce.intensity,D.shadowBias=ce.bias,D.shadowNormalBias=ce.normalBias,D.shadowRadius=ce.radius,D.shadowMapSize=ce.mapSize,D.shadowCameraNear=ce.camera.near,D.shadowCameraFar=ce.camera.far,s.pointShadow[S]=D,s.pointShadowMap[S]=le,s.pointShadowMatrix[S]=Y.shadow.matrix,N++}s.point[S]=ne,S++}else if(Y.isHemisphereLight){const ne=e.get(Y);ne.skyColor.copy(Y.color).multiplyScalar(B),ne.groundColor.copy(Y.groundColor).multiplyScalar(B),s.hemi[w]=ne,w++}}F>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const X=s.hash;(X.sunLength!==M||X.directionalLength!==y||X.pointLength!==S||X.spotLength!==O||X.rectAreaLength!==F||X.hemiLength!==w||X.numSunShadows!==b||X.numDirectionalShadows!==U||X.numPointShadows!==N||X.numSpotShadows!==I||X.numSpotMaps!==T||X.numLightProbes!==q)&&(s.sun.length=M,s.directional.length=y,s.spot.length=O,s.rectArea.length=F,s.point.length=S,s.hemi.length=w,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+T-P,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=q,X.sunLength=M,X.directionalLength=y,X.pointLength=S,X.spotLength=O,X.rectAreaLength=F,X.hemiLength=w,X.numSunShadows=b,X.numDirectionalShadows=U,X.numPointShadows=N,X.numSpotShadows=I,X.numSpotMaps=T,X.numLightProbes=q,s.version=FC++)}function m(p,_){let v=0,g=0,M=0,b=0,C=0,y=0;const S=_.matrixWorldInverse;for(let O=0,F=p.length;O<F;O++){const w=p[O];if(w.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(S),v++}else if(w.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),g++}else if(w.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),b++}else if(w.isRectAreaLight){const U=s.rectArea[C];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),f.identity(),u.copy(w.matrixWorld),u.premultiply(S),f.extractRotation(u),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),C++}else if(w.isPointLight){const U=s.point[M];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),M++}else if(w.isHemisphereLight){const U=s.hemi[y];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:h,setupView:m,state:s}}function Tv(r){const e=new HC(r),i=[],s=[],l=[];function u(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function GC(r){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new Tv(r),e.set(l,[h])):u>=f.length?(h=new Tv(r),f.push(h)):h=f[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const VC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XC=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],WC=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],Av=new rn,Zo=new ue,rh=new ue;function qC(r,e,i){let s=new yp;const l=new Ut,u=new Ut,f=new an,h=new $b,m=new eT,p={},_=i.maxTextureSize,v={[zr]:jn,[jn]:zr,[Sa]:Sa},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:VC,fragmentShader:kC}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Da;b.setAttribute("position",new ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ki(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let S=this.type;this.render=function(N,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===AE&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zu);const P=r.getRenderTarget(),q=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ma),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const se=S!==this.type;se&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(Q=>Q.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,Q=N.length;Y<Q;Y++){const B=N[Y],H=B.shadow;if(H===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const le=H.getFrameExtents();l.multiply(le),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/le.x),l.x=u.x*le.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/le.y),l.y=u.y*le.y,H.mapSize.y=u.y));const ne=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ne,H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ko){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ni(l.x,l.y,{format:Gr,type:Zi,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new sl(l.x,l.y,ki),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn}else B.isPointLight?(H.map=new Rx(l.x),H.map.depthTexture=new Yb(l.x,Yi)):(H.map=new Ni(l.x,l.y),H.map.depthTexture=new sl(l.x,l.y,Yi)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Ra,this.type===Zu?(H.map.depthTexture.compareFunction=ne?pp:hp,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==l.x||H.map.height!==l.y)&&H.map.setSize(l.x,l.y);const ce=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,T);for(let D=0;D<ce;D++){const J=H.getCamera(D);if(B.isPointLight){const me=H.camera,be=H.matrix,De=B.distance||me.far;De!==me.far&&(me.far=De,me.updateProjectionMatrix()),Zo.setFromMatrixPosition(B.matrixWorld),me.position.copy(Zo),rh.copy(me.position),rh.add(XC[D]),me.up.copy(WC[D]),me.lookAt(rh),me.updateMatrixWorld(),be.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Av.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Av,me.coordinateSystem,me.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,D),r.clear();else{D===0&&(r.setRenderTarget(H.map),r.clear());const me=H.getViewport(D);f.set(u.x*me.x,u.y*me.y,u.x*me.z,u.y*me.w),j.viewport(f)}s=H.getFrustum(D),w(I,T,J,B,this.type)}H.isPointLightShadow!==!0&&this.type===Ko&&O(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(P,q,X)};function O(N,I){const T=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null?N.mapPass=new Ni(l.x,l.y,{format:Gr,type:Zi}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value.set(N.map.width,N.map.height),g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(I,null,T,g,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value.set(N.map.width,N.map.height),M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(I,null,T,M,C,null)}function F(N,I,T,P){let q=null;const X=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)q=X;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=q.uuid,se=I.uuid;let Y=p[j];Y===void 0&&(Y={},p[j]=Y);let Q=Y[se];Q===void 0&&(Q=q.clone(),Y[se]=Q,I.addEventListener("dispose",U)),q=Q}if(q.visible=I.visible,q.wireframe=I.wireframe,P===Ko?q.side=I.shadowSide!==null?I.shadowSide:I.side:q.side=I.shadowSide!==null?I.shadowSide:v[I.side],q.alphaMap=I.alphaMap,q.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,q.map=I.map,q.clipShadows=I.clipShadows,q.clippingPlanes=I.clippingPlanes,q.clipIntersection=I.clipIntersection,q.displacementMap=I.displacementMap,q.displacementScale=I.displacementScale,q.displacementBias=I.displacementBias,q.wireframeLinewidth=I.wireframeLinewidth,q.linewidth=I.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const j=r.properties.get(q);j.light=T}return q}function w(N,I,T,P,q){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&q===Ko)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const se=e.update(N),Y=N.material;if(Array.isArray(Y)){const Q=se.groups;for(let B=0,H=Q.length;B<H;B++){const le=Q[B],ne=Y[le.materialIndex];if(ne&&ne.visible){const ce=F(N,ne,P,q);N.onBeforeShadow(r,N,I,T,se,ce,le),r.renderBufferDirect(T,null,se,ce,N,le),N.onAfterShadow(r,N,I,T,se,ce,le)}}}else if(Y.visible){const Q=F(N,Y,P,q);N.onBeforeShadow(r,N,I,T,se,Q,null),r.renderBufferDirect(T,null,se,Q,N,null),N.onAfterShadow(r,N,I,T,se,Q,null)}}const j=N.children;for(let se=0,Y=j.length;se<Y;se++)w(j[se],I,T,P,q)}function U(N){N.target.removeEventListener("dispose",U);for(const T in p){const P=p[T],q=N.target.uuid;q in P&&(P[q].dispose(),delete P[q])}}}function YC(r,e){function i(){let W=!1;const Ce=new an;let xe=null;const we=new an(0,0,0,0);return{setMask:function(ze){xe!==ze&&!W&&(r.colorMask(ze,ze,ze,ze),xe=ze)},setLocked:function(ze){W=ze},setClear:function(ze,Ee,Qe,qe,Xt){Xt===!0&&(ze*=qe,Ee*=qe,Qe*=qe),Ce.set(ze,Ee,Qe,qe),we.equals(Ce)===!1&&(r.clearColor(ze,Ee,Qe,qe),we.copy(Ce))},reset:function(){W=!1,xe=null,we.set(-1,0,0,0)}}}function s(){let W=!1,Ce=!1,xe=null,we=null,ze=null;return{setReversed:function(Ee){if(Ce!==Ee){const Qe=e.get("EXT_clip_control");Ee?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const qe=ze;ze=null,this.setClear(qe)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?de(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!W&&(r.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(Ce&&(Ee=ob[Ee]),we!==Ee){switch(Ee){case lh:r.depthFunc(r.NEVER);break;case uh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case tl:r.depthFunc(r.LEQUAL);break;case fh:r.depthFunc(r.EQUAL);break;case dh:r.depthFunc(r.GEQUAL);break;case hh:r.depthFunc(r.GREATER);break;case ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Ce&&(Ee=1-Ee),r.clearDepth(Ee))},reset:function(){W=!1,xe=null,we=null,ze=null,Ce=!1}}}function l(){let W=!1,Ce=null,xe=null,we=null,ze=null,Ee=null,Qe=null,qe=null,Xt=null;return{setTest:function(Nt){W||(Nt?de(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Nt){Ce!==Nt&&!W&&(r.stencilMask(Nt),Ce=Nt)},setFunc:function(Nt,kn,Jn){(xe!==Nt||we!==kn||ze!==Jn)&&(r.stencilFunc(Nt,kn,Jn),xe=Nt,we=kn,ze=Jn)},setOp:function(Nt,kn,Jn){(Ee!==Nt||Qe!==kn||qe!==Jn)&&(r.stencilOp(Nt,kn,Jn),Ee=Nt,Qe=kn,qe=Jn)},setLocked:function(Nt){W=Nt},setClear:function(Nt){Xt!==Nt&&(r.clearStencil(Nt),Xt=Nt)},reset:function(){W=!1,Ce=null,xe=null,we=null,ze=null,Ee=null,Qe=null,qe=null,Xt=null}}}const u=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},M=new WeakMap,b=[],C=null,y=!1,S=null,O=null,F=null,w=null,U=null,N=null,I=null,T=new Dt(0,0,0),P=0,q=!1,X=null,j=null,se=null,Y=null,Q=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,le=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=le>=1):ne.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=le>=2);let ce=null,D={};const J=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),be=new an().fromArray(J),De=new an().fromArray(me);function He(W,Ce,xe,we){const ze=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(W,Ee),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<xe;Qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(Ce+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return Ee}const te={};te[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(r.DEPTH_TEST),f.setFunc(tl),lt(!1),Lt(T_),de(r.CULL_FACE),Pe(Ma);function de(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Te(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function tt(W,Ce){return g[W]!==Ce?(r.bindFramebuffer(W,Ce),g[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Fe(W,Ce){let xe=b,we=!1;if(W){xe=M.get(Ce),xe===void 0&&(xe=[],M.set(Ce,xe));const ze=W.textures;if(xe.length!==ze.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,Qe=ze.length;Ee<Qe;Ee++)xe[Ee]=r.COLOR_ATTACHMENT0+Ee;xe.length=ze.length,we=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,we=!0);we&&r.drawBuffers(xe)}function ot(W){return C!==W?(r.useProgram(W),C=W,!0):!1}const jt={[Os]:r.FUNC_ADD,[CE]:r.FUNC_SUBTRACT,[wE]:r.FUNC_REVERSE_SUBTRACT};jt[DE]=r.MIN,jt[UE]=r.MAX;const at={[LE]:r.ZERO,[NE]:r.ONE,[OE]:r.SRC_COLOR,[Qv]:r.SRC_ALPHA,[HE]:r.SRC_ALPHA_SATURATE,[FE]:r.DST_COLOR,[IE]:r.DST_ALPHA,[PE]:r.ONE_MINUS_SRC_COLOR,[jv]:r.ONE_MINUS_SRC_ALPHA,[zE]:r.ONE_MINUS_DST_COLOR,[BE]:r.ONE_MINUS_DST_ALPHA,[GE]:r.CONSTANT_COLOR,[VE]:r.ONE_MINUS_CONSTANT_COLOR,[kE]:r.CONSTANT_ALPHA,[XE]:r.ONE_MINUS_CONSTANT_ALPHA};function Pe(W,Ce,xe,we,ze,Ee,Qe,qe,Xt,Nt){if(W===Ma){y===!0&&(Te(r.BLEND),y=!1);return}if(y===!1&&(de(r.BLEND),y=!0),W!==RE){if(W!==S||Nt!==q){if((O!==Os||U!==Os)&&(r.blendEquation(r.FUNC_ADD),O=Os,U=Os),Nt)switch(W){case Jo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFunc(r.ONE,r.ONE);break;case R_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case C_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",W);break}else switch(W){case Jo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case A_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",W);break}F=null,w=null,N=null,I=null,T.set(0,0,0),P=0,S=W,q=Nt}return}ze=ze||Ce,Ee=Ee||xe,Qe=Qe||we,(Ce!==O||ze!==U)&&(r.blendEquationSeparate(jt[Ce],jt[ze]),O=Ce,U=ze),(xe!==F||we!==w||Ee!==N||Qe!==I)&&(r.blendFuncSeparate(at[xe],at[we],at[Ee],at[Qe]),F=xe,w=we,N=Ee,I=Qe),(qe.equals(T)===!1||Xt!==P)&&(r.blendColor(qe.r,qe.g,qe.b,Xt),T.copy(qe),P=Xt),S=W,q=!1}function et(W,Ce){W.side===Sa?Te(r.CULL_FACE):de(r.CULL_FACE);let xe=W.side===jn;Ce&&(xe=!xe),lt(xe),W.blending===Jo&&W.transparent===!1?Pe(Ma):Pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const we=W.stencilWrite;h.setTest(we),we&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ft(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){X!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),X=W)}function Lt(W){W!==bE?(de(r.CULL_FACE),W!==j&&(W===T_?r.cullFace(r.BACK):W===TE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),j=W}function vt(W){W!==se&&(H&&r.lineWidth(W),se=W)}function Ft(W,Ce,xe){W?(de(r.POLYGON_OFFSET_FILL),(Y!==Ce||Q!==xe)&&(Y=Ce,Q=xe,f.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,xe))):Te(r.POLYGON_OFFSET_FILL)}function Rt(W){W?de(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function xt(W){W===void 0&&(W=r.TEXTURE0+B-1),ce!==W&&(r.activeTexture(W),ce=W)}function k(W,Ce,xe){xe===void 0&&(ce===null?xe=r.TEXTURE0+B-1:xe=ce);let we=D[xe];we===void 0&&(we={type:void 0,texture:void 0},D[xe]=we),(we.type!==W||we.texture!==Ce)&&(ce!==xe&&(r.activeTexture(xe),ce=xe),r.bindTexture(W,Ce||te[W]),we.type=W,we.texture=Ce)}function Mt(){const W=D[ce];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Et(){try{r.compressedTexImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Z(){try{r.texSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function pe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Ae(){try{r.texStorage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Ue(){try{r.texStorage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function ge(){try{r.texImage2D(...arguments)}catch(W){Pt("WebGLState:",W)}}function _e(){try{r.texImage3D(...arguments)}catch(W){Pt("WebGLState:",W)}}function Re(W){return v[W]!==void 0?v[W]:r.getParameter(W)}function ke(W,Ce){v[W]!==Ce&&(r.pixelStorei(W,Ce),v[W]=Ce)}function Oe(W){be.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function Le(W){De.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function je(W,Ce){let xe=p.get(Ce);xe===void 0&&(xe=new WeakMap,p.set(Ce,xe));let we=xe.get(W);we===void 0&&(we=r.getUniformBlockIndex(Ce,W.name),xe.set(W,we))}function Je(W,Ce){const we=p.get(Ce).get(W);m.get(Ce)!==we&&(r.uniformBlockBinding(Ce,we,W.__bindingPointIndex),m.set(Ce,we))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},ce=null,D={},g={},M=new WeakMap,b=[],C=null,y=!1,S=null,O=null,F=null,w=null,U=null,N=null,I=null,T=new Dt(0,0,0),P=0,q=!1,X=null,j=null,se=null,Y=null,Q=null,be.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:de,disable:Te,bindFramebuffer:tt,drawBuffers:Fe,useProgram:ot,setBlending:Pe,setMaterial:et,setFlipSided:lt,setCullFace:Lt,setLineWidth:vt,setPolygonOffset:Ft,setScissorTest:Rt,activeTexture:xt,bindTexture:k,unbindTexture:Mt,compressedTexImage2D:Et,compressedTexImage3D:L,texImage2D:ge,texImage3D:_e,pixelStorei:ke,getParameter:Re,updateUBOMapping:je,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Oe,viewport:Le,reset:st}}function ZC(r,e,i,s,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,E){return b?new OffscreenCanvas(L,E):rc("canvas")}function y(L,E,Z){let ae=1;const pe=Et(L);if((pe.width>Z||pe.height>Z)&&(ae=Z/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ae=Math.floor(ae*pe.width),Ue=Math.floor(ae*pe.height);g===void 0&&(g=C(Ae,Ue));const ge=E?C(Ae,Ue):g;return ge.width=Ae,ge.height=Ue,ge.getContext("2d").drawImage(L,0,0,Ae,Ue),rt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Ue+")."),ge}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function S(L){return L.generateMipmaps}function O(L){r.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(L,E,Z,ae,pe,Ae=!1){if(L!==null){if(r[L]!==void 0)return r[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ue;ae&&(Ue=e.get("EXT_texture_norm16"),Ue||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===r.RED&&(Z===r.FLOAT&&(ge=r.R32F),Z===r.HALF_FLOAT&&(ge=r.R16F),Z===r.UNSIGNED_BYTE&&(ge=r.R8),Z===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),Z===r.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ge=r.R8UI),Z===r.UNSIGNED_SHORT&&(ge=r.R16UI),Z===r.UNSIGNED_INT&&(ge=r.R32UI),Z===r.BYTE&&(ge=r.R8I),Z===r.SHORT&&(ge=r.R16I),Z===r.INT&&(ge=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(ge=r.RG32F),Z===r.HALF_FLOAT&&(ge=r.RG16F),Z===r.UNSIGNED_BYTE&&(ge=r.RG8),Z===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),Z===r.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ge=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ge=r.RG16UI),Z===r.UNSIGNED_INT&&(ge=r.RG32UI),Z===r.BYTE&&(ge=r.RG8I),Z===r.SHORT&&(ge=r.RG16I),Z===r.INT&&(ge=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),Z===r.UNSIGNED_INT&&(ge=r.RGB32UI),Z===r.BYTE&&(ge=r.RGB8I),Z===r.SHORT&&(ge=r.RGB16I),Z===r.INT&&(ge=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ge=r.RGBA32UI),Z===r.BYTE&&(ge=r.RGBA8I),Z===r.SHORT&&(ge=r.RGBA16I),Z===r.INT&&(ge=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),Z===r.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(ge=r.R11F_G11F_B10F)),E===r.RGBA){const _e=Ae?ac:wt.getTransfer(pe);Z===r.FLOAT&&(ge=r.RGBA32F),Z===r.HALF_FLOAT&&(ge=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ge=_e===kt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),Z===r.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function U(L,E){let Z;return L?E===null||E===Yi||E===il?Z=r.DEPTH24_STENCIL8:E===ki?Z=r.DEPTH32F_STENCIL8:E===nl&&(Z=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===il?Z=r.DEPTH_COMPONENT24:E===ki?Z=r.DEPTH_COMPONENT32F:E===nl&&(Z=r.DEPTH_COMPONENT16),Z}function N(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dn&&L.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function I(L){const E=L.target;E.removeEventListener("dispose",I),P(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),X(E)}function P(L){const E=s.get(L);if(E.__webglInit===void 0)return;const Z=L.source,ae=M.get(Z);if(ae){const pe=ae[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&q(L),Object.keys(ae).length===0&&M.delete(Z)}s.remove(L)}function q(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const Z=L.source,ae=M.get(Z);delete ae[E.__cacheKey],f.memory.textures--}function X(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let pe=0;pe<E.__webglFramebuffer[ae].length;pe++)r.deleteFramebuffer(E.__webglFramebuffer[ae][pe]);else r.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[ae]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=L.textures;for(let ae=0,pe=Z.length;ae<pe;ae++){const Ae=s.get(Z[ae]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),f.memory.textures--),s.remove(Z[ae])}s.remove(L)}let j=0;function se(){j=0}function Y(){return j}function Q(L){j=L}function B(){const L=j;return L>=l.maxTextures&&rt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+l.maxTextures),j+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function le(L,E){const Z=s.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){const ae=L.image;if(ae===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,L,E);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function ne(L,E){const Z=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Te(Z,L,E);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function ce(L,E){const Z=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){Te(Z,L,E);return}i.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function D(L,E){const Z=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Z.__version!==L.version){tt(Z,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const J={[mh]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[gh]:r.MIRRORED_REPEAT},me={[Dn]:r.NEAREST,[YE]:r.NEAREST_MIPMAP_NEAREST,[bu]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Ud]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},be={[jE]:r.NEVER,[nb]:r.ALWAYS,[JE]:r.LESS,[hp]:r.LEQUAL,[$E]:r.EQUAL,[pp]:r.GEQUAL,[eb]:r.GREATER,[tb]:r.NOTEQUAL};function De(L,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Ud||E.magFilter===bu||E.magFilter===Br||E.minFilter===In||E.minFilter===Ud||E.minFilter===bu||E.minFilter===Br)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,me[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==bu&&E.minFilter!==Br||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function He(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",I));const ae=E.source;let pe=M.get(ae);pe===void 0&&(pe={},M.set(ae,pe));const Ae=H(E);if(Ae!==L.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),pe[Ae].usedTimes++;const Ue=pe[L.__cacheKey];Ue!==void 0&&(pe[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&q(E)),L.__cacheKey=Ae,L.__webglTexture=pe[Ae].texture}return Z}function te(L,E,Z){return Math.floor(Math.floor(L/Z)/E)}function de(L,E,Z,ae){const Ae=L.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,ae,E.data);else{Ae.sort((ke,Oe)=>ke.start-Oe.start);let Ue=0;for(let ke=1;ke<Ae.length;ke++){const Oe=Ae[Ue],Le=Ae[ke],je=Oe.start+Oe.count,Je=te(Le.start,E.width,4),st=te(Oe.start,E.width,4);Le.start<=je+1&&Je===st&&te(Le.start+Le.count-1,E.width,4)===Je?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++Ue,Ae[Ue]=Le)}Ae.length=Ue+1;const ge=i.getParameter(r.UNPACK_ROW_LENGTH),_e=i.getParameter(r.UNPACK_SKIP_PIXELS),Re=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ke=0,Oe=Ae.length;ke<Oe;ke++){const Le=Ae[ke],je=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),st=je%E.width,W=Math.floor(je/E.width),Ce=Je,xe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,st),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,st,W,Ce,xe,Z,ae,E.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ge),i.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function Te(L,E,Z){let ae=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=r.TEXTURE_3D);const pe=He(L,E),Ae=E.source;i.bindTexture(ae,L.__webglTexture,r.TEXTURE0+Z);const Ue=s.get(Ae);if(Ae.version!==Ue.__version||pe===!0){if(i.activeTexture(r.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xe=wt.getPrimaries(wt.workingColorSpace),we=E.colorSpace===cr?null:wt.getPrimaries(E.colorSpace),ze=E.colorSpace===cr||xe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,l.maxTextureSize);_e=Mt(E,_e);const Re=u.convert(E.format,E.colorSpace),ke=u.convert(E.type);let Oe=w(E.internalFormat,Re,ke,E.normalized,E.colorSpace,E.isVideoTexture);De(ae,E);let Le;const je=E.mipmaps,Je=E.isVideoTexture!==!0,st=Ue.__version===void 0||pe===!0,W=Ae.dataReady,Ce=N(E,_e);if(E.isDepthTexture)Oe=U(E.format===Fr,E.type),st&&(Je?i.texStorage2D(r.TEXTURE_2D,1,Oe,_e.width,_e.height):i.texImage2D(r.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Re,ke,null));else if(E.isDataTexture)if(je.length>0){Je&&st&&i.texStorage2D(r.TEXTURE_2D,Ce,Oe,je[0].width,je[0].height);for(let xe=0,we=je.length;xe<we;xe++)Le=je[xe],Je?W&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,ke,Le.data):i.texImage2D(r.TEXTURE_2D,xe,Oe,Le.width,Le.height,0,Re,ke,Le.data);E.generateMipmaps=!1}else Je?(st&&i.texStorage2D(r.TEXTURE_2D,Ce,Oe,_e.width,_e.height),W&&de(E,_e,Re,ke)):i.texImage2D(r.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Re,ke,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&st&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Oe,je[0].width,je[0].height,_e.depth);for(let xe=0,we=je.length;xe<we;xe++)if(Le=je[xe],E.format!==Ui)if(Re!==null)if(Je){if(W)if(E.layerUpdates.size>0){const ze=av(Le.width,Le.height,E.format,E.type);for(const Ee of E.layerUpdates){const Qe=Le.data.subarray(Ee*ze/Le.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Ee,Le.width,Le.height,1,Re,Qe)}}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,_e.depth,Re,Le.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Oe,Le.width,Le.height,_e.depth,0,Le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,_e.depth,Re,ke,Le.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xe,Oe,Le.width,Le.height,_e.depth,0,Re,ke,Le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Je&&st&&i.texStorage2D(r.TEXTURE_2D,Ce,Oe,je[0].width,je[0].height);for(let xe=0,we=je.length;xe<we;xe++)Le=je[xe],E.format!==Ui?Re!==null?Je?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(r.TEXTURE_2D,xe,Oe,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?W&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,ke,Le.data):i.texImage2D(r.TEXTURE_2D,xe,Oe,Le.width,Le.height,0,Re,ke,Le.data)}else if(E.isDataArrayTexture)if(Je){if(st&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Oe,_e.width,_e.height,_e.depth),W)if(E.layerUpdates.size>0){const xe=av(_e.width,_e.height,E.format,E.type);for(const we of E.layerUpdates){const ze=_e.data.subarray(we*xe/_e.data.BYTES_PER_ELEMENT,(we+1)*xe/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,_e.width,_e.height,1,Re,ke,ze)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,ke,_e.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Re,ke,_e.data);else if(E.isData3DTexture)Je?(st&&i.texStorage3D(r.TEXTURE_3D,Ce,Oe,_e.width,_e.height,_e.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,ke,_e.data)):i.texImage3D(r.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Re,ke,_e.data);else if(E.isFramebufferTexture){if(st)if(Je)i.texStorage2D(r.TEXTURE_2D,Ce,Oe,_e.width,_e.height);else{let xe=_e.width,we=_e.height;for(let ze=0;ze<Ce;ze++)i.texImage2D(r.TEXTURE_2D,ze,Oe,xe,we,0,Re,ke,null),xe>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),v.add(E),xe.onpaint=we=>{const ze=we.changedElements;for(const Ee of v)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,_e);else{const ze=r.RGBA,Ee=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,Ee,Qe,_e)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(je.length>0){if(Je&&st){const xe=Et(je[0]);i.texStorage2D(r.TEXTURE_2D,Ce,Oe,xe.width,xe.height)}for(let xe=0,we=je.length;xe<we;xe++)Le=je[xe],Je?W&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Re,ke,Le):i.texImage2D(r.TEXTURE_2D,xe,Oe,Re,ke,Le);E.generateMipmaps=!1}else if(Je){if(st){const xe=Et(_e);i.texStorage2D(r.TEXTURE_2D,Ce,Oe,xe.width,xe.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,ke,_e)}else i.texImage2D(r.TEXTURE_2D,0,Oe,Re,ke,_e);S(E)&&O(ae),Ue.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function tt(L,E,Z){if(E.image.length!==6)return;const ae=He(L,E),pe=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Z);const Ae=s.get(pe);if(pe.version!==Ae.__version||ae===!0){i.activeTexture(r.TEXTURE0+Z);const Ue=wt.getPrimaries(wt.workingColorSpace),ge=E.colorSpace===cr?null:wt.getPrimaries(E.colorSpace),_e=E.colorSpace===cr||Ue===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let Ee=0;Ee<6;Ee++)!Re&&!ke?Oe[Ee]=y(E.image[Ee],!0,l.maxCubemapSize):Oe[Ee]=ke?E.image[Ee].image:E.image[Ee],Oe[Ee]=Mt(E,Oe[Ee]);const Le=Oe[0],je=u.convert(E.format,E.colorSpace),Je=u.convert(E.type),st=w(E.internalFormat,je,Je,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ce=Ae.__version===void 0||ae===!0,xe=pe.dataReady;let we=N(E,Le);De(r.TEXTURE_CUBE_MAP,E);let ze;if(Re){W&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,st,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){ze=Oe[Ee].mipmaps;for(let Qe=0;Qe<ze.length;Qe++){const qe=ze[Qe];E.format!==Ui?je!==null?W?xe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,qe.width,qe.height,je,qe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,st,qe.width,qe.height,0,qe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,qe.width,qe.height,je,Je,qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,st,qe.width,qe.height,0,je,Je,qe.data)}}}else{if(ze=E.mipmaps,W&&Ce){ze.length>0&&we++;const Ee=Et(Oe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,st,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(ke){W?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Oe[Ee].width,Oe[Ee].height,je,Je,Oe[Ee].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,st,Oe[Ee].width,Oe[Ee].height,0,je,Je,Oe[Ee].data);for(let Qe=0;Qe<ze.length;Qe++){const Xt=ze[Qe].image[Ee].image;W?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,Xt.width,Xt.height,je,Je,Xt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,st,Xt.width,Xt.height,0,je,Je,Xt.data)}}else{W?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,je,Je,Oe[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,st,je,Je,Oe[Ee]);for(let Qe=0;Qe<ze.length;Qe++){const qe=ze[Qe];W?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,je,Je,qe.image[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,st,je,Je,qe.image[Ee])}}}S(E)&&O(r.TEXTURE_CUBE_MAP),Ae.__version=pe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,Z,ae,pe,Ae){const Ue=u.convert(Z.format,Z.colorSpace),ge=u.convert(Z.type),_e=w(Z.internalFormat,Ue,ge,Z.normalized,Z.colorSpace),Re=s.get(E),ke=s.get(Z);if(ke.__renderTarget=E,!Re.__hasExternalTextures){const Oe=Math.max(1,E.width>>Ae),Le=Math.max(1,E.height>>Ae);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?i.texImage3D(pe,Ae,_e,Oe,Le,E.depth,0,Ue,ge,null):i.texImage2D(pe,Ae,_e,Oe,Le,0,Ue,ge,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),xt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,pe,ke.__webglTexture,0,Rt(E)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,pe,ke.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(L,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const ae=E.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,Ae=U(E.stencilBuffer,pe),Ue=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),Ae,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),Ae,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,L)}else{const ae=E.textures;for(let pe=0;pe<ae.length;pe++){const Ae=ae[pe],Ue=u.convert(Ae.format,Ae.colorSpace),ge=u.convert(Ae.type),_e=w(Ae.internalFormat,Ue,ge,Ae.normalized,Ae.colorSpace);xt(E)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt(E),_e,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt(E),_e,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_e,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function jt(L,E,Z){const ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=s.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),De(r.TEXTURE_CUBE_MAP,E.depthTexture);const Re=u.convert(E.depthTexture.format),ke=u.convert(E.depthTexture.type);let Oe;E.depthTexture.format===Ra?Oe=r.DEPTH_COMPONENT24:E.depthTexture.format===Fr&&(Oe=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,E.width,E.height,0,Re,ke,null)}}else le(E.depthTexture,0);const Ae=pe.__webglTexture,Ue=Rt(E),ge=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,_e=E.depthTexture.format===Fr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ra)xt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ge,Ae,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ge,Ae,0);else if(E.depthTexture.format===Fr)xt(E)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,ge,Ae,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,_e,ge,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(L){const E=s.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ae=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=ae}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let ae=0;ae<6;ae++)jt(E.__webglFramebuffer[ae],L,ae);else{const ae=L.texture.mipmaps;ae&&ae.length>0?jt(E.__webglFramebuffer[0],L,0):jt(E.__webglFramebuffer,L,0)}else if(Z){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=r.createRenderbuffer(),ot(E.__webglDepthbuffer[ae],L,!1);else{const pe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,Ae)}}else{const ae=L.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ot(E.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(L,E,Z){const ae=s.get(L);E!==void 0&&Fe(ae.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&at(L)}function et(L){const E=L.texture,Z=s.get(L),ae=s.get(E);L.addEventListener("dispose",T);const pe=L.textures,Ae=L.isWebGLCubeRenderTarget===!0,Ue=pe.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=E.version,f.memory.textures++),Ae){Z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ge]=[];for(let _e=0;_e<E.mipmaps.length;_e++)Z.__webglFramebuffer[ge][_e]=r.createFramebuffer()}else Z.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)Z.__webglFramebuffer[ge]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let ge=0,_e=pe.length;ge<_e;ge++){const Re=s.get(pe[ge]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&xt(L)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const _e=pe[ge];Z.__webglColorRenderbuffer[ge]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[ge]);const Re=u.convert(_e.format,_e.colorSpace),ke=u.convert(_e.type),Oe=w(_e.internalFormat,Re,ke,_e.normalized,_e.colorSpace,L.isXRRenderTarget===!0),Le=Rt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,Oe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Z.__webglColorRenderbuffer[ge])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),ot(Z.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),De(r.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Fe(Z.__webglFramebuffer[ge][_e],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Fe(Z.__webglFramebuffer[ge],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(E)&&O(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let ge=0,_e=pe.length;ge<_e;ge++){const Re=pe[ge],ke=s.get(Re);let Oe=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Oe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ke.__webglTexture),De(Oe,Re),Fe(Z.__webglFramebuffer,L,Re,r.COLOR_ATTACHMENT0+ge,Oe,0),S(Re)&&O(Oe)}i.unbindTexture()}else{let ge=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ge,ae.__webglTexture),De(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Fe(Z.__webglFramebuffer[_e],L,E,r.COLOR_ATTACHMENT0,ge,_e);else Fe(Z.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,ge,0);S(E)&&O(ge),i.unbindTexture()}L.depthBuffer&&at(L)}function lt(L){const E=L.textures;for(let Z=0,ae=E.length;Z<ae;Z++){const pe=E[Z];if(S(pe)){const Ae=F(L),Ue=s.get(pe).__webglTexture;i.bindTexture(Ae,Ue),O(Ae),i.unbindTexture()}}}const Lt=[],vt=[];function Ft(L){if(L.samples>0){if(xt(L)===!1){const E=L.textures,Z=L.width,ae=L.height;let pe=r.COLOR_BUFFER_BIT;const Ae=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(L),ge=E.length>1;if(ge)for(let Re=0;Re<E.length;Re++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const _e=L.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),ge){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const ke=s.get(E[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,pe,r.NEAREST),m===!0&&(Lt.length=0,vt.length=0,Lt.push(r.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Lt.push(Ae),vt.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<E.length;Re++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const ke=s.get(E[Re]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,ke,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Rt(L){return Math.min(l.maxSamples,L.samples)}function xt(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(L){const E=f.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Mt(L,E){const Z=L.colorSpace,ae=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==ic&&Z!==cr&&(wt.getTransfer(Z)===kt?(ae!==Ui||pe!==ui)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",Z)),E}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=se,this.getTextureUnits=Y,this.setTextureUnits=Q,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=ce,this.setTextureCube=D,this.rebindTextures=Pe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KC(r,e){function i(s,l=cr){let u;const f=wt.getTransfer(l);if(s===ui)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ux)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===cx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ox)return r.BYTE;if(s===lx)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===Zi)return r.HALF_FLOAT;if(s===fx)return r.ALPHA;if(s===dx)return r.RGB;if(s===Ui)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Fr)return r.DEPTH_STENCIL;if(s===hx)return r.RED;if(s===cp)return r.RED_INTEGER;if(s===Gr)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===Ku||s===Qu||s===ju||s===Ju)if(f===kt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Ku)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Ku)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ju)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===vh||s===xh||s===Sh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===_h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yh||s===Mh||s===Eh||s===bh||s===Th||s===tc||s===Ah)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===yh||s===Mh)return f===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Eh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===bh)return u.COMPRESSED_R11_EAC;if(s===Th)return u.COMPRESSED_SIGNED_R11_EAC;if(s===tc)return u.COMPRESSED_RG11_EAC;if(s===Ah)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===Ih||s===Bh||s===Fh||s===zh||s===Hh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Rh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ch)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ph)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ih)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gh||s===Vh||s===kh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Gh)return f===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xh||s===Wh||s===nc||s===qh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Xh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Wh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const QC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new yx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:QC,fragmentShader:jC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new dc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $C extends Vr{constructor(e,i){super();const s=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new JC,S={},O=i.getContextAttributes();let F=null,w=null;const U=[],N=[],I=new Ut;let T=null,P=null;const q=new yi;q.viewport=new an;const X=new yi;X.viewport=new an;const j=[q,X],se=new rT;let Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=U[te];return de===void 0&&(de=new Fd,U[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=U[te];return de===void 0&&(de=new Fd,U[te]=de),de.getGripSpace()},this.getHand=function(te){let de=U[te];return de===void 0&&(de=new Fd,U[te]=de),de.getHandSpace()};function B(te){const de=N.indexOf(te.inputSource);if(de===-1)return;const Te=U[de];Te!==void 0&&(Te.update(te.inputSource,te.frame,p||f),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",le);for(let te=0;te<U.length;te++){const de=N[te];de!==null&&(N[te]=null,U[te].disconnect(de))}Y=null,Q=null,y.reset();for(const te in S)delete S[te];if(e.setRenderTarget(F),M=null,g=null,v=null,l=null,w=null,He.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),P!==null){const te=P.camera;te.fov=P.fov,te.zoom=P.zoom,te.updateProjectionMatrix(),P=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",H),l.addEventListener("inputsourceschange",le),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,tt=null,Fe=null;O.depth&&(Fe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=O.stencil?Fr:Ra,tt=O.stencil?il:Yi);const ot={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(ot),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Ni(g.textureWidth,g.textureHeight,{format:Ui,type:ui,depthTexture:new sl(g.textureWidth,g.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Ni(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),He.setContext(l),He.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function le(te){for(let de=0;de<te.removed.length;de++){const Te=te.removed[de],tt=N.indexOf(Te);tt>=0&&(N[tt]=null,U[tt].disconnect(Te))}for(let de=0;de<te.added.length;de++){const Te=te.added[de];let tt=N.indexOf(Te);if(tt===-1){for(let ot=0;ot<U.length;ot++)if(ot>=N.length){N.push(Te),tt=ot;break}else if(N[ot]===null){N[ot]=Te,tt=ot;break}if(tt===-1)break}const Fe=U[tt];Fe&&Fe.connect(Te)}}const ne=new ue,ce=new ue;function D(te,de,Te){ne.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const tt=ne.distanceTo(ce),Fe=de.projectionMatrix.elements,ot=Te.projectionMatrix.elements,jt=Fe[14]/(Fe[10]-1),at=Fe[14]/(Fe[10]+1),Pe=(Fe[9]+1)/Fe[5],et=(Fe[9]-1)/Fe[5],lt=(Fe[8]-1)/Fe[0],Lt=(ot[8]+1)/ot[0],vt=jt*lt,Ft=jt*Lt,Rt=tt/(-lt+Lt),xt=Rt*-lt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(xt),te.translateZ(Rt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Fe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const k=jt+Rt,Mt=at+Rt,Et=vt-xt,L=Ft+(tt-xt),E=Pe*at/Mt*k,Z=et*at/Mt*k;te.projectionMatrix.makePerspective(Et,L,E,Z,k,Mt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function J(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let de=te.near,Te=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),se.near=X.near=q.near=de,se.far=X.far=q.far=Te,(Y!==se.near||Q!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),Y=se.near,Q=se.far),se.layers.mask=te.layers.mask|6,q.layers.mask=se.layers.mask&-5,X.layers.mask=se.layers.mask&-3;const tt=te.parent,Fe=se.cameras;J(se,tt);for(let ot=0;ot<Fe.length;ot++)J(Fe[ot],tt);Fe.length===2?D(se,q,X):se.projectionMatrix.copy(q.projectionMatrix),P===null&&te.isPerspectiveCamera&&(P={camera:te,fov:te.fov,zoom:te.zoom}),me(te,se,tt)};function me(te,de,Te){Te===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=rl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(te){m=te,g!==null&&(g.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(te){return S[te]};let be=null;function De(te,de){if(_=de.getViewerPose(p||f),b=de,_!==null){const Te=_.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let tt=!1;Te.length!==se.cameras.length&&(se.cameras.length=0,tt=!0);for(let at=0;at<Te.length;at++){const Pe=Te[at];let et=null;if(M!==null)et=M.getViewport(Pe);else{const Lt=v.getViewSubImage(g,Pe);et=Lt.viewport,at===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let lt=j[at];lt===void 0&&(lt=new yi,lt.layers.enable(at),lt.viewport=new an,j[at]=lt),lt.matrix.fromArray(Pe.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pe.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(et.x,et.y,et.width,et.height),at===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),tt===!0&&se.cameras.push(lt)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const at=v.getDepthInformation(Te[0]);at&&at.isValid&&at.texture&&y.init(at,l.renderState)}if(Fe&&Fe.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let at=0;at<Te.length;at++){const Pe=Te[at].camera;if(Pe){let et=S[Pe];et||(et=new yx,S[Pe]=et);const lt=v.getCameraImage(Pe);et.sourceTexture=lt}}}}for(let Te=0;Te<U.length;Te++){const tt=N[Te],Fe=U[Te];tt!==null&&Fe!==void 0&&Fe.update(tt,de,p||f)}be&&be(te,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),b=null}const He=new Tx;He.setAnimationLoop(De),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const e3=new rn,Lx=new ct;Lx.set(-1,0,0,0,1,0,0,0,1);function t3(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Mx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,O,F,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(y,S):S.isMeshLambertMaterial?(u(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(y,S),v(y,S)):S.isMeshPhongMaterial?(u(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,w)):S.isMeshMatcapMaterial?(u(y,S),b(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),C(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,O,F):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const O=e.get(S),F=O.envMap,w=O.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(e3.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Lx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,O,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*O,y.scale.value=F*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,O){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const O=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function n3(r,e,i,s){let l={},u={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const N=U.program;s.uniformBlockBinding(w,N)}function p(w,U){let N=l[w.id];N===void 0&&(y(w),N=_(w),l[w.id]=N,w.addEventListener("dispose",O));const I=U.program;s.updateUBOMapping(w,I);const T=e.render.frame;u[w.id]!==T&&(g(w),u[w.id]=T)}function _(w){const U=v();w.__bindingPointIndex=U;const N=r.createBuffer(),I=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,I,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,N),N}function v(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const U=l[w.id],N=w.uniforms,I=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let T=0,P=N.length;T<P;T++){const q=N[T];if(Array.isArray(q))for(let X=0,j=q.length;X<j;X++)M(q[X],T,X,I);else M(q,T,0,I)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,U,N,I){if(C(w,U,N,I)===!0){const T=w.__offset,P=w.value;if(Array.isArray(P)){let q=0;for(let X=0;X<P.length;X++){const j=P[X],se=S(j);b(j,w.__data,q),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(q+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(P,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function b(w,U,N){typeof w=="number"||typeof w=="boolean"?U[0]=w:w.isMatrix3?(U[0]=w.elements[0],U[1]=w.elements[1],U[2]=w.elements[2],U[3]=0,U[4]=w.elements[3],U[5]=w.elements[4],U[6]=w.elements[5],U[7]=0,U[8]=w.elements[6],U[9]=w.elements[7],U[10]=w.elements[8],U[11]=0):ArrayBuffer.isView(w)?U.set(new w.constructor(w.buffer,w.byteOffset,U.length)):w.toArray(U,N)}function C(w,U,N,I){const T=w.value,P=U+"_"+N;if(I[P]===void 0)return typeof T=="number"||typeof T=="boolean"?I[P]=T:ArrayBuffer.isView(T)?I[P]=T.slice():I[P]=T.clone(),!0;{const q=I[P];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return I[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function y(w){const U=w.uniforms;let N=0;const I=16;for(let P=0,q=U.length;P<q;P++){const X=Array.isArray(U[P])?U[P]:[U[P]];for(let j=0,se=X.length;j<se;j++){const Y=X[j],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let B=0,H=Q.length;B<H;B++){const le=Q[B],ne=S(le),ce=N%I,D=ce%ne.boundary,J=ce+D;N+=D,J!==0&&I-J<ne.storage&&(N+=I-J),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=N,N+=ne.storage}}}const T=N%I;return T>0&&(N+=I-T),w.__size=N,w.__cache={},this}function S(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(U.boundary=16,U.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),U}function O(w){const U=w.target;U.removeEventListener("dispose",O);const N=f.indexOf(U.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function F(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:F}}const i3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function a3(){return Gi===null&&(Gi=new Wb(i3,16,16,Gr,Zi),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=ya,Gi.wrapT=ya,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class r3{constructor(e={}){const{canvas:i=rb(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ui}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const C=M,y=new Set([dp,fp,cp]),S=new Set([ui,Yi,nl,il,lp,up]),O=new Uint32Array(4),F=new Int32Array(4),w=new ue;let U=null,N=null;const I=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let X=!1,j=null,se=null,Y=null,Q=null;this._outputColorSpace=Pn;let B=0,H=0,le=null,ne=-1,ce=null;const D=new an,J=new an;let me=null;const be=new Dt(0);let De=0,He=i.width,te=i.height,de=1,Te=null,tt=null;const Fe=new an(0,0,He,te),ot=new an(0,0,He,te);let jt=!1;const at=new yp;let Pe=!1,et=!1;const lt=new rn,Lt=new ue,vt=new an,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function xt(){return le===null?de:1}let k=s;function Mt(A,G){return i.getContext(A,G)}let Et,L,E,Z,ae,pe,Ae,Ue,ge,_e,Re,ke,Oe,Le,je,Je,st,W,Ce,xe,we,ze,Ee;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sp}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",kn,!1),k===null){const G="webgl2";if(k=Mt(G,A),k===null)throw Mt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),Pt("WebGLRenderer: "+A.message),A}function Qe(){Et=new aR(k),Et.init(),we=new KC(k,Et),L=new ZA(k,Et,e,we),E=new YC(k,Et),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),se=k.createFramebuffer(),Y=k.createFramebuffer(),Q=k.createFramebuffer(),Z=new oR(k),ae=new NC,pe=new ZC(k,Et,E,ae,L,we,Z),Ae=new iR(q),Ue=new uT(k),ze=new qA(k,Ue),ge=new rR(k,Ue,Z,ze),_e=new uR(k,ge,Ue,ze,Z),W=new lR(k,L,pe),je=new KA(ae),Re=new LC(q,Ae,Et,L,ze,je),ke=new t3(q,ae),Oe=new PC,Le=new GC(Et),st=new WA(q,Ae,E,_e,b,m),Je=new qC(q,_e,L),Ee=new n3(k,Z,L,E),Ce=new YA(k,Et,Z),xe=new sR(k,Et,Z),Z.programs=Re.programs,q.capabilities=L,q.extensions=Et,q.properties=ae,q.renderLists=Oe,q.shadowMap=Je,q.state=E,q.info=Z}C!==ui&&(P=new fR(C,i.width,i.height,h,l,u));const qe=new $C(q,k);this.xr=qe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(He,te,!1))},this.getSize=function(A){return A.set(He,te)},this.setSize=function(A,G,fe=!0){if(qe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,te=G,i.width=Math.floor(A*de),i.height=Math.floor(G*de),fe===!0&&(i.style.width=A+"px",i.style.height=G+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(He*de,te*de).floor()},this.setDrawingBufferSize=function(A,G,fe){He=A,te=G,de=fe,i.width=Math.floor(A*fe),i.height=Math.floor(G*fe),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(C===ui){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,G,fe,$){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,G,fe,$),E.viewport(D.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,G,fe,$){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,G,fe,$),E.scissor(J.copy(ot).multiplyScalar(de).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(A){E.setScissorTest(jt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,fe=!0){let $=0;if(A){let ee=!1;if(le!==null){const Ie=le.texture.format;ee=y.has(Ie)}if(ee){const Ie=le.texture.type,Xe=S.has(Ie),Ne=st.getClearColor(),Ge=st.getClearAlpha(),Ve=Ne.r,ft=Ne.g,_t=Ne.b;Xe?(O[0]=Ve,O[1]=ft,O[2]=_t,O[3]=Ge,k.clearBufferuiv(k.COLOR,0,O)):(F[0]=Ve,F[1]=ft,F[2]=_t,F[3]=Ge,k.clearBufferiv(k.COLOR,0,F))}else $|=k.COLOR_BUFFER_BIT}G&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",kn,!1),st.dispose(),Oe.dispose(),Le.dispose(),ae.dispose(),Ae.dispose(),_e.dispose(),ze.dispose(),Ee.dispose(),Re.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",cn),qe.removeEventListener("sessionend",Tn),Xn.stop()};function Xt(A){A.preventDefault(),U_("WebGLRenderer: Context Lost."),X=!0}function Nt(){U_("WebGLRenderer: Context Restored."),X=!1;const A=Z.autoReset,G=Je.enabled,fe=Je.autoUpdate,$=Je.needsUpdate,ee=Je.type;Qe(),Z.autoReset=A,Je.enabled=G,Je.autoUpdate=fe,Je.needsUpdate=$,Je.type=ee}function kn(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const G=A.target;G.removeEventListener("dispose",Jn),Zs(G)}function Zs(A){Ks(A),ae.remove(A)}function Ks(A){const G=ae.get(A).programs;G!==void 0&&(G.forEach(function(fe){Re.releaseProgram(fe)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,fe,$,ee,Ie){G===null&&(G=Ft);const Xe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ne=Na(A,G,fe,$,ee);E.setMaterial($,Xe);let Ge=fe.index,Ve=1;if($.wireframe===!0){if(Ge=ge.getWireframeAttribute(fe),Ge===void 0)return;Ve=2}const ft=fe.drawRange,_t=fe.attributes.position;let Ye=ft.start*Ve,Ot=(ft.start+ft.count)*Ve;Ie!==null&&(Ye=Math.max(Ye,Ie.start*Ve),Ot=Math.min(Ot,(Ie.start+Ie.count)*Ve)),Ge!==null?(Ye=Math.max(Ye,0),Ot=Math.min(Ot,Ge.count)):_t!=null&&(Ye=Math.max(Ye,0),Ot=Math.min(Ot,_t.count));const Jt=Ot-Ye;if(Jt<0||Jt===1/0)return;ze.setup(ee,$,Ne,fe,Ge);let Kt,pt=Ce;if(Ge!==null&&(Kt=Ue.get(Ge),pt=xe,pt.setIndex(Kt)),ee.isMesh)$.wireframe===!0?(E.setLineWidth($.wireframeLinewidth*xt()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(ee.isLine){let dn=$.linewidth;dn===void 0&&(dn=1),E.setLineWidth(dn*xt()),ee.isLineSegments?pt.setMode(k.LINES):ee.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else ee.isPoints?pt.setMode(k.POINTS):ee.isSprite&&pt.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))pt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const dn=ee._multiDrawStarts,We=ee._multiDrawCounts,vn=ee._multiDrawCount,mt=Ge?Ue.get(Ge).bytesPerElement:1,Fn=ae.get($).currentProgram.getUniforms();for(let $n=0;$n<vn;$n++)Fn.setValue(k,"_gl_DrawID",$n),pt.render(dn[$n]/mt,We[$n])}else if(ee.isInstancedMesh)pt.renderInstances(Ye,Jt,ee.count);else if(fe.isInstancedBufferGeometry){const dn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,We=Math.min(fe.instanceCount,dn);pt.renderInstances(Ye,Jt,We)}else pt.render(Ye,Jt)};function Qs(A,G,fe,$){j!==null&&A.isNodeMaterial&&j.setObject($,A),Pe===!0&&je.setState(A,fe,!1),A.transparent===!0&&A.side===Sa&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,La(A,G,$),A.side=zr,A.needsUpdate=!0,La(A,G,$),A.side=Sa):La(A,G,$)}this.compile=function(A,G,fe=null){fe===null&&(fe=A),j!==null&&j.renderStart(A,G,fe),N=Le.get(fe),N.init(G),T.push(N),fe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),A!==fe&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights(),j!==null&&j.updateLights(N.state.lightsArray),et=this.localClippingEnabled,Pe=je.init(this.clippingPlanes,et),Pe===!0&&je.setGlobalState(this.clippingPlanes,G),j!==null&&Je.render(N.state.shadowsArray,fe,G);const $=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ie=ee.material;if(Ie)if(Array.isArray(Ie))for(let Xe=0;Xe<Ie.length;Xe++){const Ne=Ie[Xe];Qs(Ne,fe,G,ee),$.add(Ne)}else Qs(Ie,fe,G,ee),$.add(Ie)}),N=T.pop(),j!==null&&j.renderEnd(),$},this.compileAsync=function(A,G,fe=null){const $=this.compile(A,G,fe);return new Promise(ee=>{function Ie(){if($.forEach(function(Xe){const Ge=ae.get(Xe).currentProgram;(Ge===void 0||Ge.isReady())&&$.delete(Xe)}),$.size===0){ee(A);return}setTimeout(Ie,10)}Et.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let kr=null;function Oi(A){kr&&kr(A)}function cn(){Xn.stop()}function Tn(){Xn.start()}const Xn=new Tx;Xn.setAnimationLoop(Oi),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){kr=A,qe.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},qe.addEventListener("sessionstart",cn),qe.addEventListener("sessionend",Tn),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;j!==null&&j.renderStart(A,G);const fe=qe.enabled===!0&&qe.isPresenting===!0,$=P!==null&&(le===null||fe)&&P.begin(q,le);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(G),G=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,G,le),N=Le.get(A,T.length),N.init(G),N.state.textureUnits=pe.getTextureUnits(),T.push(N),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),at.setFromProjectionMatrix(lt,Xi,G.reversedDepth),et=this.localClippingEnabled,Pe=je.init(this.clippingPlanes,et),U=Oe.get(A,I.length),U.init(),I.push(U),qe.enabled===!0&&qe.isPresenting===!0){const Xe=q.xr.getDepthSensingMesh();Xe!==null&&hr(Xe,G,-1/0,q.sortObjects)}hr(A,G,0,q.sortObjects),U.finish(),j!==null&&j.updateLights(N.state.lightsArray),q.sortObjects===!0&&U.sort(Te,tt),Rt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Rt&&st.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Pe===!0&&je.beginShadows();const ee=N.state.shadowsArray;if(Je.render(ee,A,G),Pe===!0&&je.endShadows(),($&&P.hasRenderPass())===!1){const Xe=U.opaque,Ne=U.transmissive;if(N.setupLights(),G.isArrayCamera){const Ge=G.cameras;if(Ne.length>0)for(let Ve=0,ft=Ge.length;Ve<ft;Ve++){const _t=Ge[Ve];hl(Xe,Ne,A,_t)}Rt&&st.render(A);for(let Ve=0,ft=Ge.length;Ve<ft;Ve++){const _t=Ge[Ve];dl(U,A,_t,_t.viewport)}}else Ne.length>0&&hl(Xe,Ne,A,G),Rt&&st.render(A),dl(U,A,G)}le!==null&&H===0&&(pe.updateMultisampleRenderTarget(le),pe.updateRenderTargetMipmap(le)),$&&P.end(q),A.isScene===!0&&A.onAfterRender(q,A,G),ze.resetDefaultState(),ne=-1,ce=null,T.pop(),T.length>0?(N=T[T.length-1],pe.setTextureUnits(N.state.textureUnits),Pe===!0&&je.setGlobalState(q.clippingPlanes,N.state.camera)):N=null,I.pop(),I.length>0?U=I[I.length-1]:U=null,j!==null&&j.renderEnd()};function hr(A,G,fe,$){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(at)){$&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Xe=_e.update(A),Ne=A.material;Ne.visible&&U.push(A,Xe,Ne,fe,vt.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(at))){const Xe=_e.update(A),Ne=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),vt.copy(Xe.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(Ne)){const Ge=Xe.groups;for(let Ve=0,ft=Ge.length;Ve<ft;Ve++){const _t=Ge[Ve],Ye=Ne[_t.materialIndex];Ye&&Ye.visible&&U.push(A,Xe,Ye,fe,vt.z,_t,G)}}else Ne.visible&&U.push(A,Xe,Ne,fe,vt.z,null,G)}}const Ie=A.children;for(let Xe=0,Ne=Ie.length;Xe<Ne;Xe++)hr(Ie[Xe],G,fe,$)}function dl(A,G,fe,$){const{opaque:ee,transmissive:Ie,transparent:Xe}=A;N.setupLightsView(fe),Pe===!0&&je.setGlobalState(q.clippingPlanes,fe),$&&E.viewport(D.copy($)),ee.length>0&&pr(ee,G,fe),Ie.length>0&&pr(Ie,G,fe),Xe.length>0&&pr(Xe,G,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function hl(A,G,fe,$){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[$.id]===void 0){const Ye=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[$.id]=new Ni(1,1,{generateMipmaps:!0,type:Ye?Zi:ui,minFilter:Br,samples:Math.max(4,L.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ie=N.state.transmissionRenderTarget[$.id],Xe=$.viewport||D;Ie.setSize(Xe.z*q.transmissionResolutionScale,Xe.w*q.transmissionResolutionScale);const Ne=q.getRenderTarget(),Ge=q.getActiveCubeFace(),Ve=q.getActiveMipmapLevel();q.setRenderTarget(Ie),q.getClearColor(be),De=q.getClearAlpha(),De<1&&q.setClearColor(16777215,.5),q.clear(),Rt&&st.render(fe);const ft=q.toneMapping;q.toneMapping=Wi;const _t=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),N.setupLightsView($),Pe===!0&&je.setGlobalState(q.clippingPlanes,$),pr(A,fe,$),pe.updateMultisampleRenderTarget(Ie),pe.updateRenderTargetMipmap(Ie),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ot=0,Jt=G.length;Ot<Jt;Ot++){const Kt=G[Ot],{object:pt,geometry:dn,material:We,group:vn}=Kt;if(We.side===Sa&&pt.layers.test($.layers)){const mt=We.side;We.side=jn,We.needsUpdate=!0,Ua(pt,fe,$,dn,We,vn),We.side=mt,We.needsUpdate=!0,Ye=!0}}Ye===!0&&(pe.updateMultisampleRenderTarget(Ie),pe.updateRenderTargetMipmap(Ie))}q.setRenderTarget(Ne,Ge,Ve),q.setClearColor(be,De),_t!==void 0&&($.viewport=_t),q.toneMapping=ft}function pr(A,G,fe){const $=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ie=A.length;ee<Ie;ee++){const Xe=A[ee],{object:Ne,geometry:Ge,group:Ve}=Xe;let ft=Xe.material;ft.allowOverride===!0&&$!==null&&(ft=$),Ne.layers.test(fe.layers)&&Ua(Ne,G,fe,Ge,ft,Ve)}}function Ua(A,G,fe,$,ee,Ie){j!==null&&ee.isNodeMaterial&&j.setObject(A,ee),A.onBeforeRender(q,G,fe,$,ee,Ie),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(q,G,fe,$,A,Ie),ee.transparent===!0&&ee.side===Sa&&ee.forceSinglePass===!1?(ee.side=jn,ee.needsUpdate=!0,q.renderBufferDirect(fe,G,$,ee,A,Ie),ee.side=zr,ee.needsUpdate=!0,q.renderBufferDirect(fe,G,$,ee,A,Ie),ee.side=Sa):q.renderBufferDirect(fe,G,$,ee,A,Ie),A.onAfterRender(q,G,fe,$,ee,Ie)}function La(A,G,fe){G.isScene!==!0&&(G=Ft);const $=ae.get(A),ee=N.state.lights,Ie=N.state.shadowsArray,Xe=ee.state.version,Ne=Re.getParameters(A,ee.state,Ie,G,fe,N.state.lightProbeGridArray),Ge=Re.getProgramCacheKey(Ne);let Ve=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=Ae.get(A.envMap||$.environment,ft),$.envMapRotation=$.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Jn),Ve=new Map,$.programs=Ve);let _t=Ve.get(Ge);if(_t!==void 0){if($.currentProgram===_t&&$.lightsStateVersion===Xe)return Ji(A,Ne),_t}else Ne.uniforms=Re.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,fe,Ne),A.onBeforeCompile(Ne,q),_t=Re.acquireProgram(Ne,Ge),Ve.set(Ge,_t),$.uniforms=Ne.uniforms;const Ye=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=je.uniform),Ji(A,Ne),$.needsLights=pl(A),$.lightsStateVersion=Xe,$.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.sunLights.value=ee.state.sun,Ye.sunLightShadows.value=ee.state.sunShadow,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ye.sunShadowCascade.value=ee.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),$.lightProbeGrid=N.state.lightProbeGridArray.length>0,$.currentProgram=_t,$.uniformsList=null,_t}function ji(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=$u.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ji(A,G){const fe=ae.get(A);fe.outputColorSpace=G.outputColorSpace,fe.batching=G.batching,fe.batchingColor=G.batchingColor,fe.instancing=G.instancing,fe.instancingColor=G.instancingColor,fe.instancingMorph=G.instancingMorph,fe.skinning=G.skinning,fe.morphTargets=G.morphTargets,fe.morphNormals=G.morphNormals,fe.morphColors=G.morphColors,fe.morphTargetsCount=G.morphTargetsCount,fe.numClippingPlanes=G.numClippingPlanes,fe.numIntersection=G.numClipIntersection,fe.vertexAlphas=G.vertexAlphas,fe.vertexTangents=G.vertexTangents,fe.toneMapping=G.toneMapping}function mr(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(G.matrixWorld);for(let fe=0,$=A.length;fe<$;fe++){const ee=A[fe];if(ee.texture!==null&&ee.boundingBox.containsPoint(w))return ee}return null}function Na(A,G,fe,$,ee){G.isScene!==!0&&(G=Ft),pe.resetTextureUnits();const Ie=G.fog,Xe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Ne=le===null?q.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:wt.workingColorSpace,Ge=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ve=Ae.get($.envMap||Xe,Ge),ft=$.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,_t=!!fe.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!fe.morphAttributes.position,Ot=!!fe.morphAttributes.normal,Jt=!!fe.morphAttributes.color;let Kt=Wi;$.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const pt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,dn=pt!==void 0?pt.length:0,We=ae.get($),vn=N.state.lights;if(Pe===!0&&(et===!0||A!==ce)){const Wt=A===ce&&$.id===ne;je.setState($,A,Wt)}let mt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vn.state.version||We.outputColorSpace!==Ne||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==Ve||$.fog===!0&&We.fog!==Ie||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==je.numPlanes||We.numIntersection!==je.numIntersection)||We.vertexAlphas!==ft||We.vertexTangents!==_t||We.morphTargets!==Ye||We.morphNormals!==Ot||We.morphColors!==Jt||We.toneMapping!==Kt||We.morphTargetsCount!==dn||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,We.__version=$.version);let Fn=We.currentProgram;mt===!0&&(Fn=La($,G,ee),j&&$.isNodeMaterial&&j.onUpdateProgram($,Fn,We));let $n=!1,zn=!1,Oa=!1;const zt=Fn.getUniforms(),tn=We.uniforms;if(E.useProgram(Fn.program)&&($n=!0,zn=!0,Oa=!0),$.id!==ne&&(ne=$.id,zn=!0),We.needsLights){const Wt=mr(N.state.lightProbeGridArray,ee);We.lightProbeGrid!==Wt&&(We.lightProbeGrid=Wt,zn=!0)}if($n||ce!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",A.projectionMatrix),zt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Pi=zt.map.cameraPosition;Pi!==void 0&&Pi.setValue(k,Lt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&zt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),ce!==A&&(ce=A,zn=!0,Oa=!0)}if(We.needsLights&&(vn.state.sunShadowMap.length>0&&zt.setValue(k,"sunShadowMap",vn.state.sunShadowMap,pe),vn.state.directionalShadowMap.length>0&&zt.setValue(k,"directionalShadowMap",vn.state.directionalShadowMap,pe),vn.state.spotShadowMap.length>0&&zt.setValue(k,"spotShadowMap",vn.state.spotShadowMap,pe),vn.state.pointShadowMap.length>0&&zt.setValue(k,"pointShadowMap",vn.state.pointShadowMap,pe)),ee.isSkinnedMesh){zt.setOptional(k,ee,"bindMatrix"),zt.setOptional(k,ee,"bindMatrixInverse");const Wt=ee.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),zt.setValue(k,"boneTexture",Wt.boneTexture,pe))}ee.isBatchedMesh&&(zt.setOptional(k,ee,"batchingTexture"),zt.setValue(k,"batchingTexture",ee._matricesTexture,pe),zt.setOptional(k,ee,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",ee._indirectTexture,pe),zt.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",ee._colorsTexture,pe));const ci=fe.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&W.update(ee,fe,Fn),(zn||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,zt.setValue(k,"receiveShadow",ee.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(tn.envMapIntensity.value=G.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=a3()),zn){if(zt.setValue(k,"toneMappingExposure",q.toneMappingExposure),We.needsLights&&fn(tn,Oa),Ie&&$.fog===!0&&ke.refreshFogUniforms(tn,Ie),ke.refreshMaterialUniforms(tn,$,de,te,N.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const Wt=We.lightProbeGrid;tn.probesSH.value=Wt.texture,tn.probesMin.value.copy(Wt.boundingBox.min),tn.probesMax.value.copy(Wt.boundingBox.max),tn.probesResolution.value.copy(Wt.resolution)}$u.upload(k,ji(We),tn,pe)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($u.upload(k,ji(We),tn,pe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&zt.setValue(k,"center",ee.center),zt.setValue(k,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(k,"normalMatrix",ee.normalMatrix),zt.setValue(k,"modelMatrix",ee.matrixWorld),$.uniformsGroups!==void 0){const Wt=$.uniformsGroups;for(let Pi=0,Ei=Wt.length;Pi<Ei;Pi++){const fi=Wt[Pi];Ee.update(fi,Fn),Ee.bind(fi,Fn)}}return Fn}function fn(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function pl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(A,G,fe){const $=ae.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=G,ae.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:fe,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const fe=ae.get(A);fe.__webglFramebuffer=G,fe.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,fe=0){le=A,B=G,H=fe;let $=null,ee=!1,Ie=!1;if(A){const Ne=ae.get(A);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,Ne.__webglFramebuffer),D.copy(A.viewport),J.copy(A.scissor),me=A.scissorTest,E.viewport(D),E.scissor(J),E.setScissorTest(me),ne=-1;return}else if(Ne.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(Ne.__hasExternalTextures)pe.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Ne.__boundDepthTexture!==ft){if(ft!==null&&ae.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ie=!0);const Ve=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?$=Ve[G][fe]:$=Ve[G],ee=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?$=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?$=Ve[fe]:$=Ve,D.copy(A.viewport),J.copy(A.scissor),me=A.scissorTest}else D.copy(Fe).multiplyScalar(de).floor(),J.copy(ot).multiplyScalar(de).floor(),me=jt;if(fe!==0&&($=se),E.bindFramebuffer(k.FRAMEBUFFER,$)&&E.drawBuffers(A,$),E.viewport(D),E.scissor(J),E.setScissorTest(me),ee){const Ne=ae.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,fe)}else if(Ie){const Ne=G;for(let Ge=0;Ge<A.textures.length;Ge++){const Ve=ae.get(A.textures[Ge]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ge,Ve.__webglTexture,fe,Ne)}}else if(A!==null&&fe!==0){const Ne=ae.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,fe)}ne=-1};function js(A){const G=ae.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=L.textureFormatReadable(A.format),G.__typeReadable=L.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,fe,$,ee,Ie,Xe,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ge=Ge[Xe]),Ge){E.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const Ve=A.textures[Ne],ft=Ve.format,_t=Ve.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne);const Ye=js(Ve);if(Ye.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-$&&fe>=0&&fe<=A.height-ee&&k.readPixels(G,fe,$,ee,we.convert(ft),we.convert(_t),Ie)}finally{const Ve=le!==null?ae.get(le).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,G,fe,$,ee,Ie,Xe,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ge=Ge[Xe]),Ge)if(G>=0&&G<=A.width-$&&fe>=0&&fe<=A.height-ee){E.bindFramebuffer(k.FRAMEBUFFER,Ge);const Ve=A.textures[Ne],ft=Ve.format,_t=Ve.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ne);const Ye=js(Ve);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ot),k.bufferData(k.PIXEL_PACK_BUFFER,Ie.byteLength,k.STREAM_READ),k.readPixels(G,fe,$,ee,we.convert(ft),we.convert(_t),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Jt=le!==null?ae.get(le).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Jt);const Kt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sb(k,Kt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ie),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ot),k.deleteSync(Kt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,fe=0){const $=Math.pow(2,-fe),ee=Math.floor(A.image.width*$),Ie=Math.floor(A.image.height*$),Xe=G!==null?G.x:0,Ne=G!==null?G.y:0;pe.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,fe,0,0,Xe,Ne,ee,Ie),E.unbindTexture()},this.copyTextureToTexture=function(A,G,fe=null,$=null,ee=0,Ie=0){let Xe,Ne,Ge,Ve,ft,_t,Ye,Ot,Jt;const Kt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(fe!==null)Xe=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,Ge=fe.isBox3?fe.max.z-fe.min.z:1,Ve=fe.min.x,ft=fe.min.y,_t=fe.isBox3?fe.min.z:0;else{const tn=Math.pow(2,-ee);Xe=Math.floor(Kt.width*tn),Ne=Math.floor(Kt.height*tn),A.isDataArrayTexture?Ge=Kt.depth:A.isData3DTexture?Ge=Math.floor(Kt.depth*tn):Ge=1,Ve=0,ft=0,_t=0}$!==null?(Ye=$.x,Ot=$.y,Jt=$.z):(Ye=0,Ot=0,Jt=0);const pt=we.convert(G.format),dn=we.convert(G.type);let We;G.isData3DTexture?(pe.setTexture3D(G,0),We=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(pe.setTexture2DArray(G,0),We=k.TEXTURE_2D_ARRAY):(pe.setTexture2D(G,0),We=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);const vn=E.getParameter(k.UNPACK_ROW_LENGTH),mt=E.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=E.getParameter(k.UNPACK_SKIP_PIXELS),$n=E.getParameter(k.UNPACK_SKIP_ROWS),zn=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(k.UNPACK_SKIP_ROWS,ft),E.pixelStorei(k.UNPACK_SKIP_IMAGES,_t);const Oa=A.isDataArrayTexture||A.isData3DTexture,zt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const tn=ae.get(A),ci=ae.get(G),Wt=ae.get(tn.__renderTarget),Pi=ae.get(ci.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,Wt.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ei=0;Ei<Ge;Ei++)Oa&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ee,_t+Ei),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ae.get(G).__webglTexture,Ie,Jt+Ei)),k.blitFramebuffer(Ve,ft,Xe,Ne,Ye,Ot,Xe,Ne,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||ae.has(A)){const tn=ae.get(A),ci=ae.get(G);E.bindFramebuffer(k.READ_FRAMEBUFFER,Y),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Q);for(let Wt=0;Wt<Ge;Wt++)Oa?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,ee,_t+Wt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,ee),zt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ci.__webglTexture,Ie,Jt+Wt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ci.__webglTexture,Ie),ee!==0?k.blitFramebuffer(Ve,ft,Xe,Ne,Ye,Ot,Xe,Ne,k.COLOR_BUFFER_BIT,k.NEAREST):zt?k.copyTexSubImage3D(We,Ie,Ye,Ot,Jt+Wt,Ve,ft,Xe,Ne):k.copyTexSubImage2D(We,Ie,Ye,Ot,Ve,ft,Xe,Ne);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(We,Ie,Ye,Ot,Jt,Xe,Ne,Ge,pt,dn,Kt.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(We,Ie,Ye,Ot,Jt,Xe,Ne,Ge,pt,Kt.data):k.texSubImage3D(We,Ie,Ye,Ot,Jt,Xe,Ne,Ge,pt,dn,Kt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ie,Ye,Ot,Xe,Ne,pt,dn,Kt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ie,Ye,Ot,Kt.width,Kt.height,pt,Kt.data):k.texSubImage2D(k.TEXTURE_2D,Ie,Ye,Ot,Xe,Ne,pt,dn,Kt);E.pixelStorei(k.UNPACK_ROW_LENGTH,vn),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),E.pixelStorei(k.UNPACK_SKIP_ROWS,$n),E.pixelStorei(k.UNPACK_SKIP_IMAGES,zn),Ie===0&&G.generateMipmaps&&k.generateMipmap(We),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,le=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const s3=JSON.parse('[{"id":"A-001","title":"《红楼梦》曹雪芹：大观园中的诗社书案与宴席桌","name":"红楼梦","author":"曹雪芹","year":"1791","scene":"园林、花笺、酒器、砚台","tags":"闺阁、诗社、集体创作、园林","note":"桌面既是才情竞技的舞台，也是青春共同体短暂成立的边界。","edition":"《红楼梦》人民文学出版社1982","cover":"covers/A-001_红楼梦.jpg","douban":"https://book.douban.com/subject/1007305/"},{"id":"A-002","title":"《红楼梦》：刘姥姥赴大观园宴席","name":"红楼梦","author":"","year":"1791","scene":"满堂菜肴、圆桌、夸张姿态","tags":"阶层、观看、宴席、喜剧","note":"餐桌成为城乡差异与贵族生活被观看、被表演的装置。","edition":"《红楼梦》2018版","cover":"covers/A-002_红楼梦.jpg","douban":"https://book.douban.com/subject/30137806/"},{"id":"A-003","title":"《金瓶梅》兰陵笑笑生：西门庆家的酒席","name":"金瓶梅","author":"兰陵笑笑生","year":"1618前后","scene":"酒杯、肉食、账簿、屏风","tags":"欲望、财富、消费、权力","note":"桌面汇集交易、情色与家族权力，是晚明物质生活的切片。","edition":"《金瓶梅词话》兰陵笑笑生2008","cover":"covers/A-003_金瓶梅.jpg","douban":"https://book.douban.com/subject/3191229/"},{"id":"A-004","title":"《儒林外史》吴敬梓：范进中举后的宴席","name":"儒林外史","author":"吴敬梓","year":"1750前后","scene":"宴席、贺礼、官服、座次","tags":"科举、身份跃迁、讽刺、礼制","note":"一张饭桌重新安排社会座次，揭示功名制度对人的改写。","edition":"《儒林外史》吴敬梓","cover":"covers/A-004_儒林外史.jpg","douban":"https://book.douban.com/subject/3210483/"},{"id":"A-005","title":"《阿Q正传》鲁迅：酒店与赌桌场景","name":"阿Q正传","author":"鲁迅","year":"1922","scene":"木桌、酒碗、铜钱、昏暗室内","tags":"乡土、赌博、屈辱、现代性","note":"低矮桌面承载底层男性的短暂自尊、失败和互相伤害。","edition":"《阿Q正传》鲁迅2013","cover":"covers/A-005_阿Q正传.jpg","douban":"https://book.douban.com/subject/23860592/"},{"id":"A-006","title":"《祝福》鲁迅：鲁四老爷家的祭祀供桌","name":"祝福","author":"鲁迅","year":"1924","scene":"香炉、供品、烛火、红木案","tags":"礼教、祭祀、排斥、女性命运","note":"供桌代表秩序与洁净，也划出祥林嫂无法跨越的社会禁区。","edition":"《彷徨》鲁迅2013（收录《祝福》）","cover":"covers/A-006_祝福.jpg","douban":"https://book.douban.com/subject/25778492/"},{"id":"A-007","title":"《边城》沈从文：茶峒渡口的茶桌","name":"边城","author":"沈从文","year":"1934","scene":"竹桌、粗瓷碗、河流、渡船","tags":"边地、日常、交流、乡愁","note":"简朴桌面连接陌生人、消息与情感，是小镇公共生活的节点。","edition":"《边城》沈从文2004","cover":"covers/A-007_边城.jpg","douban":"https://book.douban.com/subject/1161038/"},{"id":"A-008","title":"《骆驼祥子》老舍：车厂饭桌","name":"骆驼祥子","author":"老舍","year":"1936","scene":"大碗饭、木桌、车夫、煤油灯","tags":"劳动、男性群体、城市底层","note":"共享饭桌既提供暂时的归属，也映照劳动者脆弱的互助关系。","edition":"《骆驼祥子》老舍2012","cover":"covers/A-008_骆驼祥子.jpg","douban":"https://book.douban.com/subject/19982760/"},{"id":"A-009","title":"《茶馆》老舍：裕泰茶馆的方桌","name":"茶馆","author":"老舍","year":"1957","scene":"茶壶、盖碗、牌桌、旧招牌","tags":"公共空间、政治、闲谈、城市记忆","note":"桌子像社会舞台：不同阶层在此交换消息、冲突和命运。","edition":"《茶馆》老舍2012","cover":"covers/A-009_茶馆.jpg","douban":"https://book.douban.com/subject/19982767/"},{"id":"A-010","title":"《围城》钱钟书：饭局与餐桌交锋","name":"围城","author":"钱钟书","year":"1947","scene":"西餐餐具、酒杯、座位卡","tags":"婚恋、知识分子、讽刺、社交","note":"餐桌礼仪被转化为语言战场，显露身份焦虑与亲密关系的失衡。","edition":"《围城》钱锺书1991","cover":"covers/A-010_围城.jpg","douban":"https://book.douban.com/subject/11524204/"},{"id":"A-011","title":"《活着》余华：徐家由丰盛到空荡的饭桌","name":"活着","author":"余华","year":"1993","scene":"粗木桌、空碗、家常菜、旧屋","tags":"家庭、失去、生存、记忆","note":"同一张桌面随家庭成员减少而显出历史暴力进入私人生活的痕迹。","edition":"《活着》余华2012","cover":"covers/A-011_活着.jpg","douban":"https://book.douban.com/subject/4913064/"},{"id":"A-012","title":"《许三观卖血记》余华：一盘炒猪肝与黄酒","name":"许三观卖血记","author":"余华","year":"1995","scene":"猪肝、黄酒、小桌、医院外","tags":"父爱、贫困、身体、消费","note":"食物成为身体价值的替代物，桌面浓缩生存成本与亲情。","edition":"《许三观卖血记》余华2012","cover":"covers/A-012_许三观卖血记.jpg","douban":"https://book.douban.com/subject/4760224/"},{"id":"A-013","title":"《长恨歌》王安忆：上海弄堂里的饭桌","name":"长恨歌","author":"王安忆","year":"1995","scene":"搪瓷碗、折叠桌、晾衣杆、弄堂","tags":"都市女性、日常、怀旧、邻里","note":"桌面是私密家庭生活向弄堂公共空间溢出的界面。","edition":"《长恨歌》王安忆2000","cover":"covers/A-013_长恨歌.jpg","douban":"https://book.douban.com/subject/1067907/"},{"id":"A-014","title":"《受戒》汪曾祺：乡村斋饭桌","name":"受戒","author":"汪曾祺","year":"1980","scene":"素斋、竹席、寺院、河鲜","tags":"食物、民间、宗教世俗化、温情","note":"斋桌消解神圣与世俗的界线，呈现轻盈而丰饶的生活伦理。","edition":"《受戒》汪曾祺","cover":"covers/A-014_受戒.jpg","douban":"https://book.douban.com/subject/1760432/"},{"id":"A-015","title":"《台北人》白先勇：饭局与旧式家宴","name":"台北人","author":"白先勇","year":"1971","scene":"圆桌、旗袍、银器、旧公馆","tags":"离散、怀旧、阶层、迁徙","note":"宴席保存旧大陆的礼制与记忆，同时暴露其不可挽回的消逝。","edition":"《台北人》白先勇2010","cover":"covers/A-015_台北人.jpg","douban":"https://book.douban.com/subject/5337248/"},{"id":"A-016","title":"《倾城之恋》张爱玲：饭桌上的家族审视","name":"倾城之恋","author":"张爱玲","year":"1943","scene":"西式餐桌、旗袍、瓷器、洋房","tags":"婚姻、家族、性别、凝视","note":"餐桌是女性被评估、被安排，也借语言反击的微型剧场。","edition":"《倾城之恋》张爱玲2019","cover":"covers/A-016_倾城之恋.jpg","douban":"https://book.douban.com/subject/30294357/"},{"id":"A-017","title":"《半生缘》张爱玲：家庭餐桌的沉默","name":"半生缘","author":"张爱玲","year":"1948","scene":"冷菜、狭窄餐厅、旧家具","tags":"家庭压迫、沉默、都市、命运","note":"看似平静的共餐场景积累难以说出的情感债务。","edition":"《半生缘》张爱玲2012","cover":"covers/A-017_半生缘.jpg","douban":"https://book.douban.com/subject/10757938/"},{"id":"A-018","title":"《务虚笔记》史铁生：书桌与病中书写","name":"务虚笔记","author":"史铁生","year":"1996","scene":"纸页、轮椅、窗光、药瓶","tags":"身体、写作、孤独、思辨","note":"书桌不是效率工具，而是身体受限后重新通向世界的接口。","edition":"《务虚笔记》史铁生2016","cover":"covers/A-018_务虚笔记.jpg","douban":"https://book.douban.com/subject/36238768/"},{"id":"A-019","title":"《一间自己的房间》弗吉尼亚·伍尔夫：属于自己的桌子","name":"一间自己的房间","author":"弗吉尼亚·伍尔夫","year":"1929","scene":"书桌、窗户、稿纸、锁匙","tags":"女性写作、房间、经济独立、知识","note":"桌面与房间共同构成女性拥有时间、收入与创作权的物质条件。","edition":"《一间自己的房间》伍尔夫2019","cover":"covers/A-019_一间自己的房间.jpg","douban":"https://book.douban.com/subject/34834155/"},{"id":"A-020","title":"《到灯塔去》弗吉尼亚·伍尔夫：拉姆齐家的晚餐桌","name":"到灯塔去","author":"弗吉尼亚·伍尔夫","year":"1927","scene":"长桌、烛光、花瓶、海边别墅","tags":"家庭、时间、感知、现代主义","note":"餐桌聚拢碎片化意识，短暂制造家庭和谐的幻象。","edition":"《到灯塔去》伍尔夫2021","cover":"covers/A-020_到灯塔去.jpg","douban":"https://book.douban.com/subject/35687754/"},{"id":"A-021","title":"《达洛维夫人》弗吉尼亚·伍尔夫：宴会餐桌","name":"达洛维夫人","author":"弗吉尼亚·伍尔夫","year":"1925","scene":"鸡尾酒、花束、银盘、宾客","tags":"社交、战争创伤、伦敦、表演","note":"精致桌面遮蔽阶层隔阂与战争后的精神裂缝。","edition":"《达洛维夫人》伍尔夫2021","cover":"covers/A-021_达洛维夫人.jpg","douban":"https://book.douban.com/subject/35687757/"},{"id":"A-022","title":"《变形记》卡夫卡：家庭餐桌与格里高尔","name":"变形记","author":"卡夫卡","year":"1915","scene":"空椅子、剩菜、紧闭房门","tags":"异化、家庭、羞耻、排斥","note":"餐桌从家庭团聚的象征，变为“无法共处”的具体证据。","edition":"《变形记》卡夫卡2023","cover":"covers/A-022_变形记.jpg","douban":"https://book.douban.com/subject/36211004/"},{"id":"A-023","title":"《审判》卡夫卡：办公室桌与无形权力","name":"审判","author":"卡夫卡","year":"1925","scene":"高桌、文件、印章、昏暗走廊","tags":"官僚、档案、权力、荒诞","note":"桌面上的文件系统把人转化为可登记、可裁决的对象。","edition":"《审判》卡夫卡2019","cover":"covers/A-023_审判.jpg","douban":"https://book.douban.com/subject/33383582/"},{"id":"A-024","title":"《局外人》加缪：餐馆与日常进食","name":"局外人","author":"加缪","year":"1942","scene":"小桌、咖啡、阳光、烟灰缸","tags":"荒诞、感官、冷漠、现代城市","note":"对餐桌细节的平静感知，反衬社会对“正常情感”的规训。","edition":"《局外人》加缪2013","cover":"covers/A-024_局外人.jpg","douban":"https://book.douban.com/subject/24257486/"},{"id":"A-025","title":"《鼠疫》加缪：封城中的餐桌","name":"鼠疫","author":"加缪","year":"1947","scene":"空餐厅、未收餐具、窗外街道","tags":"疫情、隔离、共同体、缺席","note":"无人使用的桌面让公共生活的暂停变得可见。","edition":"《鼠疫》加缪2017","cover":"covers/A-025_鼠疫.jpg","douban":"https://book.douban.com/subject/26908211/"},{"id":"A-026","title":"《百年孤独》加西亚·马尔克斯：布恩迪亚家的长桌","name":"百年孤独","author":"加西亚·马尔克斯","year":"1967","scene":"热带果实、家族合照、长桌","tags":"家族、循环时间、魔幻现实、记忆","note":"餐桌承接婚丧、谣言与重复的命运，是家族时间的沉积层。","edition":"《百年孤独》马尔克斯2011","cover":"covers/A-026_百年孤独.jpg","douban":"https://book.douban.com/subject/6082808/"},{"id":"A-027","title":"《霍乱时期的爱情》加西亚·马尔克斯：咖啡馆桌","name":"霍乱时期的爱情","author":"加西亚·马尔克斯","year":"1985","scene":"咖啡杯、书信、扇子、港口","tags":"等待、爱情、书信、城市","note":"小桌为漫长等待提供固定坐标，私人的时间在此被反复折叠。","edition":"《霍乱时期的爱情》马尔克斯2012","cover":"covers/A-027_霍乱时期的爱情.jpg","douban":"https://book.douban.com/subject/10594787/"},{"id":"A-028","title":"《情人》玛格丽特·杜拉斯：殖民地餐桌","name":"情人","author":"玛格丽特·杜拉斯","year":"1984","scene":"白桌布、热带光线、法式餐具","tags":"殖民、阶级、欲望、家庭","note":"餐桌上的沉默揭露殖民社会内部的贫困、种族与情感裂隙。","edition":"《情人》杜拉斯2019","cover":"covers/A-028_情人.jpg","douban":"https://book.douban.com/subject/30272310/"},{"id":"A-029","title":"《追忆似水年华》普鲁斯特：贡布雷的茶桌与玛德莱娜","name":"追忆似水年华","author":"普鲁斯特","year":"1913–1927","scene":"茶杯、点心、蕾丝桌布","tags":"记忆、感官、时间、室内","note":"小小茶桌触发非自主记忆，证明日常物可开启庞大的时间结构。","edition":"《追忆似水年华》普鲁斯特2012","cover":"covers/A-029_追忆似水年华.jpg","douban":"https://book.douban.com/subject/10779650/"},{"id":"A-030","title":"《尤利西斯》乔伊斯：布卢姆的早餐桌","name":"尤利西斯","author":"乔伊斯","year":"1922","scene":"猪肾、报纸、茶具、厨房","tags":"都市日常、身体、意识流、都柏林","note":"早餐桌是宏大史诗的低起点，将平凡生活提升为叙事中心。","edition":"《尤利西斯》乔伊斯2012","cover":"covers/A-030_尤利西斯.jpg","douban":"https://book.douban.com/subject/5958737/"},{"id":"A-031","title":"《都柏林人》乔伊斯：《死人》中的晚宴桌","name":"都柏林人","author":"乔伊斯","year":"1914","scene":"长桌、雪景、酒杯、音乐","tags":"爱尔兰、宴会、记忆、死亡","note":"共同进餐的热闹背后，是地方身份与个体情感的冰冷距离。","edition":"《都柏林人》乔伊斯2012","cover":"covers/A-031_都柏林人.jpg","douban":"https://book.douban.com/subject/10678953/"},{"id":"A-032","title":"《了不起的盖茨比》菲茨杰拉德：豪宅宴席","name":"了不起的盖茨比","author":"菲茨杰拉德","year":"1925","scene":"香槟塔、长桌、花园灯、舞会","tags":"消费、阶层、美国梦、幻象","note":"桌面上的奢华被用来制造身份幻觉，也暴露财富无法换取归属。","edition":"《了不起的盖茨比》菲茨杰拉德2012","cover":"covers/A-032_了不起的盖茨比.jpg","douban":"https://book.douban.com/subject/10738023/"},{"id":"A-033","title":"《麦田里的守望者》塞林格：酒店餐桌与独处","name":"麦田里的守望者","author":"塞林格","year":"1951","scene":"咖啡杯、烟灰缸、红色座椅","tags":"青少年、疏离、城市、表演","note":"餐桌为少年提供观察成人世界的临时看台。","edition":"《麦田里的守望者》塞林格","cover":"covers/A-033_麦田里的守望者.jpg","douban":"https://book.douban.com/subject/1828721/"},{"id":"A-034","title":"《钟形罩》西尔维娅·普拉斯：女性杂志宴席","name":"钟形罩","author":"西尔维娅·普拉斯","year":"1963","scene":"银器、口红、高脚杯、餐厅","tags":"女性困境、消费、抑郁、规训","note":"光鲜餐桌把“理想女性”的商品化脚本具象化。","edition":"《钟形罩》普拉斯2013","cover":"covers/A-034_钟形罩.jpg","douban":"https://book.douban.com/subject/24887681/"},{"id":"A-035","title":"《第二性》西蒙娜·德·波伏瓦：家务桌面","name":"第二性","author":"西蒙娜·德·波伏瓦","year":"1949","scene":"厨房台面、围裙、账单、餐盘","tags":"女性主义、再生产劳动、家务、日常","note":"桌面是无偿劳动反复发生的场所，可连接性别化空间政治。","edition":"《第二性》波伏瓦2014","cover":"covers/A-035_第二性.jpg","douban":"https://book.douban.com/subject/25822104/"},{"id":"A-036","title":"《安娜·卡列尼娜》托尔斯泰：家庭与上流社会餐桌","name":"安娜·卡列尼娜","author":"托尔斯泰","year":"1878","scene":"烛台、银餐具、礼服、长桌","tags":"婚姻、礼仪、阶级、俄罗斯","note":"座次、目光与谈话使餐桌成为社会道德审判的现场。","edition":"《安娜·卡列尼娜》托尔斯泰2007","cover":"covers/A-036_安娜·卡列尼娜.jpg","douban":"https://book.douban.com/subject/2253380/"},{"id":"A-037","title":"《战争与和平》托尔斯泰：罗斯托夫家的家宴","name":"战争与和平","author":"托尔斯泰","year":"1869","scene":"大餐桌、烛火、舞会前夜","tags":"家族、历史、共同体、战争","note":"家宴的丰盛与战争的动荡形成对照，显示私人生活的脆弱。","edition":"《战争与和平》托尔斯泰2015","cover":"covers/A-037_战争与和平.jpg","douban":"https://book.douban.com/subject/25837845/"},{"id":"A-038","title":"《罪与罚》陀思妥耶夫斯基：贫困房间的小桌","name":"罪与罚","author":"陀思妥耶夫斯基","year":"1866","scene":"油灯、面包、硬币、狭窄阁楼","tags":"贫困、罪责、都市、心理","note":"桌面极度逼仄，成为人物思想、饥饿与道德崩塌的物理尺度。","edition":"《罪与罚》陀思妥耶夫斯基2015","cover":"covers/A-038_罪与罚.jpg","douban":"https://book.douban.com/subject/25887912/"},{"id":"A-039","title":"《大师与玛格丽特》布尔加科夫：魔幻宴席","name":"大师与玛格丽特","author":"布尔加科夫","year":"1967","scene":"黑猫、酒杯、烛台、夸张餐具","tags":"魔幻、讽刺、权力、狂欢","note":"宴席将现实秩序颠倒，让桌面成为荒诞政治的舞台。","edition":"《大师与玛格丽特》布尔加科夫2017","cover":"covers/A-039_大师与玛格丽特.jpg","douban":"https://book.douban.com/subject/27069991/"},{"id":"A-040","title":"《哈姆雷特》莎士比亚：宫廷宴席与毒酒","name":"哈姆雷特","author":"莎士比亚","year":"1603","scene":"王室长桌、酒杯、剑、烛台","tags":"阴谋、权力、毒药、戏剧","note":"宴席桌将私人复仇公开化，最终成为权力系统自我毁灭的现场。","edition":"《哈姆雷特》莎士比亚2013","cover":"covers/A-040_哈姆雷特.jpg","douban":"https://book.douban.com/subject/25773575/"},{"id":"A-041","title":"《麦克白》莎士比亚：班柯鬼魂的宴席座位","name":"麦克白","author":"莎士比亚","year":"1606","scene":"空座位、王冠、酒杯、幽灵","tags":"罪恶、幻觉、权力、失序","note":"“空椅”破坏宴席秩序，使不可见的罪责占据桌面。","edition":"《麦克白》莎士比亚2023","cover":"covers/A-041_麦克白.jpg","douban":"https://book.douban.com/subject/36608464/"},{"id":"A-042","title":"《李尔王》莎士比亚：分国时的权力桌案","name":"李尔王","author":"莎士比亚","year":"1606","scene":"地图、王冠、卷轴、长案","tags":"继承、父权、领土、表演","note":"桌面铺开的地图把国家当作可切分物，预示亲情与政治的崩解。","edition":"《李尔王》莎士比亚2002","cover":"covers/A-042_李尔王.jpg","douban":"https://book.douban.com/subject/1370424/"},{"id":"A-043","title":"《伊利亚特》荷马：英雄宴饮与分肉","name":"伊利亚特","author":"荷马","year":"约前8世纪","scene":"肉块、酒杯、火堆、盾牌","tags":"战争、礼仪、分配、男性共同体","note":"分食的桌面秩序映照战利品与荣誉如何分配。","edition":"《伊利亚特》荷马2015","cover":"covers/A-043_伊利亚特.jpg","douban":"https://book.douban.com/subject/26575942/"},{"id":"A-044","title":"《奥德赛》荷马：佩涅洛佩的求婚者宴席","name":"奥德赛","author":"荷马","year":"约前8世纪","scene":"长桌、竖琴、酒坛、弓箭","tags":"家园、侵占、等待、性别权力","note":"被持续消耗的家宴表现家园遭占据，也让“餐桌”成为政治领土。","edition":"《奥德赛》荷马2014","cover":"covers/A-044_奥德赛.jpg","douban":"https://book.douban.com/subject/25900268/"},{"id":"A-045","title":"《神曲》但丁：最后晚餐式的救赎联想","name":"神曲","author":"但丁","year":"1321","scene":"长桌、面包、圣杯、星空","tags":"宗教、审判、救赎、象征","note":"可作为桌面与宗教仪式、身体共享、道德秩序之间关系的延伸入口。","edition":"《神曲》但丁2018","cover":"covers/A-045_神曲.jpg","douban":"https://book.douban.com/subject/26787243/"},{"id":"A-046","title":"《圣经·最后的晚餐》福音书叙事","name":"圣经","author":"","year":"约1世纪","scene":"长桌、面包、葡萄酒、十二人","tags":"仪式、背叛、共同体、图像母题","note":"西方视觉文化中最具扩散力的桌面原型之一，适合连接绘画档案。","edition":"《圣经》和合本修订版","cover":"covers/A-046_圣经.jpg","douban":"https://book.douban.com/subject/36638600/"},{"id":"A-047","title":"《源氏物语》紫式部：宫廷宴饮与几案","name":"源氏物语","author":"紫式部","year":"约1008","scene":"漆器、纸门、矮案、和歌","tags":"宫廷、季节、恋爱、物哀","note":"低矮几案与书写、饮食、赠诗交织，呈现东亚室内空间的细腻秩序。","edition":"《源氏物语》紫式部2015","cover":"covers/A-047_源氏物语.jpg","douban":"https://book.douban.com/subject/26291587/"},{"id":"A-048","title":"《枕草子》清少纳言：宫廷书案与日常清单","name":"枕草子","author":"清少纳言","year":"约1002","scene":"文房、香炉、纸卷、帘幕","tags":"女性书写、清单、感官、宫廷","note":"桌案是分类世界、记录趣味与建构自我观看方式的媒介。","edition":"《枕草子》清少纳言2014","cover":"covers/A-048_枕草子.jpg","douban":"https://book.douban.com/subject/26036906/"},{"id":"A-049","title":"《我是猫》夏目漱石：书生家庭的茶桌","name":"我是猫","author":"夏目漱石","year":"1905–1906","scene":"茶具、书籍、榻榻米、猫","tags":"现代日本、知识分子、讽刺、观察","note":"猫的视角让桌面成为审视人类虚荣、谈论与日常秩序的观察台。","edition":"《我是猫》夏目漱石1994","cover":"covers/A-049_我是猫.jpg","douban":"https://book.douban.com/subject/1000856/"},{"id":"A-050","title":"《厨房》吉本芭娜娜：厨房餐桌与修复","name":"厨房","author":"吉本芭娜娜","year":"1988","scene":"小餐桌、冰箱灯、热汤、夜晚","tags":"哀伤、疗愈、独居、食物","note":"餐桌是失亲者重建生活节奏的核心，连接烹饪、陪伴与自我修复。","edition":"《厨房》吉本芭娜娜2022","cover":"covers/A-050_厨房.jpg","douban":"https://book.douban.com/subject/35773382/"}]');function o3(r,e,i,s,l){const f=Math.max(96,Math.round(l/s*2048)),h=document.createElement("canvas");h.width=2048,h.height=f;const m=h.getContext("2d");m.fillStyle="#ffffff",m.fillRect(0,0,2048,f);const p="#1d1c1e";m.fillStyle=p,m.textBaseline="middle",m.textAlign="left",m.font=`400 ${Math.round(f*.18)}px "Helvetica Neue", Arial, "Microsoft YaHei", sans-serif`;const _=(i||" ").toLowerCase();m.fillText(_,2048*.045,f*.52,2048*.3),m.textAlign="center",m.font=`400 ${Math.round(f*.26)}px "Helvetica Neue", Arial, "Microsoft YaHei", sans-serif`,m.fillText(e.toLowerCase(),2048*.5,f*.52,2048*.44),m.textAlign="right",m.font=`400 ${Math.round(f*.2)}px Arial`,m.fillText("a4",2048*.955,f*.52);const v=Math.max(3,f*.022);m.lineWidth=v,m.strokeStyle=p,m.strokeRect(v/2,v/2,2048-v,f-v);const g=new Mp(h);return g.colorSpace=Pn,g.anisotropy=4,g}function l3(r){const e=document.createElement("canvas");e.width=r.naturalWidth,e.height=r.naturalHeight,e.getContext("2d").drawImage(r,0,0);const s=new Mp(e);return s.colorSpace=Pn,s.anisotropy=4,s}function u3(){const r=document.createElement("canvas");r.width=512,r.height=512;const e=r.getContext("2d");e.fillStyle="#ece5d5",e.fillRect(0,0,512,512),e.strokeStyle="rgba(120,105,80,0.35)",e.lineWidth=1;for(let s=0;s<512;s+=3)e.beginPath(),e.moveTo(0,s+.5),e.lineTo(512,s+.5),e.stroke();const i=new Mp(r);return i.colorSpace=Pn,i}const fr=s3;function sh(r,e=0){const i=Math.sin(r*127.1+e*311.7)*43758.5453;return i-Math.floor(i)}function c3({onOpenBook:r,onLoadProgress:e,onIndexChange:i,focusRef:s}){const l=Se.useRef(null),u=Se.useRef(r);return u.current=r,Se.useEffect(()=>{const f=l.current,h=fr.length,m=new Bb,p=new Dt("#ffffff");m.background=p,m.fog=new vp(p,22,34);const _=new yi(32,f.clientWidth/f.clientHeight,.1,60);_.position.set(0,1.35,11.6),_.lookAt(0,-.1,0);const v=new r3({antialias:!0,alpha:!1});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(f.clientWidth,f.clientHeight),f.appendChild(v.domElement),m.add(new iT("#ffffff",.55));const g=new ev("#fff6e8",2.2);g.position.set(-4,8,7),m.add(g);const M=new ev("#8fb0ff",.5);M.position.set(5,-3,-6),m.add(M);const b=4.05,C=2.6,y=.52,S=u3(),O=new Qo;m.add(O);const F=[],w=[],U=fr.map((Pe,et)=>.34+sh(et)*.26),N=[];let I=0;for(let Pe=0;Pe<h;Pe++)N.push(I+U[Pe]/2),I+=U[Pe]+y;const T=N[0];let P=0;fr.forEach((Pe,et)=>{const lt=U[et],Lt=new qs(b,lt,C),vt=new Image;vt.crossOrigin="anonymous";const Ft=new Sp({color:"#ffffff"}),Rt=()=>new K_({map:S,roughness:.9,metalness:0,transparent:!0}),xt=[Rt(),Rt(),Rt(),Rt(),Ft,new K_({color:"#2a2a2e",roughness:.8,transparent:!0})];xt.forEach(Mt=>Mt.transparent=!0);const k=new Ki(Lt,xt);k.userData.index=et,O.add(k),w.push(k),F.push({mesh:k,mats:xt,baseY:N[et]-T,thick:lt,jitterX:(sh(et,3)-.5)*.14,jitterR:(sh(et,7)-.5)*.035}),vt.onload=()=>{const Mt=o3(vt,Pe.name,Pe.author,b,lt);Ft.map=Mt,Ft.needsUpdate=!0;const Et=l3(vt);xt[2].map=Et,xt[2].color.set("#ffffff"),xt[2].needsUpdate=!0;const L=new Un(vt);L.colorSpace=Pn,L.needsUpdate=!0,xt[5].map=L,xt[5].color.set("#8a8a8a"),xt[5].needsUpdate=!0,P++,e?.(Math.round(P/h*100))},vt.onerror=()=>{P++,e?.(Math.round(P/h*100))},vt.src=Pe.cover});const q=Number(new URLSearchParams(location.search).get("start"));let X=Number.isFinite(q)?Math.max(0,Math.min(h-1,Math.round(q))):0,j=F[X].baseY,se=-1,Y=0,Q=0;const B=new Ut(-2,-2),H=new sT;let le=0,ne=0;const ce=Pe=>{X=Math.max(0,Math.min(h-1,Pe)),i(X)};s.current=X,i(X);const D=Pe=>{Pe.preventDefault();const et=performance.now();Y+=Pe.deltaY,et-Q>380&&Math.abs(Y)>30&&(ce(X+(Y>0?1:-1)),Y=0,Q=et)},J=Pe=>{(Pe.key==="ArrowDown"||Pe.key==="PageDown")&&(Pe.preventDefault(),ce(X+1)),(Pe.key==="ArrowUp"||Pe.key==="PageUp")&&(Pe.preventDefault(),ce(X-1)),Pe.key==="Home"&&ce(0),Pe.key==="End"&&ce(h-1)};let me=0;const be=Pe=>{me=Pe.touches[0].clientY},De=Pe=>{const et=Pe.touches[0].clientY-me;Math.abs(et)>46&&(ce(X+(et<0?1:-1)),me=Pe.touches[0].clientY)},He=Pe=>{const et=f.getBoundingClientRect();B.x=(Pe.clientX-et.left)/et.width*2-1,B.y=-((Pe.clientY-et.top)/et.height)*2+1,le=B.x,ne=B.y},te=()=>{se>=0&&se!==X?ce(se):u.current(fr[X])},de=v.domElement;de.addEventListener("wheel",D,{passive:!1}),de.addEventListener("pointermove",He),de.addEventListener("click",te),de.addEventListener("touchstart",be,{passive:!0}),de.addEventListener("touchmove",De,{passive:!0}),window.addEventListener("keydown",J);const Te=()=>{_.aspect=f.clientWidth/f.clientHeight,_.updateProjectionMatrix(),v.setSize(f.clientWidth,f.clientHeight);const Pe=_.aspect<1?Math.max(.5,_.aspect*.98):1;O.scale.setScalar(Pe)};Te(),window.addEventListener("resize",Te);let tt=0;const Fe=new oT;let ot=0,jt=1.35;const at=()=>{tt=requestAnimationFrame(at);const Pe=Fe.getElapsedTime(),et=F[X].baseY;j+=(et-j)*.085;for(let vt=0;vt<h;vt++){const Ft=F[vt],Rt=j-Ft.baseY,xt=Math.abs(Rt),k=N_.clamp(1-(xt-2.6)/1.6,0,1),Mt=vt%2===0?1:-1,Et=Math.max(0,xt-2.1),L=Ft.jitterX+Mt*Et*Et*.22,E=-xt*.28,Z=N_.clamp(1-xt*1.6,0,1),ae=1+Z*.05,pe=Math.sin(Pe*.8+vt*.7)*.022*Math.min(1,xt+.4);Ft.mesh.position.set(L,Rt+pe,E+Z*.45),Ft.mesh.rotation.set(0,Ft.jitterR,0),Ft.mesh.scale.set(ae,ae,ae);for(const Ae of Ft.mats)Ae.opacity=k;Ft.mesh.visible=k>.01}H.setFromCamera(B,_);const lt=H.intersectObjects(w.filter(vt=>vt.visible)),Lt=lt.length?lt[0].object.userData.index:-1;Lt!==se&&(se=Lt,de.style.cursor=Lt>=0?"pointer":"default"),ot+=(le*.55-ot)*.04,jt+=(1.35+ne*.3-jt)*.04,_.position.set(ot,jt,11.6),_.lookAt(0,-.1,0),v.render(m,_)};return at(),()=>{cancelAnimationFrame(tt),de.removeEventListener("wheel",D),de.removeEventListener("pointermove",He),de.removeEventListener("click",te),de.removeEventListener("touchstart",be),de.removeEventListener("touchmove",De),window.removeEventListener("keydown",J),window.removeEventListener("resize",Te),v.dispose(),w.forEach(Pe=>{Pe.geometry.dispose(),Pe.material.forEach(et=>{et.map?.dispose(),et.dispose()})}),S.dispose(),f.removeChild(de)}},[]),it.jsx("div",{"code-path":"src\\components\\DeskScene.tsx:317:10",ref:l,className:"absolute inset-0","aria-label":"书籍 3D 书堆"})}function f3({index:r}){return it.jsx("div",{"code-path":"src\\components\\Rail.tsx:10:5",className:"pointer-events-none fixed left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 md:flex",children:it.jsx("div",{"code-path":"src\\components\\Rail.tsx:11:7",className:"flex h-[46vh] flex-col justify-between",children:fr.map((e,i)=>it.jsx("div",{"code-path":"src\\components\\Rail.tsx:13:11",className:`w-px transition-all duration-300 ${i===r?"h-3 bg-[#1a191d]":i%5===0?"h-2 bg-[#a3a095]":"h-1.5 bg-[#c9c4b8]"}`,style:{width:i===r?14:i%5===0?9:5,marginLeft:"auto",marginRight:0}},i))})})}function d3({book:r,onClose:e}){return Se.useEffect(()=>{if(!r)return;const i=s=>{s.key==="Escape"&&e()};return window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow=""}},[r,e]),r?it.jsx("div",{"code-path":"src\\components\\BookOverlay.tsx:27:5",className:"fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm md:p-10",onClick:e,children:it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:31:7",className:"relative grid max-h-[88vh] w-full max-w-3xl grid-cols-1 gap-6 overflow-y-auto rounded-md border border-[#e2e0da] bg-white p-7 shadow-xl md:grid-cols-[220px_1fr] md:overflow-visible",onClick:i=>i.stopPropagation(),children:[it.jsx("button",{"code-path":"src\\components\\BookOverlay.tsx:35:9",onClick:e,"aria-label":"关闭",className:"absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#c9c5bc] text-xs text-[#1a191d] transition-colors hover:bg-[#1a191d] hover:text-white",children:"✕"}),it.jsx("div",{"code-path":"src\\components\\BookOverlay.tsx:44:9",className:"flex items-start justify-center",children:it.jsx("img",{"code-path":"src\\components\\BookOverlay.tsx:45:11",src:r.cover,alt:r.name,className:"w-36 rounded-sm border border-[#e2e0da] md:w-full"})}),it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:53:9",className:"min-w-0 text-[#1a191d]",children:[it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:54:11",className:"font-mono text-[10px] tracking-[0.25em] text-[#9a958a]",children:[r.id," · 文学意象 LITERARY IMAGERY"]}),it.jsx("h2",{"code-path":"src\\components\\BookOverlay.tsx:57:11",className:"mt-2.5 text-xl font-bold leading-snug md:text-2xl",children:r.name}),it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:58:11",className:"mt-1.5 text-sm text-[#6e6a60]",children:[r.author&&it.jsx("span",{"code-path":"src\\components\\BookOverlay.tsx:59:29",children:r.author}),r.author&&r.year&&it.jsx("span",{"code-path":"src\\components\\BookOverlay.tsx:60:42",className:"mx-2 text-[#c9c5bc]",children:"/"}),r.year&&it.jsx("span",{"code-path":"src\\components\\BookOverlay.tsx:61:27",children:r.year})]}),r.note&&it.jsx("p",{"code-path":"src\\components\\BookOverlay.tsx:64:25",className:"mt-4 text-sm leading-relaxed text-[#4a4741]",children:r.note}),r.scene&&it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:67:13",className:"mt-4",children:[it.jsx("div",{"code-path":"src\\components\\BookOverlay.tsx:68:15",className:"font-mono text-[9px] uppercase tracking-[0.25em] text-[#9a958a]",children:"桌面场景"}),it.jsx("div",{"code-path":"src\\components\\BookOverlay.tsx:69:15",className:"mt-1 text-xs text-[#4a4741]",children:r.scene})]}),r.tags&&it.jsx("div",{"code-path":"src\\components\\BookOverlay.tsx:74:13",className:"mt-3.5 flex flex-wrap gap-1.5",children:r.tags.split(/[、,，]/).filter(Boolean).map(i=>it.jsx("span",{"code-path":"src\\components\\BookOverlay.tsx:76:17",className:"rounded-full border border-[#d8d5cc] px-2.5 py-0.5 text-[11px] text-[#6e6a60]",children:i.trim()},i))}),it.jsxs("div",{"code-path":"src\\components\\BookOverlay.tsx:83:11",className:"mt-5 flex flex-wrap items-center gap-3 border-t border-[#e2e0da] pt-4",children:[it.jsxs("span",{"code-path":"src\\components\\BookOverlay.tsx:84:13",className:"text-[11px] text-[#9a958a]",children:["封面版本：",r.edition]}),it.jsx("a",{"code-path":"src\\components\\BookOverlay.tsx:85:13",href:r.douban,target:"_blank",rel:"noreferrer",className:"rounded-full bg-[#1a191d] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black",children:"豆瓣条目 ↗"})]})]})]})}):null}function h3(){const[r,e]=Se.useState(0),[i,s]=Se.useState(()=>{const f=new URLSearchParams(location.search).get("book");return f?fr.find(h=>h.id===f)??null:null}),l=Se.useRef(0),u=fr[r];return it.jsxs("div",{"code-path":"src\\App.tsx:17:5",className:"fixed inset-0 select-none overflow-hidden bg-white text-[#1a191d]",children:[it.jsx(c3,{"code-path":"src\\App.tsx:19:7",onOpenBook:s,onIndexChange:e,focusRef:l}),it.jsxs("header",{"code-path":"src\\App.tsx:26:7",className:"pointer-events-none fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5",children:[it.jsxs("div",{"code-path":"src\\App.tsx:27:9",className:"flex items-center gap-2.5",children:[it.jsxs("div",{"code-path":"src\\App.tsx:28:11",className:"relative h-7 w-7",children:[it.jsx("div",{"code-path":"src\\App.tsx:29:13",className:"absolute inset-0 rounded-full border border-[#1a191d]"}),it.jsx("div",{"code-path":"src\\App.tsx:30:13",className:"absolute inset-[5px] rounded-full border border-[#1a191d]"}),it.jsx("span",{"code-path":"src\\App.tsx:31:13",className:"absolute inset-0 flex items-center justify-center text-[8px] font-bold",children:"A4"})]}),it.jsxs("div",{"code-path":"src\\App.tsx:33:11",className:"leading-tight",children:[it.jsx("div",{"code-path":"src\\App.tsx:34:13",className:"text-xs font-bold tracking-[0.12em]",children:"DESK ARCHIVE"}),it.jsx("div",{"code-path":"src\\App.tsx:35:13",className:"font-mono text-[9px] tracking-[0.3em] text-[#8b8578]",children:"桌面档案 · 文学意象"})]})]}),it.jsxs("div",{"code-path":"src\\App.tsx:38:9",className:"pointer-events-auto font-mono text-[10px] tracking-[0.2em] text-[#8b8578]",children:[String(r+1).padStart(2,"0")," / ",fr.length]})]}),it.jsx(f3,{"code-path":"src\\App.tsx:44:7",index:r}),it.jsxs("div",{"code-path":"src\\App.tsx:47:7",className:`pointer-events-none fixed inset-x-0 top-[13%] z-20 flex flex-col items-center gap-3 px-6 text-center transition-opacity duration-700 ${r===0?"opacity-100":"opacity-0"}`,children:[it.jsx("div",{"code-path":"src\\App.tsx:52:9",className:"font-mono text-[10px] tracking-[0.5em] text-[#8b8578]",children:"A COLLECTION OF LITERARY IMAGERY"}),it.jsx("h1",{"code-path":"src\\App.tsx:53:9",className:"text-3xl font-bold tracking-[0.08em] md:text-4xl",children:"文学意象"}),it.jsx("p",{"code-path":"src\\App.tsx:54:9",className:"max-w-md text-xs leading-relaxed text-[#6e6a60]",children:"五十部作品，五十张桌面。书不一定拿来阅读，也可以被观看。"})]}),it.jsxs("footer",{"code-path":"src\\App.tsx:60:7",className:"pointer-events-none fixed bottom-0 left-0 z-20 flex flex-col gap-1 px-6 pb-6 text-left",children:[it.jsx("div",{"code-path":"src\\App.tsx:61:9",className:"text-base font-bold tracking-wide md:text-lg",children:u.name}),it.jsxs("div",{"code-path":"src\\App.tsx:62:9",className:"font-mono text-[10px] tracking-[0.25em] text-[#8b8578]",children:[u.author||"UNKNOWN"," · ",u.year]}),it.jsx("div",{"code-path":"src\\App.tsx:65:9",className:"mt-1.5 font-mono text-[9px] tracking-[0.2em] text-[#a3a095]",children:"滚动切换 · 点击书本查看详情"})]}),it.jsx(d3,{"code-path":"src\\App.tsx:71:7",book:i,onClose:()=>s(null)})]})}Xy.createRoot(document.getElementById("root")).render(it.jsx(Se.StrictMode,{"code-path":"src\\main.tsx:8:3",children:it.jsx(pE,{"code-path":"src\\main.tsx:9:5",children:it.jsx(h3,{"code-path":"src\\main.tsx:10:7"})})}));
