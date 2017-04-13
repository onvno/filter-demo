define(["jquery","util","rellax","isjs","solazy"],function(e,t,n,a,d){e(".lazybox").soLazy(),e("body").css("visibility","visible");var i={init:function(){this.initNavTab(),this.initNavTabSpec(),this.headClick(),this.solutionBg(),this.animateIndex(),this.hoverAction(),e(".index-solve").navTab(),e("#clientInfo").navTabSpec()},headClick:function(t){e("#headTab").on("click",function(t){var n=null;if("LI"===t.target.nodeName)n=t.target;else{if("A"!==t.target.nodeName)return;n=e(t.target).parent()}e(n).hasClass("active")||(e(n).parent().find(".active").removeClass("active"),e(n).addClass("active"))})},initNavTabSpec:function(){e.fn.navTabSpec=function(){return e(this).on("click",function(t){var n=null,a=null;if("LI"===t.target.nodeName)n=t.target;else{if("A"!==t.target.nodeName)return;n=e(t.target).parent()}e(n).hasClass("active")||(a=e(n).find("a").attr("href"),1==e(a).length&&(e(n).parent().find(".active").removeClass("active"),e(n).addClass("active"),e(a).parent().find(".active").removeClass("active"),e(a).addClass("active"),t.preventDefault()))}),this}},initNavTab:function(){e.fn.navTab=function(){return e(this).on("mouseover mouseout",function(t){var n=null,a=null;if(n="LI"===t.target.nodeName?t.target:e(t.target).parents("li"),!e(n).hasClass("active")&&(a=e(n).find("a").attr("href"),1==e(a).length)){var d=e(n).parent().find(".active").find("img"),i=e(d).attr("src"),l=e(d).attr("data-url");e(d).attr("src",l),e(d).attr("data-url",i);var r=e(n).find("img"),o=e(r).attr("src"),s=e(r).attr("data-url");e(r).attr("src",s),e(r).attr("data-url",o),e(n).parent().find(".active").removeClass("active"),e(n).addClass("active"),e(a).parent().find(".active").removeClass("active"),e(a).addClass("active"),t.preventDefault()}}),this}},solutionBg:function(){e(".solve-cloud .index-solve li").on("mouseenter mouseleave",function(){var t=e(this).attr("index-img");e(".solve-cloud-wholeImg li").each(function(){e(this).attr("class").indexOf(t)>=0&&e(this).removeClass("dn").siblings().addClass("dn")})})},animateIndex:function(){var t=function(){"Microsoft Internet Explorer"==navigator.appName&&"9."==navigator.appVersion.match(/9./i)&&(e(".select-cloud .platform-cloud-item").css("opacity","1"),e(".pub-cloud-whole .pub-cloud-li").css("opacity","1"),e(".platform-cloud .platform-cloud-item").css("opacity","1"));var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,n=(e(".select-cloud .platform-cloud-item ").offset().top,e(".developer-cloud .platform-cloud-item ").offset().top-500);t>e(".pub-cloud-whole .hot-cloud-head").offset().top-650&&e(".pub-cloud-whole .pub-cloud-li").addClass("cloud-li_fade"),t>n&&e(".platform-cloud .platform-cloud-item").addClass("fadeDevelop")};t(),e(window).on("scroll",function(){t()})},hoverAction:function(){var t=e(".index-solve li");t.length>0&&e.each(t,function(n,a){e(a).on("mouseover",function(){t.find("a").removeClass("hoverColor").addClass("defaultColor"),e(this).find("a").removeClass("defaultColor").addClass("hoverColor")})})}},l={bannerWidth:e(document).width(),bannerHeight:e(window).height(),bannerMiddlePx:e(document).width()/2,$bannerMain:e(".banner__image__main"),$text:e(".banner__cloud__text"),$graph:e(".banner__cloud__graph"),$cloud:e(".banner__cloud__cloud"),$frontLeft:e(".banner__cloud--front--left"),$frontCenter:e(".banner__cloud--front--center"),$frontRight:e(".banner__cloud--front--right"),$middleLeft:e(".banner__cloud--middle--left"),$middleLeft2:e(".banner__cloud--middle--left2"),$middleLeft3:e(".banner__cloud--middle--left3"),$middleLeft4:e(".banner__cloud--middle--left4"),$middleCenter:e(".banner__cloud--middle--center"),$middleRight:e(".banner__cloud--middle--right"),$endLeft:e(".banner__cloud--end--left"),$endCenter:e(".banner__cloud--end--center"),$endRight:e(".banner__cloud--end--right"),$endLeft2:e(".banner__cloud--end--left2"),init:function(){var t=e(".banner .banner-top-img a img:eq(0)").width();e(".banner .banner-top-img a img").css("margin-left",-t/2).fadeIn(),e(".banner").slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",centerMode:!0,arrows:!0,pauseOnHover:!0,autoplay:!0,autoplaySpeed:5e3,prevArrow:"<span class='arrow arrow-left' ></span>",nextArrow:"<span class='arrow arrow-right' ></span>"})},initCloudElementPOS:function(){var t=this;a.chrome()&&e(window).on("scroll",function(){e(this).scrollTop()>150?"true"!=t.$frontLeft.attr("isblur")&&(t.$frontLeft.attr("isblur",!0),t.$frontLeft.addClass("cloud--blur7"),t.$frontCenter.addClass("cloud--blur7"),t.$frontRight.addClass("cloud--blur7"),t.$endLeft2.addClass("cloud--blur3"),t.$middleLeft3.addClass("cloud--blur4"),t.$middleLeft2.addClass("cloud--blur3")):e(this).scrollTop()<150&&"false"!=t.$frontLeft.attr("isblur")&&(t.$frontLeft.attr("isblur",!1),t.$frontLeft.removeClass("cloud--blur7"),t.$frontCenter.removeClass("cloud--blur7"),t.$frontRight.removeClass("cloud--blur7"),t.$endLeft2.removeClass("cloud--blur3"),t.$middleLeft3.removeClass("cloud--blur4"),t.$middleLeft2.removeClass("cloud--blur4"))}),t.$bannerMain.css({height:t.bannerHeight-220}),t.$graph.css({top:t.bannerHeight/2-t.$graph.height()/2-100,left:t.bannerWidth/2-t.$graph.width()/2}),t.$frontLeft.css({top:t.$frontLeft.height()/2-320,left:t.bannerWidth/2-t.$frontLeft.width()/2-500}),t.$frontCenter.css({top:t.$frontCenter.height()-680,left:t.bannerWidth/2-t.$frontCenter.width()/2-70}),t.$frontRight.css({top:t.$frontRight.height()/2-380,left:t.bannerWidth/2-231}),t.$middleLeft.css({top:t.bannerHeight/2-280,left:t.bannerWidth/2-t.$middleLeft.width()/2-450}),t.$middleLeft2.css({top:t.bannerHeight/2-180,left:t.bannerWidth/2-t.$middleLeft2.width()/2-480}),t.$middleLeft3.css({top:t.bannerHeight/2-100,left:t.bannerWidth/2-t.$middleLeft3.width()/2-350}),t.$middleLeft4.css({top:t.bannerHeight/2-100,left:t.bannerWidth/2-t.$middleLeft4.width()+450}),t.$middleCenter.css({top:t.bannerHeight/2-251,left:t.bannerWidth/2-t.$middleCenter.width()/2+510}),t.$middleRight.css({top:t.bannerHeight/2-t.$middleRight.height()/2-150,left:t.bannerWidth/2-t.$middleRight.width()/2+250}),t.$endLeft.css({top:t.bannerHeight/2-t.$endLeft.height()+110,left:t.bannerWidth/2-t.$endLeft.width()+200}),t.$endCenter.css({top:t.bannerHeight/2-t.$endCenter.height()-220,left:t.bannerWidth/2-t.$endCenter.width()/2+30}),t.$endRight.css({top:t.bannerHeight/2-t.$endRight.height()-80,left:t.bannerWidth/2-t.$endRight.width()/2+500}),t.$endLeft2.css({top:t.bannerHeight/2-t.$endLeft2.height()+140,left:t.bannerWidth/2-t.$endLeft2.width()/2+450}),setTimeout(function(){t.$frontLeft.addClass("cloud"),t.$frontCenter.addClass("cloud"),t.$frontRight.addClass("cloud"),t.$endLeft2.addClass("cloud"),t.$middleLeft3.addClass("cloud"),t.$middleLeft2.addClass("cloud")},500)}};e(function(){i.init(),l.init()})});