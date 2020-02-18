const inputTotal = document.querySelector("#total")
const inputRate =document.querySelector("#rate")
const btnCalculate = document.getElementById("sumation")
const calculationHold = document.getElementById("calcuation")
const tipHold =document.getElementById("tip")
const taxhold = document.getElementById("tax")

  
//gerneral call to functions and returning
btnCalculate.onclick = async function(){
    console.log('INFO: Declaring functions');
    const total =inputTotal.value;
    const rate =inputRate.value;
    const totalNumber =parseInt(total);
    const rateNumber =parseInt(rate);
    //tip
    const tipNum = await tip(totalNumber, rateNumber);
    tipHold.innerHTML = "Tip: $"+tipNum;
    //tax
    const taxNum = await tax( totalNumber);
    taxhold.innerHTML = "Tax: $"+taxNum;
    // sum
    const grand = await sum(totalNumber, tipNum, taxNum);
    calculationHold.innerHTML = "Grand total: $"+grand;
}
//found .fixed() at https://www.w3schools.com/jsref/jsref_tofixed.asp
//tip calc
const tip = async function ( totalNumber, rateNumber){
  percent =rateNumber/100;
  const giventip = totalNumber *percent;
  return giventip.toFixed(2);

}

// tax calc
const tax =async function (totalNumber){
    const totaltax =(totalNumber * 0.055);
    return totaltax.toFixed(2);
}
//sum calc
const sum = async function (totalNumber, tipNum, taxNum){
  // somehow they are stings
    totalSum1 = parseFloat(totalNumber);
    totalSum2 = parseFloat(tipNum)
    totalSum3 = parseFloat(taxNum)
    totalSum = totalSum1 + totalSum2 + totalSum3;
    return totalSum.toFixed(2);
}