//p = szansa na wylosowanie nagrody rzadkiej
//reset = szansa na wylosowanie celowej nagrody rzadkiej
//pity_p = mechanika zwiekszajaca szanse wylosowania nagrody rzadkiej po 50 losowaniach bez nagrody rzadkiej
function pull(p=0.02,reset=0.5){
	let pulls = 1;
	let pulls_since_6s = 0;
	while(true){
		let pity_p = Math.max(0,pulls_since_6s-50)*0.02+p;
		if(Math.random()<pity_p){
			if(Math.random()<reset){
			//reset
			pulls_since_6s =0;
			pulls += 1;
			continue;
		}else{
			return pulls;
		}
		}
		pulls_since_6s += 1;
		pulls += 1;
	}
}
function simulate(){
	let tab = [];


let simulations = 10000;
while(simulations>0){
	let p2 = $('#p').val()
	let reset2 = $('#reset').val();
	tab.push(pull(parseFloat(p2),parseFloat(reset2)));
	simulations--;
}
return tab;
}
function draw(){
	let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);

tab2.sort(function(a, b){return a - b;});
let probtab=[];
for(let i =99; i<=	9999;i=i+100){
	probtab.push(tab2[i]);
}
let percentiles = [];
for(let i = 10; i <= 1000; i = i+10){
	percentiles.push(i/10+'%');
}
let labls=[];
for(let i =0; i<=tab2[9999];i=i+50){
	labls.push(i);
	console.log(i);
}
labls.push();
var myChart = new Chart(ctx, {
    type: 'bar',
	color:'red',
    data: {
		labels: percentiles,
        datasets: [{
	backgroundColor:'rgba(172, 154, 36, 0.64)',
            label: 'Ilość losowań',
            data: probtab,
            borderWidth: 0
        }]
    },
	options: {
	
    scales: {
      xAxes: [{
        display: true,
		categoryPercentage:1.0,
        barPercentage: 1.0,
		scaleLabel: {
        display: true,
        labelString: 'Prawdopodobieństwo'
      },
        ticks:  {
        display: true,
        ticks: {
			min: 0,
            stepSize: 11
        }
      }}],
      yAxes: [{display:true,
			  scaleLabel: {
        display: true,
        labelString: 'Ilość losowań'
      },
		ticks:{
			beginAtZero: true,
			min:0,
			max:probtab[9999],
			stepsize: 1.1
		}
		
	  }]
	  
    }
  }
    
});
myChart.resize();
}