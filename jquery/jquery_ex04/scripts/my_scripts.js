$(document).ready(function(){
	var $fish;
	var $meat;
	var isVeg = false;
	var vegOnClick = function(){
		if(isVeg === false){
			$fish = $(".fish").parent().parent().detach();
			$('.hamburger').replaceWith("<li class='portobello'><em>portobello</em></li>");
			$(".portobello").parent().parent().addClass("veg_leaf");
			$('.meat').after("<li class='tofu'><em>Tofu</em></li>");
			$meat = $('.meat').detach();
			$('.tofu').parent().parent().addClass('veg_leaf');
			isVeg = true;
		}
	};
	
	var restoreMeOnClick = function(){
		if(isVeg === true){
			$('.portobello').parent().parent().removeClass('veg_leaf');
			$('.portobello').replaceWith("<li class='hamburger'>Hamburger</li>");
			$('.menu_entrees li').first().before($fish);
			$('.tofu').parent().parent().removeClass('veg_leaf');
			$('.tofu').each(function(index){
				$(this).after($meat[index]);
			});
			$('.tofu').remove();			
			isVeg = false;
		}
	};
	
	$('button#vegOn').click(vegOnClick);
	$('button#restoreMe').click(restoreMeOnClick);
});