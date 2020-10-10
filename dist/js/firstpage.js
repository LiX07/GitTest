define(["jquery","jquery-cookie"],function($){

    // 轮播图
    function banner(){
        var oBanner = $(".bannerbox .banner").find(".bannerp");
        var iNow = 1;
        var timer = null;


        // 移入移出
        $(".banner").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow ++;
                tab();
            },4000);
        })   

        $(".bannerL").click(function(){
            iNow --;
            tab();     
        })
        $(".bannerR").click(function(){
            iNow ++;
            tab();
        })

            timer = setInterval(function(){
                iNow ++;
                tab();
            },4000)

        function tab(){
            oBanner.animate({left:-680 * iNow},500,function(){
                if(iNow == 4){
                    iNow = 1;
                    oBanner.css("left",-680);
                }else if(iNow == 0){
                    iNow = 3;
                    oBanner.css("left",-680 * iNow)
                }
            })
        }
    }

    function foods(){
        // var oLeft = $(".foodsbox .foodsnew").find(".foodsL");
        // var oRight = $(".foodsbox .foodsnew").find(".foodsR");
        var oFoods = $(".foodsbox .foodsnew .foods").find(".foodss");
        var iNo = 0;

        $(".foodsL").click(function(){
            iNo --;
            tab1();
        })
        $(".foodsR").click(function(){
            console.log("111");
            iNo ++;
            tab1();
        })
        function tab1(){
            oFoods.animate({left:-279 * iNo},500,function(){
                // if(iNow == 4){
                //     iNow = 1;
                //     oBanner.css("left",-680);
                // }else if(iNow == 0){
                //     iNow = 3;
                //     oBanner.css("left",-680 * iNow)
                // }
            })
        }
    }

    return {
        banner:banner,
        foods:foods
    }
})