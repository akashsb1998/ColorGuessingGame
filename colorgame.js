// alert("connected");
var numsquares=6;
var colors=generateRandomColors(numsquares);


var squares=document.querySelectorAll(".square");
var pickedcolor=colors[Math.floor(Math.random() * colors.length)];  // TO get Random color from the colors array

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedcolor;

var correctalert=document.getElementById("correctalert");

var heading=document.querySelector("h1");

var resetbutton=document.querySelector("#resetbutton");
 
var ezbutton=document.querySelector("#easybutton");
var hdbutton=document.querySelector("#hardbutton");

ezbutton.addEventListener("click",function() {
	// alert("ezbutton clicked");
	ezbutton.classList.add("selected");
	hdbutton.classList.remove("selected")
	numsquares=3;
	colors= generateRandomColors(numsquares);
	pickedcolor=colors[Math.floor(Math.random() * colors.length)];  // TO get Random color from the colors array
	colorDisplay.textContent=pickedcolor; // to display picked color on heading	

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
		heading.style.backgroundColor="steelblue";// after clicking the play again button it must get back to same color.


});
hdbutton.addEventListener("click",function() {
	// alert("hdbutton clicked");
	hdbutton.classList.add("selected");
	ezbutton.classList.remove("selected")
	numsquares=6;
	colors=generateRandomColors(numsquares);
	pickedcolor=colors[Math.floor(Math.random() * colors.length)];  // TO get Random color from the colors array
	colorDisplay.textContent=pickedcolor; // to display picked color on heading	

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
		heading.style.backgroundColor="steelblue";// after clicking the play again button it must get back to same color.

	
});

resetbutton.addEventListener("click",function () {

	colors=generateRandomColors(numsquares);
	pickedcolor=colors[Math.floor(Math.random() * colors.length)];  // TO get Random color from the colors array
	correctalert.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	resetbutton.textContent="New Colors"
	heading.style.backgroundColor="steelblue";// after clicking the play again button it must get back to same color.

})


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function() {
			if(this.style.backgroundColor===pickedcolor){
					// alert("correct");
					correctalert.textContent="Correct";
					heading.style.backgroundColor=pickedcolor;
					changeColors(pickedcolor);
					resetbutton.textContent="Play Again ?"
					// heading.style.backgroundColor="#232323";


			}
			else{
					// alert("wrong");
					// h1.style.backgroundColor="#232323";
					correctalert.textContent="Try Again";
					this.style.backgroundColor="#232323";//fades out if clicked wrong one.
			}
			// alert("connected")
	})

}

function changeColors(color){
	//loop through all the squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++)
 		   	{
 		   		arr.push(randomColor());
			}

	return arr;
}
function randomColor(){

 		   	var r=Math.floor(Math.random() * 256);	
 		   	var g=Math.floor(Math.random() * 256);	
 		   	var b=Math.floor(Math.random() * 256);

 		   return "rgb(" + r + ", " + g + ", " + b + ")";
}
