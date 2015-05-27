// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		if (!console[method]) {
				console[method] = noop;
		}
	}
}());





// Navigation for small screens
$(function() {
	var navtoggle 			= $('#toggle');
		menu 				= $('nav ul');
		menuHeight	= menu.height();

	$(navtoggle).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
				var w = $(window).width();
				if(w > 320 && menu.is(':hidden')) {
					menu.removeAttr('style');
				}
		});
});

// Change Nav Icon Text on-click
$('#pull').click(function() {
    $('span',this).toggle();
});