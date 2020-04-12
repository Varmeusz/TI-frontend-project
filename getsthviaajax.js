let searchParams = new URLSearchParams(window.location.search);
let param = searchParams.get('image');
switch(param){
	case 1:
		return "<figure><img src='fig-1.png' alt='Wykres 1'><figcaption style='text-align: center;'>Wykres nr 1</figcaption></figure>";
	case 2:
		return "<figure><img src='fig-2.jpg' alt='Wykres 2'><figcaption style='text-align: center;'>Wykres nr 2</figcaption></figure>";
	case 3:
		return "<figure><img src='fig-3.png' alt='Wykres 3'><figcaption style='text-align: center;'>Wykres nr 3</figcaption></figure>";
	default:
		return 0;
}