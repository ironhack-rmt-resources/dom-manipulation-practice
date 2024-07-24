
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

elm.addEventListener("nameOfTheEvent", () => {})

*/

const btn = document.getElementById("button-1");

btn.addEventListener("click", (e) => {
    console.log("user has clicked on a button");   

    //append paragraph
    const newP =  document.createElement("p");
    newP.innerText = "this p has been created dynamically";
    parentElm.appendChild(newP);

})


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


/******************/
/* Event Bubbling */
/******************/

/*

when an event is fired, it will also "bubble up" and fire on all it's ancestors.

*/

const box2 = document.getElementById("box-2");

box2.addEventListener("click", () => {
    // console.log("a click event dired in BOX 2")
})


document.addEventListener("click", () => {
    // console.log("a click event dired in DOCUMENT")
})


/*************************************************/
/* Detect Events on elements created dynamically */
/*************************************************/

const btnAdd = document.getElementById("btn-add");

// everytime we click on "the magic button", append a new .btn
btnAdd.addEventListener("click", () => { 
    // step1: create the element:
    const newBtn = document.createElement("button");

    // step2: add content or modify (ex. innerHTML...)
    newBtn.className = "btn";
    newBtn.innerText = "Button 3 (on the fly)"

    //step3: append to the dom: `parentElm.appendChild()`
    const box3Elm = document.getElementById("box-3");
    box3Elm.appendChild(newBtn)
});

document.addEventListener("click", (e) => {
    if(e.target.className === "btn") {
        console.log("one of our AMAZING buttons was clicked")
    } else {
        console.log("we clicked somewhere else...")
    }
})


/**********/ 
/* Inputs */
/**********/ 

const imgElm = document.querySelector("#pikachu img")

imgElm.addEventListener("click", () => {
    const inputElm = document.getElementById("price");
    console.log("current price....", inputElm.value)
});
