$(function() {
	setTimeout(function() {
		$('.nav.level1').find('a[href]').each(function (i, el) {
		  $(el).text($(el).text().replace('MyTested.Mvc.Builders.Contracts.', ''));
		  $(el).text($(el).text().replace('MyTested.Mvc', 'Common'));
		});
	}, 0);
})