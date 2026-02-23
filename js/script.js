AOS.init();

// Language Toggle
document.getElementById("langToggle").addEventListener("click", function(){
    alert("RU / EN переключение можно расширить через JSON перевод.");
});

// Lightbox
const images = document.querySelectorAll(".lightbox");
const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("lightboxImg");
const close = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

close.onclick = function() {
    modal.style.display = "none";
}
