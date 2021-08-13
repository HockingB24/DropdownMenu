function dropdownMenu() {
    const menu = document.querySelector('.dropMenu');
    menu.classList.add('show');
    console.log("hi");
    dropBtn.addEventListener('click', removeDropDown);
    dropBtn.removeEventListener('click', dropdownMenu);
}

function removeDropDown() {
    const menu = document.querySelector('.dropMenu');
    menu.classList.remove('show');
    dropBtn.addEventListener('click', dropdownMenu);
    dropBtn.removeEventListener('click', removeDropDown);
}









const dropBtn = document.getElementById('dropBtn');
dropBtn.addEventListener('click', dropdownMenu);
