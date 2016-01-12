$(document).ready(function(){

	


});

var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
   url: etsyURL,
   method: 'get',
  dataType: 'jsonp'
}).done (function (data) {

	var mapData = data.results.map(function(obj) {
		return {
			'title': obj.title,
			'price': obj.price,
			'shop_name': obj.Shop.shop_name,
			'currency_code': obj.currency_code,
			'url_170x135': obj.Images[0]['url_170x135'],
			'url': obj.url,
			'category_path': obj.category_path  
		};
	});


	var newData = {mapData: mapData};

	var templateString = $("#listItemTemplate").text();
	var listHTML = Mustache.render(templateString,newData);
	$("#pictureContainer").html(listHTML);

});
