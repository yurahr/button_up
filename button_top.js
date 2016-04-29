<script type="text/javascript"> 

jQuery.noConflict();

(function( $ ) {
  $(function(){
      $.fn.scrollToTop=function(){
          $(this).hide();
          if($(window).scrollTop()!="0"){
            $(this).fadeIn("slow")
          }
          var scrollDiv=$(this);
          $(window).scroll(function(){
            if($(window).scrollTop()=="0"){
              $(scrollDiv).fadeOut("slow")
            }else{
              $(scrollDiv).fadeIn("slow")
            }
          });
          $(this).click(function(){
            $("html, body").animate({scrollTop:0},900)
          })
      }
    });
  $(document).ready(function(){
    $("#to_top").scrollToTop(); 
  });
})(jQuery);

</script>