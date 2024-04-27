import {
    validateName,
    validateDateOfBirth,
    validateEmail,
    validateTerms,
    formatDate
} from '../src/appointmentHandler.js';
describe('Appointment Handler Tests', () => {
    test('validateName: valid first name', () => {
        expect(validateName('John')).toBeTruthy();
    });

    test('validateName: valid last name with spaces allowed', () => {
        expect(validateName('Smith Jr', true)).toBeTruthy();
    });

    test('validateName: empty last name allowed', () => {
        expect(validateName('', true)).toBeTruthy();
    });

    test('validateName: invalid name with numbers', () => {
        expect(validateName('John123')).toBeFalsy();
    });

    test('validateDateOfBirth: valid past date', () => {
        expect(validateDateOfBirth('1990-01-01')).toBeTruthy();
    });

    test('validateDateOfBirth: future date', () => {
        expect(validateDateOfBirth('2999-01-01')).toBeFalsy();
    });

    test('validateEmail: valid email', () => {
        expect(validateEmail('example@test.com')).toBeTruthy();
    });

    test('validateEmail: invalid email without @', () => {
        expect(validateEmail('example.com')).toBeFalsy();
    });

    test('validateEmail: invalid email without domain', () => {
        expect(validateEmail('example@')).toBeFalsy();
    });

    test('validateTerms: terms agreed', () => {
        expect(validateTerms(true)).toBeTruthy();
    });

    test('validateTerms: terms not agreed', () => {
        expect(validateTerms(false)).toBeFalsy();
    });

    test('formatDate: valid date format', () => {
        const date = new Date('2024-12-30T12:00:00Z');
        const expectedDate = new Date('2024-12-30T00:00:00Z'); // Set expected date to midnight UTC
        expect(formatDate(date.toISOString().split('T')[0])).toEqual(formatDate(expectedDate.toISOString().split('T')[0]));
    });
    
    test('formatDate: invalid date input', () => {
        expect(formatDate('not-a-date')).toEqual('Invalid Date');
    });
});
// Testing CI Pipeline for Azure