(function(){
	
	var app = {
		
		relax_y_scroll: 50,
		
		initialize: function(){
			
			var magicmenu, computedStyle, magic_menu_height, document_y_position;
				magicmenu = document.getElementById("magicmenu");
				computedStyle = getComputedStyle(magicmenu);
				magic_menu_height = app.getNumber(computedStyle.height);
				document_y_position = (+app.getCoords(magicmenu).top) + app.getNumber(computedStyle.height);
			
			window.onscroll = function() {
				  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
				  
				 if( (scrolled < document_y_position)  )
				    {
						$("#magicmenu").fadeIn(0);
					}
				  
				  if( (scrolled > document_y_position) && (scrolled < document_y_position + app.relax_y_scroll) )
				    {
						$("#magicmenu").fadeOut(0);
					}
				 
				  if(scrolled > document_y_position + app.relax_y_scroll)
				    {magicmenu.classList.remove('none-fixed'); 
					 magicmenu.classList.add('fixed'); 
				    $("#magicmenu").fadeIn(1000);
					}
				  
				  else{magicmenu.classList.remove('fixed');
				       magicmenu.classList.add('none-fixed');
					  }
				
				} 
				
		  },
		
		getCoords:function(elem) { // кроме IE8-
			  var box = elem.getBoundingClientRect();

			  return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			  };

			},
		
		 getNumber:function(string_with_number){
			 return (+string_with_number.substring(0,string_with_number.indexOf("px")));
		 }
		}
		
		app.initialize();
	
}());