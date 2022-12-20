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
        $("#galleryCardsContainer").animate({left: '-500px'});
        
    });

    $("#leftGalleryArrow").click(function(){
        $("#galleryCardsContainer").animate({left: '500px'});
    });

});
