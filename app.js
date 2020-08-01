let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);//crée un chiffre random décimal(sans les virgules par ex 2 au lieu de 2.5676)
	return choices[randomNumber];//retourne un chiffre random mais en changeant chaque chiffre par les lettres du jeu
}

function convertToWord(letter)
{
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice)
{//fonction qui va définir ce qu'il se passe quand l'user gagne.
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}  beats  ${convertToWord(computerChoice)}  . You win! 🔥`;
}

function lose()
{//fonction qui va définir ce qu'il se passe quand l'user perd.
	console.log("LOSE");
}

function draw()
{//fonction qui va définir ce qu'il se passe quand l'user et l'ordi sont à égalité.
	console.log("DRAW ");
}

function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice)
	{//instruction switch pour définir les cas gagnants et perdant de la partie
		case "rs":
		case "pr":
		case "sp":
			//console.log("USER WINS.");exemple de condition si l'user fait rock et l'ordi paper,l'user gagne
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			//console.log("USER LOSES.");exemple de condition si l'user fait paper et l'ordi scissors,l'user perd
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("Its a draw.");
			draw(userChoice, computerChoice);
			break;
	}
}



function main()
{
	rock_div.addEventListener('click', function ()//fonction qui va écouter le click sur chaque bouton
	{
		game("r");
	});
	paper_div.addEventListener('click', function ()
	{
		game("p");
	});
	scissors_div.addEventListener('click', function ()
	{
		game("s");
	});
}
main();

