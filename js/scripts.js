


$(document).ready(function(){
  $("form#input").submit(function(event){
    var firstthing = $("input#things1").val();
    var secondthing = $("input#things2").val();
    var thirdthing = $("input#things3").val();
    var favoritethings = [];


    favoritethings.push(firstthing);
    favoritethings.push(secondthing);
    favoritethings.push(thirdthing);
    // alert(favoritethings);
    // alert(favoritethings[1]);
    var cloneArray = favoritethings.slice();
    cloneArray.push("Food");
    cloneArray.push("Tennis");
    cloneArray.splice(1,1,"Splice");

    //alert(cloneArray);
    favoritethings = cloneArray;
    //alert(favoritethings);
    //var i;
    //for (i = 0;i < favoritethings.length; i++){
      $("ul#output").append("<li>"+favoritethings.pop()+"</li>");
      $("ul#output").append("<li>"+favoritethings.pop()+"</li>");
      $("ul#output").append("<li>"+favoritethings.pop()+"</li>");
      $("ul#output").append("<li>"+favoritethings.pop()+"</li>");
      $("ul#output").append("<li>"+favoritethings.pop()+"</li>");
    //}

    event.preventDefault();
  })

});
