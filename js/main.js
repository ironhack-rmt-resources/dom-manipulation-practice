
/****************************/
/* Find elements in the DOM */
/* **************************/

// by Id
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Raccoons Commerce";

// by class name
const infoCollection = document.getElementsByClassName("info");
const infoElementsArray = [...infoCollection];  // convert html collection to an array
infoElementsArray.forEach( elm => {
    elm.style.color = "blue"
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");



// by css selectors....

const first = document.querySelector("header h2"); //first element matching this css selector
const all = document.querySelectorAll("header h2"); //all elements matching this css selector
all.forEach( elm => elm.style.color = "orange" ); //querySelectorAll returns a nodelist (we can use forEach)


// 
// 
// Practice: selecting elements from the DOM
// 
// @LT: before doing the exercise, make a quick demo on how to change the style (e.g., elm.style.background = "orange")
// 
// - Instructions: https://stackblitz.com/edit/web-platform-ydtmzw?file=script.js
// - Time: 10-15min.
// - Solution: https://stackblitz.com/edit/web-platform-doucbe?file=script.js
// 
// 


//
// context: document vs. element
//

const allParagraphsInDocument = document.getElementsByTagName("p");

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");


const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p");




/**************/
/* Properties */
/**************/


//Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
    <div>
        <p>one<p>
        <p>two
            <a href="#">click here for more info</a>
        <p>
    </div>
    `;


//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About us --we are amazing"



//Read/Modify CSS --> elm.style
mainTitle.style.color = "purple"
mainTitle.style.backgroundColor = "yellow"
mainTitle.style.border = "2px solid green";



//Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id"



//Read/Modify class --> elm.className
mainTitle.className = "title rounded"



//(bonus) elm.classList (provides methods to access class names)

// - elm.classList.remove("foo");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.toggle("important")




/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href");
//console.log(result);

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");

// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element:
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg)







/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)


addEventListener(type, code)

*/


const btnOne = document.getElementById("button-1");
btnOne.addEventListener("click", () => {
    console.log("hello world")
})


//
// Append a paragraph every time the user clicks on a button
//

const btnThree = document.getElementById("add-paragraph");
btnThree.addEventListener("click", () => {

    // step1: create the element:
    const newP = document.createElement("p");

    // step2: add content or modify (ex. innerHTML...)
    newP.innerText = "This paragraph was created dynamically.";

    //step3: append to the dom: `parentElm.appendChild()`
    const container = document.getElementById("box-3");
    container.appendChild(newP);

});


//
// Practice & Research: detect keyboard events
// ...
// ...


//
// Detect spacebar + "event" object
//
document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        console.log("user pressed spacebar")
    } else {
        console.log("user pressed other key....")
    }
});



/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn");


allBtn.forEach( (elm) => {
    elm.addEventListener("click", () => {
        console.log("**** click on a generic button ****")
    });
});




/*

- (skip) Event Bubbling
- (skip) Detect Events on elements created dynamically
- (skip) inputs

*/

