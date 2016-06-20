// Replace <main> with actual content, the part after # in the URL
function load_main() {
	// Find requested page from # part of URL
	var page = $(location).attr('hash').split('#')[1];
	if(page == undefined || page == '') {
		page = start_page;
	}

	// Don't allow :// and other evil stuff
	allow = new RegExp('^[a-z]*$');
	if(!allow.test(page)) {
		console.error("Requested page does not match allowed regexp: "+page);
		$('#main-spinner').hide();
		$('#load-error-code').html('Sökvägen ej tillåten');
		$('#load-error').show();
		return false;
	}

	// Redirect to login page, if needed
	if(login_required(page) && !logged_in()) {
		window.location.replace("#login");
		return false;
	}

	// Actually load the content
	var filename = page + '.html';
	console.info("load " + filename);
	$('main').load(filename, function(responseText, textStatus, jqXHR) {
		$('#main-spinner').hide();
		if(jqXHR.status == 200) {
			main_loaded(page);
		} else {
			$('#load-error-code').html(jqXHR.status);
			$('#load-error').show();
		}
	});
}

// If the page is not in the list below,
// and the user is not logged in when trying
// to access the page, he/she will be redirected
// to the login page instead.
function login_required(page) {
	switch(page) {
		case "login":
		case "pul":
			return false;
		default:
			return true;
	}
}

// Init things
$(function() {
	load_main();

	// If user changes the # part of the URL, reload main
	$(window).on("hashchange",function(e){
		$(".navbar-nav li").removeClass("active");
		$('#main-spinner').show();
		$('#load-error').hide();
		$('main').html('');
		load_main();
	});
});

function main_loaded(page) {
	$(".navbar-hilight-" + page).addClass("active");
}
