var billAmount = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-btn");
var message = document.querySelector("#message");
var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
    hideMessage()
     if(billAmount.value > 0) {
         if(cashGiven.value >= billAmount.value) {
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
     
};

function hideMessage() {
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
};