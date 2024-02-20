
 export const validateEmail = (email) => {
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return('Email is required');
        } else if (!emailPattern.test(email)) {
            return('Invalid email address');
        } else {
            return('');
        }
    };

    export const validatePassword = (password) => {
        const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
        const uppercaseLetterPattern = /[A-Z]/;
        const lowercaseLetterPattern = /[a-z]/;
        const numberPattern = /\d/;
        if (!password) {
            return('Password is required');
        } else if (password.length < 5) {
            return('Password must be at least 5 characters long');
        } else if (!uppercaseLetterPattern.test(password)) {
            return('Password must contain at least one uppercase letter');
        } else if (!lowercaseLetterPattern.test(password)) {
            return('Password must contain at least one lowercase letter');
        } else if (!numberPattern.test(password)) {
            return('Password must contain at least one number');
        } else if (!specialCharacterPattern.test(password)) {
            return('Password must contain at least one special character');
        } else {
            return('');
        }
    };