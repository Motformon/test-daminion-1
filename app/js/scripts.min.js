// json

var card = [
	{
		numberPlan: 1,
		cost: 13,
	},
	{
		numberPlan: 2,
		cost: 22,
	},
	{
		numberPlan: 3,
		cost: 34,
	},
];


//card

var plans = document.querySelector('.card__plans');

for (let i = 0; i < card.length; i++) {
	var plan = `
	<div class="card__plan">
		<input id='card-radio-${i+1}' name='card-radio' type="radio" class="card__plan--data">
		<label for="card-radio-${i+1}" class="card__plan-text"><span class="card__plan-text--name">LICENSE PLAN #${card[i].numberPlan} </span><span class="card__plan-text--price">$<span class="card__plan-text--price-num">${card[i].cost}</span per license</span></label>
	</div>
	`;
	plans.innerHTML += plan;
}

document.querySelector('#card-radio-1').checked = true;


var plansArr = document.querySelectorAll('.card__plan--data');
var selectedPlan = document.querySelector('.card__buy-select--num');
var numberPrice = document.querySelectorAll('.card__plan-text--price-num');
var numberTotal = document.querySelector('.card__buy-price--num');
var numberSelect = document.querySelector('.card__number--select');

for (let i = 0; i < plansArr.length; i++) {
	if(plansArr[i].checked === true) {
		selectedPlan.textContent = i+1;
		numberTotal.textContent = '$' + +numberPrice[i].textContent * +numberSelect.value;
	}
	plansArr[i].addEventListener("change", function() {
		if(plansArr[i].checked === true) {
			selectedPlan.textContent = i+1;
			numberTotal.textContent = '$' + +numberPrice[i].textContent * +numberSelect.value;
		}
	});
	numberSelect.addEventListener("change", function() {
		if(plansArr[i].checked === true) {
			numberTotal.textContent = '$' + +numberPrice[i].textContent * +numberSelect.value;
		}
	});
}

