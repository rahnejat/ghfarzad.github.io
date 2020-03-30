console.log("Hello RE!");

let anft = document.querySelector("a-nft");
anft.addEventListener(
    "markerFound",
    event => {
        window.alert("Marker Found!");
    }
)

let button = document.querySelector("button");
button.addEventListener(
    "click",
    event => {
        window.alert("Button Clicked!");
    }
)
