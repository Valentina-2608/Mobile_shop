
/* Script */

let currency=document.getElementById('currency');
currency.addEventListener('change',change_currency);

/* Change currency*/

function change_currency(event){
let prices=document.querySelectorAll('.price');
let currencys=document.querySelectorAll('.currency');
for(let elem of prices){
for(let elem1 of currencys){
	if (event.target.value==='UAH'){
		let price_b=elem.innerHTML;
		let currency_UAH=elem1.innerHTML;
		elem1.innerHTML='UAH';
		let price_UAH=+price_b*37;
		elem.innerHTML=price_UAH;
		console.log(elem.innerHTML);
	} 
	if (event.target.value==='Euro'){
		let price_UAH=elem.innerHTML;
		let currency_UAH=elem1.innerHTML;
		elem1.innerHTML='Є';
		let price_Euro=+price_UAH/37;
		elem.innerHTML=price_Euro;
		console.log(elem.innerHTML);
	} 
}

}

}
			


