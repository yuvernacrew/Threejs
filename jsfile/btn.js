$(function(){ 
  var sound = "#btn_piano";

  $("#btn_piano").click(function(){
    sound = "#btn_piano";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_bass").click(function(){
    sound = "#btn_bass";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_synthe").click(function(){
    sound = "#btn_synthe";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_synthebass").click(function(){
    sound = "#btn_synthebass";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_chaos").click(function(){
    sound = "#btn_chaos";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_guiter").click(function(){
    sound = "#btn_guiter";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_drum").click(function(){
    sound = "#btn_drum";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_animal").click(function(){
    sound = "#btn_animal";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_dorakue").click(function(){
    sound = "#btn_dorakue";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $("#btn_mario").click(function(){
    sound = "#btn_mario";
    $(this).css('background-color','#808080');
    $('.nav-btn').not(this).css('background-color','black');
  });

  $('.nav-btn').hover(
    function(){
      $(this).css('background-color','#444');
      $(sound).css('background-color','#808080');
    },function(){
     $(this).css('background-color','black');
     $(sound).css('background-color','#808080');
    }); 

});