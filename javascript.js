// contact mail

const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> 
     Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mbhatt518@gmail.com",
        Password: "A0C6AF4D982AA64A4A8E4405C16E812046C7",
        To: 'mbhatt518@gmail.com',
        From: "mbhatt518@gmail.com",
        Subject: mess.value,
        Body: bodyMessage

    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });

            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});

// contact mail end


// web js

const webtab = document.querySelector(".webtab");
const web = document.querySelector(".web");
let clicked = true;

// const graphictab = document.querySelector(".graphictab");

webtab.addEventListener("click", () => {
    // webtab.classList.remove("webtab")
    if (clicked) {
        webtab.style.background = 'linear-gradient(151deg, rgb(0 0 0) 0%, rgb(9 31 147) 52%, rgb(5 7 24) 100%)';
        graphictab.style.background = '';
        clicked1 = true;
        window.scrollBy(0, 1000);


    }

    else {
        webtab.style.background = '';
        window.scrollBy(0, 0);

    }



    clicked = !clicked;

    graphic.classList.remove("active")
    web.classList.toggle("active");



});

const graphictab = document.querySelector(".graphictab");
const graphic = document.querySelector(".graphic");
let clicked1 = true;
// const graphictab = document.querySelector(".graphictab");

graphictab.addEventListener("click", () => {

    if (clicked1) {
        graphictab.style.background = 'linear-gradient(151deg, rgb(0 0 0) 0%, rgb(9 31 147) 52%, rgb(5 7 24) 100%)';
        webtab.style.background = '';
        clicked = true;
        window.scrollBy(0, 1000);

    }
    else {
        graphictab.style.background = '';
        window.scrollBy(0, 0);
    }



    clicked1 = !clicked1;

    graphic.classList.toggle("active");
    web.classList.remove("active");


});


const hamMenu = document.querySelector(".ham-menu");

const ul = document.querySelector(".ul");



hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    ul.classList.toggle("active");



});

let li = document.querySelectorAll("li");

li.forEach(function (x) {
    x.addEventListener("click", function () {
        hamMenu.classList.toggle("active");
        ul.classList.toggle("active");
    })
})