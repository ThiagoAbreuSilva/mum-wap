function calcTip() {
	var subtotalElem =  document.getElementById('subtotal').value;
	var tipElem = document.getElementById('tip').value;
	var totalElem = document.getElementById('total');
    var total = subtotalElem * (tipElem/100);
    totalElem.innerHTML = '$' + total;
}
window.onload = calcTip;
