function api(api_method, http_method, request_data, callback) {
	console.info('api called: '+api_method);
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

function login(loginform, l_error, l_wrong, l_success, l_always) {
	api(
		"/authentication/login",
		"post",
		loginform.serializeArray(),
		function(xhr, status) {
			if(xhr.status == 0) {
				l_error();
			} else {
				var data = JSON.parse(xhr.responseText || '{}');
				console.info(data);
				if(xhr.status == 200) {
					sessionStorage.setItem("name", data.name);
					sessionStorage.setItem("user_id", data.user_id);
					l_success(data);
				} else {
					l_wrong(data);
				}
			}
			l_always();
		}
	);
}
function logout() {
	api("/authentication/logout", "get", null, function() {
		sessionStorage.clear();
		window.location.replace("#login");
	});
}
$(function() {
	$('.logout-button').click(logout);
});
