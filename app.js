const totalAmount=document.querySelector("#totalAmount");
const selectE1=document.querySelector("#tipPercentage");
const numOfPpl=document.querySelector("#numOfPeople");
const calculateBtn=document.querySelector("#calculateBtn");
const tipResult=document.querySelector("#tipResult");

function calculateTip(){
    const totalAmountVal=parseInt(totalAmount.value);
    const percentage = Number(selectEl.options[selectEl.selectedIndex].value);
    const totalTip = totalAmountVal * percentage / 100;
    const numOfPplVal = Number(numOfPpl.value);
    const eachTip = totalTip / numOfPplVal;
    tipResult.innerText = `$ ${eachTip}`
}

calculateBtn.addEventListener("click", calculateTip)

/* HW
1. add exemptions:
- if totalAmountVal is negative show alert "Please enter a valid bill amount" 

2. bug fix:
- when numOfPpl is not specified do not show Infinity, by default assume numOfPplVal is 1 and calculate and show proper result

3. add thank you note that pop-up after calculate was clicked
*/
    
