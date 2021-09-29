var billAmount = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#message");
var numberOfNotes = document.querySelectorAll(".number-of-notes");

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
    hideMessage()
     if(billAmount.value > 0) {
         if(Number(cashGiven.value) >= Number(billAmount.value){
            var amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates? 😂");
        };
    } else {
        showMessage("Invalid Bill Amount");
    }
}

function calculateChange(amountToBeReturned){
     for(var i = 0; i < availableNotes.length; i++){
         var numberOfNotesToBeGiven = Math.trunc( amountToBeReturned / availableNotes[i] );
         amountToBeReturned = amountToBeReturned % availableNotes[i];
         numberOfNotes[i].innerText = numberOfNotesToBeGiven;
     };    
};

function hideMessage() {
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
};