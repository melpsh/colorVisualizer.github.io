const colors = ["aqua", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "green", "yellow","orange","gold",
"AntiqueWhite",
"Aquamarine",
"Beige",
"Bisque",
"BlanchedAlmond",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Crimson",
"DarkCyan",
"DarkGoldenRod",
"DarkKhaki",
"DarkOrange",
"DarkOrchid",
"DarkSalmon",
"DarkSeaGreen",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DodgerBlue",
"FireBrick",
"ForestGreen",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"GreenYellow",
"HotPink",
"IndianRed",
"Indigo",
"Khaki",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightGoldenRodYellow",
"LightGray",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSteelBlue",
"LightYellow",
"LimeGreen",
"Magenta",
"MediumAquaMarine",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MistyRose",
"Moccasin",
"NavajoWhite",
"OliveDrab",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"Sienna",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SpringGreen",
"SteelBlue",
"Tan",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"YellowGreen"];
const flipBtn = document.getElementById("flip_btn");
const color = document.querySelector(".color");
const resetBtn = document.getElementById("reset_btn");
const copyBtn = document.getElementById("copy_btn");


flipBtn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    copyBtn.textContent = "Copy Color";
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

resetBtn.addEventListener("click", function(){
    copyBtn.textContent = "Copy Color";
    console.log("Background cleared");
    const currentBgColor = getComputedStyle(document.body).backgroundColor;
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "white";
    color.textContent = "Ghoest White"
})

copyBtn.addEventListener("click", function(){
    const currentColor = getComputedStyle(document.body).backgroundColor;
    navigator.clipboard.writeText(currentColor)
        .then(() => console.log('Color code copied to clipboard: ' + currentColor))
        .catch(err => console.error('Unable to copy color code: ', err));
    copyBtn.textContent = 'Color Copied'
});