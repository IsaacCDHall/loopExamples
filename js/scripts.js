
//
// /***************************************************
// COUNT UP BY USING FOR LOOP
// *///
// $(document).ready(function(){
//   $("form").submit(function(event){
//     var formOneInput = parseInt($("#formOne").val());
//     var formTwoInput = parseInt($("#formTwo").val());
//
//     for (var currentNumber = formOneInput; currentNumber <= formTwoInput; currentNumber += formOneInput) {
//
//     console.log(currentNumber);
//     }
//
//
//
//   event.preventDefault();
//   });
// });
// // for (var index = 1; index <= 3; index += 1) {
// //   alert(index);
// // }





/*******************************************************
TURN forEach() into for
*/

//  var languages = ['HTML', 'CSS', 'JavaScript'];
//
//
//
// for (var language = 0; language <= languages.length-1 ; language += 1 ) {
//
//    console.log(languages[language]);
// };


/*************************************************************
WORD PUZZLE
*/



$(document).ready(function(){
   $("form").submit(function(event){
     $('input').hide();
     var formOneInput = $("#formOne").val();
     var convert = formOneInput.replace(/a|e|i|o|u|y/g, "-");
     $(".show").text(convert);
    event.preventDefault();
   });
 });
