function rot13(message) {
  let encryptedMessage = '';
  for (let i = 0; i < message.length; i++) {
    const utf = message[i].charCodeAt();
    let newUtf;
    console.log(message[i], utf);

    if (utf >= 65 && utf <= 90) {
      console.log('im a capitl letter');
      newUtf = utf - 13;
      if (newUtf < 65) {
        newUtf = 26 + newUtf;
      }
      encryptedMessage += String.fromCharCode(newUtf);
      console.log(newUtf, String.fromCharCode(newUtf), encryptedMessage);
    } else if (utf >= 97 && utf <= 122) {
      console.log('im a letter');
      newUtf = utf - 13;
      if (newUtf < 97) {
        newUtf = 26 + newUtf;
      }
      encryptedMessage += String.fromCharCode(newUtf);
      console.log(newUtf, String.fromCharCode(newUtf), encryptedMessage);
    } else {
      encryptedMessage += message[i];
      console.log(encryptedMessage);
    }
  }

  return encryptedMessage;
}

console.log(rot13('Test'));
// Expected Output: Grfg
