let statistics = {
	redCars: 21,
	blueCars: 45, 
	greenCars: 12,
	raceCars: 5,
	balckCars: 40,
	rareCars: 2
};


for (const property in statistics) {
	let value = statistics[property];
	if(value % 2 == 1 || property.startsWith('r')){
		console.log(value);
	}
}