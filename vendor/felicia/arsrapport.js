console.log ("laddar arsrapport");
var 
	$konto = $('#konto'),
	$bankclear = $('#bankclear');
$konto.change(             
console.log ("test"),
     function () {
        console.log ("test2"); if ($('#konto').val() == 'bankkonto') {
            
            $('#bankclear').removeAttr('disabled');
        } 
        else {
                        console.log ("test3");
            $('#bankclear').attr('disabled', 'disabled').val('');
        }
    } 
).trigger('change'); // added trigger to calculate initial state