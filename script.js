$(document).ready(function(){
    
    var lilacSaved = false;
    var poppySaved = false;
    var orchidSaved = false;

    $(".orchidHeart").click(function(){
        if (orchidSaved == false) {
            $(".orchidHeart").val("heart");
            orchidSaved = true;
        } else {
            $(".orchidHeart").val("heart_plus");
            orchidSaved = false;
        }
    });
    
    
    
    var galleryContainerWidth = $("#galleryContainer").width();
    var galleryCardContainerWidth = $("#galleryCardsContainer").width();
    var galleryCardWidth = $(".gallery_card").width();

    $("#rightGalleryArrow").click(function(){
        
        $("#galleryCardsContainer").animate({left: '-=600px'});
        
    });

    $("#leftGalleryArrow").click(function(){
        if ($("#firstGalleryCard").position({left:''}  ) -= {left: -600}) {
            $("#galleryCardsContainer").animate(stop);
        } else {
            $("#galleryCardsContainer").animate({left: '+=600px'});
        }
        
        //var firstX = $("#galleryCardsContainer").position('');
        //console.log(firstX);
    });
 
});
