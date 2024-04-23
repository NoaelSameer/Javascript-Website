// Body
    document.body.style.backgroundImage = 'url("./Images/Background.jpg")'
    document.body.style.margin = '5px 0 0 0';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.height = '99vh';
    document.body.style.overflow = 'hidden';
    document.body.style.fontFamily = "Comic Sans MS, sans-serif";



// Nav Bar
    var nav = document.createElement("nav");
    nav.style.padding = "10px 0";
    nav.style.textAlign = "end";

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

    document.body.appendChild(nav);


    let navA = document.querySelectorAll("nav a");


    //  Goes through the list of nav links, and gives them styles, while also adding a eventlistener to each one
        for (var i = 0; i < navA.length; i++) {
            navA[i].style.color = "black";
            navA[i].style.textDecoration = "none";
            navA[i].style.padding = "10px 20px";
            navA[i].style.margin = "0 5px";
            navA[i].style.borderRadius = "5px";
            navA[i].style.backgroundColor = "lightblue";
            // When Mouse enters, itll change "this" which is the current element, navA[i], into a background color of light cyan
            navA[i].addEventListener("mouseenter", function() {
                this.style.backgroundColor = "lightcyan";
            });
            // When Mouseleaves, itll change "this" into a background color of light blue
            navA[i].addEventListener("mouseleave", function() {
                this.style.backgroundColor = "lightblue";
            });
        }




// Creates The image text, that is barely readable.
    var birdCentralImager = document.createElement("img");
    birdCentralImager.src = "./Images/BirdCentral.png"
    birdCentralImager.classList.add("BirdCentral")
    document.body.appendChild(birdCentralImager)

    var birdCentral = document.querySelector('.BirdCentral');

        birdCentral.style.position = 'absolute';
        birdCentral.style.top = '40%';
        birdCentral.style.left = '50%';
        birdCentral.style.transform = 'translate(-50%, -50%)';
        birdCentral.style.width = '60%';
        birdCentral.style.filter = 'brightness(200%)';


// Creates button
    let buttoner = document.createElement("button");
    buttoner.textContent = "Contact Now";

        buttoner.style.backgroundColor = "lightblue";
        buttoner.style.border = "none";
        buttoner.style.borderRadius = "2vh";
        buttoner.style.position = "absolute";
        buttoner.style.top = "55vh";
        buttoner.style.left = "50vw";
        buttoner.style.transform = "translate(-50%, -50%)";
        buttoner.style.padding = "3vh 3vw";
        buttoner.style.fontSize = "4vh";
    // once Mouse enters the button, itll change the background color to light Cyan
    buttoner.addEventListener("mouseenter", function(){
        buttoner.style.backgroundColor = "lightcyan";});
    // Once Mouse leaves the button, itll change the background color to lightblue
    buttoner.addEventListener("mouseleave", function(){
        buttoner.style.backgroundColor = "lightblue";});


    document.body.appendChild(buttoner);

// Creates the Footer
    let footer = document.createElement("footer");

    // Things are consirered literal with textContent, which is why a unicode is used instead of &copy
    footer.textContent = "\u00A9 2024/ BirdCentral.com";

        footer.style.backgroundColor = "white"
        footer.style.display = "flex";
        footer.style.position = "absolute";
        footer.style.bottom = "0";
        footer.style.width = "100vw";
        footer.style.justifyContent = "center";
        footer.style.fontSize = "1.5rem";
        footer.style.margin = "auto";

    document.body.appendChild(footer)



