function load_nav() {
	
	var type="reporter";

	$('#nav-admin').hide();
	$('#nav-auditor').hide();
	$('#nav-reporter').hide();
	
	switch(type) {
		case "admin":
			$('#nav-admin').show();
		break;
		case "auditor":
			$('#nav-auditor').show();
		break;
		case "reporter":
			$('#nav-reporter').show();
	}
}

$(function() {
	load_nav();
});
