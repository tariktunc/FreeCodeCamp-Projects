function rot13(str) {
  let ciphered = "";

  for (let i = 0; i < str.length; i++) {
    let cCN = str[i].charCodeAt();
    let n = 13;

    if (cCN < 65 || (cCN > 90 && cCN < 97) || cCN > 122) {
      ciphered += str[i];
    } else {
      let baseCharCode = cCN < 97 ? 65 : 97;
      ciphered += String.fromCharCode(
        ((cCN - baseCharCode + n) % 26) + baseCharCode
      );
    }
  }

  return ciphered;
}

console.log(rot13("SERR CVMMN!", 13));
