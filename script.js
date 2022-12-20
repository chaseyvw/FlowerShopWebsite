$(document).ready(function(){
    
    var galleryContainerWidth = $("#galleryContainer").width();
    var galleryCardContainerWidth = $("#galleryCardsContainer").width();

    $("#rightGalleryArrow").click(function(){
        $("#galleryCardsContainer").animate({left: '500px'});
    });

});
