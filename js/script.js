const submitBtn = document.getElementById("form");
const bill_amount = document.getElementById("bill-amount");
const percent_tip = document.getElementById("percent-tip");
const tip_amount = document.getElementById("tip-amount");
const total = document.getElementById("total");


submitBtn.addEventListener("submit",(event)=>{
    event.preventDefault();

    let bill=bill_amount.value
    let percent = percent_tip.value;


    let answer =parseInt(bill * percent / 100);
    let sum = parseInt(bill) + answer;
    tip_amount.value = "RM" + answer;
    total.value = "RM" + sum;
    console.log(typeof(answer))
})