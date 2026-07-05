function openMenu(event) {

    event.preventDefault();

    const menuModal =
        document.getElementById("menuModal");

    menuModal.classList.add("active");

    document.body.classList.add("menu-open");

    menuModal.scrollTop = 0;
}


function closeMenu() {

    const menuModal =
        document.getElementById("menuModal");

    menuModal.classList.remove("active");

    document.body.classList.remove("menu-open");
}


function showCategory(categoryId, clickedButton) {

    const categories =
        document.querySelectorAll(".menu-category");

    categories.forEach(function (category) {

        category.classList.remove("active-category");

    });


    const buttons =
        document.querySelectorAll(".category-btn");

    buttons.forEach(function (button) {

        button.classList.remove("active");

    });


    document
        .getElementById(categoryId)
        .classList.add("active-category");


    clickedButton.classList.add("active");


    const menuModal =
        document.getElementById("menuModal");

    menuModal.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


window.addEventListener("click", function (event) {

    const menuModal =
        document.getElementById("menuModal");

    if (event.target === menuModal) {

        closeMenu();

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});


function toggleNavbar() {

    document
        .getElementById("navLinks")
        .classList
        .toggle("active");

}


const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        document
            .getElementById("navLinks")
            .classList
            .remove("active");

    });

});