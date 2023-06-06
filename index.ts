const chars: string =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generatePassword(passwordLength: number = 12) : string {
  let password: string = "";
  for (let i: number = 0; i <= passwordLength; i++) {
    let randomNumber: number = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
}