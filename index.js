const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Fucntion name: generatePassword
// button id: button-el
//Set password length=15 

let passwordEl = document.getElementById("password-el");
let passwordEl2 = document.getElementById("password-el2");
let passwordLength = 15;
// Function to generate a random password
function generatePassword() {
    let password = ""; //setting password to empty string
    
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
// Function to display the generated password
function displayPassword() {
    let password1 = generatePassword();
    let password2 = generatePassword();
    passwordEl.textContent = password1;
    passwordEl2.textContent = password2;
}

