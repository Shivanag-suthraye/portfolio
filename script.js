function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList
            .remove("active");

    });

});