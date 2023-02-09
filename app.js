const menuIcon = document.querySelector(".menu-icon");
const drawerContainer = document.querySelector(".drawer-container");
const drawerContent = document.querySelector(".drawer-content");
const drawerBackdrop = document.querySelector(".drawer-backdrop");

const closeNavbtn = document.querySelector(".close-navbtn");

// to open modal
const openModalBtn = document.querySelector(".open-modal");

const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalCloseBtn = document.querySelector(".modal-close-btn");

// Drawer open
menuIcon.addEventListener("click",() => {
    drawerContainer.classList.remove("hide");
    drawerContent.classList.remove("hide");
    drawerContent.classList.add("show");
    document.body.style.overflowY = "hidden";
})

drawerBackdrop.addEventListener("click", closeDrawer);

closeNavbtn.addEventListener("click", closeDrawer);

function closeDrawer(){
    drawerContent.classList.remove("show");
    drawerContainer.classList.add("hide");
    drawerContent.classList.add("hide");
    document.body.style.overflowY = "auto";
}

openModalBtn.addEventListener('click',()=>{
    modal.classList.remove("hide-modal");
    document.body.style.overflowY = "hidden";
})
modalBackdrop.addEventListener("click", closeModal)

modalCloseBtn.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.add("hide-modal");
    document.body.style.overflowY = "auto";
}
