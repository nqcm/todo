// Check off todos by clicking on them
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Adding new todos
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    var todotext = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
