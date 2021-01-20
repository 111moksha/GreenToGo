// $("a[href^='#']").click(function(e) {
// 	e.preventDefault();
	
// 	var position = $($(this).attr("href")).offset().top;

// 	$("body, html").animate({
// 		scrollTop: position
// 	} /* speed */ );
// });


$('.btnAbout').click(function(e){
    e.preventDefault();  
    
    var position = $('#about').offset().top;
    
    $("body, html").animate({
        		scrollTop: position
        	} /* speed */ );

    });

    $('.btnfeatures').click(function(e){
        e.preventDefault();  
        
        var position = $('#features').offset().top;
        
        $("body, html").animate({
                    scrollTop: position
                } /* speed */ );
    
        });

        $('.btnTeam').click(function(e){
            e.preventDefault();  
            
            var position = $('#team').offset().top;
            
            $("body, html").animate({
                        scrollTop: position
                    } /* speed */ );
        
            });

            $('.btnEvent').click(function(e){
                e.preventDefault();  
                
                var position = $('#event').offset().top;
                
                $("body, html").animate({
                            scrollTop: position
                        } /* speed */ );
            
                });

                $('.btnContact').click(function(e){
                    e.preventDefault();  
                    
                    var position = $('#contact').offset().top;
                    
                    $("body, html").animate({
                                scrollTop: position
                            } /* speed */ );
                
                    });

                    $('.btnProducts').click(function(e){
                        e.preventDefault();  
                        
                        var position = $('#products').offset().top;
                        
                        $("body, html").animate({
                                    scrollTop: position
                                } /* speed */ );
                    
                        });


//             $('.btnEvent').click(function(e){
//                 e.preventDefault();    
//                 $(document).scrollTop(3850);
//                 });

//                 $('.btnContact').click(function(e){
//                     e.preventDefault();    
//                     $(document).scrollTop(4500);
//                     });



