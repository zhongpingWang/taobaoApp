define(function (require, exports, module) {

    "require:nomunge,exports:nomunge,module:nomunge";

    require("../../plugings/zepto.js");
    var iSlider = require("../../plugings/iSlider.js");

    var share = {};

    // 分页模板
    var page = [
        {
            content: '<div class="swiper-slide"> <header class="share-happy-title"> <img src="../s/image/share/share-author.png" alt="title"> </header> <article class="share-happy-main"> <h3>一起懒在蓝色的枸杞岛</h3> <p>同一个美景，在一百个旅者眼里，它有一百美景，在一百个旅者眼里，它有一百美景，在一百个旅者眼里，它有一百美景，在一百个旅者眼里，它有一百个模样。属于你的美景，只能靠自己走访。</p> <figure class="share-user"> <img src="http://static.caibeike.com/i/d4bff22f5a71cf9eba80e3c351b8065c-6mJ0F4@!640c380" alt=""> <figcaption class="share-a-user"> <div class="a-user-img"> <img src="http://static.caibeike.com/i/0005a877fe9540cfea9b07336f5c3dbe-28fZdH@!s300" alt=""> </div> <div class="a-user-txt"> <h3>Melody</h3> <div class="a-user-experience">体验师</div> <p><span>42</span>个足迹,<span>18</span>种玩法</p> </div> </figcaption> </figure> <address> <span class="iconFont">&#xe606;</span>舟山·阡陌海景客栈·情侣出行 </address> </article> <div class="swiper-next"><span></span></div> </div>'
        },
        {
            content: '<div class="swiper-slide"> <header class="share-hotel-title"> <img src="../s/image/share/share-hotel.png" alt="title"> 万鹏金象大酒店 </header> <article class="share-hotel-main"> <ul class="clear"> <li> <span class="item-img" data-index="0" style="background-image: url(http://static.caibeike.com/i/00f144aa850c106fdcc62db0813624fa-xARR5O@!s300)"></span> </li> <li> <span class="item-img" data-index="1" style="background-image: url(http://static.caibeike.com/i/0c76dd437009203a38db00728ee35846-9Z7knh@!s300)" ></span> </li> <li> <span class="item-img" data-index="2" style="background-image:url(http://static.caibeike.com/i/0d8ce41624a07687ce00a16d811ad9cb-WyqpLw@!640c380)"> <span class="share-float"><span>28</span></span> </span> </li> <li> <span class="item-img" data-index="3" style="background-image: url(http://static.caibeike.com/i/d4bff22f5a71cf9eba80e3c351b8065c-6mJ0F4@!640c380)"></span> </li> </ul> <p>客栈装饰的很漂亮，地中海风情，面对着海上牧场，躺在摇床上，吹着海风中海风情，面对着海上牧场，躺在摇床上，吹着海风中海风情，面对着海上牧场，躺在摇床上，吹着海风中海风情，面对着海上牧场，躺在摇床上，吹着海风，感觉到非常大惬意，老板娘人很nice，独占枸杞岛一隅，海景无敌～</p> </article> <div class="share-banner"></div> </div>'
        },
        {
            content: '<div class="swiper-slide"> <header class="share-hotel-title"> <img src="../s/image/share/share-place.png" alt="title">枸杞岛 </header> <article class="share-hotel-main"> <div class="share-place-first"> <span class="item-img" style="background-image: url(http://static.caibeike.com/i/26a67fe1e2514afc37977ecf7d872d89-jz3plm@!s300)" data-index="0"></span> </div> <ul class="clear"> <li> <span class="item-img" data-index="1" style="background-image: url(http://static.caibeike.com/i/6a07a6b5932f7098251e5b6a96929a52-pmBCIw@!s300)"> <span class="share-float"><span>28</span></span> </span> </li> <li> <span class="item-img" data-index="2" style="background-image: url(http://static.caibeike.com/i/75f0306e53aa47b8121a07e9e60ed230-37kEZI@!s300)"></span> </li> </ul> <p>玩了点啥：枸杞岛，已岛上盛产枸杞得名，从东海过来，海面竟然变成了水蓝色，这里的空气弥漫着海腥味，风景很原始，海鲜市场可以自己买海鲜让客栈老板加工，原汁原味...</p> </article> <div class="share-banner"></div> </div>'
        },
        {
            content: '<div class="swiper-slide"> <header class="share-hotel-title"> <img src="../s/image/share/share-food.png" alt="title"> 枸杞岛美食 </header> <article class="share-hotel-main"> <div class="share-place-first"> <span class="item-img" data-index="0" style="background-image: url(http://static.caibeike.com/i/98384a3db5def6f207fa5734bd8ac566-kbc4GI@!s300)"> <span class="share-float"><span>28</span></span> </span> </div> <div class="share-place-first"> <span class="item-img" data-index="1" style="background-image: url(http://static.caibeike.com/i/d5cb7abd407522682611bb8d640782ea-sWNpNp@!s300)"></span> </div> <p>餐厅点评：解放南路金帝银泰城3楼商业中心里的餐厅，我来一探口味、环境、服务都为9分以上的店，想见识一下到底是怎么一家分数那么高的店；原来这里和，点菜的方式也是在纸上直接画选...</p> </article> <div class="share-banner"></div> </div>'
        },
        {
            content: '<div class="swiper-slide"> <div class="swiper-scroll"> <div style=""> <header class="recommend-title">现在就出发</header> <ul class="recommend-list"> <li> <a href="http://www.baidu.com"> <div class="recommend-item-img"> <img src="http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg" alt=""> <div class="recommend-item-price"> <div class="item-price"><span>￥</span>798</div> <del>原价：￥928</del> </div> </div> <div class="recommend-item-txt"> <p>阳澄湖澜廷度假酒店 + 灵山大佛门票</p> <div class="item-txt-label">闺蜜·水上公园·大闸蟹</div> <span class="item-txt-num">已售27</span> </div> </a> </li> <li> <a href="#"> <div class="recommend-item-img"> <img src="http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg" alt=""> <div class="recommend-item-price"> <div class="item-price"><span>￥</span>798</div> <del>原价：￥928</del> </div> </div> <div class="recommend-item-txt"> <p>阳澄湖澜廷度假酒店 + 灵山大佛门票</p> <div class="item-txt-label">闺蜜·水上公园·大闸蟹</div> <span class="item-txt-num">已售27</span> </div> </a> </li> </ul> <footer class="recommend-more"> <div></div> <p>下载彩贝壳APP,再送190元大礼包</p> <a href="#"><img src="../../s/image/share/share-ios.png" alt=""></a> <a href="#"><img src="../../s/image/share/share-android.png" alt=""></a> </footer> </div> </div> </div>'
        },
        {
            content:'<div class="swiper-slide slide-gray"> <div class="swiper-scroll"> <div> <header class="recommend-gz"> <img src="http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg" alt=""/> <span class="recommend-name">请叫我大飞请叫我大飞</span> <span class="recommend-tys">体验师</span> <a class="gz active" href="#">＋关注</a> </header> <section class="else-download"> <p><span>Melody</span>邀请你一起玩彩贝壳</p><img src="../../s/image/share/share-emw.png" alt="二维码下载"> <div>查看完整版</div> </section> <section class="recommend-list"> <h3>精彩玩法推荐</h3> <ul class="clear"> <li> <a href="#"> <div class="img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"> <div class="msg"> <span class="item-user"> <span class="item-user-img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"></span>请叫我大飞请叫我大飞 </span> <span class="item-zan">234</span> </div> </div> <p>盛夏太早，就这样躲起 来温醇冬天</p> </a> </li> <li> <a href="#"> <div class="img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"> <div class="msg"> <span class="item-user"> <span class="item-user-img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"></span>请叫我大飞请叫我大飞 </span> <span class="item-zan">234</span> </div> </div> <p>盛夏太早，就这样躲起 来温醇冬天</p> </a> </li> <li> <a href="#"> <div class="img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"> <div class="msg"> <span class="item-user"> <span class="item-user-img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"></span>请叫我大飞请叫我大飞 </span> <span class="item-zan">234</span> </div> </div> <p>盛夏太早，就这样躲起 来温醇冬天</p> </a> </li> <li> <a href="#"> <div class="img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"> <div class="msg"> <span class="item-user"> <span class="item-user-img" style="background: url(http://img2.cache.netease.com/photo/0001/2015-06-29/AT9OSTRR4T8F0001.jpeg);"></span>请叫我大飞请叫我大飞 </span> <span class="item-zan">234</span> </div> </div> <p>盛夏太早，就这样躲起 来温醇冬天</p> </a> </li> </ul> </section> </div> </div> </div>'
        }
    ];

    // 大图模板
    var list = [
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="00" data-src="http://file29.mafengwo.net/M00/E6/6E/wKgBpVUKeCSAdE1_AAPvs9RcwW093.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="11" data-src="http://file29.mafengwo.net/M00/E7/22/wKgBpVUKeK2APr7QAAZb4AvogdU62.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="22" data-src="http://file30.mafengwo.net/M00/E7/5D/wKgBpVUKeN2AcDcLAALz2kNjuRs19.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="33" data-src="http://static.caibeike.com/i/ae23ba33ec930080c14b2c7396953710-jxw7sV@!s640"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="44" data-src="http://static.caibeike.com/i/98384a3db5def6f207fa5734bd8ac566-kbc4GI@!s640"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="55" data-src="http://file29.mafengwo.net/M00/E6/6E/wKgBpVUKeCSAdE1_AAPvs9RcwW093.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="66" data-src="http://file29.mafengwo.net/M00/E7/22/wKgBpVUKeK2APr7QAAZb4AvogdU62.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="77" data-src="http://file30.mafengwo.net/M00/E7/5D/wKgBpVUKeN2AcDcLAALz2kNjuRs19.groupinfo.w600.jpeg"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="88" data-src="http://static.caibeike.com/i/ae23ba33ec930080c14b2c7396953710-jxw7sV@!s640"></div>'
        },
        {
            content: '<div class="fixed-img"><div class="fixed-load"></div><img data-title="99" data-src="http://static.caibeike.com/i/98384a3db5def6f207fa5734bd8ac566-kbc4GI@!s640"></div>'
        }
    ];

    // 左右滑动
    share.iSlider = function () {
        new iSlider({
            dom: document.getElementById("iSlider-wrapper-page"),
            data: page,
            fixPage:false,
            onslidechanged:function(){
                console.log(1);
            }
        });
    };

    share.init = function () {

        StartAnimate();
        function StartAnimate (){
            $(".share-page").addClass("share-scale");
        }

        // 载入数据模板
        // ajax

        // 载入完成调用iSlider
        share.iSlider();

        // 关闭动画
        EndAnimate();
        function EndAnimate(){
            setTimeout(function(){
                ShowMain();
            },1400);

            // 关闭加载动画 同时显示第一屏内容
            function ShowMain(){
                $(".share-page").addClass("share-page-hide");
                $(".iSlider-wrapper-page").addClass("iSlider-wrapper-page-show");
            }
        }

        // 浏览大图模式 侧边栏划出
        $("#control").on('click',".item-img", function(e) {
            var iSliderControl = $(".iSlider-control");
            iSliderControl.addClass('iSlider-control-show');
            var dataIndex = parseInt($(this).attr("data-index"),10);
            new iSlider({
                dom: document.getElementById("iSlider-wrapper-fixed"),
                data: list,
                fixPage:false,
                initIndex:dataIndex,
                onslidechanged:function(){

                    // 当前标题
                    var _thisTitle = iSliderControl.find(".islider-active img").attr("data-title");
                    $(".iSlide-title").text(_thisTitle);

                    //滑动加载当前图片
                    var oImgWrap2 = iSliderControl.find(".islider-active .fixed-img");
                    var oImgSrc2 = oImgWrap2.find("img").attr("data-src");
                    loadImg(oImgSrc2,oImgWrap2);
                }
            });

            // 初始标题
            $(".iSlide-title").text(iSliderControl.find(".islider-active img").attr("data-title"));

            //初始加载图片
            var oImgWrap = iSliderControl.find(".islider-active .fixed-img");
            var oImgSrc = oImgWrap.find("img").attr("data-src");
            loadImg(oImgSrc,oImgWrap);

        });

        // 加载大图
        function loadImg(imgSrc,oImgWrap){
            var oImg;
            $(oImgWrap).find(".fixed-load").fadeIn(10);
            oImg = new Image();
            oImg.src = imgSrc;
            oImg.onload = function(){
                $(oImgWrap).find(".fixed-load").fadeOut(10);
                $(oImgWrap).find("img").attr("src",imgSrc).css("opacity","1");
            }
        }

        // 关闭大图模式 侧边栏退出
        $(document).on('click',".iSlider-control", function(e){
            $(this).removeClass('iSlider-control-show');
            setTimeout(function(){
                $("#iSlider-wrapper-fixed").empty(); // 退出则清空容器
            },180);
            e.preventDefault();
        });
    };

    module.exports = share;
});