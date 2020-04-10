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
let tab = [];
let simulations = 10000;
while(simulations>0){
	tab.push(pull());
	simulations--;
}
