define(["jquery","jquery-cookie"],function($){
    function download(){
        $.ajax({
            url:"../data/data.json",
            success:function(arr){
                var str = ``;
                "var arr1 = arr;"
                // alert(arr1);
                for(var i = 0; i < arr.length; i++){
                    str += `<li>
                    <article>
                        <aside class="Img">
                            <img src="${arr[i].Img}" alt="">
                        </aside>
                        <aside class="img">
                            <a href="">
                                <img src="${arr[i].img}" alt="">
                            </a>
                        </aside>
                        <aside class="title">
                            <a href="">${arr[i].title}</a>
                        </aside>
                        <aside class="message">
                            <a href="">${arr[i].message}</a>
                        </aside>
                        <aside class="price">${arr[i].price}</aside>
                        <aside class="news">${arr[i].news}</aside>
                    </article>
                </li>
                    `;
                }
                $(".mainbox .main .right .foodsbox").html(str);
                // // console.log(str);
            },
            error:function(error){
                console.log(error);
            }
        });
  
     }

    return{
        download:download,
    }

})