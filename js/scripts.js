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
   carregarDinamico();
  function carregarDinamico(){
    $('[realtime]').click(function(){
      var pagina = $(this).attr('realtime');
      $('.container-principal').hide();
      $('.container-principal').load(INCLUDE_PATH+'pagina/'+pagina+'.php');
      setTimeout(function(){
      initialize();
      addMarker(-19.9192,-43.9387,'',"Minha casa",undefined,false,);
      },1000);

      $('.container-principal').fadeIn(1000);
      
      return false;
    })

  }
})