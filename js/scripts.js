$(function(){
	// aqui vai todo nosso código de javascript;
   $('nav.mobile').click(function(){
   	// o que vai acontecer clicarmos na nav.mobile!
    var ListaMenu = $('nav.mobile ul');
    if(ListaMenu.is(':hidden') == true){
      var icone = $('.botao-menu-mobile').find('i');
      icone.removeClass('fa-bars');
      icone.addClass('fa-times');
      ListaMenu.slideToggle();
    }
    else{
      var icone = $('.botao-menu-mobile').find('i');
      icone.removeClass('fa-times');
      icone.addClass('fa-bars');
      ListaMenu.slideToggle();

    }

  });
  if($('target').length > 0){
    // o elemento existe, portanto precisamos dar o scroll em alguma elemento .
    var elemento = '#'+$('target').attr('target');
    var divScroll = $(elemento).offset().top;
    $('html,body').animate({'scrollTop':divScroll},2000);
  }
})