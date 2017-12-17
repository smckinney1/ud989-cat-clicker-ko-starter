var Cat = function () {
	var self = this;
	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	self.imgAttribution = ko.observable('https://www.google.com');

	self.nicknames = ko.observableArray(['Tabby', 'Grumpypants', 'Tiny', 'Sleepy', 'Happy']);

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

	self.currentCat = ko.observable(new Cat());

	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());