// Body
document.body.style.backgroundImage = 'url("/Images/Background.jpg")'
document.body.style.marginTop = '5px';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.height = '99vh';
document.body.style.overflow = 'hidden';

// Nav Bar
var nav = document.createElement("nav");

var homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.textContent = "Home";
nav.appendChild(homeLink);

var galleryLink = document.createElement("a");
galleryLink.setAttribute("href", "#");
galleryLink.textContent = "Gallery";
nav.appendChild(galleryLink);

var aboutLink = document.createElement("a");
aboutLink.setAttribute("href", "#");
aboutLink.textContent = "About";
nav.appendChild(aboutLink);

var contactLink = document.createElement("a");
contactLink.setAttribute("href", "#");
contactLink.textContent = "Contact";
nav.appendChild(contactLink);


nav.style.padding = "10px 0";
nav.style.textAlign = "end";
document.body.appendChild(nav);


let navA = document.querySelectorAll("nav a");



for (var i = 0; i < navA.length; i++) {
    navA[i].style.color = "black";
    navA[i].style.textDecoration = "none";
    navA[i].style.padding = "10px 20px";
    navA[i].style.margin = "0 5px";
    navA[i].style.borderRadius = "5px";
    navA[i].style.backgroundColor = "lightblue";
    navA[i].addEventListener("mouseenter", function() {
        this.style.backgroundColor = "lightcyan";
    });
    navA[i].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "lightblue";
    });
}






// Append nav to the body or any other desired parent element
document.body.appendChild(nav);



let BirdCentral = document.getElementsByClassName('BirdCentral');



// nav {
//     padding: 10px 0;
//     text-align: end;
// }

// nav a {
//     text-align: end;
//     color: black;
//     text-decoration: none;
//     padding: 10px 20px;
//     margin: 0 5px;
//     border-radius: 5px;
//     background-color: lightblue;
// }

// nav a:hover {
//     background-color: lightcyan;
// }