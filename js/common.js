$(document).ready(function () {
	
	$('.main-slider').slick({
		arrows: false,
		dots: true
	});

	// menu
	$('.menu-btn').on('click',function (e) {
		e.preventDefault();

		$('.popup-menu').addClass('active');
	});

	$('.popup-menu').on('click',function () {

		$(this).removeClass('active');
	});

	// callback
	$('.callback').on('click',function (e) {
		e.preventDefault();

		$('#overlay').show();
		$('.popup-callback').addClass('active');
	});

	$('#overlay').on('click',function () {

		$(this).hide();
		$('.popup-callback').removeClass('active');
	});

	// slider
	$('.solution-slider').slick({
		slidesToShow: 3,
		appendArrows: '.solution-slider-arrows',
		prevArrow: '<span class="prev-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M1.35365,16.35328l-0.70734,-0.70758l0.14626,-0.14626l-0.14626,-0.14626l0.70734,-0.7069l0.14604,0.14604l14.14683,-14.14662l0.70699,0.70758l-14.14636,14.14648l14.14636,14.14584l-0.70699,0.70758l-14.1465,-14.14628z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M0.6462,1.35329l0.70699,-0.70758l14.14683,14.14662l0.14604,-0.14604l0.70734,0.7069l-0.14626,0.14626l0.14626,0.14626l-0.70734,0.70758l-0.14638,-0.14638l-14.1465,14.14628l-0.70699,-0.70758l14.14636,-14.14584z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					variableWidth: true
				}
			}
		]

	});

	$('.features-slider').slick({
		slidesToShow: 1,
		infinite: false,
		vertical: true,
		prevArrow: '<span class="prev-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M1.35365,16.35328l-0.70734,-0.70758l0.14626,-0.14626l-0.14626,-0.14626l0.70734,-0.7069l0.14604,0.14604l14.14683,-14.14662l0.70699,0.70758l-14.14636,14.14648l14.14636,14.14584l-0.70699,0.70758l-14.1465,-14.14628z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M0.6462,1.35329l0.70699,-0.70758l14.14683,14.14662l0.14604,-0.14604l0.70734,0.7069l-0.14626,0.14626l0.14626,0.14626l-0.70734,0.70758l-0.14638,-0.14638l-14.1465,14.14628l-0.70699,-0.70758l14.14636,-14.14584z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',

	});

	$('.partner-slider').slick({
		appendArrows: '.partner-slider-arrows',
		rows: 2,
		slidesPerRow: 4,
		prevArrow: '<span class="prev-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M1.35365,16.35328l-0.70734,-0.70758l0.14626,-0.14626l-0.14626,-0.14626l0.70734,-0.7069l0.14604,0.14604l14.14683,-14.14662l0.70699,0.70758l-14.14636,14.14648l14.14636,14.14584l-0.70699,0.70758l-14.1465,-14.14628z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M0.6462,1.35329l0.70699,-0.70758l14.14683,14.14662l0.14604,-0.14604l0.70734,0.7069l-0.14626,0.14626l0.14626,0.14626l-0.70734,0.70758l-0.14638,-0.14638l-14.1465,14.14628l-0.70699,-0.70758l14.14636,-14.14584z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesPerRow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesPerRow: 2,
				}
			}
		]

	});

	$('.news-slider').slick({
		rows: 2,
		slidesPerRow: 1,
		vertical: true,
		appendArrows: '.news-slider-arrows',
		prevArrow: '<span class="prev-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M1.35365,16.35328l-0.70734,-0.70758l0.14626,-0.14626l-0.14626,-0.14626l0.70734,-0.7069l0.14604,0.14604l14.14683,-14.14662l0.70699,0.70758l-14.14636,14.14648l14.14636,14.14584l-0.70699,0.70758l-14.1465,-14.14628z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		nextArrow: '<span class="next-slide"><svg id="SVGDoc" width="17" height="31" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 17 31"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Shape 5 copy</title><path d="M0.6462,1.35329l0.70699,-0.70758l14.14683,14.14662l0.14604,-0.14604l0.70734,0.7069l-0.14626,0.14626l0.14626,0.14626l-0.70734,0.70758l-0.14638,-0.14638l-14.1465,14.14628l-0.70699,-0.70758l14.14636,-14.14584z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					vertical: false,
				}
			}
		]

	});

})