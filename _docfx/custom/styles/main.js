$(function() {
	do {
		var elements = $('.nav.level1').find('a[href]');
		elements.each(function (i, el) {
		  $(el).text($(el).text().replace('MyTested.Mvc.Builders.Contracts.', ''));
		  $(el).text($(el).text().replace('MyTested.Mvc', 'Common'));
		});
	}
	while (elements.length == 0);
})