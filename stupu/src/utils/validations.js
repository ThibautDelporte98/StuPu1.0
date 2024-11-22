// validation.js

// Username validation
export const isUsernameValid = (username) => username.length >= 4 && username.length <= 24;

// Firstname and lastname validation (allowing hyphens, apostrophes)
export const isNameValid = (name) => /^[A-Z][a-zA-Z'-]*$/.test(name);

// Email validation
export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

// Password validation
export const isPasswordValid = (password) =>
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/.test(password);

// Password match validation
export const isPasswordMatch = (password, confirmPassword) => password === confirmPassword;

// Street validation
export const isStreetValid = (street) => street.length > 0;

// Zip code validation (4 or 5 digits)
export const isZipCodeValid = (zipCode) => /^\d{4,5}$/.test(zipCode);

// Birthdate validation (minimum 5 years old)
export const isBirthDateValid = (birthDate) => {
  const currentDate = new Date();
  const minAgeDate = new Date();
  minAgeDate.setFullYear(currentDate.getFullYear() - 5); // Subtract 5 years
  const birthDateObject = new Date(birthDate);
  return birthDateObject <= minAgeDate;
};

// Field validity checks (can be reused for municipality, university, and major)
export const isFieldValid = (field) => field.length > 0;
