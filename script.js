
/* Script */

let currency=document.getElementById('currency');
currency.addEventListener('change',change_currency);

/* Change currency*/

function change_currency(event){
let products_price=document.querySelectorAll('.product_price');
for (let elem of products_price){

	if (event.target.value==='UAH'){
		let price=elem.innerHTML;
		/* find the number part of product_price.innerHTML */
		let price1=price.substring(0,price.length-1);
		/*convert currency from Euro to UAH*/
		let price_UAH=+price1*37
		elem.innerHTML=price_UAH + 'UAH';
		console.log(elem.innerHTML);
	} 
	if (event.target.value==='Euro'){
		let price_UAH=elem.innerHTML;
		/* find the number part of element product_price.innerHTML */
		let price2=price_UAH.substring(0,price_UAH.length-3);
		/*convert currency from UAH to "Euro*/
		let price_Euro=+price2/37;
		elem.innerHTML=price_Euro + 'Є';
		console.log(elem.innerHTML);
		
	}
}
};








	