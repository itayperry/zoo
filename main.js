 fetch('animals.json')
.then(response => response.json())
.then(animals => initZoo(animals))

function initZoo(animalsData) {

	var foodFromJson = animalsData.animals.map(singleAnimalData => singleAnimalData.food);
	var foodRangeArray = [...new Set(foodFromJson)];
	var zoo = new Zoo(foodRangeArray);


	
	//console.log(foodRange);

	//zoo.setFoodRange(foodRange);

    animalsData.animals.forEach(singleAnimalData => {
	 	var animal = new Animal(singleAnimalData);
	 	console.log(animal);
	 	zoo.buildAnimal(animal).appendTo(".row");//add animal to the zoo
	})
}

