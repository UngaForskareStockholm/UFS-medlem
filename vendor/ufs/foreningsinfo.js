$(document).ready(function() {
    $('#orginfoForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			emailaddr: {
				row: '.col-xs-3',
				validators: {
					notEmpty: {
						message: 'Mailadress är obligatoriskt'
					},
					emailAddress: {
						message: 'Mailadressen måste vara giltig'
					}
				}
			},
			telNr: {
				row: '.col-xs-3',
				validators: {
					notEmpty: {
						message: 'Telefonnummer är obligatoriskt'
					},
					numeric: {
						message: 'Telefonnumret får endast vara siffror'
					}
				}
			},
			streetaddr: {
				row: '.col-xs-6',   
				validators: {
					notEmpty: {
						message: 'Gatuadress är obligatoriskt'
					}
				}
			},
			postalNr: {
				row: '.col-xs-2',
				validators: {
					notEmpty: {
						message: 'Postnummer är obligatoriskt'
					},
					numeric: {
						message: 'Postnummret får endast vara siffror'
					}
				}
			},
			postTown: {
				row: '.col-xs-4',  
				validators: {
					notEmpty: {
						message: 'Ort är obligatoriskt'
					}
				}
			},
			locationpostalNr: {
				row: '.col-xs-2',
				validators: {
					numeric: {
						message: 'Postnummret får endast vara siffror'
					}
				}
			},
			contactfName: {
				row: '.col-xs-3',   
				validators: {
					notEmpty: {
						message: 'Förnamn är obligatoriskt'
					}
				}
			},
			contactlName: {
				row: '.col-xs-3',
				validators: {
					notEmpty: {
						message: 'Efternamn är obligatoriskt'
					}
				}
			},
			 contacttelNr: {
				row: '.col-xs-3',
				validators: {
					notEmpty: {
						message: 'Telefonnummer är obligatoriskt'
					},
					numeric: {
						message: 'Telefonnumret får endast vara siffror'
					}
				}
			},
			contactemailaddr: {
				row: '.col-xs-3',
				validators: {
					notEmpty: {
						message: 'Mailadress är obligatoriskt'
					},
					emailAddress: {
						message: 'Mailadressen måste vara giltig'
					}
				}
			},
			hqTown: {
				row: '.col-xs-6',   
				validators: {
					notEmpty: {
						message: 'Sätesort är obligatoriskt'
					}
				}
			},
			bankType: {
				row: '.col-xs-2',
				validators: {
					notEmpty: {
						message: 'Efternamn är obligatoriskt'
					}
				}
			},
			 bankClearNr: {
				row: '.col-xs-2',
				validators: {
					notEmpty: {
						message: 'Clearingnummer är obligatoriskt'
					}
				}
			},
			bankAccountNr: {
				row: '.col-xs-2',
				validators: {
					notEmpty: {
						message: 'Bankkontonummer är obligatoriskt'
					}
				}
			}
        }
    });
});