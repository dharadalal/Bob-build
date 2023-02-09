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

let isDrawerOpen = false;
let isModalOpen = false;
// Drawer open
menuIcon.addEventListener("click",() => {
    drawerContainer.classList.remove("hide");
    drawerContent.classList.remove("hide");
    drawerContent.classList.add("show");
    document.body.style.overflowY = "hidden";
    isDrawerOpen = true;
})

drawerBackdrop.addEventListener("click", closeDrawer);

closeNavbtn.addEventListener("click", closeDrawer);

function closeDrawer(){
    drawerContent.classList.remove("show");
    drawerContainer.classList.add("hide");
    drawerContent.classList.add("hide");
    document.body.style.overflowY = null;
    isDrawerOpen = false;
}

openModalBtn.addEventListener('click',()=>{
    isModalOpen = true;
    modal.classList.remove("hide-modal");
    document.body.style.overflowY = "hidden";
})
modalBackdrop.addEventListener("click", closeModal);

modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
    isModalOpen = false;
    modal.classList.add("hide-modal");
    document.body.style.overflowY = null;
}
// when the screensize is bigger than 600 to ana mate apde aa sue akriye che k je
// jethi 
window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            drawerContainer.classList.add("hide");
            if (!isModalOpen) {
                document.body.style.overflowY = null;
            }
        } else if (isDrawerOpen) {
            drawerContainer.classList.remove("hide");
            document.body.style.overflowY = "hidden";
        }
    });