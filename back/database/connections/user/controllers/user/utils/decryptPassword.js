export const decryptPassword = (encryptedPassword) => {
    let decryptedPassword = "";
    let reversedEncryptedPassword = encryptedPassword.split("").reverse().join("");
    for (let i = 0; i < reversedEncryptedPassword.length; i += 3) {
        decryptedPassword += reversedEncryptedPassword[i + 2];
    }
    return decryptedPassword;
}