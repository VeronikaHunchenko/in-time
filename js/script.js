$('.tabs-link').on('click', function() {
	$('.tabs-link').removeClass('is-active');
	$(this).addClass('is-active');
	var tabNumber = $(this).attr('data-tab-number');
	$('.tabs-pane').removeClass('is-active');
	$('.tabs-pane[data-tab-number="' + tabNumber + '"]').addClass('is-active');
});