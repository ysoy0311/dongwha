$(function(){

    $("button").css({color:"#000"});
    // header 메뉴 버튼(nav)
    $(".nav_view_btn").click(function(){
        $("nav").stop().animate({ marginRight: 0 });
    });
    $(".nav_close_btn").click(function(){
        $("nav").stop().animate({ marginRight: "-100%" });
    });

    // footer 맨위로 버튼(to_top_btn)
    $("#footer>p button").on("click",function(){
        $("html").animate({scrollTop:0});
    });
    $("#footer>p").hide();
    $(window).scroll(function(){
        if( $(window).scrollTop() < 4000 ){    
            $("#footer>p").hide();
        }else{
            $("#footer>p").show();
        };
    });

    // sub1_2 탭메뉴 스타일
    $(".tab_menu_year li:first").css({ borderTop:"4px solid #F4911D" });
    $(".tab_menu_year li:first button").css({fontSize: "22px", color: "#F4911D" });
    
    // sub1_2 탭메뉴 클릭시 스타일
    $(".tab_menu_year li").on("click",function(){
        $(".tab_menu_year li").css({borderTop:0})
        $(".tab_menu_year li button").css({color:"#000"})

        $(this).css({ borderTop:"4px solid #F4911D" });
        $(this).children("button").css({fontSize: "22px", color: "#F4911D" });
    });

    // sub1_2 탭메뉴 클릭시 스크롤
    $(".tab_menu_year li").on("click",function(){
        $("html").animate({scrollTop:680});
    });

    // sub3_1 notice_list>dl리스트
    $(".notice_list dd:not(:first)").hide();
    $(".notice_list dt").on("click",function(){
        if($(this).next().is(":visible")){
            $(".notice_list dd").slideUp();
        }else{
            $(".notice_list dd").slideUp();
            $(this).next().slideDown();
        };
    });
});