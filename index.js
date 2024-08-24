
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let textField = document.getElementById("textField");
let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQR());

// async function getData() {
//     const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
//     const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textField.value;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } 
//     catch (error) {
//       console.error(error.message);
//     }
//   }
  

async function generateQR(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textField.value;
}