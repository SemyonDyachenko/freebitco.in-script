let minstake = 0.00000002;
let countrounds = 75;
let hardstake = 0.000000512;
var autorans = 1;


let hi_button = document.getElementById("double_your_btc_bet_hi_button");

let stake = document.getElementById("double_you_btc_stake").value * 1;

let won = document.getElementById("double_your_btc_bet_win").innerHTML;

function click()
{
    return hi_button.click();
}

function play()
{
    if(autorans  > countrounds) { console.log('limit !!!'); return; }
    click();
    setTimeout(checkResult,100);
}

function checkResult()
{
    if(document.getElementById("double_your_btc_bet_hi_button").disabled == true){
        setTimeout(checkResult,100);
    }
}


if(won.match(/(\d+\.\d+)/) !== null) {
    won = won.match(/{\d+\.\d+)/)[0];
}
else 
{

}