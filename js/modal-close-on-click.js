$(document).ready(function() { 

$(".full-page").click(function(event) {
        // only do this if modal is visible 
         if ($(".modal").is(":target")) {
            $(".modal").remove(":target");
            $("#video").add(":target");
        } else {
        	
        }
  });

});