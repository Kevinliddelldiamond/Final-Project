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

function checkforwin (){

  if ($('#box1').hasClass('red') && $('#box2').hasClass('red') && $('#box3').hasClass('red')) {
    alert('Red Wins!');
  }else if($('#box4').hasClass('red') && $('#box5').hasClass('red') && $('#box6').hasClass('red')){
    alert('Red Wins!');

  }else if ($('#box7').hasClass('red') && $('#box8').hasClass('red') && $('#box9').hasClass('red')) {
    alert('Red Wins!');
  }else if ($('#box1').hasClass('red') && $('#box5').hasClass('red') && $('#box9').hasClass('red')) {
    alert('Red Wins!')
  }else if ($('#box3').hasClass('red') && $('#box5').hasClass('red') && $('#box7').hasClass('red')) {
    alert('Red Wins!')
  }else if ($('#box1').hasClass('red') && $('#box4').hasClass('red') && $('#box7').hasClass('red')) {
    alert('Red Wins!')
  }else if ($('#box2').hasClass('red') && $('#box5').hasClass('red') && $('#box8').hasClass('red')) {
alert('Red Wins!')
}else if ($('#box3').hasClass('red') && $('#box6').hasClass('red') && $('#box9').hasClass('red')) {
  alert('Red Wins!')
}
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
