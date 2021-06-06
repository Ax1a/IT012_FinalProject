// Navigation scroll effects
var scrollPosition = window.scrollY;
var scrnWidth = screen.width;
var smallScrn;

// Hide effects smaller screen //
window.onload = function() {
    if (scrnWidth > 991){
        smallScrn = false;
    }
    else {
        document.getElementsByTagName("nav")[0].classList.add("nav-black");
    }
};
// --------------------------- // 

// Scroll effects //
window.addEventListener('scroll', function(){
    var headerLink = document.getElementsByClassName('nav-link');
    if (smallScrn == false){
        scrollPosition = window.scrollY;

        if(scrollPosition > 300) {
            document.getElementsByTagName("nav")[0].classList.add("nav-black");
            // Change nav font to white
            for (var i = 0; i < headerLink.length; i++) {
                if (headerLink[i].classList.contains("active")){
                    headerLink[i].style.color = '#FFC815';
                }
                else {
                    headerLink[i].style.color = 'white';
                }
            }
        }
        else{
            document.getElementsByTagName("nav")[0].classList.remove("nav-black");
            // Change nav font to black
            for (var i = 0; i < headerLink.length; i++) {
                if (headerLink[i].classList.contains("active")){
                    headerLink[i].style.color = 'white';
                }
                else {
                    headerLink[i].style.color = 'rgba(255,255,255,.55)';
                }
            }
        }
    }
});
// ----------------------------------- //

// Login and sign up fade effect //
var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");

var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");

    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_cover.classList.add("cover-hide");
    right_form.classList.remove("form-hide");
}
// -------------------------------- //