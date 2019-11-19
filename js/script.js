// event pada saat diklik
$('.page-scroll').on('click', function () {
	//ambil isi href
	var elemen = $(this).attr('href');
	// console.log(elemen);
	//tangkap elemen ybs
	var elemenTujuan = $(elemen);
	// console.log(elemenTujuan);
	// console.log(elemenTujuan.offset().top);
	//melakukan scroll
	// console.log($('body').scrollTop());
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');
	// console.log(elemenTujuan.offset());
	// $('body').scrollTop(elemenTujuan.offset().top);

	event.preventDefault();
});
