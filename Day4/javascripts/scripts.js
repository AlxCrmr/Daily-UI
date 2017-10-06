let billAmount = 100.99;
let peopleNum = 2;
let serviceQuality = 1;
let tipPercent = 10;
let totalWOTip;
let totalWTip;
let totalTip;
let tipPerPerson;

function tip (){
    document.getElementById('percentage').innerHTML =  `${tipPercent}%`;
}
function split() {
    document.getElementById('split-amount').innerHTML = peopleNum;
}
function calculate () {
    tip();
    split();
    totalTip = (billAmount * tipPercent) /100;
    console.log(`Total Tip: ${totalTip}`);
    document.getElementById('total-tip').innerHTML = `$ ${parseFloat(totalTip).toFixed(2)}`;
    totalWOTip = billAmount / peopleNum;
    console.log(`Individual total without Tip: ${totalWOTip}`);
    document.getElementById('total-without-tip').innerHTML = `$ ${parseFloat(totalWOTip).toFixed(2)}`;
    tipPerPerson = totalTip / peopleNum;
    console.log(`Tip Per Person: ${tipPerPerson}`);
    document.getElementById('total-tip-per-person').innerHTML = `$ ${parseFloat(tipPerPerson).toFixed(2)}`;
    totalWTip = tipPerPerson+ totalWOTip;
    console.log(`Individual total with Tip: ${totalWTip}`);
    document.getElementById('total-with-tip').innerHTML = `$ ${parseFloat(totalWTip).toFixed(2)}`;
}
document.getElementById('bill-total').addEventListener("keyup", function(){
    billAmount =document.getElementById('bill-total').value;
    calculate();
});

document.getElementById('split-amount').innerHTML = peopleNum;

document.getElementById("add-people").addEventListener("click", function () {
    if(peopleNum < 99) { peopleNum++; } else { peopleNum = 1;}
    calculate();
});
document.getElementById("minus-people").addEventListener("click", function () {
    if(peopleNum > 1) { peopleNum--; } else { peopleNum = 99;}
    calculate();
});


document.getElementById("add-percent").addEventListener("click", function () {
    if(tipPercent < 100) { tipPercent++; } else { tipPercent = 1;}
    calculate();
});
document.getElementById("minus-percent").addEventListener("click", function () {
    if(tipPercent > 1) { tipPercent--; } else { tipPercent = 100;}
    calculate();
});

document.getElementById("smile").addEventListener("click", function () {
        tipPercent = 20;
        calculate();
});
document.getElementById("meh").addEventListener("click", function () {
        tipPercent = 15;
        calculate();
});
document.getElementById("frown").addEventListener("click", function () {
        tipPercent = 10;
        calculate();
});


calculate();
