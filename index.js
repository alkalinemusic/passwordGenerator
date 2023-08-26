// length is 91
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordArrayOne = []
let passwordArrayTwo = []

function generateRandomPassword() {
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        passwordArrayOne.push(characters[randomNumber]);
        randomNumber = Math.floor(Math.random() * characters.length);
        passwordArrayTwo.push(characters[randomNumber]);
    }
    let noCommasStringOne = passwordArrayOne.toString().replaceAll(",", "")    
    let noCommasStringTwo = passwordArrayTwo.toString().replaceAll(",", "")
    
    let passwordOneButton = document.getElementById("button-one")
    let passwordTwoButton = document.getElementById("button-two")
    passwordArrayOne = []
    passwordArrayTwo = []
    
    passwordTwoButton.textContent = noCommasStringOne
    passwordOneButton.textContent = noCommasStringTwo
}

function copyTextFromButtonOne() {
    const element = document.getElementById("button-one");
    const text = element.textContent;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(error => {
            console.error('Error copying text: ', error);
        });
}

function copyTextFromButtonTwo() {
    const element = document.getElementById("button-two");
    const text = element.textContent;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(error => {
            console.error('Error copying text: ', error);
        });
}
