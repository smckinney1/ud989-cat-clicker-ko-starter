var ViewModel = function() {
	//For now, putting the model in the ViewModel
	var self = this;

	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	self.imgAttribution = ko.observable('https://www.google.com');

	self.nicknames = ko.observableArray([
		{
			nickname: 'Tabby'
		},
		{
			nickname: 'Grumpypants'
		},
		{
			nickname: 'Tiny'
		},
		{
			nickname: 'Sleepy'
		},
		{
			nickname: 'Happy'
		}
	]);

	self.incrementCounter = function() {
		self.clickCount(self.clickCount() + 1);
	};

	self.level = ko.computed(function() {
		switch (true) {
			case self.clickCount() < 10:
				return 'Kitten';
			case self.clickCount() < 20:
				return 'Adult';
			case self.clickCount() < 30:
				return 'Old';
		};
		/*if (self.clickCount() < 10) {
			return 'Kitten';
		} else if (self.clickCount() < 20) {
			return 'Adult';
		} else {
			return 'Old';
		}*/
	});
}

ko.applyBindings(new ViewModel());