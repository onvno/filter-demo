!function(){function t(e){var s=i[e];return"object"==typeof s?s:(s.exports||(s.exports={},s.exports=s.call(s.exports,t,s.exports,s)||s.exports),s.exports)}function e(t,e){i[t]=e}var i={};e("jquery",function(){return jQuery}),e("popup",function(t){function e(){this.destroyed=!1,this.__popup=i("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=i("<div />").css({opacity:.7,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],s++}var i=t("jquery"),s=0,o=!("minWidth"in i("html")[0].style),n=!o;return i.extend(e.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(t){if(this.destroyed)return this;var s=this.__popup,a=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=t||this.follow,!this.__ready){if(s.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),o||i(window).on("resize",i.proxy(this.reset,this)),this.modal){var r={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||e.zIndex};s.addClass(this.className+"-modal"),n||i.extend(r,{position:"absolute",width:i(window).width()+"px",height:i(document).height()+"px"}),a.css(r).attr({tabindex:"0"}).on("focus",i.proxy(this.focus,this)),this.__mask=a.clone(!0).attr("style","").insertAfter(s),a.addClass(this.className+"-backdrop").insertBefore(s),this.__ready=!0}s.html()||s.html(this.innerHTML)}return s.addClass(this.className+"-show").show(),a.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(t){return!this.destroyed&&this.open&&(void 0!==t&&(this.returnValue=t),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),e.current===this&&(e.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),o||i(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var t in this)delete this[t];return this},reset:function(){var t=this.follow;return t?this.__follow(t):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var t=this.node,s=this.__popup,o=e.current,n=this.zIndex=e.zIndex++;if(o&&o!==this&&o.blur(!1),!i.contains(t,this.__getActive())){var a=s.find("[autofocus]")[0];!this._autofocus&&a?this._autofocus=!0:a=t,this.__focus(a)}return s.css("zIndex",n),e.current=this,s.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var t=this.__activeElement;return!1!==arguments[0]&&this.__focus(t),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(t,e){return this.__getEventListener(t).push(e),this},removeEventListener:function(t,e){for(var i=this.__getEventListener(t),s=0;s<i.length;s++)e===i[s]&&i.splice(s--,1);return this},__getEventListener:function(t){var e=this.__listener;return e||(e=this.__listener={}),e[t]||(e[t]=[]),e[t]},__dispatchEvent:function(t){var e=this.__getEventListener(t);this["on"+t]&&this["on"+t]();for(var i=0;i<e.length;i++)e[i].call(this)},__focus:function(t){try{this.autofocus&&!/^iframe$/i.test(t.nodeName)&&t.focus()}catch(t){}},__getActive:function(){try{var t=document.activeElement,e=t.contentDocument;return e&&e.activeElement||t}catch(t){}},__center:function(){var t=this.__popup,e=i(window),s=i(document),o=this.fixed,n=o?0:s.scrollLeft(),a=o?0:s.scrollTop(),r=e.width(),c=e.height(),l=t.width(),d=t.height(),h=(r-l)/2+n,u=382*(c-d)/1e3+a,p=t[0].style;p.left=Math.max(parseInt(h),n)+"px",p.top=Math.max(parseInt(u),a)+"px"},__follow:function(t){var e=t.parentNode&&i(t),s=this.__popup;if(this.__followSkin&&s.removeClass(this.__followSkin),e){var o=e.offset();if(o.left*o.top<0)return this.__center()}var n=this,a=this.fixed,r=i(window),c=i(document),l=r.width(),d=r.height(),h=c.scrollLeft(),u=c.scrollTop(),p=s.width(),f=s.height(),_=e?e.outerWidth():0,v=e?e.outerHeight():0,g=this.__offset(t),b=g.left,m=g.top,y=a?b-h:b,w=a?m-u:m,k=a?0:h,x=a?0:u,E=k+l-p,L=x+d-f,$={},C=this.align.split(" "),I=this.className+"-",N={top:"bottom",bottom:"top",left:"right",right:"left"},z={top:"top",bottom:"top",left:"left",right:"left"},T=[{top:w-f,bottom:w+v,left:y-p,right:y+_},{top:w,bottom:w-f+v,left:y,right:y-p+_}],M={left:y+_/2-p/2,top:w+v/2-f/2},V={left:[k,E],top:[x,L]};i.each(C,function(t,e){T[t][e]>V[z[e]][1]&&(e=C[t]=N[e]),T[t][e]<V[z[e]][0]&&(C[t]=N[e])}),C[1]||(z[C[1]]="left"===z[C[0]]?"top":"left",T[1][C[1]]=M[z[C[1]]]),I+=C.join("-")+" "+this.className+"-follow",n.__followSkin=I,e&&s.addClass(I),$[z[C[0]]]=parseInt(T[0][C[0]]),$[z[C[1]]]=parseInt(T[1][C[1]]),s.css($)},__offset:function(t){var e=t.parentNode,s=e?i(t).offset():{left:t.pageX,top:t.pageY};t=e?t:t.target;var o=t.ownerDocument,n=o.defaultView||o.parentWindow;if(n==window)return s;var a=n.frameElement,r=i(o),c=r.scrollLeft(),l=r.scrollTop(),d=i(a).offset(),h=d.left,u=d.top;return{left:s.left+h-c,top:s.top+u-l}}}),e.zIndex=1024,e.current=null,e}),e("dialog-config",{backdropBackground:"#000",backdropOpacity:.7,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'}),e("dialog",function(t){var e=t("jquery"),i=t("popup"),s=t("dialog-config"),o=s.cssUri;if(o){var n=t[t.toUrl?"toUrl":"resolve"];n&&(o=n(o),o='<link rel="stylesheet" href="'+o+'" />',e("base")[0]?e("base").before(o):e("head").append(o))}var a=0,r=new Date-0,c=!("minWidth"in e("html")[0].style),l="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),d=!c&&!l,h=function(t,i,s){var o=t=t||{};"string"!=typeof t&&1!==t.nodeType||(t={content:t,fixed:!l}),t=e.extend(!0,{},h.defaults,t),t.original=o;var n=t.id=t.id||r+a,c=h.get(n);return c?c.focus():(d||(t.fixed=!1),t.quickClose&&(t.modal=!0,t.backdropOpacity=0),e.isArray(t.button)||(t.button=[]),void 0!==s&&(t.cancel=s),t.cancel&&t.button.push({id:"cancel",value:t.cancelValue,callback:t.cancel,display:t.cancelDisplay}),void 0!==i&&(t.ok=i),t.ok&&t.button.push({id:"ok",value:t.okValue,callback:t.ok,autofocus:!0}),h.list[n]=new h.create(t))},u=function(){};u.prototype=i.prototype;var p=h.prototype=new u;return h.create=function(t){var s=this;e.extend(this,new i);var o=(t.original,e(this.node).html(t.innerHTML)),n=e(this.backdrop);return this.options=t,this._popup=o,e.each(t,function(t,e){"function"==typeof s[t]?s[t](e):s[t]=e}),t.zIndex&&(i.zIndex=t.zIndex),o.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",!1===this.cancel?"none":"").attr("title",this.cancelValue).on("click",function(t){s._trigger("cancel"),t.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),t.quickClose&&n.on("onmousedown"in document?"mousedown":"click",function(){return s._trigger("cancel"),!1}),this.addEventListener("show",function(){n.css({opacity:0,background:t.backdropBackground}).animate({opacity:t.backdropOpacity},150)}),this._esc=function(t){var e=t.target,o=e.nodeName,n=/^input|textarea$/i,a=i.current===s,r=t.keyCode;!a||n.test(o)&&"button"!==e.type||27===r&&s._trigger("cancel")},e(document).on("keydown",this._esc),this.addEventListener("remove",function(){e(document).off("keydown",this._esc),delete h.list[this.id]}),a++,h.oncreate(this),this},h.create.prototype=p,e.extend(p,{content:function(t){var i=this._$("content");return"object"==typeof t?(t=e(t),i.empty("").append(t.show()),this.addEventListener("beforeremove",function(){e("body").append(t.hide())})):i.html(t),this.reset()},title:function(t){return this._$("title").text(t),this._$("header")[t?"show":"hide"](),this},width:function(t){return this._$("content").css("width",t),this.reset()},height:function(t){return this._$("content").css("height",t),this.reset()},button:function(t){t=t||[];var i=this,s="",o=0;return this.callbacks={},"string"==typeof t?(s=t,o++):e.each(t,function(t,n){var a=n.id=n.id||n.value,r="";i.callbacks[a]=n.callback,!1===n.display?r=' style="display:none"':o++,s+='<button type="button" i-id="'+a+'"'+r+(n.disabled?" disabled":"")+(n.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+n.value+"</button>",i._$("button").on("click","[i-id="+a+"]",function(t){e(this).attr("disabled")||i._trigger(a),t.preventDefault()})}),this._$("button").html(s),this._$("footer")[o?"show":"hide"](),this},statusbar:function(t){return this._$("statusbar").html(t)[t?"show":"hide"](),this},_$:function(t){return this._popup.find("[i="+t+"]")},_trigger:function(t){var e=this.callbacks[t];return"function"!=typeof e||!1!==e.call(this)?this.close().remove():this}}),h.oncreate=e.noop,h.getCurrent=function(){return i.current},h.get=function(t){return void 0===t?h.list:h.list[t]},h.list={},h.defaults=s,h}),window.dialog=t("dialog")}();