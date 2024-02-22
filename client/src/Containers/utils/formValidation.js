//validation of email
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required';
  } else if (!emailPattern.test(email)) {
    return 'Invalid email address';
  } else if (email[0] === ' ') {
    return 'Email should not start with a space';
  } else {
    return '';
  }
};

//validation of name
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!name) {
    return 'Name is required';
  } else if (!nameRegex.test(name)) {
    return 'Invalid name. Only letters and spaces are allowed.';
  } else if (name.trim() !== name) {
    return 'Name should not start or end with a space';
  } else {
    return '';
  }
};

//validatiion of idName
export const validateIdName = (idName) => {
  const idNameRegex = /^[a-zA-Z\s\d]+$/;
  if (!idName) {
    return 'IdName is required';
  } else if (!idNameRegex.test(idName)) {
    return 'Invalid IdName. Only letters, spaces, and numbers are allowed.';
  } else if (idName.trim() !== idName) {
    return 'IdName should not start or end with a space';
  } else if ((idName.match(/\d/g) || []).length < 1) {
    return 'IdName must contain at least two numbers';
  } else {
    return '';
  }
};

//validate phone number
export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\d{10}$/;

  if (!phoneNumber) {
    return 'Phone number is required';
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    return 'Invalid phone number. It should contain exactly 10 digits with no spaces.';
  } else {
    return '';
  }
};

export const validatePassword = (password) => {
  const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
  const uppercaseLetterPattern = /[A-Z]/;
  const lowercaseLetterPattern = /[a-z]/;
  const numberPattern = /\d/;
  if (!password) {
    return ('Password is required');
  } else if (password.length < 5) {
    return ('Password must be at least 5 characters long');
  } else if (!uppercaseLetterPattern.test(password)) {
    return ('Password must contain at least one uppercase letter');
  } else if (!lowercaseLetterPattern.test(password)) {
    return ('Password must contain at least one lowercase letter');
  } else if (!numberPattern.test(password)) {
    return ('Password must contain at least one number');
  } else if (!specialCharacterPattern.test(password)) {
    return ('Password must contain at least one special character');
  } else {
    return ('');
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password == confirmPassword) {
    return ('')
    
  }
  else{
    return ('password dosenot match')
  }
    
}
