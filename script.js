src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
	$.ajax({
		url: "https://geolocation-db.com/jsonp",
		jsonpCallback: "callback",
		dataType: "jsonp",
		success: function( location ) {
			$('#city').html(location.city);
			$('#state').html(location.state);
			$('#country').html(location.country_name);
		 }
	});	