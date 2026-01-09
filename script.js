let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const winmsg = document.querySelector("#msg");

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");



const drawgame = () => {
    winmsg.innerText = "Game Was Draw!! Play Again";
    winmsg.style.backgroundColor = "yellow";
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        winmsg.innerText = `You Win!. Your ${userchoice} Beats ${compchoice}`;
        winmsg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        winmsg.innerText = `You Lose!. ${compchoice} Beats Your ${userchoice}`;
        winmsg.style.backgroundColor = "Red";
    }

}

const playgame = (userchoice) => {
    console.log(`user choice is ${userchoice}`);
    const compchoice = gencompchoice();
    console.log(`comp choice is ${compchoice}`);
    if (userchoice === compchoice) {
        drawgame();
    } else {

        let userwin = true;
        if (userchoice === "rock") {
            //sissor paper 
            userwin = compchoice == "paper" ? false : true;

        } else if (userchoice === "paper") {
            //rock sissor 
            userwin = compchoice == "rock" ? false : true;
        } else {
            //rock paper
            userwin = compchoice == "scissor" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);

    }



}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    })
})