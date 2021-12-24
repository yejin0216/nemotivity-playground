class CodesClass {
  static getArrayFromLowToHigh = (start, end) => {
    return Array.from({ length: end - start + 1 }, (v, i) => start + i);
  };

  static LOWERCASE_CODES = this.getArrayFromLowToHigh(65, 90);
  static UPPERCASE_CODES = this.getArrayFromLowToHigh(97, 122);
  static NUMBER_CODES = this.getArrayFromLowToHigh(48, 57);
  static SYMBOL_CODES = this.getArrayFromLowToHigh(33, 47)
    .concat(this.getArrayFromLowToHigh(58, 64))
    .concat(this.getArrayFromLowToHigh(91, 96))
    .concat(this.getArrayFromLowToHigh(123, 126));
}

const generatePassword = (
  characterAmount,
  includeUppercase,
  includeSymbols,
  includeNumbers,
) => {
  let charCodes = CodesClass.LOWERCASE_CODES;

  if (includeUppercase) {
    charCodes = [...charCodes, ...CodesClass.UPPERCASE_CODES];
  }
  if (includeNumbers) {
    charCodes = [...charCodes, ...CodesClass.NUMBER_CODES];
  }
  if (includeSymbols) {
    charCodes = [...charCodes, ...CodesClass.SYMBOL_CODES];
  }

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join('');
};

document
  .querySelector('#passwordGeneratorForm')
  .addEventListener('submit', e => {
    e.preventDefault();

    const password = generatePassword(
      document.querySelector('#length').value,
      document.querySelector('#uppercase').checked,
      document.querySelector('#symbols').checked,
      document.querySelector('#numbers').checked,
    );

    document.querySelector('#result').innerText = password;
  });

document.querySelector('#copy').addEventListener('click', e => {
  const textarea = document.createElement('textarea');
  const passwordToCopy = document.querySelector('#result').innerText;

  if (!passwordToCopy) return false;

  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();

  alert('Password Copied to Clipboard');
});
