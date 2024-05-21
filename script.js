let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let btn=document.querySelector("button");
let input=document.querySelector("input")
let qrbox=document.querySelector("#image")
let qrimage=document.querySelector("#qrcode");
// console.log(btn,input,qrbox.qrimage);

btn.addEventListener("click",generateQr);

function generateQr() {
    if(input.value.length >0){
        qrimage.src=url+input.value;
        qrbox.classList.add("img-show");
      
      
    }
    // setTimeout(() => {
    //     alert("Your QR has been generated.")
    // },1000);
   
}