// JavaScript Here
function togglehamburger(x) {
    x.classList.toggle("change");
  }

//  toggle mobile menu 

let menuicon = document.getElementById("hamicon");

if (menuicon) {
    menuicon.addEventListener("click", function() {
        let mobilemenu = document.getElementById("mobileMenu");
          if (mobilemenu) {
            if (mobilemenu.style.display === "block") { // ถ้า display ตรงกับ block จะเป็น none 
                mobilemenu.style.display = "none"; // ถ้า display ตรงกับ none จะเป็น block 
            } else {
                mobilemenu.style.display = "block"; // ถ้าเป็น none อยู่แล้วจะเปลี่ยนเป็น block
            } 
          } else {
            console.error("error mobilemenu : ");
        }
    })
} else {
    console.error("error hamicon : ")
}