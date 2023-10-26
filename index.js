var n1 = Math.floor((Math.random()*6)+1);
var n2 = Math.floor((Math.random()*6)+1);
// if (n1 == n2) {
//     n1 = Math.floor((Math.random()*6)+1);
// }
document.querySelector(".img1").setAttribute('src',"./images/dice"+n1+".png");
document.querySelector(".img2").setAttribute('src',"./images/dice"+n2+".png");

if (n1>n2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 is winner!";
}
else if (n2>n1) {
    document.querySelector('h1').innerHTML = "Player 2 is winner!🚩";
}
else {
    document.querySelector('h1').innerHTML = "Draw!";
}