$(function(){
	// aqui vai todo nosso código de javascript;
   $('nav.mobile').click(function(){
   	// o que vai acontecer clicarmos na nav.mobile!
    var ListaMenu = $('nav.mobile ul');
    if(ListaMenu.is(' :hidden') == true){
        ListaMenu.fadeIn();
    }
     else{
     	ListaMenu.fadeOut();
     }
   })
})