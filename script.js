// TYPING EFFECT

const text =
"IA • Cybersécurité • Data Science";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();


// DARK MODE

$("#theme-toggle").click(function(){

    $("body").toggleClass("light-mode");

});


// REVEAL ANIMATION

function revealSections(){

    $(".reveal").each(function(){

        const windowHeight =
        window.innerHeight;

        const revealTop =
        this.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            $(this).addClass("active");
        }
    });
}

window.addEventListener("scroll",revealSections);

revealSections();


// ANIMATED SKILLS

$(window).scroll(function(){

    $(".progress-bar").each(function(){

        const position =
        $(this).offset().top;

        const scroll =
        $(window).scrollTop() +
        $(window).height();

        if(scroll > position){

            $(this).animate({

                width:$(this).attr("data-width")

            },1500);
        }
    });
});


// FILTER PROJECTS

$(".filter-btn").click(function(){

    $(".filter-btn").removeClass("active");

    $(this).addClass("active");

    const value =
    $(this).attr("data-filter");

    if(value === "all"){

        $(".project-card").fadeIn(400);

    }else{

        $(".project-card").hide();

        $("." + value).fadeIn(400);
    }
});


// HOVER ANIMATION NAVBAR

$(".nav-links a").hover(

    function(){

        $(this).animate({

            letterSpacing:"2px"

        },200);

    },

    function(){

        $(this).animate({

            letterSpacing:"0px"

        },200);
    }
);


// BUTTON ANIMATION

$(".primary-btn, .secondary-btn, .project-link, .submit-btn")
.hover(

    function(){

        $(this).css({

            transform:"translateY(-5px) scale(1.05)"

        });

    },

    function(){

        $(this).css({

            transform:"translateY(0px) scale(1)"

        });
    }
);


// TIMELINE ANIMATION

$(".timeline-content").hover(

    function(){

        $(this).css({

            transform:"translateX(10px)"

        });

    },

    function(){

        $(this).css({

            transform:"translateX(0px)"

        });
    }
);


// CONTACT FORM VALIDATION

$(document).on("submit","#contactForm",function(e){

    e.preventDefault();

    const name =
    $("#name").val();

    const email =
    $("#email").val();

    const message =
    $("#message").val();

    if(name === "" ||
    email === "" ||
    message === ""){

        alert(
        "Veuillez remplir tous les champs"
        );

        return;
    }

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){

        alert(
        "Adresse email invalide"
        );

        return;
    }

    alert(
    "Message envoyé avec succès !"
    );

});