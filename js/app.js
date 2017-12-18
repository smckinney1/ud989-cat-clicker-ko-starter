//TODO:
////Make the cats show up in the list
////Make the currentCat change when you click on a cat in the list

var initialCats = [
	{
		"clickCount": 0,
		"name": "Wepsi",
		"imgSrc": "img/1413379559_412a540d29_z.jpg",
		"nicknames": ['Tabby']
	},
	{
		"clickCount": 0,
		"name": "Cuddles",
		"imgSrc": "img/22252709_010df3379e_z.jpg",
		"nicknames": ['Nicky']
	},
	{
		"clickCount": 0,
		"name": "Kitty",
		"imgSrc": "img/4154543904_6e2428c421_z.jpg",
		"nicknames": ['Seniorito']
	},
	{
		"clickCount": 0,
		"name": "Pepsi",
		"imgSrc": "img/434164568_fea0ad4013_z.jpg",
		"nicknames": ['Cuddly']
	},
	{
		"clickCount": 0,
		"name": "CutiePie",
		"imgSrc": "img/9648464288_2516b35537_z.jpg",
		"nicknames": ['Cuddleface']
	}
];


var Cat = function (data) {
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc);
	//self.imgAttribution = ko.observable(data.imgAttribution);

	self.nicknames = ko.observableArray(data.nicknames);

	self.level = ko.computed(function() {
		switch (true) {
			case self.clickCount() < 10:
				return 'Kitten';
			case self.clickCount() < 20:
				return 'Adult';
			case self.clickCount() < 30:
				return 'Old';
		};
	});
}


var ViewModel = function() {
	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) )
	});

	self.currentCat = ko.observable(self.catList()[0]);

	self.changeCatContext = function() {
		self.currentCat(this);
	};

	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());