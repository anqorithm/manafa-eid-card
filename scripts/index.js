const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");

canvas.style.width = "350px";
canvas.style.height = "350px";

const image = new Image();
image.src = "assets/card1.png";
image.onload = function () {
  drawImage(canvas.width, canvas.height);
};

function drawImage(width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.webkitImageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, 0, 0, width, height);
  ctx.font = "bold 110px Cairo";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText(nameInput.value.trim(), width / 1.95, height - 730);
}

nameInput.addEventListener("input", function () {
  drawImage(canvas.width, canvas.height);
});

function download() {
  const link = document.getElementById("link");
  link.setAttribute("download", `Manafa - ${nameInput.value}.png`);
  link.setAttribute(
    "href",
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );

  Toastify({
    text: "🎉 تم تحميل بطاقة المعايدة",
    duration: 3000,
    position: "left",
    className: "toastify-small",
  }).showToast();

  link.click();

}
