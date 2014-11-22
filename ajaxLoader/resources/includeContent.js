var CDPE = (function($) {
	return {
		includeGCContent: function(imgUrl) {
			var includes = $('.includeGCContent');
			includes.each(function(index) {
				var el = $(this);
				var html = el.html();
				var url = el.attr('data-url');
				var jxhr;

				if(!url) {
					el.html(html + '<p>Error: data-url not defined for this includeContent div.</p>');
					return;
				}

				el.html(html + '<p><img src="' + imgUrl + '" /></p>');

				// setTimeout(function() {
					jxhr = $.ajax(url);

					jxhr.done(function(msg) {
						el.html(msg);
					});

					jxhr.fail(function(xhr, statusText) {
						el.html(html + '<p>Error: failed to load content from ' + url + '</p>');
					});

				// }, 5000);

			});
		}
	};
}(jQuery));