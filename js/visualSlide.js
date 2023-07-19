var count = 0; 
var vS = setInterval("vSlide()",3000);

function vSlide(){ 

        count += 1;
        if(  count <=  1 ){  
                $(".visual_slide").stop().animate({ marginLeft:  "-100%" },"slow");
                vSlideBtn(count);
        }else{
                $(".visual_slide li:first").appendTo(".visual_slide"); 
                $(".visual_slide").css({ marginLeft:  0 });
                $(".visual_slide").stop().animate({ marginLeft: "-100%" },"slow",function(){
                        $(".visual_slide li:first").appendTo(".visual_slide");
                        $(".visual_slide").css({ marginLeft:  0 });
                        count = 0;
                        vSlideBtn(count);
                });
        };                           
};

function vSlideBtn(count){
        $(".visual_controls button").css({width:"25px", borderRadius:"50%", background:"none"});
        $(".visual_controls button:eq("+ count +")").css({width:"90px", borderRadius:"30px", background:"#fff"});
};

$(function(){
        vSlideBtn(count); 

        $(".visual_controls button").on("click",function(){
                clearInterval(vS);
                count = $(this).index(); 

                $(".visual_controls button").css({width:"25px", borderRadius:"50%", background:"none"});
                $(".visual_controls button:eq("+count+")").css({width:"90px", borderRadius:"30px", background:"#fff"}); 

                $(".visual_slide").stop().animate({ marginLeft: -100 * count +"%" });  
        });
});