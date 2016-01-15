function api(api_method, http_method, request_data, callback) {
	var jqXHR = $.ajax({
		url: api_endpoint + api_method,
		method: http_method.toUpperCase(),
		data: request_data,
		complete: callback
	});
};

function logged_in() {
	var user_id = sessionStorage.getItem('user_id');
	if(user_id === null) {
		return false;
	} else {
		return true;
	};
}
