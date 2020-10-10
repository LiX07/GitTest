console.log("hello");

require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        firstpage:"firstpage",
        list:"list",
        login:"login",
        shopping:"shopping"
    },
    shim:{
        "jquery-cookie":["jquery"],
        parabola:{
            exports:"_"
        }
    }
});

require(["firstpage","list","login","shopping"],function(firstpage,list,login,shopping){
    firstpage.banner();
    firstpage.foods();
    list.download();
    login.login();
    shopping.shopping();
});