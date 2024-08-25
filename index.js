
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let textField = document.getElementById("textField");
let generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQR);

function generateQR(){
    const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
    const api = apiUrl + textField.value;
    console.log(api);

fetch(api).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.blob(); // Get the image data as a Blob
  }).then(imageBlob => {
    // Create a local URL for the image Blob
    const imageUrl = URL.createObjectURL(imageBlob);

    qrImg.src = imageUrl;
    qrImg.alt = 'QR Code';
    textField.value = "";
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}