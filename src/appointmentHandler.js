export function validateName(name, allowEmpty = false) {
    if (allowEmpty && name.trim() === '') return true;
    return /^[A-Za-z\s]+$/.test(name);
}

export function validateDateOfBirth(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
    return dob <= today;
}

export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateTerms(termsAgreed) {
    return termsAgreed === true;
}

export function formatDate(date) {
    const d = new Date(date);
    // Checking if the date is valid
    if (isNaN(d.getTime())) return 'Invalid Date';
    
    // Extracting day, month, and year
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    
    return `${month}/${day}/${year}`;
}
//test2