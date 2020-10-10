define(["jquery","jquery-cookie"],function($){

    function shopping(){
        // var oimg = $(".mainbox main .left #img").find("img");

        

            // The native width and height of the image.
            var native_width = 0,
                native_height = 0,
                current_width = 0,
                current_height = 0;
        
            $("#img").mousemove(function (e) {
                /* Act on the event */
                if (!native_width && !native_height) {
                    var image_object = new Image();
                    image_object.src = $("#img img").attr('src');
        
                    // Gets the image native height and width.
                    native_height = image_object.height;
                    native_width = image_object.width;
        
                    // Gets the image current height and width.
                    current_height = $("#img img").height();
                    current_width = $("#img img").width();
        
                } else {
        
                    // Gets .maginfy offset coordinates.
                    var magnify_offset = $(this).offset(),
        
                        // Gets coordinates within .maginfy.
                        mx = e.pageX - magnify_offset.left,
                        my = e.pageY - magnify_offset.top;
        
                    // Checks the mouse within .maginfy or not.
                    if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
                        $("#img").fadeIn(100);
                    } else {
                        $("#img").fadeOut(100);
                    } if ($("#img").is(":visible")) {
                        
                        var rx = Math.round(mx / $("#img img").width() * native_width - $("#img").width() / 2) * -1,
                            ry = Math.round(my / $("#img img").height() * native_height - $("#img").height() / 2) * -1,
                            bgp = rx + "px " + ry + "px",
                            px = mx - $("#img").width() / 2,
                            py = my - $("#img").height() / 2;
                            $("#img").css({
                            left: px,
                            top: py,
                            backgroundPosition: bgp
                        });
                    }
        
                }
            });
            
        //     $("#Img").mousemove(function(ev){
        //     var l = ev.clientX - $(this).offset().left - 100;
        //     var t = ev.clientY - $(this).offset().top - 100;

        //     $("#Img img").css({
        //         left:-3*l,
        //         top:-3*t
        //         });
        //     })
        }
        

        // 购物车
        // sc_msg();
        // sc_num();

        // $.ajax({
        //     success:function(arr){
        //         var str = ``;
        //         for(var i =  0; i < arr.length; i++){
        //             str +=`
        //             <aside class="listbox">
        //                 <img src="https://uxresources.baozun.com/prod/88000060/20200921/64E1C0E2042FC6B92EAAEA1961EB89C2.jpg" alt="">
        //                 <aside class="list">
        //                     <div class="p">
        //                         <p>RS-2K RF </p>
        //                         <p>男女同款休闲鞋</p>
        //                     </div>
        //                     <div>
        //                         <p>产品编号</p>
        //                         <span>37388702</span>
        //                     </div>
        //                     <div>
        //                         <p>颜色</p>
        //                         <span>米白色-德累斯顿蓝-红色</span>
        //                     </div>
        //                     <div>
        //                         <p>尺码</p>
        //                         <span id="carsize">${arr[i].id}</span>
        //                     </div>
        //                     <div>
        //                         <div>
        //                             <p>数量</p>
        //                             <span id="sumnumber">${arr[i].numnumber}</span>
        //                         </div>
        //                         <span id="sumprice"></span>
        //                     </div>
        //                 </aside>
        //             </aside>
        //             `
        //         }
        //         $(".carbox .car .maincar").html(str);
        //     },
        //     error:function(msg){
        //         console.log(msg);
        //     }
        // })

        // var oarr = $(".mainbox main right .selectbox .select1").find("option");
        // // console.log(oarr);
        // $(".carbox car .maincar").on("click",".add",function(){
        //     for(var i =  0; i < oarr.length; i++){
        //         var id = oarr[1].id;
        //         var first = !($.cookie("goods"));
        // if(first){
        //   $.cookie("goods", JSON.stringify([{id:id,num:1}]), {
        //     expires: 7
        //   });
        // }else{
        //   //2、不是第一次，判定之前是否添加过
        //   var cookieArr = JSON.parse($.cookie("goods"));
        //   var same = false; //假设没有相同的数据
        //   for(var i = 0; i < cookieArr.length; i++){
        //     if(cookieArr[i].id == id){
        //       same = true;
        //       break;
        //     }
        //   }
        //   same ? cookieArr[i].num++ : cookieArr.push({id:id, num: 1});

        //   //3、将处理完的数据存储回去
        //   $.cookie("goods", JSON.stringify(cookieArr), {
        //     expires: 7
        //   })
        // }
        //     }
        // })


    return {
        shopping:shopping
    }
})
