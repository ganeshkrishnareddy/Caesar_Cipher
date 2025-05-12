/**
 * Encrypts a message using the Caesar Cipher algorithm
 * @param text The text to encrypt
 * @param shift The number of positions to shift each character
 * @returns The encrypted text
 */
export const encrypt = (text: string, shift: number): string => {
  // Ensure shift is within 0-25
  shift = ((shift % 26) + 26) % 26;
  
  return text.split('').map(char => {
    // Check if character is a letter
    if (/[a-zA-Z]/.test(char)) {
      // Get ASCII code
      const code = char.charCodeAt(0);
      
      // Handle uppercase letters
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      
      // Handle lowercase letters
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    
    // Return non-alphabetic characters unchanged
    return char;
  }).join('');
};

/**
 * Decrypts a message encrypted with the Caesar Cipher algorithm
 * @param text The text to decrypt
 * @param shift The number of positions that were used to encrypt
 * @returns The decrypted text
 */
export const decrypt = (text: string, shift: number): string => {
  // To decrypt, we shift in the opposite direction (26 - shift)
  return encrypt(text, 26 - (shift % 26));
};

/**
 * Animates the encryption/decryption process character by character
 * @param text The text to process
 * @param shift The number of positions to shift
 * @param mode Whether to encrypt or decrypt
 * @param callback Function to call with each intermediate result
 */
export const animateCipher = (
  text: string,
  shift: number,
  mode: 'encrypt' | 'decrypt',
  callback: (result: string) => void
): void => {
  const processedChars: string[] = [];
  const textArray = text.split('');
  const processFunction = mode === 'encrypt' ? encrypt : decrypt;
  
  const interval = setInterval(() => {
    if (processedChars.length === textArray.length) {
      clearInterval(interval);
      return;
    }
    
    const currentChar = textArray[processedChars.length];
    processedChars.push(processFunction(currentChar, shift));
    
    callback(processedChars.join('') + text.substring(processedChars.length));
  }, 50);
};