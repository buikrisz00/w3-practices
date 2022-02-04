/* function addTwoIntegers (firstInteger, secondInteger) {
    //console.log(firstInteger + secondInteger)
    //return firstInteger + secondInteger;
    if (typeof firstInteger === "string"  && typeof secondInteger === "number") {
        return firstInteger + secondInteger;
    }
    else {
        return "Valamelyik argumentum nem szám! Ezért a művelet nem elvégezhető!"
    }
}

console.log( addTwoIntegers(12,13) );
console.log( addTwoIntegers(1920,85) ); */

function loadEvent(eventObject) {
    // console.log(eventObject);
    const rootElement = document.getElementById("root");
    // console.dir(document);
    // console.dir(rootElement);

    const listOfSectionElements = document.querySelectorAll("section");

    //rootElement.classList.add("newClass");
    
    /*listOfSectionElements[0].classList.add("newClass");
    listOfSectionElements[1].classList.add("newClass");
    listOfSectionElements[2].classList.add("newClass");
    listOfSectionElements[3].classList.add("newClass");
     */
    /*  for (const sectionElement of listOfSectionElements) {
        sectionElement.classList.add("newClass")
    } */
    

    let anchors = "";

    for (const sectionElement of listOfSectionElements) {
        // anchors = anchors + `<a>${sectionElement.id}</a>`;
        anchors += `<a href="#${sectionElement.id}">${sectionElement.id}</a>`;
    }

    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${anchors}</header>`);
}

window.addEventListener("load", loadEvent);