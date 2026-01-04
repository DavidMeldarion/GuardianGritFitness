const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string) {
  return emailRegex.test(email.trim());
}

export function validateName(name: string) {
  return name.trim().length >= 2 && name.trim().length <= 80;
}
