
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


/* Add product to basket */

let add_btns=document.querySelectorAll('.add_btn');
for(let i=0; i< add_btns.length; i++){
add_btns[i].addEventListener('click',addToBasket);

function addToBasket(){
let add_btn=event.target;
let add_btn_parent=add_btn.parentElement;
let add_btn_grandparent=add_btn_parent.parentElement;
let itemCaption=add_btn_grandparent.children[1].innerText;
let itemPrice=add_btn_grandparent.children[2].innerHTML;
let itemImage=add_btn_grandparent.children[0].src;

let basket_modal=document.getElementById('basket_modal');
let info_product=document.createElement('div');
info_product.classList.add('info_product');
info_product.innerHTML=`<div class="itemCaption">${itemCaption}</div>
<div class="itemImage"><img src=${itemImage}></div>
<div class="itemQuantity">Quantity:
<input type="button" id="btn_minus" value="-">
<input type="text" id="quantity" value="1" size="1">
<input type="button" id="btn_plus" value="+">

</div>
<div class="itemPrice"><span>Price:</span><span class="numberPrice"> ${itemPrice}</span></div>

<div class="itemRemove"><input type="button" id="remove_btn" value="Remove"></div>
`
basket_modal.appendChild(info_product);

/* Change value of quantity and change Price */

let numberPrice=document.querySelector('.numberPrice');
let price=numberPrice.innerHTML;
let price1=price.substring(0,price.length-1);

let btn_plus=document.getElementById('btn_plus');
btn_plus.addEventListener('click',function(){
let quantity=document.getElementById('quantity');
quantity.value=+quantity.value+1;
let price_total=+price1*(+quantity.value);
numberPrice.innerHTML=price_total + 'Є';
});


let btn_minus=document.getElementById('btn_minus');
btn_minus.addEventListener('click',function(){
let quantity=document.getElementById('quantity');
if (quantity.value >=2){
quantity.value=+quantity.value-1;
let price_total=+price1*(+quantity.value);
numberPrice.innerHTML=price_total + 'Є';
}
});






/* Remove item */
let remove_btn=document.getElementById('remove_btn');
remove_btn.addEventListener('click',function(){
basket_modal.removeChild(info_product);

});
}
}


	