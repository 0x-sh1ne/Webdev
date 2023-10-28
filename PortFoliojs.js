
//---------------------------------------HOME---------------------------------------//
window.onload = function() {
    const homeTextDes = document.querySelector('.HomeTextDes');
    const homeMyPicture = document.querySelector('.HomeMyPicture');
    const background = document.querySelector('body');

    homeTextDes.style.opacity = 0;
    homeMyPicture.style.opacity = 0;
    background.style.opacity = 0;

    let fadeIn = function(element) {
        let op = 0.1;
        element.style.display = 'block';
        let timer = setInterval(function() {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 50);
    };

    fadeIn(homeTextDes);
    fadeIn(homeMyPicture);
    fadeIn(background);
};


// ------------------------CONTACTS---------------------------//
function submitForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("messageBox").style.display = "block";
}
function closMB() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("messageBox").style.display = "none";
}