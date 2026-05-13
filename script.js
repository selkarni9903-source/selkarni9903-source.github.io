const text = "IA • Cybersécurité • Data Science";
let index = 0;

function typingEffect() {

    const typingElement = document.getElementById("typing");

    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();

/* THEME TOGGLE */
$("#theme-toggle").click(function () {
    $("body").toggleClass("light-mode");
});

/* REVEAL ON SCROLL */
function revealSections() {

    $(".reveal").each(function () {

        const windowHeight = window.innerHeight;
        const revealTop = this.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            $(this).addClass("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();

/* PROGRESS BAR ANIMATION */
$(window).on("scroll", function () {

    $(".progress-bar").each(function () {

        const position = $(this).offset().top;
        const scroll = $(window).scrollTop() + $(window).height();

        if (scroll > position) {

            if (!$(this).hasClass("animated")) {
                $(this).addClass("animated");

                $(this).animate(
                    { width: $(this).attr("data-width") },
                    1500
                );
            }
        }
    });
});

/* NAV HOVER EFFECT */
$(".nav-links a").hover(

    function () {
        $(this).animate({ letterSpacing: "2px" }, 200);
    },

    function () {
        $(this).animate({ letterSpacing: "0px" }, 200);
    }
);

/* BUTTON HOVER EFFECT (SAFE VERSION) */
$(".primary-btn, .secondary-btn, .project-link, .submit-btn").hover(

    function () {
        $(this).css({
            transform: "translateY(-5px) scale(1.05)"
        });
    },

    function () {
        $(this).css({
            transform: "translateY(0px) scale(1)"
        });
    }
);

/* TIMELINE HOVER */
$(".timeline-content").hover(

    function () {
        $(this).css({
            transform: "translateX(10px)"
        });
    },

    function () {
        $(this).css({
            transform: "translateX(0px)"
        });
    }
);

/* CONTACT FORM */
$(document).on("submit", "#contactForm", function (e) {

    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs");
        return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Adresse email invalide");
        return;
    }

    const messageHTML = `
        <div class="message-card">

            <div class="message-header">

                <div class="message-info">
                    <div class="message-name">${name}</div>
                    <div class="message-email">${email}</div>
                </div>

                <button class="delete-btn">✖</button>

            </div>

            <div class="message-text">${message}</div>

        </div>
    `;

    $("#messagesBox").append(messageHTML);
    $("#contactForm")[0].reset();
});

/* DELETE MESSAGE */
$(document).on("click", ".delete-btn", function () {
    $(this).closest(".message-card").remove();
});
/* PROJECT FILTER */

$(document).on("click", ".filter-btn", function () {

    $(".filter-btn").removeClass("active");

    $(this).addClass("active");

    const filter = $(this).attr("data-filter");

    $(".project-card").hide();

    if (filter === "all") {

        $(".project-card").fadeIn();

    } 
    
    else {

        $("." + filter).fadeIn();

    }

});