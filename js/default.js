$(document).ready(function(){
  
  $("a#calculate").click(function(event){  
    event.preventDefault();
    timetaken = 
      parseInt($("select#snooze").val()) + 
      parseInt($("select#dusch").val()) + 
      parseInt($("select#frukost").val()) + 
      parseInt($("select#barn").val()) + 
      parseInt($("select#restid").val()) + 
      parseInt($("select#other").val());
    
    $("#result").html(timetaken)

  });
});