$(document).ready(function(){

    $('input').change(function(){
            var input = $(this).val() ;
            $('#lst').append('<li>'+ input +'<i class="done">done</i><i class="close">del</i> </li>') ;
            $(this).val('')
    }) ;

    $('ul').on('click','.close' ,function(){
        $(this).parent('li').fadeOut(200);
    })
    $('ul').on('click','.done' ,function(){
        $(this).parent('li').toggleClass('checked');
    })
  })