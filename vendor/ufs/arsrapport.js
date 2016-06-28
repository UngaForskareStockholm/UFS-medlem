var 
	$konto = $('#konto'),
	$bankclear = $('#bankclear');
$konto.change(function () {
	if ($konto.val() == 'bankkonto') {
		$bankclear.removeAttr('disabled');
	} else {
		$bankclear.attr('disabled', 'disabled').val('');
	}
}).trigger('change'); // added trigger to calculate initial state