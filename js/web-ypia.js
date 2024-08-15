// Berita Terbaru
var urlPDN = 'https://najzmi.github.io/kehumasan/json/json-front-website.json';
$.getJSON(urlPDN, function(hasil){
	//console.log(hasil);
	$.each(hasil, function (i, data) {
		//console.log(data);
		//var dadate = data.date;
		//var hasil_dadate = toDateString(dadate);
		$('#berita-terkini').append(`<div class="col mb-2">
					<div class="card h-100">
						<img class="card-img-top" src="`+data.pudin_thumbnail_img_url+`" alt="`+data.title.rendered+`">
						<div class="card-body">
							<h5 class="card-title">`+data.title.rendered+`</h5>
							<p class="card-text">Tanggal : `+data.date+`</p>
							<a href="`+data.link+`" class="btn btn-primary" target="_blank">Kunjungi</a>
						</div>
					</div>
				</div>`);
	});
});
// JAVASCRIPT
