var Sha256 = CryptoJS.SHA256;
var Hex = CryptoJS.enc.Hex;
var Utf8 = CryptoJS.enc.Utf8;
var Base64 = CryptoJS.enc.Base64;
var AES = CryptoJS.AES;

var secret_key = '1D79031A9960C9EB472A5220F23A0672';
var secret_iv  = '123456789ABCDEFG';

var key = Sha256(secret_key).toString(Hex).substr(0,32); // Use the first 32 bytes (see 2.)
var iv = Sha256(secret_iv).toString(Hex).substr(0,16);


function myFunction() {
    let text = document.getElementById("plaintext-password").value;
    var output = AES.encrypt(text, Utf8.parse(key), {iv: Utf8.parse(iv),}).toString(); // First Base64 encoding, by default (see 1.)
    // var output2ndB64 = Utf8.parse(output).toString(Base64)

    console.log(output)
    document.getElementById("hased-pasword").value = output2ndB64;
}

console.log(myFunction("tes"))
