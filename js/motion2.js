// 인덱스 신제품 슬라이드
var count = 0;

function vSlideBtn2(count){
    $(".new_product_controls button").css({background:"none", border: "5px solid #165096"});
    $(".new_product_controls button:eq("+ count +")").css({background:"#165096", border: "5px solid rgba(0,0,0,0)" });
};

$(function(){

    $(".new_product_controls button").on("click",function(){
        count = $(this).index(); // 네비게이션 조작1에서 사용되었던 카운트 변수에 현재 번호를 대입하여 상호 최종 위치를 공유
        $(".new_product_preview").stop().animate({marginLeft: -100 * count  + "%"});
        vSlideBtn2(count);
    });

});