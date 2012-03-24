$(document).ready(function(){
  
  var workstart_hour = parseInt($("#ws_hr").val(), 10);
  var workstart_min = parseInt($("#ws_min").val(), 10);

  workstart = new XDate(2000, 01, 01, workstart_hour, workstart_min, 00, 00);
  $("#result").html(workstart.toString("HH:mm"));    


  $('.workstart').change(function()
  {
    var workstart_hour = parseInt($("#ws_hr").val(), 10);
    var workstart_min = parseInt($("#ws_min").val(), 10);
    workstart = new XDate(2000, 01, 01, workstart_hour, workstart_min, 00, 00);
    $("#result").html(workstart.toString("HH:mm"));    
  });

  $('.task').change(function()
    {
      var workstart_hour = parseInt($("#ws_hr").val(), 10);
      var workstart_min = parseInt($("#ws_min").val(), 10);
      workstart = new XDate(2000, 01, 01, workstart_hour, workstart_min, 00, 00);
      timetaken =   
        parseInt($("select#snooze").val(), 10) + 
        parseInt($("select#dusch").val(), 10) + 
        parseInt($("select#frukost").val(), 10) + 
        parseInt($("select#barn").val(), 10) + 
        parseInt($("select#restid").val(), 10) + 
        parseInt($("select#other").val(), 10);
    
      workstart = new XDate(2000, 01, 01, workstart_hour, workstart_min, 00, 00).addMinutes(-timetaken)
      $("#result").html(workstart.toString("HH:mm"));    

    });

});