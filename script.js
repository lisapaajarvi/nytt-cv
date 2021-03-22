window.addEventListener("load", main);

/** a variable that stores the value for the border radius of leaf shaped divs*/
let leafSize;

/** a counter that is used to update the leafSize variable */
let counter = 0;

/** A variable that stores an array of all the leaves pointing to the left*/
let leftLeaves;

/** A variable that stores an array of all the leaves pointing to the right */
let rightLeaves;

/** starts the main functions of the page */
function main() {
    addEventListeners();
    LeafAnimation();
    leftLeaves = document.querySelectorAll(".leaf-left")
    rightLeaves = document.querySelectorAll(".leaf-right")
}

/** function that adds all the event listeners to the page */
function addEventListeners() {
    const contactIcon = document.getElementById("contact-icon")
    const contactLeaf = document.querySelector(".leaf-div7")
    contactIcon.onclick = openContactText;
    contactLeaf.onclick = openContactText;

    const aboutIcon = document.getElementById("about-icon")
    const aboutMobileIcon = document.getElementById("about-mobile-icon")
    aboutIcon.onclick = openAboutText;
    aboutMobileIcon.onclick = openAboutText;

    const educationLeaf = document.querySelectorAll(".leaf-div1")
    educationLeaf[0].onclick = openEducationText;
    educationLeaf[1].onclick = openEducationText;

    const workLeaf = document.querySelectorAll(".leaf-div2")
    workLeaf[0].onclick = openWorkText;
    workLeaf[1].onclick = openWorkText;

    const musicLeaf = document.querySelectorAll(".leaf-div3")
    musicLeaf[0].onclick = openMusicText;
    musicLeaf[1].onclick = openMusicText;

    const codingLeaf = document.querySelectorAll(".leaf-div4")
    codingLeaf[0].onclick = openCodingText;
    codingLeaf[1].onclick = openCodingText;

    const japaneseLeaf = document.querySelectorAll(".leaf-div5")
    japaneseLeaf[0].onclick = openJapaneseText;
    japaneseLeaf[1].onclick = openJapaneseText;

    const farmingLeaf = document.querySelectorAll(".leaf-div6")
    farmingLeaf[0].onclick = openFarmingText;
    farmingLeaf[1].onclick = openFarmingText;

    const mobileMenuIcon = document.querySelector(".mobile-menu-icon")
    mobileMenuIcon.onclick = openMobileMenu;
}

/** starts the animation of the leaves with an interval */
function LeafAnimation () {
    setInterval (changeLeafSize, 100);
}

/** changes the border radius of the leaves to animate them */
function changeLeafSize() {

    // update leafSize variable
    if(counter < 50) {
        leafSize = 10 - counter/10        
    }
    else {
        leafSize = 5 + ((counter - 50)/10)
    }

    // change size of leaves
    for(let i = 0; i < leftLeaves.length; i++) {
        leftLeaves[i].style.borderRadius = "0 " + leafSize + "rem 0 " + leafSize +"rem";
    }
    for(let i = 0; i < rightLeaves.length; i++) {
        rightLeaves[i].style.borderRadius = leafSize + "rem 0 " + leafSize +"rem 0";
    }
    // update counter
    counter ++;
    if(counter == 100) {
        counter = 0;
    }
}

/** opens the mobile hamburger menu and then closes it again on click */
function openMobileMenu() {
    let mobileMenu = document.getElementById("mobile-menu")
    mobileMenu.style.right = 0;
    mobileMenu.onclick = function(){
        mobileMenu.style.right = "-40rem";
    };
}

/** displays the textdiv with contact form */
function openContactText() {
    removeCurrentText();
    let contactText = document.getElementById("contact");
    contactText.classList.add("show-textdiv");
}

/** displays the textdiv with info about Lisa */
function openAboutText() {
    removeCurrentText();
    let aboutText = document.getElementById("about");
    aboutText.classList.add("show-textdiv");
}

/** displays the textdiv with education info */
function openEducationText() {
    removeCurrentText();
    let educationText = document.getElementById("education");
    educationText.classList.add("show-textdiv");
}

/** displays the textdiv with work experience info */
function openWorkText() {
    removeCurrentText();
    let workText = document.getElementById("work");
    workText.classList.add("show-textdiv");
}

/** displays the textdiv with music info */
function openMusicText() {
    removeCurrentText();
    let musicText = document.getElementById("music");
    musicText.classList.add("show-textdiv");
}

/** displays the textdiv with coding info */
function openCodingText() {
    removeCurrentText();
    let codingText = document.getElementById("coding");
    codingText.classList.add("show-textdiv");
}

/** displays the textdiv with japanese info */
function openJapaneseText() {
    removeCurrentText();
    let japaneseText = document.getElementById("japanese");
    japaneseText.classList.add("show-textdiv");
}

/** displays the textdiv with farming info */
function openFarmingText() {
    removeCurrentText();
    let farmingText = document.getElementById("farming");
    farmingText.classList.add("show-textdiv");
}

/** hides the textdiv that is currently displayed */
function removeCurrentText() {
    const textDivs = document.querySelectorAll(".textdiv");
    for (let i = 0; i < textDivs.length; i++) {
        if (textDivs[i].classList.contains("show-textdiv")) {
            textDivs[i].classList.remove("show-textdiv");
            break;
        }
    }      
}
