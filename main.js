const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");

function openfulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display = "none";
}