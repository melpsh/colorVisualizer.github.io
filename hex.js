const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const flipBtn = document.getElementById("flip_btn");
const color = document.querySelector(".color");
const resetBtn = document.getElementById("reset_btn");
const copyBtn = document.getElementById("copy_btn");

flipBtn.addEventListener("click", function(){
    copyBtn.textContent = "Copy Color";
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += createHexColor();
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function createHexColor(){
    return colors[(Math.floor(Math.random() * colors.length))];
}

resetBtn.addEventListener("click", function(){
    copyBtn.textContent = "Copy Color";
    console.log("Background cleared");
    // const currentBgColor = getComputedStyle(document.body).backgroundColor;
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "white";
    color.textContent = "F1F5F8";
    
})

copyBtn.addEventListener("click", function(){
    const currentColor = getComputedStyle(document.body).backgroundColor;
    navigator.clipboard.writeText(currentColor)
        .then(() => console.log('Color code copied to clipboard: ' + currentColor))
        .catch(err => console.error('Unable to copy color code: ', err));
    copyBtn.textContent = 'Color Copied';
});