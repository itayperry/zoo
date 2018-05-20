class Zoo {
	constructor (foodRangeArray) {
		this.foodRangeArray = foodRangeArray;
		console.log(foodRangeArray);
	}

	buildAnimal (animal) {
		// console.log(animal.name);
		// console.log(animal.food);
		// console.log(animal.location);
		var animalContainer = $('<div>', {
			class: "col-sm-2", 
			click: function(e) {
				//var animalDiv = e.target.parentElement;
				this.createEditForm(animal.name, animal.food, animal.image, animal.location);
			}.bind(this)
		});
		animalContainer.attr('data-location', animal.location);
		$('<span>', {
			text: animal.name, 
			class: "animal-name", 
		}).appendTo(animalContainer)
		$('<span>', {
			text: animal.food, 
			class: "animal-food", 
		}).appendTo(animalContainer)
		// $('<span>', {
		// 	text: animal.location, 
		// 	class: "animal-location", 
		// }).appendTo(animalContainer)		
		$('<img>', {
			src: animal.image, 
			class: "animal-image", 
		}).appendTo(animalContainer)

		return animalContainer;
	}

	createEditForm (name, food, image_url, location) {
		$('form').remove();
		var form = $('<form>');
		form.append($('<h2>').text('Edit Animal'));
		form.append($("<h5>").text('Name:'));
		form.append(`<input type="name" value="${name}" name="animal_type">`);
		form.append($("<h5>").text('Select food:'));
		var select = $('<select>').appendTo(form);
		$.each (this.foodRangeArray, function (key, value){
			var option = $("<option>").attr('value',value).text(value);
			if (food == value) {
				option.attr('selected', true);
			}
			select.append(option);
		})
		form.append($("<h5>").text('Choose Image URL:'));
		form.append($(`<input type="text" value="${image_url}" name="image">`));
		form.append($("<div>", {id: "preview"}));
  		form.appendTo("#contain-form");
  		form.append(`<input type="submit" value="Edit">`);
  		$("#preview").append(
			$("<h5>", {text: "Preview"}),
			$("<div>", {id: "preview-image"}).css({
				'background-image': 'url(' + image_url + ')'
			})
		)
		$(document).on("input", 'input[name="image"]', this.showPreview);
		form.submit("click", function(e){
    		e.preventDefault();
    		var animalObject = {
    			name: $("input[name=animal_type]").val(),
    			food: $("select").val(),
    			image: $("input[name=image]").val(),
    			location: 1
    		}
    		console.log(animalObject);
    		this.buildAnimal(animalObject).appendTo(".row");
  		});
	}

	showPreview() {
		console.log("counttt")
		$("#preview").empty();
		$("#preview").append(
			$("<h5>", {text: "Preview"}),
			$("<div>", {id: "preview-image"}).css({
				'background-image': 'url(' + $("input[name=image]").val() + ')'
			})
		);
	}
}

		//$("<div>", {width: "100%", height: "100%",..}
		// console.log($(animalDiv + " .animal-name"))
		// console.log(animalDiv);
		// console.log($(animalDiv + " .animal-name"))
		// console.log(animalDiv);
		// var unknown = jQuery(animalDiv);
		// console.log(unknown);
		// var allSpans = unknown.html();
		// var bluh = $(animalDiv);
		// console.log(bluh.text())
		// console.log($(animalDiv.children[0]).text());
		// console.log(bluh + " .animal-name")
		// console.log($(animalDiv));
		//console.log(animalDiv + 'hdhvahvdhd');

		//$("input[name=" + name + "]");
		
		//console.log($("div .animal-name"))
		//console.log($("div"))
		//console.log(animalDiv.html());
		//console.log(this.animalDiv.child())
				//why take a div? this project has no database, 
		//meaning: there's no json file we actually update - if we create a 
		//new animal the json will not contain it - therefore:
		//the info will be extracted from the div!
		//console.log(e.target.parentElement);