const roll = function (start,range){
	const roll = Math.floor((Math.random()*range)+start);
	while (roll >range){
		roll= Math.floor((Math.random()*range)+start);
	}
	return roll;

}
const dice = document.getElementById('dice')
let button = document.querySelector('.but')



button.onclick = function (){
    dice.innerText = roll(1,6)
}