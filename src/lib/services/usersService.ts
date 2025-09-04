import { getLocale } from '$lib/paraglide/runtime';
import type { Customer } from '$lib/types';
import { isValidBirthDate, isValidCellphone, isValidEmail } from '$lib/utils';
import { cpf } from 'cpf-cnpj-validator';

/**
 * Validates if customer has all required data for step 1 completion
 */
export function isCustomerDataComplete(customer: Customer): boolean {
	// Check all required fields that are validated in StepOnePending
	const requiredFields = {
		email: customer.email?.trim(),
		cpf: customer.cpf?.trim(),
		telephone: customer.telephone?.trim(),
		birthDate: customer.birthDate?.trim(),
		firstName: customer.firstName?.trim(),
		lastName: customer.lastName?.trim()
	};

	// Check if any required field is missing or empty
	for (const [field, value] of Object.entries(requiredFields)) {
		if (!value || value === '') {
			console.log(`Customer missing required field: ${field}`);
			return false;
		}
	}

	// Additional validations that match StepOnePending validation logic
	// Email validation
	if (!isValidEmail(requiredFields.email!)) {
		console.log('Customer has invalid email');
		return false;
	}

	// CPF validation
	if (!cpf.isValid(requiredFields.cpf!)) {
		console.log('Customer has invalid CPF');
		return false;
	}

	// Phone validation
	if (!isValidCellphone(requiredFields.telephone!, getLocale())) {
		console.log('Customer has invalid telephone');
		return false;
	}

	// Birth date validation
	if (!isValidBirthDate(requiredFields.birthDate!)) {
		console.log('Customer has invalid birth date');
		return false;
	}

	// If all validations pass, customer data is complete
	return true;
}
