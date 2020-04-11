function validateNumbers(){
	let pfield = $('#p').val();
	let resetfield = $('#reset').val();
	if(isNaN(parseFloat(pfield)) || isNaN(resetfield)){
		alert("wprowadź liczbę");
		return false;
	}else{
		return true;
	}
	
}