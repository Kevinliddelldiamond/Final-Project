(function (){

  $(document).ready(init);

var clickCount=0;


function init(){
  $('.col').on('click',placePiece);

}

function placePiece(){
  clickCount++;


  if (clickCount%2===0){
    $(this).addClass("red taken");


  }else {
    $(this).addClass("blue taken");

  }

  checkforwin();
}

function checkforwin (){    /// Check for win function checks for the win or tie
  if ($('.taken').length ===9){
      alert('Tie game');   ///The page will realize that all the spaces of the tic tac toe board are covered and alert a tie
      clear();
  }
  if ($('#box1').hasClass('red') && $('#box2').hasClass('red') && $('#box3').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if($('#box4').hasClass('red') && $('#box5').hasClass('red') && $('#box6').hasClass('red')){
    alert('Red Wins!');
    clear();
  }else if ($('#box7').hasClass('red') && $('#box8').hasClass('red') && $('#box9').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if ($('#box1').hasClass('red') && $('#box5').hasClass('red') && $('#box9').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if ($('#box3').hasClass('red') && $('#box5').hasClass('red') && $('#box7').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if ($('#box1').hasClass('red') && $('#box4').hasClass('red') && $('#box7').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if ($('#box2').hasClass('red') && $('#box5').hasClass('red') && $('#box8').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if ($('#box3').hasClass('red') && $('#box6').hasClass('red') && $('#box9').hasClass('red')) {
    alert('Red Wins!');
    clear();
  }else if($('#box1').hasClass('blue') && $('#box2').hasClass('blue') && $('#box3').hasClass('blue')){
    alert('blue Wins!');
    clear();
  }else if($('#box4').hasClass('blue') && $('#box5').hasClass('blue') && $('#box6').hasClass('blue')){
    alert('Red Wins!');
    clear();
  }else if ($('#box7').hasClass('blue') && $('#box8').hasClass('blue') && $('#box9').hasClass('blue')) {
    alert('blue Wins!');
    clear();
  }else if ($('#box1').hasClass('blue') && $('#box5').hasClass('blue') && $('#box9').hasClass('blue')) {
    alert('blue Wins!');
    clear();
  }else if ($('#box3').hasClass('blue') && $('#box5').hasClass('blue') && $('#box7').hasClass('blue')) {
    alert('blue Wins!');
    clear();
  }else if ($('#box1').hasClass('blue') && $('#box4').hasClass('blue') && $('#box7').hasClass('blue')) {
    alert('blue Wins!');
    clear();
  }else if ($('#box2').hasClass('blue') && $('#box5').hasClass('blue') && $('#box8').hasClass('blue')) {
    alert('blue Wins!');
    clear();
  }else if ($('#box3').hasClass('blue') && $('#box6').hasClass('blue') && $('#box9').hasClass('blue')) {
    alert('blue Wins!');
    clear();




}
}
function clear(){
  $(".col").removeClass('red');
  $(".col").removeClass('blue');
  $(".col").removeClass('taken');
  clickCount = 0
  $(".red").css({
    "background-color": "none"
  });
  $(".blue").css({
    "background-color": "none"
  });
}


})();




/*When you click a box, it should change color appropriately
Add 1 to clickCount
checkforwin */

/*check for win
look for 3 in a row - across the top, middle bottom
-diagonals
-vertical 1st, 2nd, 3rd columns.
Check for blue or red win*/
