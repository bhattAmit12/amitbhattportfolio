const hamMenu = document.querySelector(".ham-menu");

        const offScreenMenu = document.querySelector(".off-screen-menu");


        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        })



        let navhome = document.querySelectorAll(".navhome");

        navhome.forEach(function (x) {
            x.addEventListener("click", function () {
                hamMenu.classList.remove("active");
                offScreenMenu.classList.remove("active");
            })
        })