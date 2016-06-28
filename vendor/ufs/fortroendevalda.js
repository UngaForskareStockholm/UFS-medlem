$(document).ready(function() {
	var firstNameValidators = {
			row: '.col-xs-2',   // The title is placed inside a <div class="col-xs-4"> element
			validators: {
				notEmpty: {
					message: 'Förnamn är obligatoriskt'
				}
			}
		},
		lastNameValidators = {
			row: '.col-xs-2',
			validators: {
				notEmpty: {
					message: 'Efternamn är obligatoriskt'
				}
			}
		},
		titleValidators = {
			row: '.col-xs-2',   // The title is placed inside a <div class="col-xs-4"> element
			validators: {
				notEmpty: {
					message: 'Fyll i om personen är ordförande eller annan förtroendepost, obligatoriskt'
				}
			}
		},
		 telNrValidators = {
			row: '.col-xs-2',
			validators: {
				notEmpty: {
					message: 'Telefonnummer är obligatoriskt'
				},
				numeric: {
					message: 'Telefonnumret får endast vara siffror'
				}
			}
		},
		emailaddrValidators = {
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
		trusteeIndex = 0;

	$('#trusteeForm')
		.formValidation({
			framework: 'bootstrap',
			icon: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				'trustee[0].firstName': firstNameValidators,
				'trustee[0].lastName': lastNameValidators,
				'trustee[0].title': titleValidators,
				'trustee[0].telNr': telNrValidators,
				'trustee[0].emailaddr': emailaddrValidators                
			}
		})

		// Add button click handler
		.on('click', '.addButton', function() {
			trusteeIndex++;
			var $template = $('#trusteeTemplate'),
				$clone    = $template
								.clone()
								.removeClass('hide')
								.removeAttr('id')
								.attr('data-trustee-index', trusteeIndex)
								.insertBefore($template);

			// Update the name attributes
			$clone
				.find('[name="firstName"]').attr('name', 'trustee[' + trusteeIndex + '].firstName').end()
				.find('[name="lastName"]').attr('name', 'trustee[' + trusteeIndex + '].lastName').end()
				.find('[name="title"]').attr('name', 'trustee[' + trusteeIndex + '].title').end()
				.find('[name="telNr"]').attr('name', 'trustee[' + trusteeIndex + '].telNr').end()
				.find('[name="emailaddr"]').attr('name', 'trustee[' + trusteeIndex + '].emailaddr').end();

			// Add new fields
			// Note that we also pass the validator rules for new field as the third parameter
			$('#trusteeForm')
				.formValidation('addField', 'trustee[' + trusteeIndex + '].firstName', firstNameValidators)
				.formValidation('addField', 'trustee[' + trusteeIndex + '].lastName', lastNameValidators)
				.formValidation('addField', 'trustee[' + trusteeIndex + '].title', titleValidators)
				.formValidation('addField', 'trustee[' + trusteeIndex + '].telNr', telNrValidators)
				.formValidation('addField', 'trustee[' + trusteeIndex + '].emailaddr', emailaddrValidators);
		})

		// Remove button click handler
		.on('click', '.removeButton', function() {
			var $row  = $(this).parents('.form-group'),
				index = $row.attr('data-trustee-index');

			// Remove fields
			$('#trusteeForm')
				.formValidation('removeField', $row.find('[name="trustee[' + index + '].firstName"]'))
				.formValidation('removeField', $row.find('[name="trustee[' + index + '].lastName"]'))
				.formValidation('removeField', $row.find('[name="trustee[' + index + '].title"]'))
				.formValidation('removeField', $row.find('[name="trustee[' + index + '].telNr"]'))
				.formValidation('removeField', $row.find('[name="trustee[' + index + '].emailaddr"]'));

			// Remove element containing the fields
			$row.remove();
		});
});