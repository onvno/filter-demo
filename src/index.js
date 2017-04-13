define(['jquery', 'util', 'rellax', 'isjs','solazy'], function($, util, Rellax, is,soLazy) {
	$(".lazybox").soLazy();
	$("body").css("visibility", "visible");
	var CloudIndex = {
		init: function() {
			//行业解决方案
			this.initNavTab();
			this.initNavTabSpec();
			this.headClick();
			this.solutionBg();
			this.animateIndex();
			this.hoverAction();
			// $('#headTab').headClick();
			$('.index-solve').navTab();
			$('#clientInfo').navTabSpec();
		},
		headClick: function(e) {
			$('#headTab').on('click', function(e) {
				var $li = null;
				if(e.target.nodeName === "LI") {
					$li = e.target;
				} else if(e.target.nodeName === "A") {
					$li = $(e.target).parent();
				} else {
					return;
				}
				if($($li).hasClass('active')) {
					return;
				} else {
					$($li).parent().find('.active').removeClass('active');
					$($li).addClass('active');
					// window.open($($li).find('a').attr('href'));
					// e.preventDefault();
				}

			})
		},
		initNavTabSpec: function() {
			$.fn.navTabSpec = function() {
				$(this).on('click', function(e) {
					var $li = null,
						tragetId = null;
					if(e.target.nodeName === "LI") {
						$li = e.target;
					} else if(e.target.nodeName === "A") {
						$li = $(e.target).parent();
					} else {
						return;
					}

					if($($li).hasClass('active')) return;
					tragetId = $($li).find('a').attr('href');
					if($(tragetId).length == 1) {
						$($li).parent().find('.active').removeClass('active');
						$($li).addClass('active');
						$(tragetId).parent().find('.active').removeClass('active');
						$(tragetId).addClass('active');
						e.preventDefault();
					}
				})
				return this;
			}
		},
		initNavTab: function() { //初始化页签控件
			$.fn.navTab = function() {
				$(this).on("mouseover mouseout", function(e) {
					var $li = null,
						tragetId = null;
					if(e.target.nodeName === "LI") {
						$li = e.target;
					} else {
						$li = $(e.target).parents('li');
					}

					if($($li).hasClass('active')) return;
					tragetId = $($li).find('a').attr('href');
					if($(tragetId).length == 1) {
						var img = $($li).parent().find('.active').find('img');
						var src = $(img).attr('src');
						var newsrc = $(img).attr('data-url');
						$(img).attr('src', newsrc);
						$(img).attr('data-url', src);

						var activeImg = $($li).find('img');
						var activeSrc = $(activeImg).attr('src');
						var activeNewSrc = $(activeImg).attr('data-url');
						$(activeImg).attr('src', activeNewSrc);
						$(activeImg).attr('data-url', activeSrc);

						$($li).parent().find('.active').removeClass('active');
						$($li).addClass('active');
						$(tragetId).parent().find('.active').removeClass('active');
						$(tragetId).addClass('active');
						e.preventDefault();
					}
				})
				return this;
			}
		},
		// 解决方案的背景图片
		solutionBg: function() {
			$('.solve-cloud .index-solve li').on('mouseenter mouseleave', function() {
				var contbg = $(this).attr('index-img');
				$(".solve-cloud-wholeImg li").each(function() {
					var currentBg = $(this).attr('class');

					if(currentBg.indexOf(contbg) >= 0) {
						$(this).removeClass('dn').siblings().addClass('dn');
					}
				});
			})
		},
		//添加动画
		animateIndex: function() {
			var animateFun = function() {
				if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i) == "9.") {
					$('.select-cloud .platform-cloud-item').css('opacity', '1');
					$('.pub-cloud-whole .pub-cloud-li').css('opacity', '1');
					$('.platform-cloud .platform-cloud-item').css('opacity', '1');
				}
				var winTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				// console.log(winTop);
				var selectPosi = $('.select-cloud .platform-cloud-item ').offset().top - 550;
				// var deveHead = $('.developer-cloud .hot-cloud-head').offset().top - 650;
				var devePosi = $('.developer-cloud .platform-cloud-item ').offset().top - 500;
				var pubCloud = $('.pub-cloud-whole .hot-cloud-head').offset().top - 650;
				if(winTop > selectPosi) {
					// $('.select-cloud .platform-cloud-item').addClass('fadeSelect');
				}
				if(winTop > pubCloud) {
					$('.pub-cloud-whole .pub-cloud-li').addClass('cloud-li_fade');
				}
				if(winTop > devePosi) {

					$('.platform-cloud .platform-cloud-item').addClass('fadeDevelop');
				}
			}
			animateFun();
			$(window).on('scroll', function() {
				animateFun();
			})

		},
		//解决方案hove效果添加和删除
		hoverAction:function(){
			var indexArray=$(".index-solve li");
			if(indexArray.length>0){
				$.each(indexArray,function(index,item){
					$(item).on( "mouseover",function(){
						indexArray.find("a").removeClass("hoverColor").addClass('defaultColor');
						$(this).find("a").removeClass('defaultColor').addClass("hoverColor");
					})
				})
			}
		}

	}

	/**
	 * 首页云
	 **/
	var Banner = {
		//基本对象获取
		bannerWidth: $(document).width(),
		bannerHeight: $(window).height(),
		bannerMiddlePx: $(document).width() / 2,
		$bannerMain: $(".banner__image__main"), //主界面
		$text: $(".banner__cloud__text"), //文字
		$graph: $(".banner__cloud__graph"), //图形
		$cloud: $(".banner__cloud__cloud"), //大云

		$frontLeft: $(".banner__cloud--front--left"), //近
		$frontCenter: $(".banner__cloud--front--center"), //近
		$frontRight: $(".banner__cloud--front--right"), //近

		$middleLeft: $(".banner__cloud--middle--left"), //中
		$middleLeft2: $(".banner__cloud--middle--left2"),
		$middleLeft3: $(".banner__cloud--middle--left3"),
		$middleLeft4: $(".banner__cloud--middle--left4"),

		$middleCenter: $(".banner__cloud--middle--center"), //中
		$middleRight: $(".banner__cloud--middle--right"), //中

		$endLeft: $(".banner__cloud--end--left"), //远
		$endCenter: $(".banner__cloud--end--center"), //远
		$endRight: $(".banner__cloud--end--right"), //远
		$endLeft2: $(".banner__cloud--end--left2"),

		init: function() {
			var that = this;

			var bannerWidth = $(".banner .banner-top-img a img:eq(0)").width();
			$(".banner .banner-top-img a img").css("margin-left",-bannerWidth / 2).fadeIn();
			$(".banner").slick({
					dots: true,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear',
					centerMode: true,
					arrows: true,
					pauseOnHover: true,
					autoplay: true,
					autoplaySpeed: 5000,
					prevArrow : "<span class='arrow arrow-left' ></span>",
					nextArrow : "<span class='arrow arrow-right' ></span>"
			});

			// that.initCloudElementPOS();
		},
		//初始化元素位置
		initCloudElementPOS: function() {
			var that = this;

			if(is.chrome()) {
				$(window).on("scroll", function() {
					//              console.log("scroll:"+$(this).scrollTop());
					if($(this).scrollTop() > 150) {

						if(that.$frontLeft.attr("isblur") != "true") {
							that.$frontLeft.attr("isblur", true);
							that.$frontLeft.addClass("cloud--blur7");
							that.$frontCenter.addClass("cloud--blur7");
							that.$frontRight.addClass("cloud--blur7");

							that.$endLeft2.addClass("cloud--blur3");
							that.$middleLeft3.addClass("cloud--blur4");
							that.$middleLeft2.addClass("cloud--blur3");
						}
					} else if($(this).scrollTop() < 150) {
						if(that.$frontLeft.attr("isblur") != "false") {
							that.$frontLeft.attr("isblur", false);
							that.$frontLeft.removeClass("cloud--blur7");
							that.$frontCenter.removeClass("cloud--blur7");
							that.$frontRight.removeClass("cloud--blur7");

							that.$endLeft2.removeClass("cloud--blur3");
							that.$middleLeft3.removeClass("cloud--blur4");
							that.$middleLeft2.removeClass("cloud--blur4");
						}

					}

				});
			}

			that.$bannerMain.css({
				height: that.bannerHeight - 220
			});
			//文字
			//          that.$text.css({
			//              top: that.bannerHeight / 2 - that.$text.height() - 35,
			//              left: that.bannerWidth / 2 - that.$text.width() - 50
			//          });

			//图形
			that.$graph.css({
				top: that.bannerHeight / 2 - that.$graph.height() / 2 - 100,
				left: that.bannerWidth / 2 - that.$graph.width() / 2
			});
			//          that.$cloud.css({
			//              top: that.bannerHeight / 2 - that.$graph.height() / 2 - 150,
			//              left: that.bannerWidth / 2 - that.$graph.width() / 2
			//          });

			//近
			that.$frontLeft.css({
				top: that.$frontLeft.height() / 2 - 320,
				left: that.bannerWidth / 2 - that.$frontLeft.width() / 2 - 500
			});
			that.$frontCenter.css({
				top: that.$frontCenter.height() - 680,
				left: that.bannerWidth / 2 - that.$frontCenter.width() / 2 - 70
			});
			that.$frontRight.css({
				top: that.$frontRight.height() / 2 - 380,
				left: that.bannerWidth / 2 - 231
			});

			//中间云
			that.$middleLeft.css({
				top: that.bannerHeight / 2 - 280,
				left: that.bannerWidth / 2 - that.$middleLeft.width() / 2 - 450
			});
			that.$middleLeft2.css({
				top: that.bannerHeight / 2 - 180,
				left: that.bannerWidth / 2 - that.$middleLeft2.width() / 2 - 480
			});
			that.$middleLeft3.css({
				top: that.bannerHeight / 2 - 100,
				left: that.bannerWidth / 2 - that.$middleLeft3.width() / 2 - 350
			});
			that.$middleLeft4.css({
				top: that.bannerHeight / 2 - 100,
				left: that.bannerWidth / 2 - that.$middleLeft4.width() + 450
			});

			that.$middleCenter.css({
				top: that.bannerHeight / 2 - 251,
				left: that.bannerWidth / 2 - that.$middleCenter.width() / 2 + 510
			});
			that.$middleRight.css({
				top: that.bannerHeight / 2 - that.$middleRight.height() / 2 - 150,
				left: that.bannerWidth / 2 - that.$middleRight.width() / 2 + 250
			});

			//远
			that.$endLeft.css({
				top: that.bannerHeight / 2 - that.$endLeft.height() + 110,
				left: that.bannerWidth / 2 - that.$endLeft.width() + 200
			});
			that.$endCenter.css({
				top: that.bannerHeight / 2 - that.$endCenter.height() - 220,
				left: that.bannerWidth / 2 - that.$endCenter.width() / 2 + 30
			});
			that.$endRight.css({
				top: that.bannerHeight / 2 - that.$endRight.height() - 80,
				left: that.bannerWidth / 2 - that.$endRight.width() / 2 + 500
			});

			that.$endLeft2.css({
				top: that.bannerHeight / 2 - that.$endLeft2.height() + 140,
				left: that.bannerWidth / 2 - that.$endLeft2.width() / 2 + 450
			});

			setTimeout(function() {
				that.$frontLeft.addClass("cloud");
				that.$frontCenter.addClass("cloud");
				that.$frontRight.addClass("cloud");
				that.$endLeft2.addClass("cloud");
				that.$middleLeft3.addClass("cloud");
				that.$middleLeft2.addClass("cloud");

			}, 500);

		}

	}

	$(function() {
		CloudIndex.init();
		Banner.init();
		// if(!is.ie(8)) {
		// 	var rellax = new Rellax('.rellax');
		// }
//		if(!is.ie(9)) {
//			window.onresize = function() {
//				document.location.reload();
//			}
//		}

	});

});
